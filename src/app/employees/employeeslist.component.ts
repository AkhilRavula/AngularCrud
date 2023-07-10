import { Component } from '@angular/core';
import { Employee } from '../Models/employee.model';

@Component({
  selector: 'app-employeeslist',
  templateUrl: './employeeslist.component.html',
  styleUrls: ['./employeeslist.component.css']
})
export class EmployeeslistComponent {
  Employees : Employee[] = [

    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      email: 'mark@pragimtech.com',
      DateofBirth: new Date('10/25/1988'),
      Department: 'IT',
      IsActive: true,
      Photopath: 'assets/Images/123.jpg',
      phonenumber: 2345978640
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      phonenumber: 2345978640,
      DateofBirth: new Date('11/20/1979'),
      Department: 'HR',
      IsActive: true,
      email: 'mark@pragimtech.com',
      Photopath: 'assets/Images/123.jpg'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      email: 'mark@pragimtech.com',
      phonenumber: 5432978640,
      DateofBirth: new Date('3/25/1976'),
      Department: 'IT',
      IsActive: false,
      Photopath: 'assets/Images/456.png'
    },

  ];
  
}
