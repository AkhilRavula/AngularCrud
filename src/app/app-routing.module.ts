import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeslistComponent } from './employees/employeeslist.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { canDeactivateGaurdService } from './employees/create-employee.candeac.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';

const routes: Routes = [
  {
    path : 'List' ,component: EmployeeslistComponent
  },
  {
    path : 'employees/:id' ,component: EmployeeDetailsComponent
  },
  {
    path : 'Create' , component : CreateEmployeeComponent ,canDeactivate:[
      (cmp : CreateEmployeeComponent) => {
        if (cmp.createempform.dirty) {
          return confirm("Are you sure you want to change?")
        }
        return true;
      }
    ]
  },
  {
    path : '',redirectTo:'/List',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
