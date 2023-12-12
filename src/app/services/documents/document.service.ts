import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from 'app/utils/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http:HttpClient) { }

  readDocument(): Observable<any[]> {
    return this.http.get<any[]>(API_URLS.READ_DOC);
  }
  createDocument(payload: any): Observable<any>{
    return this.http.post(API_URLS.CREATE_DOC, payload, {responseType: 'text'});
  }
  updateDocument(payload: any): Observable<any>{
    return this.http.post(API_URLS.UPDATE_DOC, payload, {responseType: 'text'});
}
  deleteDocument(payload: any): Observable<any>{
    return this.http.delete(API_URLS.DELETE_DOC, {body:payload});
  }
  uploadDocument(payload: any): Observable<any>{
    return this.http.post(API_URLS.UPLOAD_DOC,payload, {responseType: 'text'});
  }
  downloadDocument(payload: any): Observable<any>{
    return this.http.get(API_URLS.DOWNLOAD_DOC(payload.fileName));
  }
}
