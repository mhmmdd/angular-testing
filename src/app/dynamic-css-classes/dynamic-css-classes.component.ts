import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dynamic-css-classes',
  template: `
    <div [ngClass]="{ 'alert': isAlert, 'success': !isAlert }"></div>
  `,
  styles: []
})
export class DynamicCssClassesComponent {
  @Input() isAlert = false;

  constructor() { }

}
