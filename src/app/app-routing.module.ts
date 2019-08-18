import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MilitaryFortressComponent } from "./views/military-fortress/military-fortress.component";
import { PersonOverviewComponent } from "./views/person/person-overview/person-overview.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MapFortressesComponent } from "./views/map/map-fortresses/map-fortresses.component";
import { DivComponent } from './div/div.component';
import { PersonDetailComponent } from './views/person/person-detail/person-detail.component';

const routes: Routes = [
  { path: "festung-vitznau", component: MilitaryFortressComponent },
  { path: "personen", component: PersonOverviewComponent },
  { path: "karte/festungen", component: MapFortressesComponent },
  { path: "person/:person", component: PersonDetailComponent },
  { path: "home", component: LandingPageComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: "div", component: DivComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
