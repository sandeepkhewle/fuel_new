import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'trends-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.css']
})
export class AppDataComponent implements OnInit {
updateDataFlag:boolean = false;
@Output() onActon = new EventEmitter<any>();
passObj:any={};
dataObj: any = {};

appData:any;
  openTrendsForm: boolean = false;
  constructor(
    public appDataService:AppDataService
  ) { }

  ngOnInit(): void {
    this.getAppData();
  }

  updateAppData(data:any, $element:any){
    this.updateDataFlag = true;
    this.passObj= data;
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  addAppData(){
    this.openTrendsForm = true;
  }

  createData(){
    this.passObj = {};
    this.openTrendsForm = true;
  }

  closeDialog(flag: any) {
    this.openTrendsForm = false;
    this.onActon.emit({ flag: flag, page: 'addTrends' });
  }

  onCardAction(event:any) {
    this.updateDataFlag = false;
    this.getAppData();
  }

  getAppData(){
    this.appDataService.getAppDataFun({}).subscribe(res => {
      if (res.status == 'Success') {
        this.appData = res.payload;        
      }
      else {
      }
    });
  }

}
