import { Component } from '@angular/core';

import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { SignInService } from '../../services/sign-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private signInService:SignInService){}

  loginForm = this.formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  })

  public sendForm():void{
    console.log("Formulário enviado: ");

    const data = {
      email: this.loginForm.get('email'),
      password: this.loginForm.get('password'),
    };

    if(this.loginForm.valid){
      this.signInService.signIn(data);

      console.log(this.loginForm.value);
    }
    
  }

  public teste():void{
    console.log(this.loginForm.get('email')?.valid);
    console.log("Deu certo");
  }
}
