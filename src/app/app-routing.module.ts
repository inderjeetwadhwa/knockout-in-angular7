import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KnockoutContainerComponent} from './knockout-container/knockout-container.component'

const routes: Routes = [

  { path: 'knockout-container', component: KnockoutContainerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
