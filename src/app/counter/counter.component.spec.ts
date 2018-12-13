import {async, ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    // destroy the component to cancel the timer again
    fixture.destroy();
  });

  it('CounterComponent should count', fakeAsync(() => {
      // you need to call the ngOnInit explicitly, and inside the
      // fakeAsync() for the tick() to work
      component.ngOnInit();
      expect(component.currentCounter).toBe(0);

      tick(500);
      expect(component.currentCounter).toBe(0);

      // after 1000ms the counter should have increased
      tick(500);
      expect(component.currentCounter).toBe(1);

      discardPeriodicTasks();
    })
  );
});
