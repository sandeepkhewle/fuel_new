import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as socketIO from 'socket.io-client';
import { GlobalApiService } from 'src/app/shared-modules/global-api.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = this.globalService.getSocketUrl();
  private socket: any;
  constructor(
    private globalService: GlobalApiService
  ) { }


  initializeSocketIO() {
    this.socket = socketIO.connect(this.url, { transports: ['websocket'] });
  }

  public sendMessage(message: any): void {
    this.socket.emit('new-message', message);
  }

  public notificationConnection(message: any): void {
    this.socket.emit('notificationConnection', message);
  }

  getMessages(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('reply', (data: any) =>
        observer.next(data));
    });
  }

  getAdds(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('new-add', (data: any) =>
        observer.next(data));
    });
  }
  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

}
