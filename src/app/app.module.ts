import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { MilitaryFortressComponent } from './views/military-fortress/military-fortress.component';
import { PersonOverviewComponent } from './views/person/person-overview/person-overview.component';
import { PersonDetailComponent } from './views/person/person-detail/person-detail.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DivComponent } from './div/div.component';
import { MapFortressesComponent } from './views/map/map-fortresses/map-fortresses.component';
import { MapOpbefsComponent } from './views/map/map-opbefs/map-opbefs.component';

@NgModule({
  declarations: [
    AppComponent,
    MilitaryFortressComponent,
    PersonOverviewComponent,
    PersonDetailComponent,
    MenuComponent,
    LandingPageComponent,
    DivComponent,
    MapFortressesComponent,
    MapOpbefsComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
