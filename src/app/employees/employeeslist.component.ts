import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { employeeservice } from './employee.service';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})

export class EmployeeslistComponent implements OnInit {
  Employees! : Employee[] ;
   
   constructor(private listempservice : employeeservice)
   {

   }
  ngOnInit()
  {
    this.Employees = this.listempservice.GetEmployees();
  }
  
}
