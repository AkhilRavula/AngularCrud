import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { DepartmentList } from '../Models/Department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

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
   DateOfBirth!:Date;
  FullName! : String;
  Email! :String;
  Gender :String = "Male";
  PhoneNumber! : number;
  IsActive :boolean = false;
  Department!:string;

  SaveEmployee(EmpForm : NgForm) : void
  {
     console.log(EmpForm);
  }
}
