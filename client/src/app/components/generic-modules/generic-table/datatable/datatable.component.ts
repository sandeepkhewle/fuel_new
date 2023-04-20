import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { DataTableService } from '../datatable.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { DatatableComponent, SelectionType } from '@swimlane/ngx-datatable';

@Component({
  selector: 'trends-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  providers:[DataTableService]
})
export class DataTableComponent implements OnInit, OnChanges {

  @ViewChild(DatatableComponent, { static: false }) private dataTable: DatatableComponent | undefined;
  loader: boolean = false;
  @Input() postObj: any = {};
  @Input()
  selectionType!: SelectionType | keyof typeof SelectionType;
  @Output() onSelectRows = new EventEmitter<any>();
  @Output() onRowClickEvent = new EventEmitter<any>();
  @Output() onActonModal = new EventEmitter<any>()
  membersAttributeList: any = [];
  membersList: any;
  membersListCount: any;
  offset: any = 0;
  filtersArray: any = [];
  selected: any = [];
  isAttendance: boolean = false;
  filterObj: any = {
    limit: 10,
    skip: 0,
    orderby: "",
    orderin: "desc",
    search: "",
    filters: {}
  };
  newAttributeObj = {
    attributeList: [],
    page: ""
  }
  queyValue: any = {};
  userDetails: any;
  countSharedObj: any;
  labelArr: any = [''];
  coloumnShow: any = [];
  url: any;
  columns:any= 100;

  // scrollbarH:number = 50;


  constructor(
    private dataTableService: DataTableService,
    public snackBar: MatSnackBar,
    public router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    this.activeRoute.queryParams.subscribe(params => {
      if (params && params.data) {
        this.queyValue = JSON.parse(params.data);
      }
    });
  }

  ngOnChanges() {

    if (this.queyValue && this.queyValue.filters) {
      this.filterObj = this.queyValue;

      this.offset = this.queyValue.skip / this.queyValue.limit;
      this.filterObj.pagelength = this.queyValue.limit;
    } else {
      this.filterObj.page = this.postObj.page;
    }
    if (this.postObj && this.postObj.day) {
      this.filterObj.day = this.postObj.day;
    }
    if ((this.postObj.page == 'attendanceMember') || (this.postObj.page == 'attendanceTrainer') || (this.postObj.page == 'attendanceStaff')) {
      this.filterObj.limit = 100;
    }
    this.refreshData();
    if (this.router.url.includes('/attendance')) {
      this.isAttendance = true;
    } else {
      this.isAttendance = false;
    }

    console.log("------", this.filterObj);
  
    console.log("------", this.newAttributeObj);
    console.log("------", this.countSharedObj);
  }

  ngOnInit() {
    this.newAttributeObj.page = this.postObj.page;
    // this.dummy();
  }

  refreshData() {
    this.getData();
  }

  // dummy() {
  //   let postObj = {
  //     'page': this.newAttributeObj.page
  //   }
  //   this.dataTableService.columnsData(postObj).subscribe(res => {
  //     if (res.data) {
  //       this.coloumnShow = res.data.columnArray;
  //     }
  //   })
  // }

  getData() {
    this.loader = true;
    this.dataTableService.getData(this.filterObj).subscribe(res => {
      if (res && res.attributeList && res.attributeList.length > 0) {
        this.membersAttributeList = res.attributeList;
        this.newAttributeObj.attributeList = res.attributeList;
        this.membersListCount = res.count;
        this.membersList = res.data;
        // this.countSharedObj = { total1: res.total1, total2: res.total2 }
      }
      this.loader = false;
    });
    setTimeout(() => {
      if (this.dataTable) this.dataTable.offset = this.filterObj.skip == 0 ? 0 : (Number(this.filterObj.skip) / Number(this.filterObj.limit));
      // console.log('offset', this.dataTable.offset);
    }, 1000);
  }

  onPage(event:any) {
    this.filterObj.limit = event.limit;
    this.filterObj.skip = event.offset * event.limit;
    // this.offset = event.limit ? (this.filterObj.skip / event.limit) : event.offset;
    const queryObj = {
      data: JSON.stringify(this.filterObj)
    }
    let urlToAdd = (this.router.url.includes('?')) ? this.router.url.split('?')[0] : this.router.url;
    this.router.navigate([urlToAdd], { queryParams: queryObj });

    this.getData();
  }

