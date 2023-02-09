import { Injectable } from '@angular/core';
// import { Headers, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpRequest } from '@angular/common/http';

import { throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  userData: any;
  // options: RequestOptions;
  options:any;

  constructor(
    public snackbar: MatSnackBar,
    public router: Router
  ) { }

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    const token = this.loadToken();
    // return this.options = new RequestOptions({
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'authorization': token
    //   })
    // });

    return this.options = ({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': token
      })
    });
  }

  // createHeaders() {
  //   return this.options = ({
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'authorization': token
  //     })
  //   });
  // }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', this.loadToken());
  }
  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token');
    return this.authToken;
  }

  loadUserData() {
    this.userData = localStorage.getItem('userDetails');
    return this.userData;
  }
  // Function to logout
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  // Function to logout
  adminLogout() {
    localStorage.clear();
    this.router.navigate(['/admin-login']);
  }

  // Function to store user's data in client local storage
  storeUserData(token:any, userData:any) {
    localStorage.setItem('token', token);
    localStorage.setItem('userDetails', JSON.stringify(userData));
    localStorage.setItem('userIsLoggedIn', 'yes');
  }

  // Function to check if user is logged in
  loggedIn() {
    // return tokenNotExpired();
    return true;
  }
  getCheckError(error:any) {
    var errMsg = error.name + ' :: ' + error.message;
    this.snackbar.open(errMsg, error.statusText, { duration: 3000 });
    if (error.status === 401) {
      this.logout();
      return throwError(false);
    } else {
      const errMsg = error.message
        ? error.message
        : error.status
          ? `${error.status} - ${error.statusText}`
          : 'Server error';
      // console.error(errMsg);
      return throwError(errMsg);
    }
  }
}
