import { TestBed } from '@angular/core/testing';

import { ApiQuizService } from './api-quiz.service';

describe('ApiQuizService', () => {
  let service: ApiQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
