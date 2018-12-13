import {TestBed, async, inject} from '@angular/core/testing';

import {GreetingService} from './greeting.service';

describe('GreetingService', () => {
  let service: GreetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GreetingService]
    });
    service = TestBed.get(GreetingService);
  });

  beforeEach(inject([GreetingService], (s: GreetingService) => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#sayHi should great properly', () => {
    expect(service.sayHi('Juri')).toEqual('Hi, Juri');
  });
});
