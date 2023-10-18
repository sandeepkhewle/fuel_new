(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7qI":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared-modules/services/auth.service */ "w2Rb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _sidenav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidenav.service */ "EOH5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var src_app_shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared-modules/global-api.service */ "nNIA");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");


















const _c0 = ["snav"];
function SidenavComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "FUEL PRE ALERT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function SidenavComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "FUEL PRE ALERT");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function SidenavComponent_ng_container_19_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " expand_more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@indicatorRotate", ctx_r9.expanded ? "expanded" : "collapsed");
} }
function SidenavComponent_ng_container_19_ng_container_1_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidenavComponent_ng_container_19_ng_container_1_ng_container_5_ng_container_1_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const child_r12 = ctx.$implicit; const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.navigateTo(child_r12, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const child_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, child_r12.name), " ");
} }
function SidenavComponent_ng_container_19_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidenavComponent_ng_container_19_ng_container_1_ng_container_5_ng_container_1_Template, 4, 3, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const nav_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", nav_r7.children);
} }
const _c1 = function () { return { exact: true }; };
function SidenavComponent_ng_container_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidenavComponent_ng_container_19_ng_container_1_Template_mat_list_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const nav_r7 = ctx.$implicit; const i_r8 = ctx.index; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r18.navigateTo(nav_r7, i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidenavComponent_ng_container_19_ng_container_1_span_4_Template, 4, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidenavComponent_ng_container_19_ng_container_1_ng_container_5_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const nav_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", nav_r7.url)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, nav_r7.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", nav_r7.children && nav_r7.children.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.expanded);
} }
function SidenavComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidenavComponent_ng_container_19_ng_container_1_Template, 6, 8, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.dynamicNav);
} }
function SidenavComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function SidenavComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
class SidenavComponent {
    constructor(changeDetectorRef, media, sideNavService, snackBar, authService, router, globalApiService) {
        this.sideNavService = sideNavService;
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.globalApiService = globalApiService;
        this.dynamicNav = [];
        this.expanded = false;
        this.defaultSettingModal = false;
        this.isNavLoading = false;
        this.currentActive = 0; // index of currently active sidenav
        this.restrictionFlag = false;
        this.start = () => {
            // this.socket = openSocket(this.globalApiService.getApiUrl());
            // emit admin socket event  - adminSocket
            // this.socket.on('adminSocket', this.appendChatMessage);
            // this.getDoubtList();
            // emit reply when you want to reply to a chat - wit userId , message
        };
        this.mobileQuery = media.matchMedia('(max-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        if ((['/trends/members', '/trends/enquiry', '/trends/staff', '/trends/accounts', '/trends/branches']).includes(this.router.url)) {
            this.loaderType = 'custom';
        }
        else {
            this.loaderType = 'custom';
        }
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() {
        this.router.events
            .subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.isNavLoading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]) {
                this.isNavLoading = false;
            }
        });
    }
    ngOnInit() {
        this.refreshData();
        this.start();
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
        this.sideNavService.getsideNav().subscribe((res) => {
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
    navigateTo(navItem, index) {
        this.currentActive = index;
        if ((['/trends/members', '/trends/enquiry', '/trends/staff', '/trends/accounts', '/trends/branches']).includes(navItem.url)) {
            this.loaderType = 'custom';
        }
        else {
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
    onCardAction(event) {
        if (event.flag) {
        }
        this.defaultSettingModal = false;
        this.restrictionFlag = false;
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_sidenav_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_7__["GlobalApiService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["trends-sidenav"]], viewQuery: function SidenavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.snav = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _sidenav_service__WEBPACK_IMPORTED_MODULE_3__["SidenavService"]])], decls: 24, vars: 12, consts: [[1, "fyt-container", 2, "background-color", "#EDEBEB"], ["color", "primary", 1, "fyt-toolbar", "fyt-marginremove", "fyt-width100"], ["mat-icon-button", "", 3, "click"], ["routerLink", "/trends/members", 1, "fyt-app-name", "fyt-link-btn"], [4, "ngIf"], [1, "sp"], [1, "menu"], [1, "fyt-link-btn", "new-Montserrat-Medium", "new-000000", "fnt-20", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out"], [1, "fyt-sidenav-container", "fyt-list-diff"], ["fixedTopGap", "56", 1, "fyt-sidenav-container-color", "fyt-marginremove", 3, "mode", "fixedInViewport", "opened"], ["snav", ""], [1, "fyt-content-wrapper"], [1, "new-Montserrat-Medium", "new-000000", "fnt-20", 2, "font-weight", "500"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "fyt-active-route", 1, "mx-2", "fyt-sidenav-container-textcolor", 3, "routerLink", "routerLinkActiveOptions", "click"], ["fxFlex", "", 4, "ngIf"], ["fxFlex", ""], [1, "pl-15", 3, "click"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidenavComponent_ng_container_6_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SidenavComponent_ng_container_7_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "\u00A0\u00A0\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidenavComponent_Template_a_click_12_listener() { return ctx.logOutUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Log out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-sidenav-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-sidenav", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SidenavComponent_ng_container_19_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SidenavComponent_ng_container_22_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SidenavComponent_ng_container_23_Template, 1, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("fyt-is-mobile", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.mobileQuery.matches);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 56 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx.mobileQuery.matches)("opened", ctx.mobileQuery.matches ? false : true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dynamicNav && ctx.dynamicNav.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isNavLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isNavLoading);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatNavList"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["UpperCasePipe"]], styles: [".mat-drawer.mat-drawer-side[_ngcontent-%COMP%] {\r\n    z-index: 1;\r\n}\r\n\r\n.fyt-container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.fyt-modal-design-branch[_ngcontent-%COMP%] {\r\n    min-width: 35%;\r\n    max-width: 40%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 10rem;\r\n    right: 20%;\r\n    max-height: 50%;\r\n    min-height: 200px;\r\n    \r\n    margin-right: 1rem;\r\n    box-shadow: 0 3px 5px 5px rgb(0 0 0 / 6%), 0 6px 10px 0 rgb(0 0 0 / 7%), 0 1px 18px 0 rgb(0 0 0 / 12%) !important;\r\n    \r\n    background: #fff;\r\n    padding: .5rem;\r\n    border-radius: 7px;\r\n}\r\n\r\n.fyt-is-mobile[_ngcontent-%COMP%]   .fyt-toolbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    z-index: 2;\r\n}\r\n\r\nh1.fyt-app-name[_ngcontent-%COMP%] {\r\n    margin-left: 8px;\r\n    outline: none;\r\n}\r\n\r\n.fyt-sidenav-container[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n}\r\n\r\n.fyt-sidenav-container-color[_ngcontent-%COMP%] {\r\n    background-color: #232D30;\r\n}\r\n\r\n.fyt-sidenav-container-textcolor[_ngcontent-%COMP%] {\r\n    color: goldenrod;\r\n}\r\n\r\n.fyt-is-mobile[_ngcontent-%COMP%]   .fyt-sidenav-container[_ngcontent-%COMP%] {\r\n    flex: 1 0 auto;\r\n}\r\n\r\n.fyt-role[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 10px;\r\n    color: #007bff;\r\n    padding-left: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%], .mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%] {\r\n    height: 47px;\r\n    width: 88%;\r\n    color: white;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    .fyt-modal-design-branch[_ngcontent-%COMP%] {\r\n        min-width: 40%;\r\n        max-width: 45%;\r\n        position: fixed;\r\n        z-index: 1;\r\n        bottom: 15rem;\r\n        right: 35%;\r\n        max-height: 40%;\r\n        min-height: 200px;\r\n        \r\n        margin-right: 1rem;\r\n        box-shadow: 0 3px 5px 5px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n        background: #fff;\r\n        padding: .5rem;\r\n        border-radius: 7px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n        margin: 0px;\r\n        background: #fff;\r\n        color: #000;\r\n        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n        z-index: 10;\r\n        width: 100%;\r\n        border-radius: 5px;\r\n    }\r\n\r\n    .mat-drawer.mat-drawer-side[_ngcontent-%COMP%], .mat-drawer[_ngcontent-%COMP%] {\r\n        \r\n        margin-left: 1px;\r\n        margin-top: 20px;\r\n        border-radius: 10px;\r\n        background: #232D30;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixpSEFBaUg7SUFDakgsc0RBQXNEO0lBQ3RELGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFDQTs7OztHQUlHOztBQUVIOztHQUVHOztBQUVIOztJQUVJLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGNBQWM7UUFDZCxlQUFlO1FBQ2YsVUFBVTtRQUNWLGFBQWE7UUFDYixVQUFVO1FBQ1YsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQiw0QkFBNEI7UUFDNUIsa0JBQWtCO1FBQ2xCLDZHQUE2RztRQUM3RyxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCw4R0FBOEc7UUFDOUcsV0FBVztRQUNYLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7O0lBRUE7O1FBRUksa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZHJhd2VyLm1hdC1kcmF3ZXItc2lkZSB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZnl0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLmZ5dC1tb2RhbC1kZXNpZ24tYnJhbmNoIHtcclxuICAgIG1pbi13aWR0aDogMzUlO1xyXG4gICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAxMHJlbTtcclxuICAgIHJpZ2h0OiAyMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7ICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggNXB4IHJnYigwIDAgMCAvIDYlKSwgMCA2cHggMTBweCAwIHJnYigwIDAgMCAvIDclKSwgMCAxcHggMThweCAwIHJnYigwIDAgMCAvIDEyJSkgIWltcG9ydGFudDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgwLCAwLCAwLCAuMDc1KTsgKi9cclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLmZ5dC1pcy1tb2JpbGUgLmZ5dC10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmgxLmZ5dC1hcHAtbmFtZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZ5dC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uZnl0LXNpZGVuYXYtY29udGFpbmVyLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzJEMzA7XHJcbn1cclxuXHJcbi5meXQtc2lkZW5hdi1jb250YWluZXItdGV4dGNvbG9yIHtcclxuICAgIGNvbG9yOiBnb2xkZW5yb2Q7XHJcbn1cclxuXHJcbi5meXQtaXMtbW9iaWxlIC5meXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcbi5meXQtcm9sZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi8qIFxyXG4uZnl0LW1hcmdpbnJlbW92ZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59ICovXHJcblxyXG4vKiAuZnl0LXdpZHRoMTAwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0gKi9cclxuXHJcbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtLFxyXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIHtcclxuICAgIGhlaWdodDogNDdweDtcclxuICAgIHdpZHRoOiA4OCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmZ5dC1tb2RhbC1kZXNpZ24tYnJhbmNoIHtcclxuICAgICAgICBtaW4td2lkdGg6IDQwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDQ1JTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBib3R0b206IDE1cmVtO1xyXG4gICAgICAgIHJpZ2h0OiAzNSU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDAlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7ICovXHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWRyYXdlci5tYXQtZHJhd2VyLXNpZGUsXHJcbiAgICAubWF0LWRyYXdlciB7XHJcbiAgICAgICAgLyogbWFyZ2luOiAxMHB4OyAqL1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMzJEMzA7XHJcbiAgICB9XHJcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('indicatorRotate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(0deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'rotate(180deg)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('225ms cubic-bezier(0.4,0.0,0.2,1)')),
            ])
        ] } });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\swapnil\OneDrive\Documents\development\meeandnee\fuel_new\client\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "EOH5":
/*!*******************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.service.ts ***!
  \*******************************************************/
/*! exports provided: SidenavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavService", function() { return SidenavService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared-modules/global-api.service */ "nNIA");
/* harmony import */ var _shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-modules/services/auth.service */ "w2Rb");