  onSort(event:any) {
    const index = this.membersAttributeList.findIndex(
      (      obj: { prop: any; }) => obj.prop == event.column.prop
    );
    const sortProp = this.membersAttributeList[index].prop;
    this.filterObj.orderin = event.newValue;
    this.filterObj.orderby = sortProp;
    this.filterObj.skip = 0;
    this.getData();
  }

  getRowClass(row:any) {
    return '';
  }

  onClickedOnRow(row:any) { }

  onClickRow(row:any) {
    this.onRowClickEvent.emit(row);
  }

  onSelect(event:any) {
    this.onSelectRows.emit(event.selected);
  }

  showProfilePic(row:any) {
    // const URL = this.sanitizer.bypassSecurityTrustUrl(row.profilePic);
    // window.location.href =  URL;
  }

  onAction(func:any, row:any) {
    this.onActonModal.emit({ name: func, rowData: row });
  }

  onApplyFilters(event:any) {
    if (event.filters && event.filters) {
      this.filterObj.filters = Object.assign({}, event.filters.filters);
    }
    if (event.pagelength) {
      this.filterObj.limit = event.pagelength;
    }
    if (event.search) {
      this.filterObj.search = event.search;
    }
    if (event == 'clearSearch') {
      delete this.filterObj.search;
    }
    if (event == 'clearfilters') {
      this.offset = 0;
      this.filterObj = {
        filters: {},
        page: this.postObj.page,
        limit: 10,
        skip: 0,
        orderby: "",
        orderin: "desc",
      }
      // this.activeRoute.queryParams.subscribe(params => {
      //   if (params && params.data) {
      //     let url: string = this.router.url.substring(0, this.router.url.indexOf("?"));
      //     this.router.navigateByUrl(url);
      //   }
      // });

    }

    const queryObj = {
      data: JSON.stringify(this.filterObj)
    }

    let urlToAdd = (this.router.url.includes('?')) ? this.router.url.split('?')[0] : this.router.url;
    this.router.navigate([urlToAdd], { queryParams: queryObj });
    this.refreshData();
  }

  checkShowColumn(name:any) {
    if (this.coloumnShow.indexOf(name) !== -1) {
      return false
    } else return true
  }

  // setLabel(value: any) {
  //   switch (value) {
  //     case 'Male':
  //       return 'lbl-m';
  //       break;
  //     case 'Female':
  //       return 'lbl-f';
  //       break;
  //     case 'Enquiry':
  //       return 'lbl-rec';
  //       break;
  //     case 'Follow Up':
  //       return 'lbl-fl';
  //       break;
  //     case 'Converted':
  //       return 'lbl-conv';
  //       break;
  //     case 'Closed':
  //       return 'lbl-enq';
  //       break;
  //     case 'Hot':
  //       return 'lbl-cl';
  //       break;
  //     case 'Warm':
  //       return 'lbl-warm';
  //       break;
  //     case 'Cold':
  //       return 'lbl-enq';
  //       break;
  //     case 'Expected':
  //       return 'lbl-warm';
  //       break;
  //     case 'Manager':
  //       return 'lbl-man';
  //       break;
  //     case 'Receptionist':
  //       return 'lbl-rec';
  //       break;
  //     case 'Others':
  //       return 'lbl-oth';
  //       break;
  //     case 'Trainer':
  //       return 'lbl-trainer';
  //       break;
  //     case true:
  //       return 'lbl-conv';
  //       break;
  //     case false:
  //       return 'lbl-cl';
  //       break;
  //     case 'Active':
  //       return 'lbl-conv';
  //       break;
  //     case 'Deactive':
  //       return 'lbl-cl';
  //       break;
  //     case 'Trainer Plan':
  //       return 'lbl-trainer';
  //       break;
  //     case 'Membership Plan':
  //       return 'lbl-plans';
  //       break;
  //     case 'Add On Service':
  //       return 'lbl-adOn';
  //       break;
  //     default:
  //       break;
  //   }
  // }

  openWhatsApp(row:any) {
    this.url = "https://api.whatsapp.com/send?phone=+91" + row.phoneNo + "&text=Hi"
    window.open(this.url);
  }
}
