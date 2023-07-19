import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { employeeservice } from './employee.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})

export class EmployeeslistComponent implements OnInit {
  Employees! : Employee[] ;
  Selectedempid! : Number;
  SearchByTerm! : string;
   constructor(private listempservice : employeeservice,
    private Router_:Router,private ActivatedRoute_:ActivatedRoute)
   {

   }
  ngOnInit()
  {
    this.Employees = this.listempservice.GetEmployees();
    this.Selectedempid = Number(this.ActivatedRoute_.snapshot.paramMap.get('id'));
  }
  
  OnClick(id:number)
  {
   this.Router_.navigate(['/employees',id]);
  }

}
