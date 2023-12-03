import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceManagementService {
  private apiUrl = 'https://localhost:7028/api/device-management';

  constructor(private http:HttpClient) { }

  readDevices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read-devices`);
  }
  createDevices(payload: any): Observable<any>{
    return this.http.post<any[]>(`${this.apiUrl}/create-devices`,payload);
  }
  updateDevices(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/update-devices`,payload);
  }
  deleteDevices(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/delete-devices`,payload);
  }
}
