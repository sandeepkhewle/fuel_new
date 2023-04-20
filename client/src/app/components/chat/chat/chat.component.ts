import { Component, OnInit, HostListener } from '@angular/core';
import openSocket from 'socket.io-client';
import { GlobalApiService } from 'src/app/shared-modules/global-api.service';
import { ChatService } from '../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'trends-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatWindowStatus: boolean = false;
  typeMessage: any = { message: "hi..." };
  lastMessageFrom: any;
  chatId: any;
  chatName: any;
  localData: any;
  teacherName: any;
  socket: any;
  entityId: any;
  postObj: any = {
    page: 'chat'
  };
  userDetails: any;
  currentuserId: any;
  allChatArray: any;

  constructor(
    private chatService: ChatService,
    public router: Router,
    private globalApiService: GlobalApiService
  ) {
    this.userDetails = localStorage.getItem('userDetails');
  }

  ngOnInit(): void {
    // this.start();
    this.applyFilters();
    // this.openChatWindow(event);
  }

  applyFilters() {
    this.postObj = Object.assign({}, this.postObj)
  }

  onRowsSelected(event: any) {

  }

  onRowsSelectedSub(event: any) {

  }

  onRowClick(event: any) {

  }


  onModalAction(event: any) {
    console.log('event', event);
    if (event.name == "openChat") {
      this.currentuserId = event.rowData.userId;
      this.start();
      this.chatWindowStatus = true;
    }
  }

  start = () => {
    this.socket = openSocket(this.globalApiService.getApiUrl());
    this.socket.on('message', this.appendChatMessage);

    this.socket.emit("adminSocket", { adminUserId: JSON.parse(this.userDetails).adminUserId });

    // console.log('admin socket----------2-');

    // to send userId & get chat data from server for user
    this.socket.emit("getChat", { userId: this.currentuserId }, this.appendChatMessage);
  }

  callbackfunct = (data: any) => {
    console.log("callbackfunct data", data);
  }

  openChatWindow = (event: any) => {
    // console.log("event", event);
    this.chatWindowStatus = true;
    this.chatId = event.chatId;
    this.chatName = event.chatName;
    this.socket.emit("getChat", { chatId: this.chatId, entityId: this.entityId }, this.callLast);
  }

  callLast = (data: any) => {
    // console.log('data', data);
    data.data.forEach((element: any) => {
      this.appendChatMessage(element);
    });
    console.log('data', data);

  }

  // send chat message
  sendMessage = () => {
    // console.log('------sendMessage-----');
    if (this.typeMessage.message != null) {
      this.typeMessage.userId = this.currentuserId;
      this.typeMessage;
      this.socket.emit("reply", { userId: this.currentuserId, message: this.typeMessage.message });
      // to send userId & get chat data from server for user

      // this.appendChatMessage(this.typeMessage);
      // this.typeMessage = {};
    }
  }

  adminFunction = (data: any) => {

  }

  getCurrentMsg = (data: any) => {
    this.allChatArray.push(data);
  }

  // ctreae chat list in chat div - append new messages below
  appendChatMessage = (data: any) => {
    console.log('------data-----', data);
    if (data && Array.isArray(data)) {
      this.allChatArray = data;
    } else {
      this.allChatArray.push(data);
    }
    console.log('------this.allChatArray-----', this.allChatArray);
  }

  closeDialog(flag: any) {
    this.chatWindowStatus = false;
    this.typeMessage ={ message: "hi..." };
  }


}
