import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employeeservice } from './employee.service';
import { Employee } from '../Models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  employee! : Employee;
  empid! : number;
  constructor(private activatedroute_:ActivatedRoute,
    private _empservice : employeeservice,private _Router:Router)
  {

  }

  ngOnInit()
  {
    //const empid =   Number(this.activatedroute_.snapshot.paramMap.get("id"));
    this.activatedroute_.paramMap.subscribe((param)=>
    {
      this.empid= Number(param.get('id'));
      this._empservice.GetEmployee(this.empid).subscribe(
        {
          next : (emp)=>this.employee=emp,
          error : (err) => alert(err)
        }
      )
    });
    
  }

  ViewNextEmployee():void
  {
    if(this.empid<3)
    {
     this.empid = this.empid+1;
    }
    else
    {
      this.empid =1;
    }

     this._Router.navigate(['/employees',this.empid],{
      queryParamsHandling : "preserve"
     });

  }

}
