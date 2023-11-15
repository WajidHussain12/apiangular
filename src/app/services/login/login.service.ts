import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { login } from 'src/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private request: HttpClient) {

  }

  loginapi: string = "https://localhost:7032/api/login";

  login(data: any) {
    this.request.post(this.loginapi,data).subscribe((res)=>{
      console.log(res);
    });
  }

}
