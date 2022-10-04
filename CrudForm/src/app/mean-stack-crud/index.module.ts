import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeanStackCrudComponent } from "./mean-stack-crud.component";
import { MatCardModule } from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListEmployeeComponent } from "./list-employee/list-employee.component";
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [{
    path: "",
    component: MeanStackCrudComponent,
    children: [
    {
    path: "",
    component: ListEmployeeComponent
    },
    {
    path: "create",
    component: AddEmployeeComponent
    },
    {
    path: "edit/:id",
    component: EditEmployeeComponent
    }
    ]
   }];
   
   @NgModule({
    imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule
    ],
    exports: [
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule
    ],
    declarations: [
    MeanStackCrudComponent
    ]
   })
   export class MeanStackModule { }