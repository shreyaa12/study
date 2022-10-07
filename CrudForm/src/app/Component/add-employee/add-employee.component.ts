import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee.model';
import { MyDataServiceService } from 'src/app/Service/my-data-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee = new Employee  ;


  constructor(private employeeService :MyDataServiceService) { }

  ngOnInit(): void {
  }

  addEmployee(employee:any):void{
    this.employeeService.addEmployee(employee)
    .subscribe({
      next:(res) =>{
        console.log(res);
      },
      error:(e) => console.log(e)
    });

  }

}
