import { Injectable } from '@angular/core';

@Injectable()
export class GreetingService {

  constructor() { }

  sayHi(name: string) {
    return `Hi, ${name}`;
  }
}
