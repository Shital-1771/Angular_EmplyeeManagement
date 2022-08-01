import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/common/department';
import { ManagentService } from 'src/app/services/managent-service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  constructor(private service :ManagentService) { }
  departments: Department[];
  ngOnInit(): void {
    this.listOfDepartments();
  }
  

  listOfDepartments(){
    this.service.getAllDepartment().subscribe(data =>{
      console.log(data);
      this.departments= data;
     
    })
  }
}
