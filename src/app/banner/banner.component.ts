import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  template: `
    <p>banner works!</p>
    <h1>{{title}}</h1>
  `,
  styles: ['h1 { color: green; font-size: 350%}']
})
export class BannerComponent implements OnInit {
  title = 'Test Tour of Heroes';

  constructor() { }

  ngOnInit() {
  }

}
