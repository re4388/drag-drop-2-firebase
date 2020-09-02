import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Direction } from '@angular/cdk/bidi';
import {
  ScrollDispatcher,
  CdkScrollable,
  OverlayContainer,
} from '@angular/cdk/overlay';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private scrollDispatcher: ScrollDispatcher,
    private overlayContainer: OverlayContainer
  ) {}

  bidiMode = 'ltr';
  theme = `custom-theme-1`;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  toggleTheme(): void {
    const originalTheme = this.theme;
    this.theme =
      this.theme === 'custom-theme-1' ? 'custom-theme-2' : 'custom-theme-1';
    this.overlayContainer.getContainerElement().classList.remove(originalTheme);
    this.overlayContainer.getContainerElement().classList.add(this.theme);
  }

  ngOnInit(): void {
    this.overlayContainer.getContainerElement().classList.add(this.theme);

    this.scrollDispatcher
      .scrolled(1000)
      .subscribe((scrollable: CdkScrollable) => {
        console.log('發生scroll了，來源為：');
        console.log(scrollable.getElementRef().nativeElement);
      });

    const isSmallScreen = this.breakpointObserver.isMatched(
      '(max-width: 599px)'
    );
    console.log(`小螢幕(600px以下)？${isSmallScreen}`);
  }

  logDirChange($event: Direction): void {
    console.log(`dir被改變了 => ${$event}`);
  }
}
