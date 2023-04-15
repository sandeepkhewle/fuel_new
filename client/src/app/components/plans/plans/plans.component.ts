import { Component, OnInit } from '@angular/core';
import { PlansService } from '../plans.service';

@Component({
  selector: 'trends-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plansList: any;
  addNewPlanFlag: boolean = false;
  titleState: any = 'Create New';
  appIdArray: any = [
    {
      "name": "FUEL",
      "value": "fuel"
    }
  ];

  durationList: any = ["1", "2", "3", "4", "5", "6"];
  validUptoDayList: any = ["0", "4"];
  createPlanObj: any = {};
  constructor(
    public plansService: PlansService
  ) { }

  ngOnInit(): void {
    this.getPlansList();
  }

  // get All Plans List
  getPlansList() {
    this.plansService.getAllPlans({}).subscribe(res => {
      if (res.status == 'Success') {
        this.plansList = res.payload;
      }
      else {
      }
    });
  }

  // to open create / update plan form
  openPlanForm() {
    this.addNewPlanFlag = true;
  }

  // create / update plan function
  createPlanFun() {
    // console.log('createpln obj', this.createPlanObj);
    this.plansService.createUpdatePlan(this.createPlanObj).subscribe(res => {
      if (res.status == 'Success') {
        this.createPlanObj = {};
        this.getPlansList();
        this.closeDialog('cancel');
      }
      else {
      }
    });
  }

  // close create / update plan function
  closeDialog(flag: any) {
    this.titleState = 'Create New';
    this.createPlanObj = {};
    this.addNewPlanFlag = false;
  }

  editPlan(editdata: any, $element: any) {
    this.createPlanObj = {};
    // console.log('editData', editdata);
    this.createPlanObj.appId = editdata.appId;
    this.createPlanObj.planName = editdata.planName;
    this.createPlanObj.duration = JSON.stringify(editdata.duration);
    this.createPlanObj.planType = editdata.planType;
    this.createPlanObj.validUptoDay = JSON.stringify(editdata.validUptoDay);
    this.createPlanObj.planCost = editdata.planCost;
    this.createPlanObj.discountedPrice = editdata.discountedPrice;
    this.createPlanObj.discountedPercent = editdata.discountedPercent;
    this.createPlanObj.planStatus = editdata.planStatus;
    this.createPlanObj.description = editdata.description;
    this.createPlanObj.planId = editdata.planId;
    this.createPlanObj.planForTrend = editdata.planForTrend;
    this.titleState = 'Update';
    // this.createPlanObj = editdata;
    this.openPlanForm();
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

  }

}
