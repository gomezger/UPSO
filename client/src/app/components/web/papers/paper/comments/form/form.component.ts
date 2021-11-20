import { PaperCommentService } from './../../../../../../services/papers/paper-comment.service';
import { PaperComment } from './../../../../../../models/papers/paper-comment';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../../../extends/status/status.component';
import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Paper } from '../../../../../../models/papers/paper';

@Component({
  selector: 'upso-comment-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends StatusComponent implements OnInit {
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  @Input() comments: Array<PaperComment>;
  @Input() paper: Paper;
  @Output() update: EventEmitter<PaperComment> = new EventEmitter();
  public comment: PaperComment;

  constructor(
    protected _router: Router,
    private _paperComment: PaperCommentService
  ) { super(_router); }

  ngOnInit(): void {
    this.comment = this.dummy();
  }

  confirmar(): void {
    this.setLoading();
    this._paperComment.insert(this.comment).subscribe({
      next: comment => {
        this.closebutton.nativeElement.click();
        this.update.emit({...comment});
        this.comment = this.dummy();
      },
      complete: () => this.setSuccess(),
      error: error => this.processError(error)
    });
  }

  dummy(): PaperComment {
    const comment = this._paperComment.dummy();
    comment.paper = this.paper;
    comment.paper_id = this.paper.id;
    return comment;
  }

}
