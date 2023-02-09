import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FiltersService } from '../filters.service';
import { FormControl } from '@angular/forms';

// import { PageLengths } from 'src/app/components/members/data';
import { MediaMatcher } from '@angular/cdk/layout';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { saveAs } from 'file-saver';
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
  selector: 'trends-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class FiltersComponent implements OnInit {
  @Input() inputFilterObj: any;
  // @Input() countsObj: any;
  @Input() attributeObj: any;
  @Output() onFilter = new EventEmitter<any>();

  filtersArray: any = [];
  pageLengths: any;
  isMobile = false;
  deviceInfo: any;
  isSmallScreen = false;
  postObj: any = {
    filters: {}
  };
  chipsObj: any = {}
  pageLength: any;
  searchStr: any;
  filterChips: any = [];
  isShow: boolean = true;
  loader2: any = {};
  columns: any = [];
  hideColumns: any = [];
  fileName = '...';
  userDetails: any;
  restrictionFlag: boolean = false;
  settingsRestrictions: any;
  isRestricted: boolean = true;

  constructor(
    private filterService: FiltersService,
    private media: MediaMatcher,
    private deviceDetector: DeviceDetectorService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    // window onload
    window.onload = (e: any) => {
      this.epicFunction();
      this.isSmallScreen = this.media.matchMedia('(max-width: 991px)').matches;
    };
    // window onresize
    window.onresize = (e: any) => {
      this.epicFunction();
      this.isSmallScreen = this.media.matchMedia('(max-width: 991px)').matches;
    };
    this.isSmallScreen = this.media.matchMedia('(max-width: 991px)').matches;
    this.epicFunction();
  }

  ngOnInit() {
    this.postObj.search = this.inputFilterObj.search;
    this.postObj.filters = this.inputFilterObj.filters;
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    this.settingsRestrictions = JSON.parse(localStorage.getItem('settings') || '{}');
    console.log('this.inputFilterObj', this.inputFilterObj);
    // console.log('this.countsObj--', this.countsObj);
    console.log('attributeObj--', this.attributeObj);

    this.getFilters();
  }

  epicFunction() {
    this.deviceInfo = this.deviceDetector.getDeviceInfo();
    this.isMobile = this.deviceDetector.isMobile();
  }

  getFilters() {
    // console.log('this.isRestricted', this.isRestricted);
    const postBody = {
      page: this.inputFilterObj.page
    }
    let pageMap = { 'members': "91", 'subscription': "92", 'enquiry': "93", 'staff': "94", 'trainer': "95", 'accounts': "96", 'collection': "97", 'expense': "98", 'communication': "99", 'equipment': "100" }
    // let pageNo = pageMap[this.inputFilterObj.page];
    // console.log('pageNo', pageNo);
    // console.log('this.settingsRestrictions', this.settingsRestrictions);
    // console.log('settingsRestrictions.includes(pageNo)', this.settingsRestrictions.includes(pageNo));

    // if (this.settingsRestrictions && this.settingsRestrictions.includes(pageNo)) {
    //   // console.log('inside if');
    //   this.isRestricted = false;
    //   // console.log('this.isRestricted', this.isRestricted);
    // }

    this.filterService.getFilters(postBody).subscribe(res => {
      if (res && res.Status == 'Success') {
        if (res.data && res.data.length > 0) {
          this.filtersArray = JSON.parse(JSON.stringify(res.data));
          this.displayChips(JSON.stringify(this.postObj.filters));
        }
        this.pageLengths = this.filtersArray[0].options;
        if (this.inputFilterObj.limit)
          this.pageLength = this.inputFilterObj.limit;
        else
          this.pageLength = this.pageLengths[0].value;
      }
    });
  }

  applyPageLength(event: any) {
    this.onFilter.emit({ pagelength: event });
  }

  downloadExcel() {
    const postBody = this.inputFilterObj;
    this.filterService.download(postBody).subscribe((res: any) => {
      
    });
  }

  applyFilters() {
    this.postObj = Object.assign({}, this.postObj);
    this.onFilter.emit({ filters: this.postObj });
    this.displayChips(JSON.stringify(this.postObj.filters));
    const queryObj = {
      data: JSON.stringify(this.inputFilterObj)
    }
    let urlToAdd = (this.router.url.includes('?')) ? this.router.url.split('?')[0] : this.router.url;
    this.router.navigate([urlToAdd], { queryParams: queryObj });
  }

  clearFilters() {
    this.onFilter.emit('clearfilters');
    this.filterChips = [];
    this.postObj.filters = {};
    this.pageLength = this.pageLengths[0].value;
  }

  // for filters
  onChangeFilter(param1: any, model: any, event: any) {
  }

  onSearch(event: any) {
    if (event.target.value) {
      this.onFilter.emit({ search: event.target.value })
      this.inputFilterObj.search = event.target.value;
    } else {
      this.onFilter.emit({ search: this.postObj.search })
      this.inputFilterObj.search = this.postObj.search;
    }
    const queryObj = {
      data: JSON.stringify(this.inputFilterObj)
    }
    let urlToAdd = (this.router.url.includes('?')) ? this.router.url.split('?')[0] : this.router.url;
    this.router.navigate([urlToAdd], { queryParams: queryObj });

  }

  clearSearch(event: any) {
    this.onFilter.emit('clearSearch');
    this.postObj.search = '';
    // this.clearFilters();
  }

  displayChips(chipObj: any) {
    this.filterChips = [];
    this.chipsObj = JSON.parse(chipObj);
    if (this.filtersArray && this.filtersArray.length > 0) {
      for (const key in this.chipsObj) {
        if (key) {
          let optDetails = [];
          const filteredModel = this.filtersArray.find(
            (object: any) => object.model === key
          );
          if (typeof this.chipsObj[key] === 'string' && filteredModel) {
            this.filterChips.push({
              name: filteredModel.name,
              display: undefined,
              value: this.chipsObj[key],
              model: filteredModel.model,
              type: filteredModel.type,
              nonRemovable: filteredModel.nonRemovable
            });
          } else if (this.chipsObj[key].constructor === Array) {
            if (filteredModel && filteredModel.options) {
              for (let i = 0; i < this.chipsObj[key].length; i++) {
                let resultObj = [];
                resultObj = filteredModel.options.find((object: any) => {
                  if (filteredModel.value) {
                    return (
                      this.chipsObj[key][i] === object[filteredModel.value]
                    );
                  } else {
                    return this.chipsObj[key][i] === object;
                  }
                });
                optDetails.push(resultObj);
              }
            }
            for (let j = 0; j < optDetails.length; j++) {
              if (filteredModel && optDetails[j] && optDetails[j][filteredModel.value]) {
                this.filterChips.push({
                  name: filteredModel.name,
                  display: optDetails[j][filteredModel.display],
                  value: optDetails[j][filteredModel.value],
                  model: filteredModel.model,
                  type: filteredModel.type,
                  nonRemovable: filteredModel.nonRemovable
                });
              } else if (filteredModel) {
                this.filterChips.push({
                  name: filteredModel.name,
                  display: undefined,
                  value: optDetails[j],
                  model: filteredModel.model,
                  type: filteredModel.type,
                  nonRemovable: filteredModel.nonRemovable
                });
              }
            }
          }
        }
      }
    }
  }

  removeAccountsFilter(obj: any) {
    if (this.chipsObj[obj.model].constructor === Array) {
      const index = this.chipsObj[obj.model].indexOf(obj.value);
      if (index > -1) {
        this.chipsObj[obj.model].splice(index, 1);
      }
    } else {
      this.chipsObj[obj.model] = undefined;
      // this.clearFilters();
    }
    this.postObj.filters = this.chipsObj;
    this.applyFilters();

  }

  getAttributes() {
    // console.log(this.attributeObj);
    this.isShow = false;
    if (this.attributeObj && this.attributeObj.attributeList) {
      // if (this.attributeObj.attributeList.lastIndexOf()) {

      // }
      // console.log("---",this.attributeObj.attributeList.lastIndexOf());

      this.columns = this.attributeObj.attributeList;
      // console.log("lastIndex",this.columns.lastIndexOf());

      this.columns.forEach((element: any) => {
        this.loader2[element.name] = true;
      });
      // console.log("input Object----:", this.columns);
      let postObj = {
        'page': this.attributeObj.page
      };
      this.filterService.columnsData(postObj).subscribe(res => {
        // console.log("new Data", res.data);
        if (res.data && res.data.columnArray) this.hideColumns = res.data.columnArray;
        this.hideColumns.forEach((element: any) => {
          this.loader2[element] = false;
        });

      })
    }
  }

  checkBox(columnName: any) {
    if (this.hideColumns.indexOf(columnName) > -1) return false
    else {
      return true;
    }
  }

  onChecked(event: any) {
    // console.log(event);
    let eventIndex = this.hideColumns.indexOf(event)
    if (eventIndex > -1) {
      this.hideColumns.splice(eventIndex, 1)
      this.loader2[event] = false;
    } else {
      this.hideColumns.push(event);
      this.loader2[event] = true;
    }
    this.checkBox(event)
    // console.log('this.hideColumns', this.hideColumns);

  }

  columnStatus() {
    let postObj = {
      'page': this.attributeObj.page,
      'columnArray': this.hideColumns
    }
    this.filterService.columnsShow(postObj).subscribe(res => {
      // console.log(res.Status);
      if (res.statusCode == '001') {

        this.snackBar.open(res.Message, 'Got it!', { duration: 2000 });
        this.isShow = true;
        window.location.reload();
      } else {
        this.snackBar.open(res.Message, 'Got it!', { duration: 2000 });
        this.isShow = true;
      }
    })
  }

  cancelColStatus() {
    this.isShow = true
  }

  restrict() {
    this.restrictionFlag = true;
  }

  onCardAction() {
    this.restrictionFlag = false;
  }
}