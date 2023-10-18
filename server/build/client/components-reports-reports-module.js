(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-reports-reports-module"],{

/***/ "Nwqe":
/*!*****************************************************************!*\
  !*** ./src/app/components/reports/reports/reports.component.ts ***!
  \*****************************************************************/
/*! exports provided: MY_FORMATS, MY_FORMATS1, ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS1", function() { return MY_FORMATS1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _reports_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reports.service */ "SdzY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _generic_modules_select_all_select_all_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../generic-modules/select-all/select-all.component */ "Dl4O");




// tslint:disable-next-line:no-duplicate-imports












function ReportsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Please wait");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ReportsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReportsComponent_ng_container_9_Template_h6_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const repL_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.openDetails(repL_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const repL_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", repL_r4.name, " ");
} }
function ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "fyt-select-all", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", _r17)("values", filter_r12);
} }
function ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_ng_container_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r23 = ctx.$implicit;
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r23[filter_r12.value]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r23[filter_r12.display], " ");
} }
function ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_ng_container_8_mat_option_1_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", filter_r12.options);
} }
function ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_ng_container_9_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r27.name, " ");
} }
function ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_ng_container_9_mat_option_1_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", filter_r12.options);
} }
function ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-select", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_Template_mat_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return (ctx_r29.postObj.filters[filter_r12.model] = $event); })("change", function ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_Template_mat_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r32.onChangeFilter(filter_r12, filter_r12.model, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_ng_container_7_Template, 2, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_ng_container_8_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_ng_container_9_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](filter_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r14.postObj.filters[filter_r12.model])("name", filter_r12.model)("multiple", filter_r12.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", filter_r12.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", filter_r12.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !filter_r12.value);
} }
function ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function ReportsComponent_div_11_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_1_Template, 10, 7, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_2_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ReportsComponent_div_11_ng_container_1_ng_container_8_ng_container_3_Template, 2, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const filter_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", filter_r12.type == "select" && filter_r12.options && filter_r12.options.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", filter_r12.type == "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", filter_r12.type == "monthYear");
} }
function ReportsComponent_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReportsComponent_div_11_ng_container_1_Template_h6_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const re_r9 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r35.openDetails(re_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ReportsComponent_div_11_ng_container_1_ng_container_8_Template, 4, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReportsComponent_div_11_ng_container_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const re_r9 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return !ctx_r37.isRestricted && ctx_r37.restrict() || ctx_r37.isRestricted && ctx_r37.getReport(ctx_r37.reportsSideData.table, re_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const re_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", re_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", re_r9.options);
} }
function ReportsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ReportsComponent_div_11_ng_container_1_Template, 12, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.reportsSideData.List);
} }
function ReportsComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
const moment = moment__WEBPACK_IMPORTED_MODULE_3___default.a || moment__WEBPACK_IMPORTED_MODULE_3__;
const MY_FORMATS = {
    parse: {
        dateInput: 'DD MMM YYYY',
    },
    display: {
        dateInput: 'DD MMM YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'DD MMM YYYY',
        monthYearA11yLabel: 'YYYY',
    },
};
const MY_FORMATS1 = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
class ReportsComponent {
    constructor(reportsService, router) {
        this.reportsService = reportsService;
        this.router = router;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](moment());
        this.reportsObj = {};
        this.loader = false;
        this.postObj = {
            filters: {}
        };
        this.restrictionFlag = false;
        this.isRestricted = true;
        this.today = new Date();
    }
    // setMonthAndYear(normalizedMonthAndYear: Moment, datepicker: MatDatepicker<Moment>, filter) {
    //   console.log("-----", normalizedMonthAndYear, datepicker, filter);
    //   const ctrlValue = this.date.value!;
    //   ctrlValue.month(normalizedMonthAndYear.month());
    //   ctrlValue.year(normalizedMonthAndYear.year());
    //   this.date.setValue(ctrlValue);
    //   datepicker.close();
    //   this.postObj.filters[filter.model] = [`${normalizedMonthAndYear.month()} ${normalizedMonthAndYear.year()}`];
    // }
    ngOnInit() {
        // this.settingsRestrictions = JSON.parse(localStorage.getItem('settings'));
        this.getReportListFun();
    }
    getReportListFun() {
        this.reportsService.getReportList({}).subscribe(res => {
            if (res && res.data && res.data.length > 0) {
                this.reportList = res.data;
                this.reportsSideData = this.reportList[0];
                // console.log('this.reportsSideData', this.reportsSideData);
                this.selectedReportName = this.reportsSideData.name;
            }
        });
    }
    getReport(page, data) {
        console.log("data", data);
        let sendObj = {
            "filters": Object.assign(Object.assign({}, (data.filters)), (this.postObj.filters)),
            "page": data.table
        };
        console.log("sendObj", sendObj);
        this.reportsService.getReport(sendObj).subscribe(res => {
            this.postObj = {
                filters: {}
            };
        });
    }
    // for filters
    onChangeFilter(param1, model, event) {
    }
    openDetails(data) {
        // let pageMap = { 'excelMembers': "91", 'subscription': "92", 'enquiryExcel': "93", 'staff': "94", 'trainer': "95", 'accounts': "96", 'getMemberPayment': "97", 'expense': "98" }
        // let pageNo = pageMap[data.table];
        // if (this.settingsRestrictions && this.settingsRestrictions.includes(pageNo)) {
        //   this.isRestricted = false;
        // } else this.isRestricted = true;
        console.log('openDetails', data);
        this.reportsSideData = data;
        this.selectedReportName = this.reportsSideData.name;
    }
    restrict() {
        this.restrictionFlag = true;
    }
    onCardAction() {
        this.restrictionFlag = false;
    }
}
ReportsComponent.ɵfac = function ReportsComponent_Factory(t) { return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_reports_service__WEBPACK_IMPORTED_MODULE_5__["ReportsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReportsComponent, selectors: [["trends-reports"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["DateAdapter"],
                useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__["MomentDateAdapter"],
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_1__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]],
            },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_FORMATS"], useValue: MY_FORMATS1 },
        ])], decls: 13, vars: 4, consts: [[4, "ngIf"], [1, "container-fluid", "pl-0", "pr-0", "ml-0", "mr-0"], [1, "row", "new-white-bg", "py-3"], [1, "col-md-4", "py-3"], ["type", "button", 1, "ta-c", "new-tab-head-invoice"], [1, "col-md-8"], [1, "col-md-4", "col-12"], [1, "row", "py-3"], [4, "ngFor", "ngForOf"], [1, "col-md-8", "col-12", "py-4", "pl-0", "ml-0", "mt-5"], ["class", "row", "style", "background-color: #F2F2F2; border-radius: 4px;", 4, "ngIf"], [1, "fyt-spinner-container"], [1, "text-center", "fyt-loading-msg"], [1, "col-md-12", "col-12", "py-2"], [1, "new-1A1A1A", "fnt-15", "new-Montserrat-Medium", "fyt-link-btn", 3, "click"], [1, "row", 2, "background-color", "#F2F2F2", "border-radius", "4px"], [1, "col-md-12", "py-2"], [1, "row", "pt-5"], [1, "col-md-4"], [1, "col-md-5", "pl-0", "pr-0"], [1, "row"], [1, "col-md-3", "py-2", "pl-0", "pr-0", "ml-0", "mr-0"], ["type", "button", "mat-raised-button", "", 1, "new-tab-side-enquiry", "new-Montserrat-Medium", 3, "click"], [1, "col-md-12", "col-lg-12"], [3, "ngModel", "name", "multiple", "ngModelChange", "change"], ["filterSelect", "ngModel"], [3, "model", "values"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "col-md-6", "col-lg-6"], [1, "fyt-modal-design-branch", "animated", "slideInUp", "slow", 2, "z-index", "3"]], template: function ReportsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ReportsComponent_ng_container_0_Template, 5, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " ALL REPORTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ReportsComponent_ng_container_9_Template, 4, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ReportsComponent_div_11_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ReportsComponent_ng_container_12_Template, 2, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.reportList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.reportsSideData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.restrictionFlag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _generic_modules_select_all_select_all_component__WEBPACK_IMPORTED_MODULE_12__["SelectAllComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatOption"]], styles: [".mat-expansion-panel-header-description[_ngcontent-%COMP%], .mat-expansion-panel-header-title[_ngcontent-%COMP%] {\r\n    display: block !important;\r\n    flex-grow: 1;\r\n    margin-right: 16px;\r\n}\r\n\r\n.mat-expansion-panel[_ngcontent-%COMP%] {\r\n    box-shadow: none;\r\n}\r\n\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]:hover {\r\n    background-color: #75A941 !important;\r\n}\r\n\r\n.mat-expansion-panel-header.mat-expanded[_ngcontent-%COMP%] {\r\n    background-image: linear-gradient(to right, #3FC0D1, #75A941) !important;\r\n    height: 48px !important;\r\n}\r\n\r\n  .mat-expansion-panel-body {\r\n    background: #F2F2F2 !important;\r\n    padding-left: 20px !important;\r\n    padding-right: 20px !important;\r\n}\r\n\r\n  .specific-class>.mat-expansion-indicator:after {\r\n    color: white !important;\r\n}\r\n\r\n  .mat-expansion-panel-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: visible;\r\n    padding-left: 20px !important;\r\n    padding-right: 20px !important;\r\n    border: none !important;\r\n    box-shadow: none !important;\r\n    padding-top: 1px !important;\r\n}\r\n\r\n.fyt-modal-design-branch[_ngcontent-%COMP%] {\r\n    min-width: 35%;\r\n    max-width: 40%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 10rem;\r\n    right: 20%;\r\n    max-height: 50%;\r\n    min-height: 200px;\r\n    \r\n    margin-right: 1rem;\r\n    box-shadow: 0 3px 5px 5px rgb(0 0 0 / 6%), 0 6px 10px 0 rgb(0 0 0 / 7%), 0 1px 18px 0 rgb(0 0 0 / 12%) !important;\r\n    \r\n    background: #fff;\r\n    padding: .5rem;\r\n    border-radius: 7px;\r\n}\r\n\r\n.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%] {\r\n    pointer-events: none;\r\n}\r\n\r\n.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHdFQUF3RTtJQUN4RSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGVBQWU7SUFDZixVQUFVO0lBQ1YsVUFBVTtJQUNWLFVBQVU7SUFDVixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsaUhBQWlIO0lBQ2pILHNEQUFzRDtJQUN0RCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoicmVwb3J0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NUE5NDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzRkMwRDEsICM3NUE5NDEpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogI0YyRjJGMiAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc3BlY2lmaWMtY2xhc3M+Lm1hdC1leHBhbnNpb24taW5kaWNhdG9yOmFmdGVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZ5dC1tb2RhbC1kZXNpZ24tYnJhbmNoIHtcclxuICAgIG1pbi13aWR0aDogMzUlO1xyXG4gICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAxMHJlbTtcclxuICAgIHJpZ2h0OiAyMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7ICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA1cHggNXB4IHJnYigwIDAgMCAvIDYlKSwgMCA2cHggMTBweCAwIHJnYigwIDAgMCAvIDclKSwgMCAxcHggMThweCAwIHJnYigwIDAgMCAvIDEyJSkgIWltcG9ydGFudDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgwLCAwLCAwLCAuMDc1KTsgKi9cclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbW9udGgtcGlja2VyIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbW9udGgtcGlja2VyIC5tYXQtY2FsZW5kYXItYXJyb3cge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "SdzY":
/*!*******************************************************!*\
  !*** ./src/app/components/reports/reports.service.ts ***!
  \*******************************************************/
/*! exports provided: ReportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsService", function() { return ReportsService; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-modules/global-api.service */ "nNIA");
/* harmony import */ var src_app_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared-modules/services/auth.service */ "w2Rb");






