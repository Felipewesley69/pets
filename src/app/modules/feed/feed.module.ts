import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { CardUsuarioModule } from 'src/app/shared/components/card-usuario/card-usuario.module';
import { SolicitacoesModule } from 'src/app/shared/components/solicitacoes/solicitacoes.module';
import { ContentFeedComponent } from './components/content-feed/content-feed.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { FeedRoutingModule } from './feed.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule,
    CardUsuarioModule,
    SolicitacoesModule
  ],
  declarations: [
    FeedComponent,
    ContentFeedComponent,
    NewPostComponent
  ]
})
export class FeedModule { }
