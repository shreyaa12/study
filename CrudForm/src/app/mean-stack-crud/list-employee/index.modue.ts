import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEmployeeComponent } from "./list-employee.component";
import { MatButtonModule} from '@angular/material/button';
import { MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


const routes: Routes = [{
 path: "", 
 component: ListEmployeeComponent,
}];

@NgModule({
 imports: [
 CommonModule, 
 FormsModule, 
 ReactiveFormsModule, 
 RouterModule.forChild(routes),
 MatButtonModule,
 MatFormFieldModule,
 MatTableModule,
 MatPaginatorModule,
 MatInputModule,
 MatSortModule
 ],
 exports: [
 MatButtonModule,
 MatFormFieldModule,
 MatTableModule,
 MatPaginatorModule,
 MatInputModule,
 MatSortModule
 ],
 declarations: [
 ListEmployeeComponent
 ]
})
export class ListEmployeeModule {}