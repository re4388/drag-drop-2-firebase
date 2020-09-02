import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtLinkV0Component } from './yt-link-v0.component';

describe('YtLinkV0Component', () => {
  let component: YtLinkV0Component;
  let fixture: ComponentFixture<YtLinkV0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtLinkV0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtLinkV0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
