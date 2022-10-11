import { Loading } from './../../../shared/models/loading.model';
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
  page: number = 0;
  limit: number = 10;
  posts: Post[] = [];
  load = new Loading();
  loadingPlus = new Loading();

  constructor(
    private postsService: PostsService,
    private routerActivated: ActivatedRoute
  ) {
    this.routerActivated.params
      .pipe(finalize(() => this.loadPosts()))
      .subscribe(res => this.userId = res.userId);
  }

  ngOnInit() {
    this.routerActivated.params.subscribe(res => {
      if (Boolean(res.userId)) {
        this.page = 0;
        this.postsService.loadByIdUser(res.userId, { limit: this.limit, page: this.page }, this.load)
          .subscribe(res => {
            this.posts = [];
            this.posts.push(...res.data);
          });
      } else {
        this.loadPosts();
      }
    });
  }

  loadPosts(): void {
    this.postsService.loadByIdUser(this.userId, { limit: this.limit, page: this.page }, this.load)
      .subscribe(res => this.posts.push(...res.data));
  }

  loadPlusPosts(): void {
    this.postsService.loadByIdUser(this.userId, { limit: this.limit, page: this.page }, this.loadingPlus)
      .subscribe(res => this.posts.push(...res.data));
  }

  loadPlus(): void {
    this.page++;
    this.loadPlusPosts();
  }

}
