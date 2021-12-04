import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Investigator } from 'src/app/models/investigator';

@Component({
  selector: 'ngbd-modal-component',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">{{investigator.nombre}}</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <h5 style="color:rgba(96, 96, 96, 0.85)">{{investigator.titulo}}</h5>
    <hr>
    <p>{{investigator.descripcion}}</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
  </div>
`
})
export class NgbdModalContent {
  @Input() investigator:Investigator;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './my-modal.component.html'
})
export class NgbdModalComponent {
  constructor(private modalService: NgbModal) {}
  @Input() investigator:Investigator;

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.investigator = this.investigator;
  }
}
