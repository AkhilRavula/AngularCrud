import { Injectable } from "@angular/core";
import { Employee } from "../Models/employee.model";


@Injectable()

export class employeeservice {

    private ListEmployees : Employee[] =
    [
        {
            id: 1,
            FullName: 'Mark',
            gender: 'Male',
            email: 'mark@pragimtech.com',
            DateofBirth: new Date('10/25/1988'),
            Department: '4',
            IsActive: true,
            Photopath: 'assets/Images/123.jpg',
            phonenumber: 2345978640
          },
          {
            id: 2,
            FullName: 'Mary',
            gender: 'Female',
            phonenumber: 2345978640,
            DateofBirth: new Date('11/20/1979'),
            Department: '1',
            IsActive: true,
            email: 'mark@pragimtech.com',
            Photopath: 'assets/Images/123.jpg'
          },
          {
            id: 3,
            FullName: 'John',
            gender: 'Male',
            email: 'mark@pragimtech.com',
            phonenumber: 5432978640,
            DateofBirth: new Date('3/25/1976'),
            Department: '2',
            IsActive: false,
            Photopath: 'assets/Images/123.jpg'
          },
    ]

    GetEmployees() : Employee[]
    {
        return this.ListEmployees;
    }

    Save(employee:Employee)
    {
      this.ListEmployees.push(employee);
    }

}