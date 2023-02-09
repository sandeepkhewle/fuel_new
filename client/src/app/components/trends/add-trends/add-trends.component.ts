import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';


import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import { TrendsService } from '../trends.service';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD MMM YYYY',
  },
  display: {
    dateInput: 'DD MMM YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'DD MMM YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'trends-add-trends',
  templateUrl: './add-trends.component.html',
  styleUrls: ['./add-trends.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class AddTrendsComponent implements OnInit, OnChanges  {
  @Input() InutDataObj:any;
  @Output() onActon = new EventEmitter<any>();
  trendsObj:any={};
  status:any = 'Create'
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

  msdFlag:boolean=false;
  lpgFlag:boolean=false;
  bitumenFlag:boolean=false;
  trendsUnitArray:any=[
    'KL', 'CYLINDER', 'MT' 
  ];
  constructor(
    public trendsService:TrendsService
  ) { }

  ngOnInit(): void {
    if (this.InutDataObj.appId) {
      this.trendsObj = this.InutDataObj;
      this.status = this.InutDataObj.status;
      this.checkInputFields();
    }else{
      this.showInputFields();
    }
  }

  ngOnChanges() {
  }

  showInputFields(){
    this.msdFlag=false;
    this.lpgFlag=false;
    this.bitumenFlag=false;
  

    if (this.trendsObj.appId == 'msd') {
      this.trendsObj={};
      this.trendsObj.appId = 'msd';
      this.msdFlag = true;
    }
    if (this.trendsObj.appId == 'lpg') {
      this.trendsObj={};
      this.trendsObj.appId = 'lpg';
      this.lpgFlag = true;
    }
    if (this.trendsObj.appId == 'bitumen') {
      this.trendsObj={};
      this.trendsObj.appId = 'bitumen';
      this.bitumenFlag = true;
    }
  }

  checkInputFields(){
    this.msdFlag=false;
    this.lpgFlag=false;
    this.bitumenFlag=false;
  

    if (this.trendsObj.appId == 'msd') {
      // this.trendsObj={};
      this.trendsObj.appId = 'msd';
      this.msdFlag = true;
    }
    if (this.trendsObj.appId == 'lpg') {
      // this.trendsObj={};
      this.trendsObj.appId = 'lpg';
      this.lpgFlag = true;
    }
    if (this.trendsObj.appId == 'bitumen') {
      // this.trendsObj={};
      this.trendsObj.appId = 'bitumen';
      this.bitumenFlag = true;
    }
  }

  
  closeDialog(flag:any) {
    this.onActon.emit({ flag: flag, page: 'addTrends' });
  }

  createTrend(){
    if (this.InutDataObj.appId) {
      this.trendsService.updateTrendsFun(this.trendsObj).subscribe(res => {
        if (res.status == 'Success') {
          this.closeDialog('cancel');
        }
        else {
        }
      });
    }else{
      this.trendsService.createTrendsFun(this.trendsObj).subscribe(res => {
        if (res.status == 'Success') {
          this.closeDialog('cancel');
        }
        else {
        }
      });
    } 
  }


}
