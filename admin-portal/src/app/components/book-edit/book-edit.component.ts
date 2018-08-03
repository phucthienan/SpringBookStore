import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../../services/upload-image.service';
import { GetBookService } from '../../services/get-book.service';
import { Book } from '../../models/Book';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { EditBookService } from '../../services/edit-book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;
  bookImageUrl: string;
  isUpdated: boolean = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private getBookService: GetBookService,
    private uploadImageService: UploadImageService,
    private editBookService: EditBookService) { }

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

  onFilesChange(files) {
    this.uploadImageService.filesChange(files);
  }

  onSubmit() {
    this.editBookService.updateBook(this.book)
      .subscribe(
        (book: Book) => {
          this.uploadImageService.upload(book.id);
          this.isUpdated = true;
        },
        err => console.log(err)
      );
  }

  goBack() {
    this.router.navigate(['/books', this.book.id]);
  }
}
