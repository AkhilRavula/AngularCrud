import { Inject, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { employeeservice } from "./employee.service";


export const CheckForEmployeeDetails : CanActivateFn = 

(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
    Employeeservice: employeeservice=inject(employeeservice),router:Router=inject(Router)):boolean => 
 {
     const Empexists=!!Employeeservice.GetEmployee(Number(route.paramMap.get('id')));

     if (Empexists) {
                return true;
     } else {
        router.navigate(['notFound']);
        return false;
     }
 };