import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'app/modules/feed/providers/posts.model';
import { PostsService } from 'app/modules/feed/providers/posts.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userId: string;
  posts: Post[] = [];
  limit: number = 10;
  page: number = 0;

  constructor(
    private routerActivated: ActivatedRoute,
    private postsService: PostsService,
  ) {
    this.routerActivated.params
      .pipe(finalize(() => this.loadPosts()))
      .subscribe(res => this.userId = res.userId);
  }

  ngOnInit() {
    this.routerActivated.params.subscribe(res => {
      if (Boolean(res.userId)) {
        this.page = 0;
        this.postsService.loadByIdUser(res.userId, { limit: this.limit, page: this.page })
          .subscribe(res => {
            this.posts = [];
            this.posts.push(...res.data);
          });
      } else {
        this.loadPosts();
      }
    });

    this.postsService.updatePosts.subscribe(() => {
      this.page = 0;
      this.posts = [];
      this.loadPosts();
    });
  }

  loadPosts(): void {
    this.postsService.loadByIdUser(this.userId, { limit: this.limit, page: this.page }).subscribe(res => this.posts.push(...res.data));
  }

  loadPlus(): void {
    this.page++;
    this.loadPosts();
  }

}
