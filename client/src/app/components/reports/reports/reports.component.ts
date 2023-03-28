import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';

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

export const MY_FORMATS1 = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'trends-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS1 },
  ],
})
export class ReportsComponent implements OnInit {

  date = new FormControl(moment());
  today: any;
  reportsObj: any = {};
  reportList: any;
  loader: any = false;
  // today: any;
  // reportsObj: any = {};
  // reportList: any;
  selectedReportName: any;
  reportsSideData: any;
  postObj: any = {
    filters: {}
  };
  settingsRestrictions: any;
  restrictionFlag: boolean = false;
  isRestricted: boolean = true;
  constructor(
    private reportsService: ReportsService,
    public router: Router
  ) {
    this.today = new Date();
  }

  // setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>, filter) {
  //   console.log("-----", normalizedMonthAndYear, datepicker, filter);
  //   const ctrlValue = this.date.value!;
  //   ctrlValue.month(normalizedMonthAndYear.month());
  //   ctrlValue.year(normalizedMonthAndYear.year());
  //   this.date.setValue(ctrlValue);
  //   datepicker.close();
  //   this.postObj.filters[filter.model] = [`${normalizedMonthAndYear.month()} ${normalizedMonthAndYear.year()}`];
  // }

  ngOnInit(): void {
    // this.settingsRestrictions = JSON.parse(localStorage.getItem('settings'));
    this.getReportListFun();
  }

  getReportListFun() {
    this.reportsService.getReportList({}).subscribe(res => {
      if (res && res.data && res.data.length > 0) {
        this.reportList = res.data;
        this.reportsSideData = this.reportList[0];
        // console.log('this.reportsSideData', this.reportsSideData);
        this.selectedReportName = this.reportsSideData.name;
      }
    });
  }

  getReport(page:any, data:any) {
    console.log("data", data);
    let sendObj = {
      "filters": { ...(data.filters), ...(this.postObj.filters) },
      "page": data.table
    }
    console.log("sendObj", sendObj);
    this.reportsService.getReport(sendObj).subscribe(res => {
      this.postObj = {
        filters: {}
      };
    });
  }

  // for filters
  // onChangeFilter(param1, model, event) {
  // }

  // openDetails(data) {
  //   let pageMap = { 'excelMembers': "91", 'subscription': "92", 'enquiryExcel': "93", 'staff': "94", 'trainer': "95", 'accounts': "96", 'getMemberPayment': "97", 'expense': "98" }
  //   let pageNo = pageMap[data.table];
  //   if (this.settingsRestrictions && this.settingsRestrictions.includes(pageNo)) {
  //     this.isRestricted = false;
  //   } else this.isRestricted = true;
  //   this.reportsSideData = data;
  //   this.selectedReportName = this.reportsSideData.name;
  // }

  restrict() {
    this.restrictionFlag = true;
  }

  onCardAction() {
    this.restrictionFlag = false;
  }

}
