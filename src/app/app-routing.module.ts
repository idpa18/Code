import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MilitaryFortressComponent } from './views/military-fortress/military-fortress.component';

const routes: Routes = [
  { path: 'festung-vitznau', component: MilitaryFortressComponent }
];  

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
