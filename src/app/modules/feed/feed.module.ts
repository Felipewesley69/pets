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
import { ModalPostComponent } from './components/modal-post/modal-post.component';
import { CommentsService } from './providers/comments.service';
import { UtilService } from '@core/services/util.service';
import { LoadingAnimationModule } from '@shared/components/loadings/loading-animation/loading-animation.module';
import { LoadingCommentsModule } from '@shared/components/loadings/loading-comments/loading-comments.module';
import { LoadingImageModule } from '@shared/components/loadings/loading-image/loading-image.module';
import { PublishDatePipeModule } from '@shared/pipes/publish-date/publish-date.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageService } from './providers/image.service';

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
    ModalModule,
    LoadingAnimationModule,
    LoadingCommentsModule,
    LoadingImageModule,
    PublishDatePipeModule,
    InfiniteScrollModule
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
    UtilService,
    ImageService
  ]
})
export class FeedModule { }
