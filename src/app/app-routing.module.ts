import { FlightInfoComponent } from './flight-info/flight-info.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path:'all-flights', component: AllFlightsComponent },
  {path:'flight-info', component: FlightInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
