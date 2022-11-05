import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '@core/services/util.service';
import { User } from '@shared/models/user.model';
import { UserServiceService } from '@shared/services/userService.service';
import { finalize } from 'rxjs/operators';
import { keyImage } from 'token';
import { ImageService } from '../../providers/image.service';
import { PostsService } from '../../providers/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  user: User;
  form: FormGroup;
  file = new FormData();
  urlImage: string | ArrayBuffer;

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private userServiceService: UserServiceService,
    private utilService: UtilService,
    private imageService: ImageService
  ) {
    this.form = this.fb.group({
      text: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(500)]],
      image: [null],
      arquivo: [null],
      likes: [0],
      tags: [null],
      owner: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.loadUser();
    this.form.get('owner').setValue(this.userServiceService.userId);
  }

  loadUser(): void {
    this.user = this.utilService.getUserSessionStorage();
  }

  newPost(): void {
    this.postService.creat(this.formValue).subscribe(() => {
      this.postService.updatePosts.emit();
      this.form.reset();
      this.form.get('owner').setValue(this.userServiceService.userId);
    });
  }

  uploadeImage(): void {
    if (this.file.get('media')) {
      this.imageService.updateImage(this.file)
        .pipe(finalize(() => this.newPost()))
        .subscribe(res => {
          this.form.get('image').setValue(res.data.media);
          this.urlImage = null;
          this.form.get('arquivo').setValue(null);
          this.file.delete('media');
        });
    } else {
      this.newPost();
    }
  }

  onUploadChange(evt: any) {
    const file: File = evt.target.files[0];

    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onloadend = () => this.urlImage = fileReader.result;
      this.file.append('key', keyImage);
      this.file.append('media', file);
    }
  }

  clear(): void {
    this.form.reset();
    this.urlImage = null;
    this.file.delete('media');
    this.form.get('owner').setValue(this.userServiceService.userId);
  }

  get formValue() {
    return {
      ...this.form.getRawValue()
    };
  }

}
