import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageManagementService {
  private apiUrl = 'https://localhost:7028/api/storage-management';

  constructor(private http:HttpClient) { }

  readStorages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read-storages`);
  }
  createStorages(payload: any): Observable<any>{
    return this.http.post<any[]>(`${this.apiUrl}/create-storages`,payload);
  }
  updateStorages(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/update-storages`,payload);
  }
  deleteStorages(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/delete-storages`,payload);
  }
}
