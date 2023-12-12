import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'app/utils/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class DeviceManagementService {
  
  constructor(private http:HttpClient) { }

  readDevices(): Observable<any[]> {
    return this.http.get<any[]>(API_URLS.READ_DEVICES);
  }
  createDevices(payload: any): Observable<any>{
    return this.http.post<any[]>(API_URLS.CREATE_DEVICES,payload);
  }
  updateDevices(payload: any): Observable<any>{
    return this.http.post(API_URLS.UPDATE_DEVICES,payload, {responseType: 'text'});
  }
  deleteDevices(payload: any): Observable<any>{
    return this.http.delete(API_URLS.DELETE_DEVICES,{body:payload});
  }
}
