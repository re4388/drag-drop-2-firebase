import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoDialogV2Component } from './add-todo-dialog-v2.component';

describe('AddTodoDialogV2Component', () => {
  let component: AddTodoDialogV2Component;
  let fixture: ComponentFixture<AddTodoDialogV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoDialogV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoDialogV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
