import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private apiUrl = 'https://localhost:7028/api/user-management';

  constructor(private http:HttpClient) { }

  readUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read-users`);
  }
  createUsers(payload: any): Observable<any>{
    return this.http.post<any[]>(`${this.apiUrl}/create-users`,payload);
  }
  updateUsers(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/update-users`,payload);
  }
  deleteUsers(payload: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/delete-users`,payload);
  }
}
