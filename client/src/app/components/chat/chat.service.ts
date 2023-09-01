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


  initializeSocketIO(adminUserId: any) {
    // console.log('initializeSocketIO', this.url);
    this.socket = socketIO.connect(this.url, { transports: ['websocket'] });
    this.socket.emit("adminSocket", { adminUserId: adminUserId })
  }

  public sendMessage(message: any): any {
    return new Observable<any>(observer => {
      this.socket.emit('reply', message, (data: any) => {
        observer.next(data)
      });
    });
  }

  public getChat(message: any): any {
    return new Observable<any>(observer => {
      this.socket.emit('getChat', message, (data: any) => {
        // console.log("getChat", data)
        observer.next(data)
      });
    });
  }

  public notificationConnection(message: any): void {
    this.socket.emit('notificationConnection', message);
  }

  getMessages(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('chatMessage', (data: any) => {
        // console.log("Received message from Websocket Server", data)
        observer.next(data);
      })
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
