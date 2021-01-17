import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../classes/loginRequest';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly LOGIN_URL = 'localhost:8080';

  constructor(private http: HttpClient) { }

  public login(request: LoginRequest): Observable<any> {
     const body = new HttpParams()
     .set('username', request.email)
     .set('password', request.password)
     .set('grant_type', 'password')
     return this.http.post(`${this.LOGIN_URL}/auth/realms/resident/protocol/openid-connect/token`, body, {
       headers: new HttpHeaders()
       .set('Content-Type', 'application/x-www-form-urlencoded')
     });
  }
}
