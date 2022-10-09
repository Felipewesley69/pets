import { Post } from './../../providers/posts.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '@shared/services/userService.service';
import { PostsService } from '../../providers/posts.service';
import { ModalPostComponent } from '../modal-post/modal-post.component';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'app-content-feed',
  templateUrl: './content-feed.component.html',
  styleUrls: ['./content-feed.component.scss']
})
export class ContentFeedComponent implements OnInit {

  @Input() data: Post[];
  @ViewChild('modal') m: ModalPostComponent;

  userId = this.userService.userId;

  constructor(
    private postsService: PostsService,
    public userService: UserServiceService,
    private utilService: UtilService
  ) { }

  ngOnInit() {
  }

  openModal(post: Post): void {
    this.m.open(post);
  }

  owner = (id: string): boolean => this.utilService.owner(id, this.userId);

  deletePost(id: string): void {
    this.postsService.delete(id).subscribe(() => {
      this.postsService.updatePosts.emit();
    });
  }

}
