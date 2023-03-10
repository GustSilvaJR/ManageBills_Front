import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignInDTO } from '../interfaces/sign-in-dto';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private httpClient:HttpClient) { }

  public signIn(data: SignInDTO):Observable<any>{
    return this.httpClient.post('127.0.0.1', data).pipe(
      res => {
        console.log(res);
        return res;
      },

      error => {
        console.log(error);
        return error
      }
    );
  }

}
