import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '@shared/services/userService.service';
import { Comments } from 'app/modules/feed/providers/comments.model';
import { CommentsService } from 'app/modules/feed/providers/comments.service';
import { Post } from 'app/modules/feed/providers/posts.model';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.scss']
})
export class ModalPostComponent implements OnInit {

  @ViewChild('modal') modal: ModalDirective;

  message = new FormControl(null);

  post: Post;
  comments: Comments;
  page: number = 0;

  constructor(
    private userService: UserServiceService,
    private commentsService: CommentsService
  ) { }

  ngOnInit(): void {
    this.message.setValidators([Validators.required, Validators.minLength(2), Validators.maxLength(500)]);
  }

  open(post: Post) {
    this.post = post;
    this.loadCommentsByPost();
    this.modal.show();
  }

  loadCommentsByPost(): void {
    this.commentsService.getByPost(this.post.id, { page: this.page }).subscribe(res => this.comments = res);
  }

  createComment(): void {
    const form = {
      message: this.message.value,
      owner: this.userService.userId,
      post: this.post.id
    }

    this.commentsService.create(form).subscribe(() => {
      this.loadCommentsByPost();
      this.message.reset();
    });
  }

  deleteComment(id: string): void {
    this.commentsService.delete(id).subscribe(() => this.loadCommentsByPost());

  }

  owner = (id: string): boolean => id == this.userService.userId;

  close() {
    this.modal.hide();
    this.comments = null;
    this.message.reset();
  }

}
