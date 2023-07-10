import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeslistComponent } from './employees/employeeslist.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';

const routes: Routes = [
  {
    path : 'List' ,component: EmployeeslistComponent
  },
  {
    path : 'Create' , component : CreateEmployeeComponent
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
