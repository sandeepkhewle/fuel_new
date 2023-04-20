import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class PWAService {

    constructor(private swUpdate: SwUpdate) {
    }
    checkForUpdate() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(event => {
                if (confirm('New version available. Load New Version')) {
                    window.location.reload();
                }
            });
        }
    }
    promptEvent(): void {
        window.addEventListener('beforeinstallprompt', event => {
            return event;
        });
    }
}