class ReportsService {
    constructor(http, globalApiService, authService) {
        this.http = http;
        this.globalApiService = globalApiService;
        this.authService = authService;
    }
    // getAllReports(postBody: any): Observable<any> {
    //   return this.http.post(this.globalApiService.getApiUrl() + '/structure/reportList', postBody)
    //     .pipe(catchError((e: any) => this.authService.getCheckError(e)));
    // }
    getReportList(postBody) {
        return this.http.post(this.globalApiService.getApiUrl() + '/structure/reportList', postBody)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((e) => this.authService.getCheckError(e)));
    }
    getReport(postBody) {
        // let headers = new Headers();
        // headers.append("Accept", 'application/x-www-form-urlencoded');
        // headers.append('Content-Type', 'application/json');
        // headers.append("Authorization", localStorage.getItem('token'));
        // let options = new RequestOptions({
        //   headers: headers
        // })
        // options.responseType = ResponseContentType.Blob;
        return this.http.post(this.globalApiService.getApiUrl() + '/structure/exportExcel', postBody, { observe: 'response', responseType: 'blob' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            // Removed checking of valid response
            let fileBlob = response.body;
            let blob = new Blob([fileBlob], {
                type: 'application/pdf' // must match the Accept type
            });
            let filename = postBody.filters.expenseType === 'Salary' ? 'Salary.xlsx' : postBody.page + '.xlsx';
            file_saver__WEBPACK_IMPORTED_MODULE_0___default.a.saveAs(blob, filename);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((e) => this.authService.getCheckError(e)));
    }
}
ReportsService.ɵfac = function ReportsService_Factory(t) { return new (t || ReportsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_4__["GlobalApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
ReportsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ReportsService, factory: ReportsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "TZ7e":
/*!**************************************************************!*\
  !*** ./src/app/components/reports/reports-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reports/reports.component */ "Nwqe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_1__["ReportsComponent"] }
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵfac = function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); };
ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "YXPf":
/*!******************************************************!*\
  !*** ./src/app/components/reports/reports.module.ts ***!
  \******************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared-modules/angular.material.module */ "bBoo");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-routing.module */ "TZ7e");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports/reports.component */ "Nwqe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_modules_format_module_formatter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared-modules/format-module/formatter.module */ "S9zJ");
