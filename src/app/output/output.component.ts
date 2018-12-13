import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  template: `
    <button (click)="doGreet()">Do greet</button>
  `,
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  @Output() greet: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  doGreet() {
    this.greet.emit('Hi');
  }

}
