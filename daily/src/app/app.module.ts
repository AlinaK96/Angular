import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/UI/logo/logo.component';
import { SvgLogoComponent } from './components/SvgComponents/svg-logo/svg-logo.component';
import { InputComponent } from './components/UI/input/input.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { PenComponent } from './components/SvgComponents/pen/pen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SvgLogoComponent,
    InputComponent,
    ButtonComponent,
    PenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
