import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'trends-default-settings',
  templateUrl: './default-settings.component.html',
  styleUrls: ['./default-settings.component.css']
})
export class DefaultSettingsComponent implements OnInit, OnChanges {

  @Input() InputObj: any;
  @Output() onActon = new EventEmitter<any>()
  defaultObj: any = {};
  brand: any;
  branches: any;
  successMessage: any;

  constructor(
    private authService: AuthService,
    private sideNavService: SidenavService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getCentreBrand();
  }

  ngOnChanges() { }

  closeDialog(flag: any) {
    this.onActon.emit({ flag: flag, page: 'defaultSettings' })
  }

  getCentreBrand() {
    let postObj = {};
    this.sideNavService.getCentreBrandData(postObj).subscribe(res => {
      if (res.statusCode === "001") {
        this.brand = res.data;
      }
    });
  }

  getBranches(data:any) {
    this.branches = data.branches;
  }

  setDefaultBranch() {
    const sendObj = {
      'defaultCentreName': this.defaultObj.brandData.name,
      'defaultCentreID': this.defaultObj.brandData.centreId,
      'defaultBranchName': this.defaultObj.centreData.branchName,
      'defaultBranchId': this.defaultObj.centreData.branchId
    }
    this.sideNavService.updateDefaultBranch(sendObj).subscribe((res:any) => {
      if (res.statusCode === "001") {
        this.successMessage = res.Message;

        this.authService.storeUserData(res.jwt, res.adminData)

        setInterval(() => {
          this.closeDialog('cancel');
        }, 3000);
        location.reload();
      }
    });
  }

}
