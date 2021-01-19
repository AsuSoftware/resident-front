import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public constructor() { }

  public setToken(token: String): void {
    localStorage.setItem('JWT_TOKEN', JSON.stringify(token));
  }

  public getToken(): String {
    return localStorage.getItem('JWT_TOKEN');
  }
}
