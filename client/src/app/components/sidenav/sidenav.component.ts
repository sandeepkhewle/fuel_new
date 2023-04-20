import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { AuthService } from '../../shared-modules/services/auth.service';
import {
  Router,
  NavigationEnd,
  NavigationStart,
  NavigationCancel
} from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { GlobalApiService } from 'src/app/shared-modules/global-api.service';
import { SidenavService } from './sidenav.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSidenav } from '@angular/material/sidenav';
import openSocket from 'socket.io-client';

@Component({
  selector: 'trends-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  providers: [AuthService, SidenavService],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
export class SidenavComponent implements OnDestroy, AfterViewInit {

  @ViewChild('snav', { static: false })
  snav!: MatSidenav;
  mobileQuery: MediaQueryList;
  dynamicNav: any = [];
  private _mobileQueryListener: () => void;
  expanded: boolean = false;
  userData: any;
  brandName: any;
  centreName: any;
  defaultSettingModal: boolean = false;
  isNavLoading: boolean = false;
  loaderType: string;
  searchInput: any;
  userName: any;
  profilePic: any;
  role: any;
  currentActive: any = 0; // index of currently active sidenav
  brandLogo: any;
  restrictionFlag: boolean = false;
  socket: any;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sideNavService: SidenavService,
    public snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
    public globalApiService: GlobalApiService) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    if ((['/trends/members', '/trends/enquiry', '/trends/staff', '/trends/accounts', '/trends/branches']).includes(this.router.url)) {
      this.loaderType = 'custom';
    } else {
      this.loaderType = 'custom';
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isNavLoading = true;
        }
        else if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel
        ) {
          this.isNavLoading = false;
        }
      });
  }

  ngOnInit() {
    this.refreshData();
    this.start();
  }

  start = () => {
    // this.socket = openSocket(this.globalApiService.getApiUrl());
    // emit admin socket event  - adminSocket
    // this.socket.on('adminSocket', this.appendChatMessage);
    // this.getDoubtList();
    // emit reply when you want to reply to a chat - wit userId , message
  }

  refreshData() {
    this.getNav();
    this.setDefaultBranch();
  }

  setDefaultBranch() {
    this.userData = this.authService.loadUserData();
    // console.log('this.userData', JSON.parse(this.userData).logo);

    let defaultSetting = JSON.parse(this.userData).defaultSetting;
    // console.log('defaultSetting', defaultSetting);
    this.brandLogo = JSON.parse(this.userData).logo;
    // console.log('this.brandLogo', this.brandLogo);

    this.brandName = (defaultSetting && defaultSetting.defaultCentreName) ? defaultSetting.defaultCentreName : "-";
    this.centreName = (defaultSetting && defaultSetting.defaultBranchName) ? defaultSetting.defaultBranchName : "-";
    this.userName = JSON.parse(this.userData).name;
    this.profilePic = JSON.parse(this.userData).profilePic;
    this.role = JSON.parse(this.userData).role;
  }

  // to get the side nav from Database
  getNav() {
    this.sideNavService.getsideNav().subscribe((res:any) => {
      this.dynamicNav = [];
      if (res && res.status == 'Success') {
        if (res.payload && res.payload.length > 0) {
          this.dynamicNav = res.payload;
          // console.log('this.dynamicNav', this.dynamicNav);          
        }
      }
    });
  }


  // to logOut
  logOutUser() {
    this.authService.logout();
  }

  // to navigate
  navigateTo(navItem:any, index:any) {
    this.currentActive = index;
    if ((['/trends/members', '/trends/enquiry', '/trends/staff', '/trends/accounts', '/trends/branches']).includes(navItem.url)) {
      this.loaderType = 'custom';
    } else {
      this.loaderType = 'custom';
    }
    if (!navItem.children || !navItem.children.length) {
      // this.router.navigate([navItem.url]);
    }
    if (navItem.children && navItem.children.length > 0) {
      this.expanded = !this.expanded;
    }
    if (this.mobileQuery.matches) {
      this.snav.close();
    }
  }

  onCardAction(event:any) {
    if (event.flag) {
    }
    this.defaultSettingModal = false;
    this.restrictionFlag = false;
  }
}