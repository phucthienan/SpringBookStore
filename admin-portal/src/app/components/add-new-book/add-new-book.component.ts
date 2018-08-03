import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { AddBookService } from '../../services/add-book.service';
import { UploadImageService } from '../../services/upload-image.service';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
  book: Book;
  isAdded: boolean = false;

  constructor(private addBookService: AddBookService,
    private uploadImageService: UploadImageService) { }

  ngOnInit() {
    this.resetFormField();
  }

  onFilesChange(files) {
    this.uploadImageService.filesChange(files);
  }

  onSubmit() {
    this.addBookService.addBook(this.book).subscribe(
      (book: Book) => {
        this.uploadImageService.upload(book.id);
        this.isAdded = true;
        this.resetFormField();
      },
      err => console.log(err)
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
