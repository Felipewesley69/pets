import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  template: `
    <i
      class="fas fa-arrow-up scroll fade-in" 
      (click)="scrollToTop()"
      *ngIf="pageYOffset > scrollHeight">
    </i>
  `,
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {

  pageYOffset: number = null;
  scrollHeight: number = 300;

  constructor() { }

  @HostListener('window:scroll')
  onScroll = () => this.pageYOffset = window.pageYOffset;

  scrollToTop = () => document.documentElement.scrollTop = 0;

}
