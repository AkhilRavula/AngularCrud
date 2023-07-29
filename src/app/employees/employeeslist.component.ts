import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { employeeservice } from './employee.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import { map } from 'rxjs';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})

export class EmployeeslistComponent implements OnInit {
  Employees! : Employee[] ;
  Selectedempid! : Number;
  private _SearchByTerm! : string;
  FilterEmployees!: Employee[];

  public get SearchByTerm() : string {
    return this._SearchByTerm;
  }


  public set SearchByTerm(v : string) {
    this._SearchByTerm = v;
    this.FilterEmployees = this.FilterEmployeesList(v);
  }
  
  FilterEmployeesList(value:string) :Employee[]
  {
    return this.Employees.filter(emp=>emp.FullName.toLowerCase().indexOf(value.toLowerCase()) != -1);
  }




   constructor(private listempservice : employeeservice,
    private Router_:Router,private ActivatedRoute_:ActivatedRoute)
   {
        //   this.Employees= this.ActivatedRoute_.snapshot.data['employeelist'];
          
        //  if (this.ActivatedRoute_.snapshot.queryParamMap.has('SearchTerm')) {
        //      this.SearchByTerm = this.ActivatedRoute_.snapshot.queryParamMap.get('SearchTerm')!;
        //    }
        //    else
        //    {
        //     this.FilterEmployees = this.Employees;
        //   }
   }
  ngOnInit()
  {


    this.listempservice.GetEmployees().
    subscribe(empsList=>
      { 
        
        this.Employees = empsList
      
        if (this.ActivatedRoute_.snapshot.queryParamMap.has('SearchTerm')) {
          this.SearchByTerm = this.ActivatedRoute_.snapshot.queryParamMap.get('SearchTerm')!;
        }
        else
        {
          this.FilterEmployees = this.Employees;
        }
      
      
      });

    this.Selectedempid = Number(this.ActivatedRoute_.snapshot.paramMap.get('id'));
    //this.FilterEmployees = this.Employees;

 
  }
  
  OnClick(id:number)
  {
   this.Router_.navigate(['/employees',id],{
    queryParams : {'SearchTerm' : this.SearchByTerm,'TestParam':'random'}
   });
  }

}
