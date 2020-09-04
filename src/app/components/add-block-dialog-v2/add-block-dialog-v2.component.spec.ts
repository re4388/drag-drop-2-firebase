import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlockDialogV2Component } from './add-block-dialog-v2.component';

describe('AddBlockDialogV2Component', () => {
  let component: AddBlockDialogV2Component;
  let fixture: ComponentFixture<AddBlockDialogV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBlockDialogV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlockDialogV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
