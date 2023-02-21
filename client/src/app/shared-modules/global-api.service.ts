import { Injectable } from '@angular/core';
@Injectable()
export class GlobalApiService {
  public API_SERVER_PORTSTRING: string = (window.location.hostname === 'localhost') ? ':4108' : '';
  public SOCKET_SERVER_PORTSTRING: string = (window.location.hostname === 'localhost') ? ':4108' : '';

  // public CUSTOM_API = 'https://staging.fytrack.com';
  public CUSTOM_API = '192.168.1.115';
  // public VAPID_PUBLIC_KEY: 'BFApHBUu3hSiH_ODr5eSQe-3eFOBCaid10ijk4P8rR5XP1yIxCQKUUUk0Ddd_aw3-MpN1OcARGVAkafY6ECHRO8';
  // public VAPID_PRIVATE_KEY: 'awb1s-_I_9zCARLogaryPD7mru1FIJE8KIgT8dQhjPI';

  public getApiUrl(): string {
    // NOTE: please do not delete
    return `${window.location.protocol}//${window.location.hostname}${this.API_SERVER_PORTSTRING}`;
    // return `${window.location.protocol}//${this.CUSTOM_API}${this.API_SERVER_PORTSTRING}`;
  }
  public getSocketUrl(): string {
    const socketUrl: string = window.location.protocol + '//' + window.location.hostname + this.SOCKET_SERVER_PORTSTRING
    return `${socketUrl}`
  }
}