import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { MilitaryFortressComponent } from './views/military-fortress/military-fortress.component';
import { PersonOverviewComponent } from './views/person/person-overview/person-overview.component';
import { PersonDetailComponent } from './views/person/person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MilitaryFortressComponent,
    PersonOverviewComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
