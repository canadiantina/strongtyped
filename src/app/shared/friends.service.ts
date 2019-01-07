import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from './friend.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  private baseUrl = 'http://localhost:3004';

  private headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  constructor(private http: HttpClient) { }

  getFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>(`${this.baseUrl}/friends`);
  }

  saveFriend(detail: Friend): Observable<Friend> {
    const putUrl = `${this.baseUrl}/friends/${detail.id}`;
    return this.http.put<Friend>(putUrl,
      detail,
      { headers: this.headers });
  }

  addFriend(detail: Friend): Observable<Friend> {
    const postUrl = `${this.baseUrl}/friends/`;
    return this.http.post<Friend>(postUrl,
      detail,
      { headers: this.headers });
  }
}
