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
  selector: 'trends-update-trends',
  templateUrl: './update-trends.component.html',
  styleUrls: ['./update-trends.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class UpdateTrendsComponent implements OnInit {

  @Input() InutDataObj: any;
  @Output() onActon = new EventEmitter<any>();
  updateTrendsObj: any = {};
  status: any = 'Update'
  monthlyArray: any = [
    {
      "name": "LPG/GAS CYL (DOM)",
      "value": "LPG/GAS CYL (DOM)",
      "trendType": "lpg"
    },
    {
      "name": "MTO",
      "value": "MTO",
      "trendType": "mto"
    },
    {
      "name": "HEXANE",
      "value": "HEXANE",
      "trendType": "hexane"
    },
    {
      "name": "KEROSENE",
      "value": "KEROSENE",
      "trendType": "kerosene"
    },
    {
      "name": "LPG/GAS CYL (NON-DOM)",
      "value": "LPG/GAS CYL (NON-DOM)",
      "trendType": "lpg"
    }
  ];
  fortnightArray: any = [
    {
      "name": "BITUMEN",
      "value": "BITUMEN",
      "trendType": "bitumen/fo/hsd/ldo"
    },
    {
      "name": "FURNACE OIL",
      "value": "FURNACE OIL",
      "trendType": "bitumen/fo/hsd/ldo"
    },
    {
      "name": "HSD(INSTITUTIONAL)",
      "value": "HSD(INSTITUTIONAL)",
      "trendType": "bitumen/fo/hsd/ldo"
    },
    {
      "name": "LDO",
      "value": "LDO",
      "trendType": "bitumen/fo/hsd/ldo"
    }

  ];
  trendNames: any = [
    {
      "name": "Fortnight Product",
      "value": "fortnight"
    },
    {
      "name": "Monthly Product",
      "value": "monthly"
    }
  ];
  trendArray: any = [
    {
      "name": "+",
      "value": "+"
    },
    {
      "name": "-",
      "value": "-"
    }
  ];

  msdFlag: boolean = false;
  lpgFlag: boolean = false;
  bitumenFlag: boolean = false;
  updateFortFlag: boolean = false;
  updateMonthFlag: boolean = false;
  trendsUnitArray: any = [
    'KL', 'CYL', 'MT'
  ];
  constructor(
    public trendsService: TrendsService
  ) { }

  ngOnInit(): void {
    console.log(this.InutDataObj, "InutDataObj----update");
    this.updateTrendsObj = this.InutDataObj;
    this.status = this.InutDataObj.status;
    this.checkUpdateFields();
  }

  ngOnChanges() {
  }

  showUpdateFields() {
    this.updateFortFlag = false;
    this.updateMonthFlag = false;
    if (this.updateTrendsObj.trendName == 'fortnight') {
      this.setFortFlied()
      this.updateFortFlag = true;
    }
    if (this.updateTrendsObj.trendName == 'monthly') {
      this.setMonthlyFlied()
      this.updateMonthFlag = true;
    }

  }
  setFortFlied() {
    // this.updateTrendsObj.trendType = "bitumen/fo/hsd/ldo"
    this.updateTrendsObj.bitumen = {
      productName: "BITUMEN",
      trendValue: 0,
      trendUnite: 'MT',
      trend: "+",
      trendType: "bitumen/fo/hsd/ldo"
    }
    this.updateTrendsObj.furanceOil = {
      productName: "FURNACE OIL",
      trendValue: 0,
      trendUnite: 'MT',
      trend: "+",
      trendType: "bitumen/fo/hsd/ldo"
    }
    this.updateTrendsObj.ldo = {
      productName: "LDO",
      trendValue: 0,
      trendUnite: 'KL',
      trend: "+",
      trendType: "bitumen/fo/hsd/ldo"
    }
    this.updateTrendsObj.hsd = {
      productName: "HSD(INSTITUTIONAL)",
      trendValue: 0,
      trendUnite: 'KL',
      trend: "+",
      trendType: "bitumen/fo/hsd/ldo"
    }
  }
  setMonthlyFlied() {
    // this.updateTrendsObj.trendType = "bitumen/fo/hsd/ldo"
    this.updateTrendsObj.lpgDoc = {
      productName: "LPG/GAS CYL (DOM)",
      trendValue: 0,
      trendUnite: 'CYL',
      trend: "+",
      trendType: "lpg"
    }
    this.updateTrendsObj.mto = {
      productName: "MTO",
      trendValue: 0,
      trendUnite: 'KL',
      trend: "+",
      trendType: "mto"
    }
    this.updateTrendsObj.hexane = {
      productName: "HEXANE",
      trendValue: 0,
      trendUnite: 'KL',
      trend: "+",
      trendType: "hexane"
    }
    this.updateTrendsObj.kerosene = {
      productName: "KEROSENE",
      trendValue: 0,
      trendUnite: 'KL',
      trend: "+",
      trendType: "kerosene"
    }
    this.updateTrendsObj.lpgNonDoc = {
      productName: "LPG/GAS CYL (NON-DOM)",
      trendValue: 0,
      trendUnite: 'CYL',
      trend: "+",
      trendType: "lpg"
    }
  }
  checkUpdateFields() {
    this.updateFortFlag = false;
    this.updateMonthFlag = false;
    if (this.updateTrendsObj.trendName == 'fortnight') this.updateFortFlag = true;
    if (this.updateTrendsObj.trendName == 'monthly') this.updateMonthFlag = true;
  }
  showInputFields(data: any) {
    let selectedArray = [];
    if (this.updateFortFlag == true) selectedArray = this.fortnightArray
    if (this.updateMonthFlag == true) selectedArray = this.monthlyArray
    let obj = selectedArray.find((o: any) => o.value === data)
    this.updateTrendsObj.trendType = obj.trendType;
    this.updateTrendsObj.productName = obj.value;
  }
  checkInputFields() {
    this.msdFlag = false;
    this.lpgFlag = false;
    this.bitumenFlag = false;


    if (this.updateTrendsObj.appId == 'msd') {
      // this.updateTrendsObj={};
      this.updateTrendsObj.appId = 'msd';
      this.msdFlag = true;
    }
    if (this.updateTrendsObj.appId == 'lpg') {
      // this.updateTrendsObj={};
      this.updateTrendsObj.appId = 'lpg';
      this.lpgFlag = true;
    }
    if (this.updateTrendsObj.appId == 'bitumen') {
      // this.updateTrendsObj={};
      this.updateTrendsObj.appId = 'bitumen';
      this.bitumenFlag = true;
    }
  }
  showInput1Fields() {
    this.msdFlag = false;
    this.lpgFlag = false;
    this.bitumenFlag = false;


    if (this.updateTrendsObj.appId2 == 'msd') {
      this.updateTrendsObj = {};
      this.updateTrendsObj.appId2 = 'msd';
      this.msdFlag = true;
    }
    if (this.updateTrendsObj.appId2 == 'lpg') {
      this.updateTrendsObj = {};
      this.updateTrendsObj.appId2 = 'lpg';
      this.lpgFlag = true;
    }
    if (this.updateTrendsObj.appId2 == 'bitumen') {
      this.updateTrendsObj = {};
      this.updateTrendsObj.appId2 = 'bitumen';
      this.bitumenFlag = true;
    }
  }

  checkInput1Fields() {
    this.msdFlag = false;
    this.lpgFlag = false;
    this.bitumenFlag = false;


    if (this.updateTrendsObj.appId2 == 'msd') {
      // this.updateTrendsObj={};
      this.updateTrendsObj.appId2 = 'msd';
      this.msdFlag = true;
    }
    if (this.updateTrendsObj.appId2 == 'lpg') {
      // this.updateTrendsObj={};
      this.updateTrendsObj.appId2 = 'lpg';
      this.lpgFlag = true;
    }
    if (this.updateTrendsObj.appId2 == 'bitumen') {
      // this.updateTrendsObj={};
      this.updateTrendsObj.appId2 = 'bitumen';
      this.bitumenFlag = true;
    }
  }


  closeDialog(flag: any) {
    this.onActon.emit({ flag: flag, page: 'addTrends' });
  }

  updateTrend() {
    if (this.InutDataObj.trendsId) {
      this.trendsService.updateTrendsFun(this.updateTrendsObj).subscribe(res => {
        if (res.status == 'Success') {
          this.closeDialog('cancel');
        }
        else {
        }
      });
    }
  }



}
