import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = { username: '', password: '' };
  isLoggedIn = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.isLoggedIn = true;
      },
      err => {
        this.isLoggedIn = false;
      }
    );
  }

  onSubmit() {
    this.loginService.sendCredentials(this.credentials.username, this.credentials.password)
      .subscribe(
        res => {
          localStorage.setItem('xAuthToken', res['token']);
          this.isLoggedIn = true;
        },
        err => {
          console.log(err);
        }
      );
  }
}
