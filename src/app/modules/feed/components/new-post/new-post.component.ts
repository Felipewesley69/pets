import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@shared/models/user.model';
import { UserServiceService } from '@shared/services/userService.service';
import { PostsService } from '../../providers/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  user: User;
  form: FormGroup;
  file: File;

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    private userServiceService: UserServiceService
  ) {
    this.form = this.fb.group({
      text: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]],
      image: [null],
      likes: [0],
      tags: [null],
      owner: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.loadById();
    this.form.get('owner').setValue(this.userServiceService.userId);
  }

  loadById(): void {
    this.userServiceService.findById(this.userServiceService.userId).subscribe(res => this.user = res);
  }

  newPost(): void {
    this.postService.creat(this.formValue).subscribe(() => {
      this.postService.updatePosts.emit();
      this.form.reset();
    });

    console.log(this.formValue);
  }

  changeFile(event): void {
    this.file = event.target.files[0];
  }

  get formValue() {
    return {
      ...this.form.getRawValue(),
      // image: this.file
    };
  }

}
