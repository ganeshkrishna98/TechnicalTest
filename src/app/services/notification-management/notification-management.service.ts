import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationManagementService {
  private apiUrl = 'https://localhost:7028/api/notification-management';

  constructor(private http:HttpClient) { }

  readNotifications(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read-notifications`);
  }
  createNotifications(payload: any): Observable<any>{
    return this.http.post<any[]>(`${this.apiUrl}/create-notifications`,payload);
  }
  updateNotifications(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/update-notifications`,payload);
  }
  deleteNotifications(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/delete-notifications`,payload);
  }
}
