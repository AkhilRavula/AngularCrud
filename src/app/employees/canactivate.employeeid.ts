import { Inject, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { employeeservice } from "./employee.service";


export const CheckForEmployeeDetails : CanActivateFn = 

(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,
    Employeeservice: employeeservice=inject(employeeservice),router:Router=inject(Router)): Observable<boolean> => 
 {
     
     return Employeeservice.GetEmployee(Number(route.paramMap.get('id'))).pipe(
        map(employee=>
            {
                const Empexists = !! employee;
                if (Empexists) {
                    return true;
                } else {
                 router.navigate(['notFound']);
                  return false;   }
            }));


     //const Empexists=!!Employeeservice.GetEmployee(Number(route.paramMap.get('id')));
    //  Employeeservice.GetEmployee(Number(route.paramMap.get('id'))).subscribe(
    //     {
    //         next : (Empexists) => 
    //         {
    //             if (Empexists) {
    //                 return true;
    //             } else {
    //              router.navigate(['notFound']);
    //               return false;   }
    //         }
    //     }
    //  )
   
 };