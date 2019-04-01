import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Comment } from '../../models';

@Component({
  selector: 'ball6847-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  comments$: Observable<Comment[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.comments$ = this.route.data.pipe(pluck<any, Comment[]>('comments'));
    this.comments$.subscribe(v => console.log(v));
  }
}
