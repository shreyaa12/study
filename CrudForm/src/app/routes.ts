import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MeanStackCrudComponent } from "./mean-stack-crud/mean-stack-crud.component";

const appRoutes: Routes = [
 { path: '', redirectTo:'Crud',pathMatch:'full' },
 { 
 path: 'Crud', 
 loadChildren: () => import('./mean-stack-crud/mean-stack-crud.component').then(m => m.MeanStackCrudComponent)
 },
 
];

// export const routing: ModuleWithProviders =? RouterModule.forRoot(appRoutes);