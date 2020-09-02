import { TestBed } from '@angular/core/testing';

import { FirestoreTodoService } from './firestore-todo.service';

describe('FirestoreTodoService', () => {
  let service: FirestoreTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
