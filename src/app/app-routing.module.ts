import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  // {
  //   path:'' , component:LandingPageComponent
  // },
  {
    path:'' , component:HomeComponent
  },
  { path:':id/view', component:ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
