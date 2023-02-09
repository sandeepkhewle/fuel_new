import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MembersService } from '../members.service';
@Component({
  selector: 'trends-assign-plans',
  templateUrl: './assign-plans.component.html',
  styleUrls: ['./assign-plans.component.css']
})
export class AssignPlansComponent implements OnInit, OnChanges {
  @Input() InutDataObj:any;
  @Output() onActon = new EventEmitter<any>();
  plansList:any;
  plansObj:any={};
  internalPlans:any = {};

  constructor(public membersService: MembersService) { }

  ngOnInit(): void {
    this.plansObj.appId = this.InutDataObj.appId;
    this.plansObj.userId = this.InutDataObj.userId;
    this.getPlansList();
    
  }

  ngOnChanges() {
  }

  closeDialog(flag:any) {
    this.onActon.emit({ flag: flag, page: 'membership' });
  }

  getPlansList(){
    this.membersService.getAllPlans({}).subscribe(res => {
      if (res.status == 'Success') {
        this.plansList=res.payload;
        // console.log('plansList', this.plansList);
        this.plansList.forEach((element:any) => {
          if (element._id == this.InutDataObj.appId) {
            this.internalPlans.plans = element.plans;
          }
        });
      }
      else {
      }
    });
  }

  
  assignPlans(){
    this.plansObj.planId = this.plansObj.plan.planId;
    // console.log("plansObj", this.plansObj);
    this.membersService.assignPlanToMember(this.plansObj).subscribe(res => {
      if (res.status == 'Success') {
        this.closeDialog('cancel');
      }
      else {
      }
    });
  }

}