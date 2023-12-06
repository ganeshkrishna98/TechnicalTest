import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://localhost:7028/api/authentication';
  private jwtHelper = new JwtHelperService();

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

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
