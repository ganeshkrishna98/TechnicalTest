import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URLS } from 'app/utils/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  
  constructor(private http:HttpClient) { }

  readUsers(): Observable<any[]> {
    return this.http.get<any[]>(API_URLS.READ_USERS);
  }
  createUsers(payload: any): Observable<any>{
    return this.http.post<any[]>(API_URLS.CREATE_USERS,payload);
  }
  updateUsers(payload: any): Observable<any>{
    return this.http.post(API_URLS.UPDATE_USERS,payload, {responseType: 'text'});
  }
  deleteUsers(payload: any): Observable<any>{
    return this.http.post(API_URLS.DELETE_USERS,payload);
  }
}
