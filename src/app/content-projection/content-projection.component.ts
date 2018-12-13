import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  template: `
    <h1>
      <ng-content select="[title]"></ng-content>
    </h1>
    <div class="content">
      <ng-content select="[body]"></ng-content>
    </div>
  `,
  styles: []
})
export class ContentProjectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
