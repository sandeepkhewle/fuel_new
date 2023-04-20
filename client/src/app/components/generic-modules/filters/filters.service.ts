import { Injectable } from '@angular/core';
import { GlobalApiService } from '../../../shared-modules/global-api.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'

import { AuthService } from '../../../shared-modules/services/auth.service';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseContentType, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import * as FileSaver from 'file-saver';
// import { RequestOptions } from 'https';
@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(
    private http: HttpClient,
    private globalApiService: GlobalApiService,
    private authService: AuthService,
    // private http1: Http
  ) { }

  //   get all the filters
  getFilters(postObj: any): Observable<any> {
    return this.http.post(this.globalApiService.getApiUrl() + '/structure/getFilters', postObj)
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }

  //columns show/hide
  columnsShow(postObj: any): Observable<any> {
    return this.http.post(this.globalApiService.getApiUrl() + '/adminUser/addUpdateColumnMapping', postObj)
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }

  columnsData(postObj: any): Observable<any> {
    return this.http.post(this.globalApiService.getApiUrl() + '/adminUser/getColumnMapping', postObj)
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }

  // get excel download
  getExcel(postObj: any): Observable<any> {
    return this.http.post(this.globalApiService.getApiUrl() + '/structure/exportExcel', postObj).pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }

  download(postBody: any): Observable<any> {
    let headers = new Headers();
    headers.append("Accept", 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization", JSON.stringify(localStorage.getItem('token')));

    let options = new RequestOptions({
      headers: headers
    })

    // options.responseType = "blob";
    postBody.options = options;
    return this.http.post(this.globalApiService.getApiUrl() + '/structure/exportExcel', postBody, { responseType: 'blob' }).pipe(map((response: any) => {
      // Removed checking of valid response
      let fileBlob = response;
      let blob = new Blob([fileBlob], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        // must match the Accept type
      });
      const filename = 'data.xlsx';
      FileSaver.saveAs(blob, filename);
    }))
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }
}
