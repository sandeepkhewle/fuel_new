import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';

@Component({
  selector: 'trends-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {
  postObj:any = {
    page : 'device'
  }
  cdDeviceFlag:boolean = false;
  currentRowData:any;
  constructor(
    public deviceService: DeviceService
  ) { }

  ngOnInit(): void {
    this.applyFilters();
  }
  
  applyFilters() {
    this.postObj = Object.assign({}, this.postObj)
  }

  onCardAction(event:any) {
  }

  onRowsSelected(event:any){

  }

  onRowsSelectedSub(event:any){

  }

  onRowClick(event:any){
    console.log('event', event);
    this.currentRowData = event;
    this.cdDeviceFlag = true;
  }

  changeDeviceStatus(data:any, status:any){  
    let obj:any ={
      appId: data.appId,
      phoneNo: data.phoneNo,
      status: status
    }     
    this.deviceService.changeStatus({}).subscribe(res => {
      if (res.status == 'Success') {
        this.postObj = {
          page : 'device'
        }
        this.cdDeviceFlag = false;
      }
      else {
      }
    }); 
  }
  
  onModalAction(event:any){

  }

  closeBox(){
    this.cdDeviceFlag = false;
  }

}
