import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing.module';
import { CardUsuarioModule } from '@shared/components/card-user/card-user.module';
import { ButtonsModule } from '@shared/components/buttons/buttons.module';
import { FeedModule } from 'app/modules/feed/feed.module';
import { PostsService } from 'app/modules/feed/providers/posts.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    CardUsuarioModule,
    ButtonsModule,
    FeedModule
  ],
  declarations: [ProfileComponent],
  providers: [
    PostsService
  ]
})
export class ProfileModule { }
