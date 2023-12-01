import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://localhost:7028/api/authentication';

  constructor(private http: HttpClient) { }

  login(userEmail: string, password: string): Observable<any> {
    const loginData = {
      userEmail: userEmail,
      password: password
    };
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
  register(userEmail: string, password: string): Observable<any> {
    const body = { userEmail, password };
    return this.http.post(`${this.apiUrl}/register`, body);
  }

  logout(): Observable<any> {
    // Implement logout logic, e.g., clearing session, removing tokens, etc.
    // You may want to communicate with the server to invalidate the user session.
    return this.http.post(`${this.apiUrl}/logout`, null);
  }
}
