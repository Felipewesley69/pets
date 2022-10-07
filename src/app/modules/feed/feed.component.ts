import { Component, OnInit } from '@angular/core';
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

  constructor(private postsService: PostsService) { }
  
  ngOnInit() {
    this.loadPosts();

    this.postsService.updatePosts.subscribe(() => {
      this.page = 0;
      this.posts = [];
      this.loadPosts();
      console.log('Atualizando feed');
      
    });
  }

  loadPosts(): void {
    this.postsService.load({ limit: this.limit, page: this.page }).subscribe(res => this.posts.push(...res.data));
  }

  loadPlus(): void {
    this.page++;
    this.loadPosts();
  }

}
