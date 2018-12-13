import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domtesting',
  template: `
    <div class="container" *ngIf="isVisible">Hi there!</div>
    <button (click)="isVisible = !isVisible">toggle</button>
  `,
  styles: []
})
export class DomtestingComponent {
  isVisible = false;

  constructor() { }

}
