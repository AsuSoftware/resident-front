import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateAssociation } from 'src/app/common/interfaces/createAssociation';

@Injectable({
  providedIn: 'root'
})
export class CreateAssociationService {

  constructor(private http: HttpClient) { }

  private url = 'localhost:8080';

  public createAssociation(associationData: CreateAssociation): void {
    this.http.post<String[]>(`${this.url}/api/v1/associations`,associationData);
  }
}
