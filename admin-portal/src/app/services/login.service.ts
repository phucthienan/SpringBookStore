import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {
  private loggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  sendCredentials(username: string, password: string) {
    const url = 'http://localhost:8080/user-login';
    const encodedCredentials = btoa(username + ':' + password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + encodedCredentials
    });

    return this.http.get(url, { headers: headers });
  }

  checkSession() {
    const url = 'http://localhost:8080/check-session';
    const headers = new HttpHeaders({
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, { headers: headers });
  }

  logout() {
    const url = 'http://localhost:8080/user-logout';
    const headers = new HttpHeaders({
      'x-auth-token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, null, { headers: headers });
  }
}