class SidenavService {
    constructor(http, globalApiService, authService) {
        this.http = http;
        this.globalApiService = globalApiService;
        this.authService = authService;
    }
    // for sidenav from database
    getsideNav() {
        let options = ({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': JSON.stringify(localStorage.getItem('token'))
            })
        });
        //   let httpOptions:any;
        //  httpOptions.headers = httpOptions.headers.set('Authorization', JSON.stringify(localStorage.getItem('token')));
        // let options= {
        //   headers: new HttpHeaders().append('Content-Type', 'application/json'),
        //   params: new HttpParams().append('authorization', JSON.stringify(localStorage.getItem('token')))
        // }
        return this.http.post(this.globalApiService.getApiUrl() + '/structure/getSideNav', options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((e) => this.authService.getCheckError(e)));
    }
    updateDefaultBranch(postObj) {
        return this.http.post(this.globalApiService.getApiUrl() + '/adminUser/updateDefaultSetting', postObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((e) => this.authService.getCheckError(e)));
    }
    getCentreBrandData(postObj) {
        return this.http.post(this.globalApiService.getApiUrl() + '/adminUser/getCentreBranchList', postObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((e) => this.authService.getCheckError(e)));
    }
}
SidenavService.ɵfac = function SidenavService_Factory(t) { return new (t || SidenavService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_3__["GlobalApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
SidenavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SidenavService, factory: SidenavService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Equd":
/*!**********************************************************************!*\
  !*** ./src/app/shared-modules/http-interceptors/auth-interceptor.ts ***!
  \**********************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "w2Rb");


class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    // intercept(req: HttpRequest<any>, next: HttpHandler) {
    //   // Get the auth token from the service.
    //   const authToken = this.authService.loadToken();
    //   const authReq = req.clone({
    //     setHeaders: { Authorization: 'JWT ' + authToken }
    //   });
    //   // modifing header for API  call.
    //     return next.handle(authReq);
    // }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `${this.authService.loadToken()}`
            }
        });
        return next.handle(request);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "HcNv":
/*!*****************************************************!*\
  !*** ./src/app/shared-modules/guards/auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "w2Rb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    canActivate(router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ "PXtz":
/*!***********************************************************!*\
  !*** ./src/app/shared-modules/http-interceptors/index.ts ***!
  \***********************************************************/
/*! exports provided: HttpInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptor", function() { return HttpInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-interceptor */ "Equd");
/* "Barrel" of Http Interceptors */


/** Http interceptor providers in outside-in order */
const HttpInterceptor = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthInterceptor"], multi: true },
];


/***/ }),

