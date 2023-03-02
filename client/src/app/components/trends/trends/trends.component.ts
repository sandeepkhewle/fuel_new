import { Component, OnInit } from '@angular/core';
import { TrendsService } from '../trends.service';
import { Router } from '@angular/router';

@Component({
  selector: 'trends-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  openTrendsForm:boolean = false;
  passObj:any={};
  deleteTrendsFlag:boolean = false;
  deleteTrendData:any;
  postObj:any={
    page :'msd'
  }

  msdFlag:boolean = true;
  lpgFlag:boolean = false;
  bitumenFlag:boolean = false;

  constructor(
    public trendsService:TrendsService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.applyFilters();
    this.changeTrends('fortnight');
  }

  applyFilters() {
    this.postObj = Object.assign({}, this.postObj)
  }

  changeTrends(name:any){
    let urlToAdd = (this.router.url.includes('?')) ? this.router.url.split('?')[0] : this.router.url;
    // console.log('urlToAdd', urlToAdd);

    if (name) this.router.navigate([urlToAdd]);
    this.msdFlag = false;
    this.lpgFlag = false;
    this.bitumenFlag = false;

    if (name == 'fortnight') {
      this.postObj = {
        page : 'fortnight'
      }
      this.applyFilters();
      this.msdFlag = true;
    }
    if (name == 'monthly') {
      this.postObj = {
        page : 'monthly'
      }
      this.applyFilters();
      this.lpgFlag = true;
    }
    if (name == 'bitumen') {
      this.postObj = {
        page : 'bitumen'
      }
      this.applyFilters();
      this.bitumenFlag = true;
    }
  }

  createNewTrends(){
    this.passObj = {};
    this.openTrendsForm = true;
  }
  
  onCardAction(event:any) {
    this.openTrendsForm = false;
    this.postObj = {
      page : 'msd'
    }
  }

  onRowsSelected(event:any){

  }

  onRowsSelectedSub(event:any){

  }

  onRowClick(event:any){

  }

  onModalAction(event:any, $element:any){
    this.openTrendsForm = false;
  
    this.deleteTrendsFlag = false;
    if (event.name == 'deleteTrend') {
      this.deleteTrendData = event.rowData;
      this.deleteTrendsFlag = true;
    }
    if (event.name == 'updateTrend') {
        this.openTrendsForm = false;   
      setTimeout(() => {
        this.passObj = event.rowData;
        this.passObj.status = 'Update';
        this.openTrendsForm = true;
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
      }, 200);
    }
  }

  closeDialog(flag:any){
    this.deleteTrendsFlag = false;
    this.postObj = {
      page : 'msd'
    }
  }

  deleteTrends(data:any){
    let obj={
      'trendsId': data.trendsId,
      'appId':data.appId
    }
    this.trendsService.deleteTrendsFun(obj).subscribe(res => {
      if (res.status == 'Success') {
        this.closeDialog('cancel');
        this.postObj = {
          page : 'msd'
        }
      }
      else {
      }
    });
  }

}
