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
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ModalPostComponent } from './components/content-feed/modal-post/modal-post.component';
import { CommentsService } from './providers/comments.service';
import { UtilService } from '@core/services/util.service';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardUsuarioModule,
    RequestsModule,
    ButtonsModule,
    BsDropdownModule,
    ModalModule
  ],
  declarations: [
    FeedComponent,
    ContentFeedComponent,
    NewPostComponent,
    ModalPostComponent
  ],
  exports: [
    ContentFeedComponent,
  ],
  providers: [
    PostsService,
    BsModalService,
    CommentsService,
    UtilService
  ]
})
export class FeedModule { }
