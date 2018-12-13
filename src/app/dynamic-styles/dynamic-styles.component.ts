import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-styles',
  template: `
    <div [style.background-color]="color"></div>
  `,
  styles: []
})
export class DynamicStylesComponent {
  color = 'black';
}
