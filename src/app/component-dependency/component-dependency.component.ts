import { Component, OnInit } from '@angular/core';
import {LanguageEnum, LanguageService} from './language.service';

@Component({
  selector: 'app-component-dependency',
  template: `
    {{ getGreeting() }}!
  `
})
export class ComponentDependencyComponent {

  constructor(private langService: LanguageService) { }

  getGreeting() {
    if (this.langService.currentLang === LanguageEnum.DE) {
      return 'Hallo';
    } else if (this.langService.currentLang === LanguageEnum.IT) {
      return 'Ciao';
    } else {
      return 'Hi';
    }
  }

}
