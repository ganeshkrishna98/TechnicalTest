import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'app/utils/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class NotificationManagementService {
  
  constructor(private http:HttpClient) { }

  readNotifications(): Observable<any[]> {
    return this.http.get<any[]>(API_URLS.READ_NOTIFICATIONS);
  }
  createNotifications(payload: any): Observable<any>{
    return this.http.post<any[]>(API_URLS.CREATE_NOTIFICATIONS,payload);
  }
  updateNotifications(payload: any): Observable<any>{
    return this.http.post(API_URLS.UPDATE_NOTIFICATIONS,payload);
  }
  deleteNotifications(payload: any): Observable<any>{
    return this.http.post(API_URLS.DELETE_NOTIFICATIONS,payload);
  }
}
