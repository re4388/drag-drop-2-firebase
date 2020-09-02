import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtLinkV2Component } from './yt-link-v2.component';

describe('YtLinkV2Component', () => {
  let component: YtLinkV2Component;
  let fixture: ComponentFixture<YtLinkV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtLinkV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtLinkV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
