import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GetBookListService {
  constructor(private http: HttpClient) { }

  getBooks() {
    const url = 'http://localhost:8080/books';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, { headers: headers });
  }
}
