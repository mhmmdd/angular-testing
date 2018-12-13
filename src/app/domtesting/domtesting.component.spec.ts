import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomtestingComponent } from './domtesting.component';
import {By} from '@angular/platform-browser';

describe('DomtestingComponent', () => {
  let component: DomtestingComponent;
  let fixture: ComponentFixture<DomtestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomtestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have the DOM element if boolean is set to false', () => {
    const containerElement = fixture.debugElement.query(By.css('.container'));
    expect(containerElement).toBeNull();
  });

  it('hede', () => {
    component.isVisible = true;
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const containerElement = fixture.debugElement.query(By.css('.container'));
      expect(containerElement).not.toBeNull();
    });
  });

  it('clicking the button should toggle visiblity', async(() => {
    const button = fixture.debugElement.query(By.css('button'));

    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();

    button.triggerEventHandler('click', <Event>{});
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.container'))).not.toBeNull();

    button.triggerEventHandler('click', <Event>{});
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('.container'))).toBeNull();
  }));
});
