import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Book } from '../../models/Book';
import { GetBookService } from '../../services/get-book.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  book: Book;
  bookImageUrl: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private getBookService: GetBookService) { }

  ngOnInit() {
    this.route.params
      .pipe(
        map((params: Params) => params['id']),
        switchMap(id => this.getBookService.getBook(id))
      )
      .subscribe(
        (book: Book) => {
          this.book = book;
          this.bookImageUrl = `http://localhost:8080/images/books/${book.id}.png`;
        },
        err => console.log(err)
      );
  }
}
