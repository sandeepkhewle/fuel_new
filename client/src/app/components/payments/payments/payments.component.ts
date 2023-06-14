import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trends-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {


  loader: boolean = false;
  assignPlanFlag: boolean = false;
  sendData: any;
  postObj: any = {
    page: 'payments'
  };
  constructor() { }

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters() {
    this.postObj = Object.assign({}, this.postObj)
  }

  onRowsSelected(event: any) {

  }

  onRowsSelectedSub(event: any) {

  }

  onRowClick(event: any) {

  }

  onModalAction(event: any) {
    if (event.name == 'assignFreePlan') {
      this.sendData = event.rowData;
      this.assignPlanFlag = true;
    }
    if (event.name == "downloadInvoice") {
      if (event.rowData.link) {
        window.open(event.rowData.link, "_blank");
      } else {
        // this.snackBar.open('No invoice generated for this record !', '', { duration: 2000 });
      }
    }
  }

}
