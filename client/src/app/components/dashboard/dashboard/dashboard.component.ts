import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'trends-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loader:boolean = false;
  summaryData:any;

  constructor(
      public dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.getSummary();
  }

  
  getSummary(){
    this.loader = true;
      this.dashboardService.getDashboardSummary({}).subscribe(res => {
        if (res.status == 'Success') {
        this.loader = false;
        this.summaryData = res.payload.data;
        }
        else {
        }
      });
  }

}
