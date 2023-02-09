import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'trends-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  postObj:any={
    page :'notifications'
  }
  sendSmsFlag:boolean = false;
  commObjToSend:any={};
  constructor(
    public notificationsService:NotificationsService,
  ) { }

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters() {
    this.postObj = Object.assign({}, this.postObj)
  }

  
  onRowsSelected(event:any){

  }

  onRowsSelectedSub(event:any){

  }

  onRowClick(event:any){

  }

  onModalAction(event:any){

  }

  addNotifications(){
    this.sendSmsFlag = true;
  }

  onCardAction($event:any) {
      this.sendSmsFlag = false;      
      this.postObj={
        page :'notifications'
      }
  }

}
