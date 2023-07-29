import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Employee } from "../Models/employee.model"
import { Observable, catchError ,of} from "rxjs";
import { employeeservice } from "./employee.service";
import { Inject, inject } from "@angular/core";



export const EmployeeListResolver : ResolveFn<Employee[]>=
     
    (route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot,
         Employeeservice: employeeservice=inject(employeeservice)) :
          Observable<Employee[]>=> Employeeservice.GetEmployees();
                                                  
         
   
