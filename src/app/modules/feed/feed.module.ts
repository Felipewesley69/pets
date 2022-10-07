import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { CardUsuarioModule } from '@shared/components/card-user/card-user.module';
import { RequestsModule } from '@shared/components/requests/requests.module';
import { ContentFeedComponent } from './components/content-feed/content-feed.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FeedRoutingModule } from './feed.routing.module';
import { PostsService } from './providers/posts.service';
import { ButtonsModule } from '@shared/components/buttons/buttons.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardUsuarioModule,
    RequestsModule,
    ButtonsModule,
    BsDropdownModule
  ],
  declarations: [
    FeedComponent,
    ContentFeedComponent,
    NewPostComponent
  ],
  providers: [
    PostsService
  ]
})
export class FeedModule { }
