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
export class AddTrendsComponent implements OnInit, OnChanges {
  @Input() InutDataObj: any;
  @Output() onActon = new EventEmitter<any>();
  trendsObj: any = {};
  status: any = 'Create'
  appIdArray: any = [
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
  appId2Array: any = [
    {
      "name": "BITUMEN",
      "value": "BITUMEN",
      "trendType": "bitumen"
    },
    {
      "name": "LPG",
      "value": "lpg"
    },
    {
      "name": "BITUMEN",
      "value": "bitumen"
    },
    {
      "name": "BITdgdfgUMEN",
      "value": "bitsdfsdumen"
    }

  ];
  timelineIdArray: any = [
    {
      "name": "Update Fortnight Product",
      "value": "ufp"
    },
    {
      "name": "Update Monthly Product",
      "value": "ump"
    }
  ];

  msdFlag: boolean = false;
  lpgFlag: boolean = false;
  bitumenFlag: boolean = false;
  updateFortFlag: boolean = false;
  updateMonthFlag: boolean = false;
  trendsUnitArray: any = [
    'KL', 'CYLINDER', 'MT'
  ];
  constructor(
    public trendsService: TrendsService
  ) { }

  ngOnInit(): void {
    if (this.InutDataObj.appId) {
      this.trendsObj = this.InutDataObj;
      this.status = this.InutDataObj.status;
      this.checkUpdateFields();
    } else {
      this.showUpdateFields();
    }
  }

  ngOnChanges() {
  }

  showUpdateFields() {
    this.updateFortFlag = false;
    this.updateMonthFlag = false;

    if (this.trendsObj.timelineId == 'ufp') {
      this.trendsObj = {};
      this.trendsObj.timelineId = 'ufp';
      this.updateFortFlag = true;
    }
    if (this.trendsObj.timelineId == 'ump') {
      this.trendsObj = {};
      this.trendsObj.timelineId = 'ump';
      this.updateMonthFlag = true;
    }
  }
  checkUpdateFields() {
    this.updateFortFlag = false;
    this.updateMonthFlag = false;

    if (this.trendsObj.timelineId == 'ufp') {
      // this.trendsObj={};
      this.trendsObj.timelineId = 'ufp';
      this.updateFortFlag = true;
    }
    if (this.trendsObj.timelineId == 'ump') {
      // this.trendsObj={};
      this.trendsObj.timelineId = 'ump';
      this.updateMonthFlag = true;
    }
  }

  showInputFields() {
    this.msdFlag = false;
    this.lpgFlag = false;
    this.bitumenFlag = false;


    if (this.trendsObj.appId == 'msd') {
      this.trendsObj = {};
      this.trendsObj.appId = 'msd';
      this.msdFlag = true;
    }
    if (this.trendsObj.appId == 'lpg') {
      this.trendsObj = {};
      this.trendsObj.appId = 'lpg';
      this.lpgFlag = true;
    }
    if (this.trendsObj.appId == 'bitumen') {
      this.trendsObj = {};
      this.trendsObj.appId = 'bitumen';
      this.bitumenFlag = true;
    }
  }

  checkInputFields() {
    this.msdFlag = false;
    this.lpgFlag = false;
    this.bitumenFlag = false;


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

  showInput1Fields() {
    this.msdFlag = false;
    this.lpgFlag = false;
    this.bitumenFlag = false;


    if (this.trendsObj.appId2 == 'msd') {
      this.trendsObj = {};
      this.trendsObj.appId2 = 'msd';
      this.msdFlag = true;
    }
    if (this.trendsObj.appId2 == 'lpg') {
      this.trendsObj = {};
      this.trendsObj.appId2 = 'lpg';
      this.lpgFlag = true;
    }
    if (this.trendsObj.appId2 == 'bitumen') {
      this.trendsObj = {};
      this.trendsObj.appId2 = 'bitumen';
      this.bitumenFlag = true;
    }
  }

  checkInput1Fields() {
    this.msdFlag = false;
    this.lpgFlag = false;
    this.bitumenFlag = false;


    if (this.trendsObj.appId2 == 'msd') {
      // this.trendsObj={};
      this.trendsObj.appId2 = 'msd';
      this.msdFlag = true;
    }
    if (this.trendsObj.appId2 == 'lpg') {
      // this.trendsObj={};
      this.trendsObj.appId2 = 'lpg';
      this.lpgFlag = true;
    }
    if (this.trendsObj.appId2 == 'bitumen') {
      // this.trendsObj={};
      this.trendsObj.appId2 = 'bitumen';
      this.bitumenFlag = true;
    }
  }


  closeDialog(flag: any) {
    this.onActon.emit({ flag: flag, page: 'addTrends' });
  }

  createTrend() {
    if (this.InutDataObj.appId) {
      this.trendsService.updateTrendsFun(this.trendsObj).subscribe(res => {
        if (res.status == 'Success') {
          this.closeDialog('cancel');
        }
        else {
        }
      });
    } else {
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
