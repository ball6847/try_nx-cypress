import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentsResolver } from './resolvers/comments';

const routes: Routes = [
  {
    path: '',
    component: CommentListComponent,
    resolve: {
      comments: CommentsResolver
    }
  },
  {
    path: 'add',
    component: CommentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule {}
