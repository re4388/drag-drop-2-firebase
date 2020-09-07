import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDropComponent } from './cdk-drop.component';

describe('CdkDropComponent', () => {
  let component: CdkDropComponent;
  let fixture: ComponentFixture<CdkDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
