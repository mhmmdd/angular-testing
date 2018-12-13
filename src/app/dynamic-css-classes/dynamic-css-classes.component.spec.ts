import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCssClassesComponent } from './dynamic-css-classes.component';
import {By} from '@angular/platform-browser';

describe('DynamicCssClassesComponent', () => {
  let component: DynamicCssClassesComponent;
  let fixture: ComponentFixture<DynamicCssClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicCssClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCssClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the .alert class if isAlert is set to true', () => {
    component.isAlert = true;
    fixture.detectChanges();

    const classes: any = fixture.debugElement.query(By.css('div')).classes;
    expect(classes.alert).toBeTruthy();
    expect(classes.success).toBeFalsy();
  });

  it('should have the .success class if isAlert is set to false', () => {
    component.isAlert = false;
    fixture.detectChanges();

    const classes: any = fixture.debugElement.query(By.css('div')).classes;
    expect(classes.success).toBeTruthy();
    expect(classes.alert).toBeFalsy();
  });
});
