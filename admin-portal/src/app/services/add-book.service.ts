import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/Book';

@Injectable()
export class AddBookService {
  constructor(private http: HttpClient) { }

  addBook(book: Book) {
    const url = 'http://localhost:8080/book';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, book, { headers: headers });
  }
}
