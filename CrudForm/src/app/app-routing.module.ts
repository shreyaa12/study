import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeanStackCrudComponent } from "./mean-stack-crud/mean-stack-crud.component";

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  { 
    path: 'Crud', 
    loadChildren: () => import('./mean-stack-crud/mean-stack-crud.component').then(m => m.MeanStackCrudComponent)
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
