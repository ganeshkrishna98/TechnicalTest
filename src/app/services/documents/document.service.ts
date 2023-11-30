import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = 'https://localhost:7028/api';

  constructor(private http:HttpClient) { }

  getDocument(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/document/get-documents`);
  }
  // createDocument(): Observable<any>{
  //   return this.http.post<any>(this.apiUrl + 'create-documents');
  // }
}
