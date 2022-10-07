import { Post } from './../../providers/posts.model';
import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from '@shared/services/userService.service';
import { PostsService } from '../../providers/posts.service';

@Component({
  selector: 'app-content-feed',
  templateUrl: './content-feed.component.html',
  styleUrls: ['./content-feed.component.scss']
})
export class ContentFeedComponent implements OnInit {

  @Input() data: Post[];
  userId = this.userService.userId;

  constructor(
    private postsService: PostsService,
    private userService: UserServiceService
  ) { }

  ngOnInit() {
  }

  owner = (id: string): boolean => id == this.userId;

  deletePost(id: string): void {
    this.postsService.delete(id).subscribe(() => {
      this.postsService.updatePosts.emit();
    });
  }

}
