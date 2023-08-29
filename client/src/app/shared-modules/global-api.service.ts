import { Injectable } from '@angular/core';
@Injectable()
export class GlobalApiService {
  public API_SERVER_PORTSTRING: string = (window.location.hostname === 'localhost' || window.location.hostname === '65.0.75.20') ? ':4108' : '';
  public SOCKET_SERVER_PORTSTRING: string = (window.location.hostname === 'localhost' || window.location.hostname === '65.0.75.20') ? ':4108' : '';

  // public CUSTOM_API = 'http://65.0.75.20:4108';
  public CUSTOM_API = "http://localhost:4108";
  // public CUSTOM_API = 'https://api.fuelpricealert.in/';


  public getApiUrl(): string {
    let urlString: string = `${window.location.protocol}//${window.location.hostname}${this.API_SERVER_PORTSTRING}`;
    console.log("getApiUrl", urlString);
    return urlString;
    // return `${window.location.protocol}//${this.CUSTOM_API}${this.API_SERVER_PORTSTRING}`;
    // return this.CUSTOM_API;
  }

  public getSocketUrl(): string {
    // const socketUrl: string = `${window.location.protocol}//${window.location.hostname}${this.API_SERVER_PORTSTRING}`;
    // const socketUrl: string = `http//${window.location.hostname}${this.API_SERVER_PORTSTRING}`;
    const socketUrl: string = this.CUSTOM_API;
    console.log("getSocketUrl", socketUrl);
    return `${socketUrl}`
  }
}