import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInDTO } from '../interfaces/sign-in-dto';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  private url:string = "http://localhost:8000/login";

  constructor(private httpClient:HttpClient) { }

  public signIn(data: SignInDTO):Observable<any>{
    
    console.log(data);

    return this.httpClient.post(this.url, data).pipe(
      res => {
        console.log("retorno");
        console.log(res);
        return res;
      },

      error => {
        console.log(error);
        return error;
      }
    );
  }

}
