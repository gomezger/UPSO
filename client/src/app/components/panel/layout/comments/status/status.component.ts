import { UserService } from './../../../../../services/users/user.service';
import { PaperCommentService } from './../../../../../services/papers/paper-comment.service';
import { Router } from '@angular/router';
import { StatusComponent as StatusComponentExtends } from './../../../../../extends/status/status.component';
import { PaperComment } from './../../../../../models/papers/paper-comment';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'upso-status-paper-comment',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent extends StatusComponentExtends implements OnInit {
  @Input() comment: PaperComment;
  @Output() updateTable: EventEmitter<PaperComment> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;

  constructor(
    protected _router: Router,
    private _paperComment: PaperCommentService,
    private _user: UserService
  ) {
    super(_router);
  }

  ngOnInit(): void {
  }

  confirmar(): void {
    this.setLoading();
    const token = this._user.getToken();
    const commentEdited = {...this.comment};
    commentEdited.aprobado = !commentEdited.aprobado;
    this._paperComment.update(commentEdited, token).subscribe({
      next: comment => {
        this.comment = comment;
        this.updateTable.emit({...commentEdited});
        this.closebutton.nativeElement.click();
      },
      complete: () => this.setSuccess(),
      error: error => this.processError(error)
    });
  }

}
