import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the emmitter with a simple subscribe', async(() => {
    component.greet.subscribe((d) => {
      expect(d).toBe('Hi');
    });
    component.doGreet();
  }));

  it('should test the emitter with jasmine spy', () => {
    spyOn(component.greet, 'emit');

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(component.greet.emit).toHaveBeenCalledWith('Hi');
  });

  it('should fire the event emitter when triggering an event', async(() => {
    component.greet.subscribe(d => {
      expect(d).toBe('Hi');
    });

    fixture.debugElement.triggerEventHandler('greet', <Event>{});

  }));
});
