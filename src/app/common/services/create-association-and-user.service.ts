import { CreateUser } from './../interfaces/createUser';
import { Injectable } from '@angular/core';
import { CreateAssociation } from '../interfaces/createAssociation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateAssociationAndUserService {

  constructor(private http: HttpClient) { }

  private url = 'localhost:8080';


  // momentan le-am pus void, o sa le schimb dupa ce ai implementat acel endpoint
  public createAssociation(associationData: CreateAssociation): void {
    this.http.post<String[]>(`${this.url}/api/v1/associations`,associationData);
  }

  public createUser(userData: CreateUser): void {
    this.http.post<String[]>(`${this.url}/api/v1/users`,userData);
  }
}
