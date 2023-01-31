import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { BirthdayCakeComponent } from './components/birthday-cake/birthday-cake.component';
import { WeadingCakeComponent } from './components/weading-cake/weading-cake.component';
import { CustomCakeComponent } from './components/custom-cake/custom-cake.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    MenuComponent,
    BirthdayCakeComponent,
    WeadingCakeComponent,
    CustomCakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
