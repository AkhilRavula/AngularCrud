import { Component, ViewChild } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { DepartmentList } from '../Models/Department.model';
import { Employee } from '../Models/employee.model';
import { employeeservice } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

   @ViewChild('employeeForm') public createempform! : NgForm;

   employee : Employee ;
   CreateEmployee :string;

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

    constructor(private employeeservice_ : employeeservice,private router_:Router
      ,private activatedroute : ActivatedRoute)
    {

    }

    ngOnInit()
    {
      (this.activatedroute.paramMap.
        subscribe((routeparam)=> {
          const id=+routeparam.get('id');
          this.getEmployeesDetails(id);
      }));
        //const id = Number (this.activatedroute.snapshot.paramMap.get('id'));
        
    }

    getEmployeesDetails(id: Number) {
       if (id==0) {
        this.employee ={
          id:null,email:null,FullName:null, gender:null, DateofBirth:null,
           Department:null, IsActive:null,phonenumber:null,
           Photopath:null
         };
         this.CreateEmployee = "Create Employee";
       } else 
       {
        this.CreateEmployee = "Edit Employee";
          this.employeeservice_.GetEmployee(id).subscribe(
            {
              next : (emp) => this.employee= emp,
              error : (err) => alert(err)
            }
          )
          
       }
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
   // const newemp:Employee = Object.assign({},this.employee);
   if(this.employee.id==null)
   {
    this.employeeservice_.AddEmployee(this.employee).subscribe(
      {
        next : (emp) => {
           console.log(emp)
          this.createempform.reset();
          this.router_.navigate(['List']);       
        },
        error : (err) => alert(err)
      }
    )
   }
   else
   {
    this.employeeservice_.UpdateEmployee(this.employee).subscribe(
      {
        next : (emp) => {
           console.log(emp)
          this.createempform.reset();
          this.router_.navigate(['List']);       
        },
        error : (err) => alert(err)
      }
    )
   }
   
  };
  
  TogglePreview(EmpForm : NgForm) :void
  {
    this.ShowPreview = !this.ShowPreview;
  }

}
