(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-payments-payments-module"],{

/***/ "B7Ul":
/*!********************************************************!*\
  !*** ./src/app/components/payments/payments.module.ts ***!
  \********************************************************/
/*! exports provided: PaymentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsModule", function() { return PaymentsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments-routing.module */ "dj1Q");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payments/payments.component */ "jK28");
/* harmony import */ var _generic_modules_generic_table_datatable_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generic-modules/generic-table/datatable.module */ "9D7/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class PaymentsModule {
}
PaymentsModule.ɵfac = function PaymentsModule_Factory(t) { return new (t || PaymentsModule)(); };
PaymentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PaymentsModule });
PaymentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_1__["PaymentsRoutingModule"],
            _generic_modules_generic_table_datatable_module__WEBPACK_IMPORTED_MODULE_3__["DatatableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PaymentsModule, { declarations: [_payments_payments_component__WEBPACK_IMPORTED_MODULE_2__["PaymentsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _payments_routing_module__WEBPACK_IMPORTED_MODULE_1__["PaymentsRoutingModule"],
        _generic_modules_generic_table_datatable_module__WEBPACK_IMPORTED_MODULE_3__["DatatableModule"]] }); })();


/***/ }),

/***/ "dj1Q":
/*!****************************************************************!*\
  !*** ./src/app/components/payments/payments-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PaymentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsRoutingModule", function() { return PaymentsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payments_payments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments/payments.component */ "jK28");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _payments_payments_component__WEBPACK_IMPORTED_MODULE_1__["PaymentsComponent"] }
];
class PaymentsRoutingModule {
}
PaymentsRoutingModule.ɵfac = function PaymentsRoutingModule_Factory(t) { return new (t || PaymentsRoutingModule)(); };
PaymentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PaymentsRoutingModule });
PaymentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "jK28":
/*!********************************************************************!*\
  !*** ./src/app/components/payments/payments/payments.component.ts ***!
  \********************************************************************/
/*! exports provided: PaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsComponent", function() { return PaymentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _generic_modules_generic_table_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generic-modules/generic-table/datatable/datatable.component */ "FczN");



function PaymentsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "trends-datatable", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectRows", function PaymentsComponent_ng_container_3_Template_trends_datatable_onSelectRows_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onRowsSelected($event); })("onRowClickEvent", function PaymentsComponent_ng_container_3_Template_trends_datatable_onRowClickEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onRowClick($event); })("onActonModal", function PaymentsComponent_ng_container_3_Template_trends_datatable_onActonModal_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onModalAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postObj", ctx_r0.postObj);
} }
class PaymentsComponent {
    constructor() {
        this.loader = false;
        this.assignPlanFlag = false;
        this.postObj = {
            page: 'payments'
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
        if (event.name == 'assignFreePlan') {
            this.sendData = event.rowData;
            this.assignPlanFlag = true;
        }
        if (event.name == "downloadInvoice") {
            if (event.rowData.link) {
                window.open(event.rowData.link, "_blank");
            }
            else {
                // this.snackBar.open('No invoice generated for this record !', '', { duration: 2000 });
            }
        }
    }
}
PaymentsComponent.ɵfac = function PaymentsComponent_Factory(t) { return new (t || PaymentsComponent)(); };
PaymentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentsComponent, selectors: [["trends-payments"]], decls: 4, vars: 1, consts: [[1, "row", "new-white-bg", "py-3"], [1, "col-md-12", "pl-0", "pr-0", "ml-0", "mr-0"], [4, "ngIf"], [1, "mt-0", "mb-0", "pt-0", "pb-0", 3, "postObj", "onSelectRows", "onRowClickEvent", "onActonModal"]], template: function PaymentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaymentsComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postObj.page);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _generic_modules_generic_table_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__["DataTableComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50cy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=components-payments-payments-module.js.map