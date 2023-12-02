import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = 'https://localhost:7028/api/document';

  constructor(private http:HttpClient) { }

  readDocument(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/read-documents`);
  }
  createDocument(documentId: string, documentName: string, fileName: string, approvalStatus: string, authorUserId: string, authorName: string, lastModifiedUserId: string, lastModifiedUserName: string, lastAccessedUserName: string, lastAccessedUserId: string): Observable<any>{
    const body = {
      documentId:documentId,
      documentName:documentName,
      fileName:fileName,
      approvalStatus:approvalStatus,
      authorUserId:authorUserId,
      authorName:authorName,
      lastModifiedUserId:lastModifiedUserId,
      lastModifiedUserName:lastModifiedUserName,
      lastAccessedUserName:lastAccessedUserName,
      lastAccessedUserId:lastAccessedUserId
    };
    return this.http.post<any[]>(`${this.apiUrl}/create-documents`,body);
  }
  updateDocument(documentId: string, documentName: string, fileName: string, approvalStatus: string, authorUserId: string, authorName: string, lastModifiedUserId: string, lastModifiedUserName: string, lastAccessedUserName: string, lastAccessedUserId: string): Observable<any>{
    const body = {
      documentId:documentId,
      documentName:documentName,
      fileName:fileName,
      approvalStatus:approvalStatus,
      authorUserId:authorUserId,
      authorName:authorName,
      lastModifiedUserId:lastModifiedUserId,
      lastModifiedUserName:lastModifiedUserName,
      lastAccessedUserName:lastAccessedUserName,
      lastAccessedUserId:lastAccessedUserId
    };
    return this.http.post<any[]>(`${this.apiUrl}/update-documents`,body);
  }
  deleteDocument(documentId: string): Observable<any>{
    const body = {
      documentId:documentId
    };
    return this.http.post<any[]>(`${this.apiUrl}/delete-documents`,body);
  }
}
