import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentHttpService } from '../../http/comment.service';
import { Comment } from '../../models';

@Component({
  selector: 'ball6847-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', [Validators.required])
  });

  constructor(
    private commentHttp: CommentHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  submit() {
    if (!this.form.valid) {
      return;
    }

    const comment = new Comment(this.form.value);
    this.commentHttp.create(comment).subscribe(() => this.gotoListPage());
  }

  gotoListPage() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
