import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/Book';

@Injectable()
export class EditBookService {
  constructor(private http: HttpClient) { }

  updateBook(book: Book) {
    const url = 'http://localhost:8080/books';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.put(url, book, { headers: headers });
  }
}
