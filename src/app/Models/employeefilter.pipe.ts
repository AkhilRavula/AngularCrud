import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "./employee.model";

@Pipe(
    {
        name:'employeefilter'
    }
)


export class EmployeePipeFilter implements PipeTransform{
    transform(employees : Employee[],searchterm : string) : Employee[]  {
        if(!employees || !searchterm)
        {
            return employees;
        }

        return employees.filter(emp=>emp.FullName.toLowerCase().indexOf(searchterm.toLowerCase()) != -1);
            
    }

}