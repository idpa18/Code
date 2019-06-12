import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MilitaryFortressComponent } from "./views/military-fortress/military-fortress.component";
import { PersonOverviewComponent } from "./views/person/person-overview/person-overview.component";

const routes: Routes = [
  { path: "festung-vitznau", component: MilitaryFortressComponent },
  { path: "personen", component: PersonOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
