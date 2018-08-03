import { TestBed, inject } from '@angular/core/testing';

import { DeleteBookService } from './delete-book.service';

describe('DeleteBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteBookService]
    });
  });

  it('should be created', inject([DeleteBookService], (service: DeleteBookService) => {
    expect(service).toBeTruthy();
  }));
});
