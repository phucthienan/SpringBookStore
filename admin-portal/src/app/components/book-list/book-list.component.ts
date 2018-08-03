import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBookListService } from '../../services/get-book-list.service';
import { Book } from '../../models/Book';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  selection = new SelectionModel<Book>(true, []);
  displayedColumns: string[] = [
    'id',
    'select',
    'title',
    'author',
    'category',
    'listPrice',
    'ourPrice',
    'active',
    'action'
  ];

  constructor(private router: Router,
    private getBookListService: GetBookListService) { }

  ngOnInit() {
    this.getBookListService.getBooks().subscribe(
      (books: Book[]) => this.books = books,
      err => console.log(err)
    );
  }

  isAllSelected() {
    const numOfSelected = this.selection.selected.length;
    const numOfRows = this.books.length;
    return numOfSelected === numOfRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.books.forEach(row => this.selection.select(row));
  }

  onRowClick(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/books', this.selectedBook.id]);
  }

  deleteSelectedBooks() {
    console.log(this.selection.selected);
  }
}
