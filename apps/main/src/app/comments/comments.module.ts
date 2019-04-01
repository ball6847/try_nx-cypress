import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentHttpService } from './http/comment.service';
import { CommentsResolver } from './resolvers/comments';

@NgModule({
  declarations: [CommentListComponent, CommentFormComponent],
  imports: [CommonModule, CommentsRoutingModule, ReactiveFormsModule],
  providers: [CommentHttpService, CommentsResolver]
})
export class CommentsModule {}