/* harmony import */ var _generic_modules_select_all_select_all_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../generic-modules/select-all/select-all.module */ "+/Bm");
/* harmony import */ var _generic_modules_restriction_restriction_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generic-modules/restriction/restriction.module */ "QZkq");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











// import { NgxChartsModule } from '@swimlane/ngx-charts';
class ReportsModule {
}
ReportsModule.ɵfac = function ReportsModule_Factory(t) { return new (t || ReportsModule)(); };
ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
            src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
            src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"],
            src_app_shared_modules_format_module_formatter_module__WEBPACK_IMPORTED_MODULE_5__["FormatterModule"],
            _generic_modules_select_all_select_all_module__WEBPACK_IMPORTED_MODULE_6__["SelectAllModule"],
            _generic_modules_restriction_restriction_module__WEBPACK_IMPORTED_MODULE_7__["RestrictionModule"],
            _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MatMomentDateModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_reports_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
        src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
        src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_1__["AngularMaterialModule"],
        src_app_shared_modules_format_module_formatter_module__WEBPACK_IMPORTED_MODULE_5__["FormatterModule"],
        _generic_modules_select_all_select_all_module__WEBPACK_IMPORTED_MODULE_6__["SelectAllModule"],
        _generic_modules_restriction_restriction_module__WEBPACK_IMPORTED_MODULE_7__["RestrictionModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_8__["MatMomentDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-reports-reports-module.js.map