/***/ "SwFR":
/*!********************************************************!*\
  !*** ./src/app/shared-modules/guards/notAuth.guard.ts ***!
  \********************************************************/
/*! exports provided: NotAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthGuard", function() { return NotAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "w2Rb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NotAuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    canActivate() {
        if (this.authService.loggedIn()) {
            this.router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    }
}
NotAuthGuard.ɵfac = function NotAuthGuard_Factory(t) { return new (t || NotAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NotAuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotAuthGuard, factory: NotAuthGuard.ɵfac });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_modules_services_pwa_updates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-modules/services/pwa-updates.service */ "u+iD");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-modules/global-api.service */ "nNIA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please check your internet connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "or");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Try again later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class AppComponent {
    constructor(router, pwa, swUpdate, swPush, globalService) {
        this.router = router;
        this.pwa = pwa;
        this.swUpdate = swUpdate;
        this.swPush = swPush;
        this.globalService = globalService;
        this.title = 'client';
        this.isLive = true;
        this.loading = false;
        this.lat = 0;
        this.lng = 0;
        // for check the internet connection
        setInterval(() => {
            this.checkInternetConnetion();
        }, 1);
        this.pwa.checkForUpdate();
    }
    checkInternetConnetion() {
        this.isLive = navigator.onLine;
    }
    // Get Current Location Coordinates
    getCurrentLoaction() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
            });
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_modules_services_pwa_updates_service__WEBPACK_IMPORTED_MODULE_2__["PWAService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwPush"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_4__["GlobalApiService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, ""], [1, "row"], [1, "col-md-12"], [1, "ta-c", "mt-no-internet"], ["src", "../assets/img/No_Signal.png", "alt", "No internet", "height", "70", "width", "70"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 3, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 12, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-modules/angular.material.module */ "bBoo");
/* harmony import */ var _shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared-modules/global-api.service */ "nNIA");
/* harmony import */ var _shared_modules_services_pwa_updates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared-modules/services/pwa-updates.service */ "u+iD");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "+7qI");
/* harmony import */ var _components_sidenav_default_settings_default_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidenav/default-settings/default-settings.component */ "txXN");
/* harmony import */ var _shared_modules_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared-modules/guards/auth.guard */ "HcNv");
/* harmony import */ var _shared_modules_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared-modules/guards/notAuth.guard */ "SwFR");
/* harmony import */ var _components_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sidenav/sidenav.service */ "EOH5");
/* harmony import */ var _shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared-modules/services/auth.service */ "w2Rb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















