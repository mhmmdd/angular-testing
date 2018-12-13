import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ComponentDependencyComponent} from './component-dependency.component';
import {LanguageEnum, LanguageService} from './language.service';

let languageServiceStub: Partial<LanguageService>;


describe('ComponentDependencyComponent', () => {
  let component: ComponentDependencyComponent;
  let fixture: ComponentFixture<ComponentDependencyComponent>;

  languageServiceStub = {
    currentLang: LanguageEnum.IT,
    setCurrentLanguage: () => null
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDependencyComponent ],
      providers:    [ {provide: LanguageService, useValue: languageServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDependencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should greet in italian when the lang is IT', () => {
    expect(component.getGreeting()).toBe('Ciao');
  });
});
