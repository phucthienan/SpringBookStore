import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBookListService } from '../../services/get-book-list.service';
import { DeleteBookService } from '../../services/delete-book.service';
import { Book } from '../../models/Book';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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
    private getBookListService: GetBookListService,
    private deleteBookService: DeleteBookService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getBookList();
  }

  private getBookList() {
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

  viewBook(book: Book) {
    this.selectedBook = book;
    this.router.navigate(['/books', this.selectedBook.id]);
  }

  deleteBook(book: Book) {
    this.selectedBook = book;
    const dialogRef = this.dialog.open(DeleteBookDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.deleteBookService.deleteBook(this.selectedBook.id)
          .subscribe(
            res => this.getBookList(),
            err => console.log(err)
          );
      }
    });
  }

  deleteSelectedBooks() {
    if (this.selection.selected.length > 0) {
      const dialogRef = this.dialog.open(DeleteBookDialogComponent, {});
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'yes') {
          this.selection.selected.forEach((book: Book) => {
            this.deleteBookService.deleteBook(book.id)
              .subscribe(
                res => this.getBookList(),
                err => console.log(err)
              );
          });
          this.selection = new SelectionModel<Book>(true, []);
        }
      });
    }
  }
}

@Component({
  selector: 'app-delete-book-dialog',
  templateUrl: 'delete-book-dialog.component.html'
})
export class DeleteBookDialogComponent {
  constructor(public dialogRef: MatDialogRef<DeleteBookDialogComponent>) { }
}
