import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deserialize, deserializeArray } from '@ball6847/utils';
import { Comment } from '../models';

@Injectable()
export class CommentHttpService {
  constructor(private http: HttpClient) {}

  getList() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/comments?postId=1')
      .pipe(deserializeArray<Comment>(Comment));
  }

  create(comment: Comment) {
    comment.postId = 1;
    return this.http
      .post('https://jsonplaceholder.typicode.com/comments', comment)
      .pipe(deserialize<Comment>(Comment));
  }
}
