import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

@Component({
  selector: 'app-my-collapsible-panel',
  template: ''
})
class CollapsiblePanelComponent {}

@Component({
  selector: 'app-test',
  template: `
        <app-my-collapsible-panel></app-my-collapsible-panel>
  `
})
class NestedComponentTestingComponent {}

describe('NestedComponentTesting', () => {
  describe('Mocking all nested components', () => {
    let component: NestedComponentTestingComponent;
    let fixture: ComponentFixture<NestedComponentTestingComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [NestedComponentTestingComponent, CollapsiblePanelComponent]
      });
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NestedComponentTestingComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('Ignoring nested components', () => {
    let component: NestedComponentTestingComponent;
    let fixture: ComponentFixture<NestedComponentTestingComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [NestedComponentTestingComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
      });
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(NestedComponentTestingComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
