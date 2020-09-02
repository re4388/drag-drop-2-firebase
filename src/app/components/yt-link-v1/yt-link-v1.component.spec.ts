import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtLinkV1Component } from './yt-link-v1.component';

describe('YtLinkV1Component', () => {
  let component: YtLinkV1Component;
  let fixture: ComponentFixture<YtLinkV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtLinkV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtLinkV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
