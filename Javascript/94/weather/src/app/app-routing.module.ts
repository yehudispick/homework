import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherPageComponent } from './weather-page/weather-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },{
  path: 'weather',
  component: WeatherPageComponent
},{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '**',
  component: PageNotFoundComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
