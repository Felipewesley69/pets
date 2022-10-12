import { Component, OnInit } from '@angular/core';
import { Loading } from '@shared/models/loading.model';
import { Post } from './providers/posts.model';
import { PostsService } from './providers/posts.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  posts: Post[] = [];
  limit: number = 10;
  page: number = 0;
  loading_1 = new Loading();
  loading_2 = new Loading();
  windowWidth: boolean = false;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.loadPosts();

    this.postsService.updatePosts.subscribe(() => {
      this.page = 0;
      this.posts = [];
      this.loadPosts();
    });
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.windowWidth = event.target.innerWidth < 768;
  // }

  loadPosts(): void {
    this.page = 0;
    this.postsService.load({ limit: this.limit, page: this.page }, this.loading_1).subscribe(res => {
      this.posts = [];
      this.posts.push(...res.data);
    });
  }

  load(): void {
    this.postsService.load({ limit: this.limit, page: this.page }, this.loading_2).subscribe(res => this.posts.push(...res.data));
  }

  loadPlus(): void {
    this.page++;
    this.load();
  }

}
