import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';
import { ManagentService } from 'src/app/services/managent-service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
 
  constructor(private service :ManagentService) { }
  employees: Employee[];
 
  ngOnInit(): void {
    this.listofEmployees()
  }
  listofEmployees(){
    this.service.getAllEmployee().subscribe(data=>{
      console.log(data)
      this.employees =data;
    }
    )
  }
}