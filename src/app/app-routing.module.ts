import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MilitaryFortressComponent } from "./views/military-fortress/military-fortress.component";
import { PersonOverviewComponent } from "./views/person/person-overview/person-overview.component";
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: "festung-vitznau", component: MilitaryFortressComponent },
  { path: "personen", component: PersonOverviewComponent },
  { path: "home", component: LandingPageComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
