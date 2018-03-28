import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { KitsComponent } from './kits/kits.component';
import { MapComponent } from './map/map.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    CalculatorComponent,
    ContactComponent,
    FooterComponent,
    KitsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmCWgMpZOgQeuykgyOcE9tE-cQdnYYcXU'
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
