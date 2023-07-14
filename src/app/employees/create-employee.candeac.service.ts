import { inject } from "@angular/core";
import { CreateEmployeeComponent } from "./create-employee.component";
import { CanDeactivateFn } from "@angular/router";
export function canDeactivateGaurdService() 
{
    return () => {
        const empcomp: CreateEmployeeComponent = inject(CreateEmployeeComponent);
        
        if (empcomp.createempform.dirty) {
          return confirm("Are you sure you want to change?")
        }
        return true;
      };
}