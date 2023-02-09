import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PWAService } from './shared-modules/services/pwa-updates.service';
import { SwUpdate, SwPush } from "@angular/service-worker";
import { GlobalApiService } from './shared-modules/global-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  isLive = true;
  loading = false;
  lat: number = 0;
  lng: number = 0;
  constructor(
    public router: Router,
    public pwa: PWAService,
    private swUpdate: SwUpdate,
    private swPush: SwPush,
    private globalService: GlobalApiService,
    // private newsletterService: NewsletterServic
  ) {
    // for check the internet connection
    setInterval(() => {
      this.checkInternetConnetion();
    }, 1);
    this.pwa.checkForUpdate();
  }

  checkInternetConnetion() {
    this.isLive = navigator.onLine;
  }

  // Get Current Location Coordinates
  getCurrentLoaction() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
  }
}
