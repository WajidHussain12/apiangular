import { LoginService } from './../../services/login/login.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { login } from 'src/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // data: login
  constructor(private builder: FormBuilder, private request: LoginService) {
    // this.data = this.logindata;

  }

  studentForm = this.builder.group({
    name: ['', Validators.required]
  });
  save() {

    var data=this.studentForm.value;
    console.log(data)
    // this.logindata.name
    // var data = this.data.name = "Wajid"

    // return this.request.login()
    // console.log(data)
    this.request.login(data)

  }

}
