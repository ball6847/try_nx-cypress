import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentHttpService } from '../http/comment.service';
import { Comment } from '../models';

@Injectable()
export class CommentsResolver implements Resolve<Comment[]> {
  constructor(private commentHttp: CommentHttpService) {}

  resolve(): Observable<Comment[]> {
    return this.commentHttp.getList();
  }
}
