import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MembersService } from '../members.service';

@Component({
  selector: 'trends-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  loader: boolean = false;
  assignPlanFlag:boolean = false;
  deactiveMemberFlag:boolean = false;
  sendData:any;
  postObj: any = {
    page: 'members'
  };
  constructor() { }

  ngOnInit(): void {
    this.applyFilters();
  }

  applyFilters() {
    this.postObj = Object.assign({}, this.postObj)
  }

  onRowsSelected(event:any){

  }

  onRowsSelectedSub(event:any){

  }

  onRowClick(event:any){
    
  }

  onModalAction(event:any){
    this.deactiveMemberFlag = false;
    this.assignPlanFlag = false;
    if (event.name == 'assignFreePlan') {
      this.sendData = event.rowData;
      this.assignPlanFlag = true;
    }
    if (event.name == 'deactiveMember') {
      this.sendData = event.rowData;
      console.log('send data', this.sendData);
      
      this.deactiveMemberFlag = true;
    }
  }

  onCardAction(event:any) {
    this.assignPlanFlag = false;
  }

  deactivateMember(){

  }
  closeDialog(flag:any){
    this.deactiveMemberFlag = false;
  }
}
