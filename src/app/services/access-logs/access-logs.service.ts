import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'app/utils/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class AccessLogsService {
  
  constructor(private http:HttpClient) { }

  readAccessLogs(): Observable<any[]> {
    return this.http.get<any[]>(API_URLS.READ_LOGS);
  }
  createAccessLogs(payload: any): Observable<any>{
    return this.http.post<any[]>(API_URLS.CREATE_LOGS,payload);
  }
  updateAccessLogs(payload: any): Observable<any>{
    return this.http.post(API_URLS.UPDATE_LOGS,payload);
  }
  deleteAccessLogs(payload: any): Observable<any>{
    return this.http.post(API_URLS.DELETE_LOGS,payload);
  }
}
