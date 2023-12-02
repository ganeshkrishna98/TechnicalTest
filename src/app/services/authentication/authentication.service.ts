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
    localStorage.setItem('isLoggedIn', "true");  
    localStorage.setItem('token', userEmail);
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }
  register(userEmail: string, password: string): Observable<any> {
    const body = { userEmail, password };
    return this.http.post(`${this.apiUrl}/register`, body);
  }
  logout() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('token');    
    }    
}
