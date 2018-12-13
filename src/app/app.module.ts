import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LightswitchComponent } from './lightswitch/lightswitch.component';
import { DashboardHeroComponent } from './dashboard-hero/dashboard-hero.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BannerComponent } from './banner/banner.component';
import { HeroComponent } from './hero/hero.component';
import { OutputComponent } from './output/output.component';
import { ComponentDependencyComponent } from './component-dependency/component-dependency.component';
import { CounterComponent } from './counter/counter.component';
import { DomtestingComponent } from './domtesting/domtesting.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DynamicCssClassesComponent } from './dynamic-css-classes/dynamic-css-classes.component';
import { DynamicStylesComponent } from './dynamic-styles/dynamic-styles.component';

@NgModule({
  declarations: [
    AppComponent,
    LightswitchComponent,
    DashboardHeroComponent,
    WelcomeComponent,
    BannerComponent,
    HeroComponent,
    OutputComponent,
    ComponentDependencyComponent,
    CounterComponent,
    DomtestingComponent,
    ContentProjectionComponent,
    DynamicCssClassesComponent,
    DynamicStylesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
