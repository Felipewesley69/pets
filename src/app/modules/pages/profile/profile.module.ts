import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing.module';
import { ButtonsModule } from '@shared/components/buttons/buttons.module';
import { FeedModule } from 'app/modules/feed/feed.module';
import { PostsService } from 'app/modules/feed/providers/posts.service';
import { CardUserProfileModule } from '@shared/components/card-user-profile/card-user-profile.module';
import { ScrollToTopModule } from '@shared/components/scroll-to-top/scroll-to-top.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CardUserProfileModule,
    ButtonsModule,
    FeedModule,
    InfiniteScrollModule,
    ScrollToTopModule
  ],
  declarations: [ProfileComponent],
  providers: [
    PostsService
  ]
})
export class ProfileModule { }
