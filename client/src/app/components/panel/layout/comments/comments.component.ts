import { PaperComment } from './../../../../models/papers/paper-comment';
import { UserService } from './../../../../services/users/user.service';
import { PaperCommentService } from './../../../../services/papers/paper-comment.service';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../extends/status/status.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upso-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent extends StatusComponent implements OnInit {
  public comments: Array<PaperComment>;

  constructor(
    protected _router: Router,
    private _comment: PaperCommentService,
    private _user: UserService
  ) {
    super(_router);
   }

   ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.setLoading();
    const token = this._user.getToken();
    this._comment.all(token).subscribe({
      next: comments => this.comments = comments,
      complete: () => this.setSuccess(),
      error: error => this.processError(error)
    });
  }

}
