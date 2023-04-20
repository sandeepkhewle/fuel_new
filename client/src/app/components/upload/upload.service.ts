import { HttpClient } from '@angular/common/http';
import { GlobalApiService } from 'src/app/shared-modules/global-api.service';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient,
    private globalApiService: GlobalApiService,
    private authService: AuthService
    ) { }

  getExcel(postObj:any): Observable<any> {
    const formData: FormData = new FormData();
    if (postObj.file) {
      formData.append('file', postObj.file, postObj.file.name);
    }
    formData.append('data', JSON.stringify(postObj));
    return this.http.post(this.globalApiService.getApiUrl() + '/branch/importExcel', formData)
      .pipe(catchError((e: any) => this.authService.getCheckError(e)));
  }
}
