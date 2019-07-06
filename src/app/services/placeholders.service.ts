import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PlaceholderItems } from '../models/placeholderItems';

@Injectable({
  providedIn: 'root'
})
export class PlaceholdersService {
  itemsBaseUrl = 'https://jsonplaceholder.typicode.com/posts';
  itemsUrlOptions = '?_limit=30';

  constructor(private http: HttpClient) { }

  getItems(): Observable<PlaceholderItems[]> {
    return this.http.get<PlaceholderItems[]>(`${this.itemsBaseUrl}${this.itemsUrlOptions}`);
  }

}
