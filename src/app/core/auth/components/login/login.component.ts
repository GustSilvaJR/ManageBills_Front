import { Component } from '@angular/core';

import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { SignInService } from '../../services/sign-in.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  public message_error = '';

  constructor(private formBuilder: FormBuilder, private signInService:SignInService, private router: Router){}

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  })

  public sendForm():void{
    console.log("Formulário enviado: ");

    const data = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    if(this.loginForm.valid){
      
      this.signInService.signIn(data).subscribe({
        next: (res:any) => {
          console.log(res);

          if (res.auth) {

            const user = {
              nome_usuario: res.nome,
              email_usuario: res.email,
              adm: res.administrador,
              token: res.token,
            }
  
            //Setando token de autenticação
            localStorage.removeItem('access_token');
            localStorage.setItem('access_token', res.token);
  
            //Setando dados do usuario logado
            localStorage.removeItem('currentUser');
            localStorage.setItem('current_user', JSON.stringify(user));
            
            this.router.navigate(['/dashboard']);
          } else {
            this.message_error = "Erro ao efetuar login"
            alert("Erro ao efetuar login");
          }


        },
        error: (err) => {
          console.log("Error: ");
          console.log(err);
  
          //this.msgError = "Servidor com problemas! Entre em contato com o administrador ou tente novamente mais tarde.";
        }
      })

    }
    
  }

  public teste():void{
    console.log(this.loginForm.get('email')?.valid);
    console.log("Deu certo");
  }
}
