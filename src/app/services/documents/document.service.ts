import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from 'app/utils/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = 'https://localhost:7028/api/document';

  constructor(private http:HttpClient) { }

  readDocument(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read-documents`);
  }
  createDocument(payload: any): Observable<any>{
    return this.http.post<any[]>(`${this.apiUrl}/create-documents`,payload);
  }
  updateDocument(payload: any): Observable<any>{
    return this.http.post(API_URLS.UPDATE_DOC, payload);
  }
  deleteDocument(payload: any): Observable<any>{
    return this.http.post(API_URLS.DELETE_DOC, payload);
  }
  uploadDocument(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/upload-documents`,payload);
  }
  downloadDocument(payload: any): Observable<any>{
    return this.http.get(`${this.apiUrl}/download-documents`,payload);
  }
}
