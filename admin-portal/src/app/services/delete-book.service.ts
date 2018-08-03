import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DeleteBookService {
  constructor(private http: HttpClient) { }

  deleteBook(id: number) {
    const url = `http://localhost:8080/books/${id}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.delete(url, { headers: headers });
  }
}
