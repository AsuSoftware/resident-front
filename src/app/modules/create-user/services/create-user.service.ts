import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUser } from 'src/app/common/interfaces/createUser';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private http: HttpClient) { }

  private url = 'localhost:8080';

  public createUser(userData: CreateUser): void {
    this.http.post<String[]>(`${this.url}/api/v1/users`,userData);
  }
}
