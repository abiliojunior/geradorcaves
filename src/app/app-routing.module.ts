import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AventureirosComponent } from './aventureiros/aventureiros.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContratadosComponent } from './contratados/contratados.component';

const routes: Routes= [
  {path:'', component:DashboardComponent},
  {path:'aventureiro', component:AventureirosComponent},
  {path:'contratados', component:ContratadosComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
