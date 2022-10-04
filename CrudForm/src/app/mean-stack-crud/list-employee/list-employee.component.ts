import { Component, OnInit, ViewChild } from '@angular/core';
import { MyDataServiceService } from 'src/app/Service/my-data-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
 }

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  MyDataSource: any;
  employeeList!: Employee[] ;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone', 'action'];

  constructor(private service : MyDataServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  //load the list o nginit
  getEmployees():void{
    this.service
    .getEmployees()
    .subscribe((data) => {
    this.MyDataSource = new MatTableDataSource();
    this.MyDataSource.data = data;
    this.MyDataSource.paginator = this.paginator;
    this.MyDataSource.sort = this.sort;
  });
  }

  //load the employee by id
    getEmployeeById(id: any):void{
      this.service
      .getEmployeeById(id)
      .subscribe((data) => {
      this.MyDataSource = new MatTableDataSource();
      this.MyDataSource.data = data;
      this.MyDataSource.paginator = this.paginator;
      this.MyDataSource.sort = this.sort;
    });
    }

    //edit the employee

    editEmployee(empId: any):void{
      this.router.navigate([`/Crud/edit/${empId}`]);
    }
    deleteEmployee(empId:any):void{
      
    }
    
// Search specific result
filterEmployee(searchstring: string) {
  searchstring = searchstring.trim();
  searchstring = searchstring.toLowerCase();
  this.MyDataSource.filter = searchstring;
  }

}
