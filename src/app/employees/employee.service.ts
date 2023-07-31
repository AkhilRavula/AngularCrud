import { Injectable } from "@angular/core";
import { Employee } from "../Models/employee.model";
import { Observable,of,delay, throwError, catchError } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root',
 })

export class employeeservice {

   baseUrl : string = 'http://localhost:3000/Employees';

  constructor(private _httpclient : HttpClient)
  {

  }
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
          {
            id: 5,
            FullName: 'Akhil',
            gender: 'Male',
            email: 'mark@pragimtech.com',
            DateofBirth: new Date('10/25/1988'),
            Department: '4',
            IsActive: true,
            Photopath: 'assets/Images/123.jpg',
            phonenumber: 2345978642
          }
    ]

     GetEmployees() : Observable<Employee[]>
    {
        // return of(this.ListEmployees).pipe(
        // delay(500));

        return this._httpclient.get<Employee[]>('http://localhost:3000/Employees').pipe
        (catchError(this.ErrorHandler));

    }

    private ErrorHandler(errorresponse : HttpErrorResponse)
    {
        if (errorresponse.error instanceof ErrorEvent) {
          console.error("Client Side Error =>" , errorresponse.error.message);
        } else {
          console.error("Server Side Error =>" , errorresponse.error.message);
        }

        return throwError(()=>'Problem with service .Try again Later');
    }

    GetEmployee(empid:Number) : Observable<Employee>
    {
      return this._httpclient.get<Employee>(`${this.baseUrl}/${empid}`).
      pipe(catchError(this.ErrorHandler));
    }

    AddEmployee(employee:Employee) : Observable<Employee>
    {   
        // const idmax =this.ListEmployees.reduce((e1,e2)=>
        // {
        //    return (e1.id>e2.id) ? e1 :e2 ;
        // }).id;
        // employee.id = idmax + 1;
        return this._httpclient.post<Employee>(this.baseUrl,employee,{
          headers : new HttpHeaders({
            'Content-Type' : 'application/json'
          })
        }).pipe(catchError(this.ErrorHandler));
        //this.ListEmployees.push(employee);   
    }

    UpdateEmployee(employee:Employee) : Observable<void>
    {   
        
        return this._httpclient.put<void>(`${this.baseUrl}/${employee.id}`,employee,{
          headers : new HttpHeaders({
            'Content-Type' : 'application/json'
          })
        }).pipe(catchError(this.ErrorHandler));   
    }


    delete(empid:Number)
    {
      const foundIndex=this.ListEmployees.findIndex(eid=>eid.id==empid);
      if(foundIndex!=-1)
      {
      this.ListEmployees.splice(foundIndex,1);
      }
    }

}