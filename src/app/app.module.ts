import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import{BsDatepickerModule} from  'ngx-bootstrap/datepicker'
import {ConfirmPasswordValidator} from './Shared/employee.password.validator'
import {employeeservice} from './employees/employee.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeslistComponent } from './employees/employeeslist.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { canDeactivateGaurdService } from './employees/create-employee.candeac.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeePipeFilter } from './Models/employeefilter.pipe';
import { EmployeeListResolver } from './employees/employeelist.service.resolve';
import { PageNotFoundComponent } from './page-not-found.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeslistComponent,
    CreateEmployeeComponent,
    ConfirmPasswordValidator,
    EmployeeDetailsComponent,
    EmployeePipeFilter,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    BsDatepickerModule.forRoot(),HttpClientModule
  ],
  providers: [employeeservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
