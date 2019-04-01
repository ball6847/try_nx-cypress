import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'comments',
    pathMatch: 'full'
  },
  {
    path: 'comments',
    loadChildren: './comments/comments.module#CommentsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppeRoutingModule {}
