import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WelcomeComponent} from './welcome.component';
import {UserService} from './user.service';

class MockUserService {
  isLoggedIn = true;
  user = {name: 'Test User'};
};

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [
        WelcomeComponent,
        {provide: UserService, useClass: MockUserService}
      ]
    })
      .compileComponents();

    component = TestBed.get(WelcomeComponent);
    userService = TestBed.get(UserService);
  }));

  it('should not have welcome message after construction', () => {
    expect(component.welcome).toBeUndefined();
  });

  it('should welcome logged in user after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.welcome).toContain(userService.user.name);
  });

  it('should ask user to log in if not logged in after ngOnInit', () => {
    userService.isLoggedIn = false;
    component.ngOnInit();
    expect(component.welcome).not.toContain(userService.user.name);
    expect(component.welcome).toContain('log in');
  });
});
