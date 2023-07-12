import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { DepartmentList } from '../Models/Department.model';
import { Employee } from '../Models/employee.model';
import { employeeservice } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {


   employee : Employee={
    id:1,email:"",FullName:"", gender:"", DateofBirth:new Date(2023,2,2),
     Department:"", IsActive:true,phonenumber:123456789,
     Photopath:""
   };

   Departments : DepartmentList[] = [
    {
      id:1,name:"HelpDesk"
    },
    {
      id:2,name:"HR"
    },
    {
      id:3,name:"IT"
    },
    {
      id:4,name:"Operations"
    },
    {
      id:5,name:"Admin"
    }
   ];

    constructor(private employeeservice_ : employeeservice,private router_:Router)
    {

    }

   Password!:string;
   ConfirmPassword!:string;
   DateOfBirth!:Date;
  FullName! : String;
  Email! :String;
  Gender :String = "Male";
  PhoneNumber! : number;
  IsActive :boolean = false;
  Department!:string;
  Photopath!:string;
  ShowPreview:boolean=false;

  SaveEmployee() : void
  {
    this.employeeservice_.Save(this.employee);
    this.router_.navigate(['List']);
  }
  
  TogglePreview(EmpForm : NgForm) :void
  {
    this.ShowPreview = !this.ShowPreview;
  }

}
