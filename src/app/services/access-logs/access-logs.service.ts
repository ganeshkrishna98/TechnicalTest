import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessLogsService {
  private apiUrl = 'https://localhost:7028/api/access-logs';

  constructor(private http:HttpClient) { }

  readAccessLogs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read-access-logs`);
  }
  createAccessLogs(payload: any): Observable<any>{
    return this.http.post<any[]>(`${this.apiUrl}/create-access-logs`,payload);
  }
  updateAccessLogs(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/update-access-logs`,payload);
  }
  deleteAccessLogs(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/delete-access-logs`,payload);
  }
}
