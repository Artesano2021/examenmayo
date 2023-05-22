import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QueverComponent } from './quever/quever.component';
import { CambiodivComponent } from './cambiodiv/cambiodiv.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"quever",
    component:QueverComponent
  },
  {
    path:"cambiodiv",
    component:CambiodivComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
