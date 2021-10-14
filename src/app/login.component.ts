import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "./login.service";


@Component({
  selector:'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  constructor(private _loginService:LoginService) {}
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  login(){
    console.log(this.form.value);
    var result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);
    if(!result) {
      this.form.controls['password'].setErrors({
        invalidLogin: true
      })
    }
  }

}