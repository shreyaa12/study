import { Component, OnInit } from '@angular/core';
import { MyDataServiceService } from 'src/app/Service/my-data-service.service';
import { Employee } from 'src/app/Model/employee.model';
import { SearchFilterPipe } from 'src/app/search-filter.pipe';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees : Employee | any;
  currentEmp: Employee = {};
  currentIndex = -1;
  
  constructor(private EmpService :MyDataServiceService) { }

  ngOnInit(): void {
    this.retrieveEmp();
  }

  retrieveEmp(): void {
    this.EmpService.getEmployees()
      .subscribe({
        next: (data) => {
          this.employees = data;
        },
        error: (e) => console.error(e)
      });
  }
  
  searchEmp():void{

  }
  setActiveTutorial(emp: Employee, index: number): void {
    this.currentEmp = emp;
    this.currentIndex = index;
   
    
    
  }

}
