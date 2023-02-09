import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';

@Component({
  selector: 'trends-app-data',
  templateUrl: './app-data.component.html',
  styleUrls: ['./app-data.component.css']
})
export class AppDataComponent implements OnInit {
updateDataFlag:boolean = false;
passObj:any={};

appData:any;
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
