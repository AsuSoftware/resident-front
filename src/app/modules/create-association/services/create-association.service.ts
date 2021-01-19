import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateAssociation } from 'src/app/modules/create-association/classes/createAssociation';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/common/services/http.service';

@Injectable()
export class CreateAssociationService {

  public constructor(private http: HttpClient, private url: HttpService) { }

  public createAssociation(associationData: CreateAssociation): Observable<{id: String}> {
    return this.http.post<{id: String}>(`${this.url}/api/v1/associations`, associationData);
  }
}
