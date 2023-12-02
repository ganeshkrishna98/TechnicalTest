import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {
  private apiUrl = 'https://localhost:7028/api/user-management';

  constructor(private http: HttpClient) { }
}
