import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AppDataService } from '../app-data.service';


@Component({
  selector: 'trends-update-app-data',
  templateUrl: './update-app-data.component.html',
  styleUrls: ['./update-app-data.component.css']
})
export class UpdateAppDataComponent implements OnInit, OnChanges {
  @Input() InutDataObj:any;
  @Output() onActon = new EventEmitter<any>();
  updateObj:any={};
  appIdArray:any=[
  {
      "name": "MS-HSD",
      "value": "msd"
  },
  {
      "name": "LPG",
      "value": "lpg"
  },
  {
      "name": "BITUMEN",
      "value": "bitumen"
  }
  ];

  constructor(
    public appDataService:AppDataService
  ) { }

  ngOnInit(): void {
    if (this.InutDataObj.appId) {
      this.updateObj = this.InutDataObj;
    }
  }
  ngOnChanges() {
  }
  closeDialog(flag:any) {
    this.onActon.emit({ flag: flag, page: 'updateAppData' });
  }
  showInputFields(){

  }
  updateAppData(){
    this.appDataService.updateAppDataFun(this.updateObj).subscribe(res => {
      if (res.status == 'Success') {
        this.closeDialog(false);
      }
      else {
      }
    });
  }
}
