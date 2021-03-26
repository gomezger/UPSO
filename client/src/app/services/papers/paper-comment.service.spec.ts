import { TestBed } from '@angular/core/testing';

import { PaperCommentService } from './paper-comment.service';

describe('PaperCommentService', () => {
  let service: PaperCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaperCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
