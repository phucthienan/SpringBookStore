import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UploadImageService {
  files: File[] = [];

  constructor(private http: HttpClient) { }

  filesChange(files) {
    this.files = files.target.files;
  }

  upload(bookId: number) {
    this.makeFileRequest(`http://localhost:8080/books/${bookId}/images`, this.files).subscribe(
      res => {},
      err => console.log(err)
    );
  }

  makeFileRequest(url, files: File[]) {
    const formData = new FormData();
    formData.append('image', files[0]);
    const headers = new HttpHeaders({
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, formData, { headers: headers });
  }
}
