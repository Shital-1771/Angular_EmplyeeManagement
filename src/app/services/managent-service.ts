import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {Employee} from '../common/employee';
import {Department} from '../common/department';

@Injectable({
  providedIn: 'root'
})
export class ManagentService {

  private empurl= "http://localhost:8080/api/emp";
  private depturl= "http://localhost:8080/api/dept";

  constructor(private httpclient : HttpClient) { }
  getAllEmployee() : Observable<Employee[]>{
    return this.httpclient.get<getEmployeeResponse>(this.empurl).pipe(map(Response => Response._embedded.employees))
  }


getAllDepartment() : Observable<Department[]>{
  return this.httpclient.get<getDepartmentResponse>(this.depturl).pipe(map(Response => Response._embedded.departments))
}
}



interface getEmployeeResponse{
  _embedded:{
    employees : Employee[]
  }
}

interface getDepartmentResponse{
  _embedded:{
    departments : Department[]
  }
}