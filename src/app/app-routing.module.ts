import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CpeComponent} from "./components/devices/cpe/cpe.component";


const routes: Routes = [
  {
    path: '',
    component: CpeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
