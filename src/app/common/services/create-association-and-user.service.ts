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

  private _associationData: CreateAssociation = {
    associationName: null,
    apartments: [],
  }

  private _userData: CreateUser = {
    apartmentId: null,
    firstName: null,
    lastName: null,
    email: null,
    userType: null,
    phone: null
  }

  public set associationData(data: CreateAssociation) {
    this._associationData.associationName = data.associationName;
    this._associationData.apartments = data.apartments;
  }

  public set userData(data: CreateUser) {
    this._userData.apartmentId = data.apartmentId;
    this._userData.firstName = data.firstName;
    this._userData.lastName = data.lastName;
    this._userData.email = data.email;
    this._userData.userType = data.userType;
    this._userData.phone = data.phone;
  }

  public createAssociation(): void {
    this.http.post<String[]>(`${this.url}/api/v1/associations`,this._associationData);
  }

  public createUser(): void {
    this.http.post<String[]>(`${this.url}/api/v1/users`,this._userData);
  }
}
