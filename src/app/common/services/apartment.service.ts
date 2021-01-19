import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../interfaces/apartment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  public constructor(private http: HttpClient, private url: HttpService) { }

  public findAllByAssociation(associationId: String): Observable<Apartment[]> {
    return this.http.get<Apartment[]>(`${this.url}/api/v1/apartments?associationId=${associationId}`);
  }

  public findApartmentById(apartmentId: String): Observable<Apartment> {
    return this.http.get<Apartment>(`${this.url}/api/v1/apartments/${apartmentId}`);
  }
}
