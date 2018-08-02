import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { AddBookService } from '../../services/add-book.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
  book: Book;
  isAdded: boolean = false;

  constructor(private addBookService: AddBookService) { }

  ngOnInit() {
    this.resetFormField();
  }

  onSubmit() {
    this.addBookService.addBook(this.book).subscribe(
      res => {
        this.isAdded = true;
        this.resetFormField();
      },
      err => {
        console.log(err);
      }
    );
  }

  private resetFormField() {
    this.book = new Book();
    this.book.active = true;
    this.book.category = 'Engineering';
    this.book.language = 'English';
    this.book.format = 'Paperback';
  }
}
