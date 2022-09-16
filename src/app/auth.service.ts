import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }
  LogIn(data:any) : Observable<any>{
    let URL = environment.auth_url;
    return this.http.post(URL,data)
  }
}
