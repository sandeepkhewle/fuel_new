import { Component, OnInit, Input, EventEmitter, OnChanges, Output } from '@angular/core';
import { Router } from "@angular/router";
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'trends-send-notifications',
  templateUrl: './send-notifications.component.html',
  styleUrls: ['./send-notifications.component.css']
})
export class SendNotificationsComponent implements OnInit, OnChanges {
  @Input() sendCommunicationContact: any;
  @Output() onActon = new EventEmitter<any>()
  commObj: any = {};
  successMsg: any;
  overCharCount: any = 160;
  usedFlag: boolean = false;

  descriptionLength: any;
  calculateSMSCount: any;
  totalMsgSentCount: any;
  appIdArray: any = [
    {
      "name": "FUEL",
      "value": "fuel"
    }
  ];
  commCategory: any = [
    { catName: 'All Members', id: 1 },
    { catName: 'Active Members', id: 2 },
    { catName: 'Inactive Members', id: 3 }
  ];

  constructor(
    private notificationsService: NotificationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  ngOnChanges() { }

  smsLengthFun() {

    this.descriptionLength = 0;
    this.calculateSMSCount = 0;
    this.totalMsgSentCount = 0;
    this.overCharCount = 160;
    this.usedFlag = true;

    this.descriptionLength = this.commObj.message.length;
    if (this.descriptionLength >= 160) {
      this.calculateSMSCount = Math.floor(this.descriptionLength / 160);
      if ((this.descriptionLength % 160) > 0) {
        this.calculateSMSCount = this.calculateSMSCount + 1;
      }
      this.totalMsgSentCount = this.calculateSMSCount;
      this.overCharCount = 160 * (this.calculateSMSCount - 1);

      // this.totalMsgSentCount = this.calculateSMSCount * this.memberCount;
      // this.overCharCount = 160 * (this.calculateSMSCount-1);
    } else {
      this.calculateSMSCount = 1;
      // if (this.memberCount != 0) {
      this.totalMsgSentCount = this.calculateSMSCount;
      // this.totalMsgSentCount = this.calculateSMSCount * this.memberCount;
      // }else if(this.memberCount == 0){
      //   this.totalMsgSentCount = 0;
      // }

    }
  }

  sendMessage() {
    this.commObj.data = {};
    this.notificationsService.sendNotificationMsg(this.commObj).subscribe(res => {
      if (res.status == 'Success') {
        this.closeForm(false);
      }
      else {
      }
    });
  }

  closeForm(flag: boolean) {
    this.onActon.emit({ flag: flag, page: 'communication' });
  }
}
