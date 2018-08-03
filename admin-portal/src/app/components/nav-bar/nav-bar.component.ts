import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  get isLoggedIn() {
    return this.loginService.isLoggedIn();
  }

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  logout() {
    this.loginService.logout().subscribe(
      res => this.loginService.setLoggedIn(false),
      err => console.log(err)
    );
  }
}
