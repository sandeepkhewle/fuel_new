import { Component, OnInit } from '@angular/core';
import { SubscriptionsService } from '../subscriptions.service';

@Component({
  selector: 'trends-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  loader: boolean = false;
  assignPlanFlag:boolean = false;
  deactiveMemberFlag:boolean = false;
  sendData:any;
  postObj: any = {
    page: 'subscription'
  };
  constructor(
    private subscriptionsService: SubscriptionsService
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
    this.deactiveMemberFlag = false;
    this.assignPlanFlag = false;
    if (event.name == 'assignFreePlan') {
      this.sendData = event.rowData;
      this.assignPlanFlag = true;
    }
    if (event.name == 'deactiveMember') {
      this.sendData = event.rowData;
      console.log('send data', this.sendData);
      
      this.deactiveMemberFlag = true;
    }
    if (event.name == "downloadInvoice") {
      if (event.rowData.link) {
        window.open(event.rowData.link, "_blank");
      } else {
        // this.snackBar.open('No invoice generated for this record !', '', { duration: 2000 });
      }
    }
    if (event.name == "sendInvoice") {
      console.log("Hello123s",event.rowData.orderId);
      this.subscriptionsService.sendInvoice({'orderId': event.rowData.orderId}).subscribe(res => {
        if (res.statusCode == '001') {
          console.log("Hello",event.rowData.orderId);
          
        }
        else {
        }
      });
    }
  }

  onCardAction(event:any) {
    this.assignPlanFlag = false;
  }

  deactivateMember(){

  }
  closeDialog(flag:any){
    this.deactiveMemberFlag = false;
  }

}
