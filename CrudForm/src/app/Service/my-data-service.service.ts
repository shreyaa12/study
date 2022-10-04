import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyDataServiceService {

  //Main api to call employees
  api = 'http://localhost:4000/employees/';

  constructor(private httpClient : HttpClient) { }

  //To get the employee
  getEmployees(){
    return this.httpClient.get(`${this.api}`);
  }

  getEmployeeById(empid: any){
    return this.httpClient.get(`${this.api}/${empid}`)
  }

  //edit employeebyId
  editEmployeeById(empid: any,body: any) {
    return this.httpClient.post(`${this.api}/editEmp/${empid}`, body);
  }

  //add Employee
  addEmployee(body: any){
    return this.httpClient.post(`${this.api}/addEmp`,body);
  }

  //delete Employee
  deleteEmployee(id:any){
    return this.httpClient.delete(`${this.api}/deleteEmp/${id}`);
  }

}
