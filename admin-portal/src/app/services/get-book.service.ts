import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GetBookService {
  constructor(private http: HttpClient) { }

  getBook(id: number) {
    const url = `http://localhost:8080/books/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, { headers: headers });
  }
}
