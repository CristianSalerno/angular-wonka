import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import  {WonkadescriptionComponent} from '../app/wonkadescription/wonkadescription.component'

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    redirectTo: 'home' 
  },
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'description',
    component:WonkadescriptionComponent,
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
