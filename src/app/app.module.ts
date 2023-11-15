import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDataComponent } from './mycomponents/student-data/student-data.component';
import { EmployeeDataComponent } from './mycomponents/employee-data/employee-data.component';
import { UserDataComponent } from './mycomponents/user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http'
import { StudentService } from './services/student/student.service';
import { UserService } from './services/user/user.service';
import { EmployeeService } from './services/employee/employee.service';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EmployeeAddComponent } from './mycomponents/employee-add/employee-add.component';
import { UserAddComponent } from './mycomponents/user-add/user-add.component';
import { DataTablesModule } from 'angular-datatables';
import { CoverPageComponent } from './mycomponents/cover-page/cover-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentAddComponent } from './mycomponents/student-add/student-add.component';
import { StudentEditComponent } from './mycomponents/student-edit/student-edit.component';
import { StudentViewComponent } from './mycomponents/student-view/student-view.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { LoginService } from './services/login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentDataComponent,
    EmployeeDataComponent,
    UserDataComponent,
    HeaderComponent,
    FooterComponent,
    StudentDataComponent,
    EmployeeAddComponent,
    StudentAddComponent,
    UserAddComponent,
    CoverPageComponent,
    StudentEditComponent,
    StudentViewComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [
    StudentService,
    EmployeeService,
    UserService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
