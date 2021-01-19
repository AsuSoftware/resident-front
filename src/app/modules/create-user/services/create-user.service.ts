import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from 'src/app/common/interfaces/apartment';
import { HttpService } from 'src/app/common/services/http.service';
import { CreateUser } from 'src/app/modules/create-user/classes/createUser';

@Injectable()
export class CreateUserService {

  public constructor(private http: HttpClient, private url: HttpService) { }

  public createUser(userData: CreateUser): Observable<any> {
    return this.http.post<String[]>(`${this.url}/api/v1/users`, userData);
  }


}