// import { SubscriptionsComponent } from './components/subscriptions/subscriptions/subscriptions.component';
// import { RestrictionPopupComponent } from './components/restriction-popup/restriction-popup.component';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        _shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_6__["GlobalApiService"],
        _shared_modules_services_pwa_updates_service__WEBPACK_IMPORTED_MODULE_7__["PWAService"],
        _shared_modules_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
        _shared_modules_guards_notAuth_guard__WEBPACK_IMPORTED_MODULE_12__["NotAuthGuard"],
        _components_sidenav_sidenav_service__WEBPACK_IMPORTED_MODULE_13__["SidenavService"],
        _shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: false }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_9__["SidenavComponent"],
        _components_sidenav_default_settings_default_settings_component__WEBPACK_IMPORTED_MODULE_10__["DefaultSettingsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"]] }); })();


/***/ }),

/***/ "bBoo":
/*!***********************************************************!*\
  !*** ./src/app/shared-modules/angular.material.module.ts ***!
  \***********************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _http_interceptors__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./http-interceptors */ "PXtz");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/core */ "fXoL");


































// new Imports
















class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_49__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_49__["ɵɵdefineInjector"]({ providers: [
        _http_interceptors__WEBPACK_IMPORTED_MODULE_47__["HttpInterceptor"],
        {
            provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MAT_SNACK_BAR_DEFAULT_OPTIONS"],
            useValue: {
                duration: 3000,
                verticalPosition: 'top',
                horizontalPosition: 'right',
            },
        },
        {
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MAT_FORM_FIELD_DEFAULT_OPTIONS"],
            useValue: {
                appearance: 'outline',
            },
        },
    ], imports: [[
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_48__["NgxDatatableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormFieldModule"]
        ], _angular_common__WEBPACK_IMPORTED_MODULE_45__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormFieldModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        // new Modules
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__["MatDividerModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_36__["MatBottomSheetModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_37__["CdkTreeModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__["ClipboardModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__["DragDropModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__["ScrollingModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_43__["CdkStepperModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_46__["FlexLayoutModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatCommonModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_48__["NgxDatatableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_49__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_48__["NgxDatatableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormFieldModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_45__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTableModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormFieldModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
        // new Modules
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_34__["MatTreeModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_35__["MatDividerModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_36__["MatBottomSheetModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_37__["CdkTreeModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_38__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__["ClipboardModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__["DragDropModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_42__["ScrollingModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_43__["CdkStepperModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_46__["FlexLayoutModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatCommonModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_48__["NgxDatatableModule"]] }); })();


/***/ }),

/***/ "nNIA":
/*!******************************************************!*\
  !*** ./src/app/shared-modules/global-api.service.ts ***!
  \******************************************************/
/*! exports provided: GlobalApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalApiService", function() { return GlobalApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GlobalApiService {
    constructor() {
        this.API_SERVER_PORTSTRING = (window.location.hostname === 'localhost' || window.location.hostname === '65.0.75.20') ? ':4108' : '';
        this.SOCKET_SERVER_PORTSTRING = (window.location.hostname === 'localhost' || window.location.hostname === '65.0.75.20') ? ':4108' : '';
        // public CUSTOM_API = 'http://65.0.75.20:4108';
        this.CUSTOM_API = "http://localhost:4108";
    }
    // public CUSTOM_API = 'https://api.fuelpricealert.in/';
    getApiUrl() {
        let urlString = `${window.location.protocol}//${window.location.hostname}${this.API_SERVER_PORTSTRING}`;
        console.log("getApiUrl", urlString);
        return urlString;
        // return `${window.location.protocol}//${this.CUSTOM_API}${this.API_SERVER_PORTSTRING}`;
        // return this.CUSTOM_API;
    }
    getSocketUrl() {
        // const socketUrl: string = `${window.location.protocol}//${window.location.hostname}${this.API_SERVER_PORTSTRING}`;
        // const socketUrl: string = `http//${window.location.hostname}${this.API_SERVER_PORTSTRING}`;
        const socketUrl = this.CUSTOM_API;
        console.log("getSocketUrl", socketUrl);
        return `${socketUrl}`;
    }
}
GlobalApiService.ɵfac = function GlobalApiService_Factory(t) { return new (t || GlobalApiService)(); };
GlobalApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalApiService, factory: GlobalApiService.ɵfac });


/***/ }),

/***/ "txXN":
/*!***********************************************************************************!*\
  !*** ./src/app/components/sidenav/default-settings/default-settings.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DefaultSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSettingsComponent", function() { return DefaultSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared-modules/services/auth.service */ "w2Rb");
/* harmony import */ var _sidenav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidenav.service */ "EOH5");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");












function DefaultSettingsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.successMessage);
} }
function DefaultSettingsComponent_mat_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const br_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", br_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](br_r5.name);
} }
function DefaultSettingsComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const branch_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", branch_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](branch_r6.branchName);
} }
class DefaultSettingsComponent {
    constructor(authService, sideNavService, snackBar) {
        this.authService = authService;
        this.sideNavService = sideNavService;
        this.snackBar = snackBar;
        this.onActon = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.defaultObj = {};
    }
    ngOnInit() {
        this.getCentreBrand();
    }
    ngOnChanges() { }
    closeDialog(flag) {
        this.onActon.emit({ flag: flag, page: 'defaultSettings' });
    }
    getCentreBrand() {
        let postObj = {};
        this.sideNavService.getCentreBrandData(postObj).subscribe(res => {
            if (res.statusCode === "001") {
                this.brand = res.data;
            }
        });
    }
    getBranches(data) {
        this.branches = data.branches;
    }
    setDefaultBranch() {
        const sendObj = {
            'defaultCentreName': this.defaultObj.brandData.name,
            'defaultCentreID': this.defaultObj.brandData.centreId,
            'defaultBranchName': this.defaultObj.centreData.branchName,
            'defaultBranchId': this.defaultObj.centreData.branchId
        };
        this.sideNavService.updateDefaultBranch(sendObj).subscribe((res) => {
            if (res.statusCode === "001") {
                this.successMessage = res.Message;
                this.authService.storeUserData(res.jwt, res.adminData);
                setInterval(() => {
                    this.closeDialog('cancel');
                }, 3000);
                location.reload();
            }
        });
    }
}
DefaultSettingsComponent.ɵfac = function DefaultSettingsComponent_Factory(t) { return new (t || DefaultSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sidenav_service__WEBPACK_IMPORTED_MODULE_2__["SidenavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"])); };
DefaultSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultSettingsComponent, selectors: [["trends-default-settings"]], inputs: { InputObj: "InputObj" }, outputs: { onActon: "onActon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 31, vars: 5, consts: [[1, "fyt-display-flex"], [1, "fyt-modal-header"], [1, "sp"], ["mat-icon-button", "", 3, "click"], [1, "row", "mt-10"], ["class", "col-md-12", 4, "ngIf"], [1, "col-md-12"], ["defaultSettingsForm", "ngForm"], ["appearance", "outline"], ["name", "brandData", 3, "ngModel", "ngModelChange"], ["brandData", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "centreData", 3, "ngModel", "ngModelChange"], [1, "fyt-display-flex", "mb-10"], ["mat-raised-button", "", 1, "mr-5", 3, "click"], ["mat-raised-button", "", 1, "fyt-button", "mr-5", 3, "click"], [1, "alert", "alert-success"], [3, "value"]], template: function DefaultSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SET DEFAULT BRANCH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultSettingsComponent_Template_button_click_4_listener() { return ctx.closeDialog("cancel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DefaultSettingsComponent_div_8_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Brand Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DefaultSettingsComponent_Template_mat_select_ngModelChange_15_listener($event) { return ctx.defaultObj.brandData = $event; })("ngModelChange", function DefaultSettingsComponent_Template_mat_select_ngModelChange_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16); return ctx.getBranches(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DefaultSettingsComponent_mat_option_17_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Centre Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DefaultSettingsComponent_Template_mat_select_ngModelChange_21_listener($event) { return ctx.defaultObj.centreData = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DefaultSettingsComponent_mat_option_22_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultSettingsComponent_Template_button_click_27_listener() { return ctx.closeDialog("cancel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultSettingsComponent_Template_button_click_29_listener() { return ctx.setDefaultBranch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Set Default Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.defaultObj.brandData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.defaultObj.centreData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branches);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWZhdWx0LXNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "u+iD":
/*!****************************************************************!*\
  !*** ./src/app/shared-modules/services/pwa-updates.service.ts ***!
  \****************************************************************/
/*! exports provided: PWAService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PWAService", function() { return PWAService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");


class PWAService {
    constructor(swUpdate) {
        this.swUpdate = swUpdate;
    }
    checkForUpdate() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(event => {
                if (confirm('New version available. Load New Version')) {
                    window.location.reload();
                }
            });
        }
    }
    promptEvent() {
        window.addEventListener('beforeinstallprompt', event => {
            return event;
        });
    }
}
PWAService.ɵfac = function PWAService_Factory(t) { return new (t || PWAService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"])); };
PWAService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PWAService, factory: PWAService.ɵfac });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "+7qI");
/* harmony import */ var _shared_modules_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared-modules/guards/auth.guard */ "HcNv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | components-login-login-module */ "components-login-login-module").then(__webpack_require__.bind(null, /*! ./components/login/login.module */ "qYmF")).then((m) => m.LoginModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | components-login-login-module */ "components-login-login-module").then(__webpack_require__.bind(null, /*! ./components/login/login.module */ "qYmF")).then((m) => m.LoginModule)
    },
    {
        path: "trends",
        component: _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_1__["SidenavComponent"],
        canActivate: [_shared_modules_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | components-dashboard-dashboard-module */[__webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~2510f3c1"), __webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~78c352db"), __webpack_require__.e("components-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./components/dashboard/dashboard.module */ "5+sL")).then((m) => m.DashboardModule)
            },
            {
                path: 'members',
                loadChildren: () => Promise.all(/*! import() | components-members-members-module */[__webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~2510f3c1"), __webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~78c352db"), __webpack_require__.e("components-members-members-module")]).then(__webpack_require__.bind(null, /*! ./components/members/members.module */ "q2vJ")).then((m) => m.MembersModule)
            }, {
                path: 'subscription',
                loadChildren: () => Promise.all(/*! import() | components-subscriptions-subscriptions-module */[__webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~2510f3c1"), __webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~78c352db"), __webpack_require__.e("components-subscriptions-subscriptions-module")]).then(__webpack_require__.bind(null, /*! ./components/subscriptions/subscriptions.module */ "oYuK")).then((m) => m.SubscriptionsModule)
            },
            {
                path: 'upload',
                loadChildren: () => __webpack_require__.e(/*! import() | components-upload-upload-module */ "components-upload-upload-module").then(__webpack_require__.bind(null, /*! ./components/upload/upload.module */ "TDph")).then((m) => m.UploadModule)
            },
            {
                path: 'trends',
                loadChildren: () => Promise.all(/*! import() | components-trends-trends-module */[__webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~2510f3c1"), __webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~78c352db"), __webpack_require__.e("components-trends-trends-module")]).then(__webpack_require__.bind(null, /*! ./components/trends/trends.module */ "S8Gx")).then((m) => m.TrendsModule)
            },
            {
                path: 'payments',
                loadChildren: () => Promise.all(/*! import() | components-payments-payments-module */[__webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~2510f3c1"), __webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~78c352db"), __webpack_require__.e("components-payments-payments-module")]).then(__webpack_require__.bind(null, /*! ./components/payments/payments.module */ "B7Ul")).then((m) => m.PaymentsModule)
            },
            {
                path: 'notifications',
                loadChildren: () => Promise.all(/*! import() | components-notifications-notifications-module */[__webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~2510f3c1"), __webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~78c352db"), __webpack_require__.e("components-notifications-notifications-module")]).then(__webpack_require__.bind(null, /*! ./components/notifications/notifications.module */ "pJBa")).then((m) => m.NotificationsModule)
            },
            {
                path: 'app-data',
                loadChildren: () => Promise.all(/*! import() | components-app-data-app-data-module */[__webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~2510f3c1"), __webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~78c352db"), __webpack_require__.e("components-app-data-app-data-module")]).then(__webpack_require__.bind(null, /*! ./components/app-data/app-data.module */ "XtCv")).then((m) => m.AppDataModule)
            },
            {
                path: 'plans',
                loadChildren: () => __webpack_require__.e(/*! import() | components-plans-plans-module */ "components-plans-plans-module").then(__webpack_require__.bind(null, /*! ./components/plans/plans.module */ "VOhO")).then((m) => m.PlansModule)
            },
            {
                path: 'device',
                loadChildren: () => Promise.all(/*! import() | components-device-device-module */[__webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~2510f3c1"), __webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~78c352db"), __webpack_require__.e("components-device-device-module")]).then(__webpack_require__.bind(null, /*! ./components/device/device.module */ "OB9x")).then((m) => m.DeviceModule)
            },
            {
                path: 'chat',
                loadChildren: () => Promise.all(/*! import() | components-chat-chat-module */[__webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~2510f3c1"), __webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~78c352db"), __webpack_require__.e("components-chat-chat-module")]).then(__webpack_require__.bind(null, /*! ./components/chat/chat.module */ "yIP3")).then((m) => m.ChatModule)
            },
            {
                path: 'reports',
                loadChildren: () => Promise.all(/*! import() | components-reports-reports-module */[__webpack_require__.e("default~components-app-data-app-data-module~components-chat-chat-module~components-dashboard-dashboa~2510f3c1"), __webpack_require__.e("components-reports-reports-module")]).then(__webpack_require__.bind(null, /*! ./components/reports/reports.module */ "YXPf")).then((m) => m.ReportsModule)
            },
        ]
    },
    // default and error routes
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "w2Rb":
/*!*********************************************************!*\
  !*** ./src/app/shared-modules/services/auth.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
// import { Headers, RequestOptions } from '@angular/http';





class AuthService {
    constructor(snackbar, router) {
        this.snackbar = snackbar;
        this.router = router;
    }
    // Function to create headers, add token, to be used in HTTP requests
    createAuthenticationHeaders() {
        const token = this.loadToken();
        // return this.options = new RequestOptions({
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'authorization': token
        //   })
        // });
        return this.options = ({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': token
            })
        });
    }
    // createHeaders() {
    //   return this.options = ({
    //     headers: new Headers({
    //       'Content-Type': 'application/json',
    //       'authorization': token
    //     })
    //   });
    // }
    createAuthorizationHeader(headers) {
        headers.append('Authorization', this.loadToken());
    }
    // Function to get token from client local storage
    loadToken() {
        this.authToken = localStorage.getItem('token');
        return this.authToken;
    }
    loadUserData() {
        this.userData = localStorage.getItem('userDetails');
        return this.userData;
    }
    // Function to logout
    logout() {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
    // Function to logout
    adminLogout() {
        localStorage.clear();
        this.router.navigate(['/admin-login']);
    }
    // Function to store user's data in client local storage
    storeUserData(token, userData) {
        localStorage.setItem('token', token);
        localStorage.setItem('userDetails', JSON.stringify(userData));
        localStorage.setItem('userIsLoggedIn', 'yes');
    }
    // Function to check if user is logged in
    loggedIn() {
        // return tokenNotExpired();
        return true;
    }
    getCheckError(error) {
        var errMsg = error.name + ' :: ' + error.message;
        this.snackbar.open(errMsg, error.statusText, { duration: 3000 });
        if (error.status === 401) {
            this.logout();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(false);
        }
        else {
            const errMsg = error.message
                ? error.message
                : error.status
                    ? `${error.status} - ${error.statusText}`
                    : 'Server error';
            // console.error(errMsg);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errMsg);
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map