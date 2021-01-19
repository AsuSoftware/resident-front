import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public constructor() { }

  public readonly url = 'localhost:8080';
}
