import { TestBed, inject } from '@angular/core/testing';

import { PhotoBoardService } from './photo-board.service';

describe('PhotoBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoBoardService]
    });
  });

  it('should be created', inject([PhotoBoardService], (service: PhotoBoardService) => {
    expect(service).toBeTruthy();
  }));
});
