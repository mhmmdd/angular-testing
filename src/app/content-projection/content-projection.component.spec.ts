import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionComponent } from './content-projection.component';
import {By} from '@angular/platform-browser';
import {Component} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <app-content-projection>
        <span title>I'm the title</span>
        <div body>I'm the body</div>
    </app-content-projection>
  `
})
class TestComponent {}

describe('ContentProjectionComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly project the title', () => {
    expect(
      fixture.debugElement.query(By.css('app-content-projection')).query(By.css('h1'))
        .nativeElement.innerHTML
    ).toContain('I\'m the title');
  });

  it('should correctly project the body', () => {
    expect(
      fixture.debugElement.query(By.css('app-content-projection')).query(By.css('div'))
        .nativeElement.innerHTML
    ).toContain('I\'m the body');
  });
});
