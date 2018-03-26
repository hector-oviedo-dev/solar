import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { KitsComponent } from './kits/kits.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    ShowcaseComponent,
    CalculatorComponent,
    ContactComponent,
    FooterComponent,
    KitsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
