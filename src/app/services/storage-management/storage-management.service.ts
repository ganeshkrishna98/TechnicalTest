import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'app/utils/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class StorageManagementService {
  
  constructor(private http:HttpClient) { }

  readStorages(): Observable<any[]> {
    return this.http.get<any[]>(API_URLS.READ_STORAGES);
  }
  createStorages(payload: any): Observable<any>{
    return this.http.post<any[]>(API_URLS.CREATE_STORAGES,payload);
  }
  updateStorages(payload: any): Observable<any>{
    return this.http.post(API_URLS.UPDATE_STORAGES,payload);
  }
  deleteStorages(payload: any): Observable<any>{
    return this.http.post(API_URLS.DELETE_STORAGES,payload);
  }
}
