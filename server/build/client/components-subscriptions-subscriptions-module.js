(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-subscriptions-subscriptions-module"],{

/***/ "drKq":
/*!**************************************************************************!*\
  !*** ./src/app/components/subscriptions/subscriptions-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: SubscriptionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsRoutingModule", function() { return SubscriptionsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscriptions/subscriptions.component */ "o5Xy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: "",
        component: _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_1__["SubscriptionsComponent"]
    }
];
class SubscriptionsRoutingModule {
}
SubscriptionsRoutingModule.ɵfac = function SubscriptionsRoutingModule_Factory(t) { return new (t || SubscriptionsRoutingModule)(); };
SubscriptionsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SubscriptionsRoutingModule });
SubscriptionsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SubscriptionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "e0N3":
/*!*******************************************************************!*\
  !*** ./src/app/components/subscriptions/subscriptions.service.ts ***!
  \*******************************************************************/
/*! exports provided: SubscriptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsService", function() { return SubscriptionsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-modules/global-api.service */ "nNIA");
/* harmony import */ var src_app_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-modules/services/auth.service */ "w2Rb");





class SubscriptionsService {
    constructor(http, globalApiService, authService) {
        this.http = http;
        this.globalApiService = globalApiService;
        this.authService = authService;
    }
    sendInvoice(postObj) {
        return this.http.post(this.globalApiService.getApiUrl() + '/admin/sendInvoice', postObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((e) => this.authService.getCheckError(e)));
    }
}
SubscriptionsService.ɵfac = function SubscriptionsService_Factory(t) { return new (t || SubscriptionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_3__["GlobalApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
SubscriptionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SubscriptionsService, factory: SubscriptionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "o5Xy":
/*!***********************************************************************************!*\
  !*** ./src/app/components/subscriptions/subscriptions/subscriptions.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsComponent", function() { return SubscriptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _subscriptions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subscriptions.service */ "e0N3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _generic_modules_generic_table_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generic-modules/generic-table/datatable/datatable.component */ "FczN");




function SubscriptionsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "trends-datatable", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectRows", function SubscriptionsComponent_ng_container_3_Template_trends_datatable_onSelectRows_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onRowsSelected($event); })("onRowClickEvent", function SubscriptionsComponent_ng_container_3_Template_trends_datatable_onRowClickEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onRowClick($event); })("onActonModal", function SubscriptionsComponent_ng_container_3_Template_trends_datatable_onActonModal_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onModalAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postObj", ctx_r0.postObj);
} }
class SubscriptionsComponent {
    constructor(subscriptionsService) {
        this.subscriptionsService = subscriptionsService;
        this.loader = false;
        this.assignPlanFlag = false;
        this.deactiveMemberFlag = false;
        this.postObj = {
            page: 'subscription'
        };
    }
    ngOnInit() {
        this.applyFilters();
    }
    applyFilters() {
        this.postObj = Object.assign({}, this.postObj);
    }
    onRowsSelected(event) {
    }
    onRowsSelectedSub(event) {
    }
    onRowClick(event) {
    }
    onModalAction(event) {
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
        if (event.name == "downloadInvoice") {
            if (event.rowData.link) {
                window.open(event.rowData.link, "_blank");
            }
            else {
                // this.snackBar.open('No invoice generated for this record !', '', { duration: 2000 });
            }
        }
        if (event.name == "sendInvoice") {
            console.log("Hello123s", event.rowData.orderId);
            this.subscriptionsService.sendInvoice({ 'orderId': event.rowData.orderId }).subscribe(res => {
                if (res.statusCode == '001') {
                    console.log("Hello", event.rowData.orderId);
                }
                else {
                }
            });
        }
    }
    onCardAction(event) {
        this.assignPlanFlag = false;
    }
    deactivateMember() {
    }
    closeDialog(flag) {
        this.deactiveMemberFlag = false;
    }
}
SubscriptionsComponent.ɵfac = function SubscriptionsComponent_Factory(t) { return new (t || SubscriptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_subscriptions_service__WEBPACK_IMPORTED_MODULE_1__["SubscriptionsService"])); };
SubscriptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscriptionsComponent, selectors: [["trends-subscriptions"]], decls: 4, vars: 1, consts: [[1, "row", "new-white-bg", "py-3"], [1, "col-md-12", "pl-0", "pr-0", "ml-0", "mr-0"], [4, "ngIf"], [1, "mt-0", "mb-0", "pt-0", "pb-0", 3, "postObj", "onSelectRows", "onRowClickEvent", "onActonModal"]], template: function SubscriptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubscriptionsComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postObj.page);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _generic_modules_generic_table_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_3__["DataTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJzY3JpcHRpb25zLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "oYuK":
/*!******************************************************************!*\
  !*** ./src/app/components/subscriptions/subscriptions.module.ts ***!
  \******************************************************************/
/*! exports provided: SubscriptionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsModule", function() { return SubscriptionsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscriptions-routing.module */ "drKq");
/* harmony import */ var src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-modules/angular.material.module */ "bBoo");
/* harmony import */ var _generic_modules_generic_table_datatable_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generic-modules/generic-table/datatable.module */ "9D7/");
/* harmony import */ var _subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subscriptions/subscriptions.component */ "o5Xy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class SubscriptionsModule {
}
SubscriptionsModule.ɵfac = function SubscriptionsModule_Factory(t) { return new (t || SubscriptionsModule)(); };
SubscriptionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SubscriptionsModule });
SubscriptionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_1__["SubscriptionsRoutingModule"],
            _generic_modules_generic_table_datatable_module__WEBPACK_IMPORTED_MODULE_3__["DatatableModule"],
            src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SubscriptionsModule, { declarations: [_subscriptions_subscriptions_component__WEBPACK_IMPORTED_MODULE_4__["SubscriptionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _subscriptions_routing_module__WEBPACK_IMPORTED_MODULE_1__["SubscriptionsRoutingModule"],
        _generic_modules_generic_table_datatable_module__WEBPACK_IMPORTED_MODULE_3__["DatatableModule"],
        src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_2__["AngularMaterialModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-subscriptions-subscriptions-module.js.map