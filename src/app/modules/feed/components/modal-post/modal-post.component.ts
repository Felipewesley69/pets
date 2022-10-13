import { Loading } from './../../../../shared/models/loading.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UtilService } from '@core/services/util.service';
import { UserServiceService } from '@shared/services/userService.service';
import { Comments } from 'app/modules/feed/providers/comments.model';
import { CommentsService } from 'app/modules/feed/providers/comments.service';
import { Post } from 'app/modules/feed/providers/posts.model';
import { PostsService } from 'app/modules/feed/providers/posts.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent implements OnInit {

  @ViewChild('modal') modal: ModalDirective;

  message = new FormControl(null);

  currentPost: Post;
  post: Post;
  page: number = 0;
  comments: Comments;
  loadComments = new Loading(true);
  loadPost = new Loading(true);

  constructor(
    private userService: UserServiceService,
    private postService: PostsService,
    private commentsService: CommentsService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.message.setValidators([Validators.required, Validators.minLength(2), Validators.maxLength(500)]);
  }

  open(post: Post) {
    this.loadPostById(post.id);
    this.currentPost = post;
    this.loadComments.load = true;
    this.modal.show();
  }

  loadPostById(id): void {
    this.postService.loadById(id, this.loadPost)
      .pipe(finalize(() => this.loadCommentsByPost()))
      .subscribe(res => this.post = res);
  }

  loadCommentsByPost(): void {
    this.commentsService.getByPost(this.post.id, { page: this.page }, this.loadComments).subscribe(res => this.comments = res);
  }

  createComment(): void {
    const form = {
      post: this.post.id,
      message: this.message.value,
      owner: this.userService.userId
    }

    this.commentsService.create(form, this.loadComments).subscribe(() => {
      this.loadCommentsByPost();
      this.message.reset();
    });
  }

  deleteComment(id: string): void {
    this.commentsService.delete(id, this.loadComments).subscribe(() => this.loadCommentsByPost());
  }

  owner = (id: string): boolean => this.utilService.owner(id, this.userService.userId);

  close() {
    this.modal.hide();
    this.post = null;
    this.comments = null;
    this.message.reset();
  }

}
