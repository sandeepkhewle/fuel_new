import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import FileSaver from 'file-saver';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { GlobalApiService } from 'src/app/shared-modules/global-api.service';
import { AuthService } from 'src/app/shared-modules/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private http: HttpClient,
    private globalApiService: GlobalApiService,
    private authService: AuthService,
  ) { }


  // getAllReports(postBody: any): Observable<any> {
  //   return this.http.post(this.globalApiService.getApiUrl() + '/structure/reportList', postBody)
  //     .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  // }

  getReportList(postBody: {}): Observable<any> {
    return this.http.post(this.globalApiService.getApiUrl() + '/structure/reportList', postBody)
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }

  getReport(postBody: any) {
    // let headers = new Headers();
    // headers.append("Accept", 'application/x-www-form-urlencoded');
    // headers.append('Content-Type', 'application/json');
    // headers.append("Authorization", localStorage.getItem('token'));

    // let options = new RequestOptions({
    //   headers: headers
    // })

    // options.responseType = ResponseContentType.Blob;
    return this.http.post(this.globalApiService.getApiUrl() + '/structure/exportExcel', postBody, { observe: 'response', responseType: 'blob' }).pipe(map((response:any) => {
        // Removed checking of valid response
        let fileBlob = response.body;
        let blob = new Blob([fileBlob], {
          type: 'application/pdf' // must match the Accept type
        });
        let filename = postBody.filters.expenseType === 'Salary' ? 'Salary.xlsx' : postBody.page + '.xlsx';
        FileSaver.saveAs(blob, filename);
      })).pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }

  // getStaffList(postBody: any): Observable<any> {
  //   return this.http.post(this.globalApiService.getApiUrl() + '/structure/getStaffList', postBody)
  //     .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  // }

  // getReport(postBody: { filters: any; page: any; }): Observable<any> {
  //   return this.http.post(this.globalApiService.getApiUrl() + '/structure/exportExcel', postBody)
  //     .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  // }


}
