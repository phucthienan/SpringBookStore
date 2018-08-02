import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = { username: '', password: '' };

  get isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loginService.setLoggedIn(true);
      },
      err => {
        this.loginService.setLoggedIn(false);
      }
    );
  }

  onSubmit(form) {
    this.loginService.sendCredentials(this.credentials.username, this.credentials.password)
      .subscribe(
        res => {
          localStorage.setItem('xAuthToken', res['token']);
          this.loginService.setLoggedIn(true);
          form.form.reset();
        },
        err => {
          console.log(err);
        }
      );
  }
}
