(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-trends-trends-module"],{

/***/ "FgSR":
/*!************************************************************!*\
  !*** ./src/app/components/trends/trends-routing.module.ts ***!
  \************************************************************/
/*! exports provided: TrendsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendsRoutingModule", function() { return TrendsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trends_trends_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trends/trends.component */ "ZoSL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '', component: _trends_trends_component__WEBPACK_IMPORTED_MODULE_1__["TrendsComponent"]
    }
];
class TrendsRoutingModule {
}
TrendsRoutingModule.ɵfac = function TrendsRoutingModule_Factory(t) { return new (t || TrendsRoutingModule)(); };
TrendsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TrendsRoutingModule });
TrendsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TrendsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "OGrp":
/*!**********************************************************************!*\
  !*** ./src/app/components/trends/add-trends/add-trends.component.ts ***!
  \**********************************************************************/
/*! exports provided: MY_FORMATS, AddTrendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTrendsComponent", function() { return AddTrendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _trends_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trends.service */ "PygI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");




// tslint:disable-next-line:no-duplicate-imports










function AddTrendsComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trend_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", trend_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](trend_r8.name);
} }
function AddTrendsComponent_div_17_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app1_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", app1_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app1_r10.name);
} }
function AddTrendsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTrendsComponent_div_17_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.trendsObj.productName = $event; })("ngModelChange", function AddTrendsComponent_div_17_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.showInputFields($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddTrendsComponent_div_17_mat_option_5_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.trendsObj.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.fortnightArray);
} }
function AddTrendsComponent_div_18_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app1_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", app1_r15.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app1_r15.name);
} }
function AddTrendsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTrendsComponent_div_18_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.trendsObj.productName = $event; })("ngModelChange", function AddTrendsComponent_div_18_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.showInputFields($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddTrendsComponent_div_18_mat_option_5_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.trendsObj.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.monthlyArray);
} }
function AddTrendsComponent_mat_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unit_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unit_r19);
} }
function AddTrendsComponent_mat_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app1_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", app1_r20.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app1_r20.name);
} }
const _c0 = function () { return { standalone: true }; };
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
class AddTrendsComponent {
    constructor(trendsService) {
        this.trendsService = trendsService;
        this.onActon = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.trendsObj = {};
        this.status = 'Create';
        this.monthlyArray = [
            {
                "name": "LPG/GAS CYL (DOM)",
                "value": "LPG/GAS CYL (DOM)",
                "trendType": "lpg"
            },
            {
                "name": "MTO",
                "value": "MTO",
                "trendType": "mto"
            },
            {
                "name": "HEXANE",
                "value": "HEXANE",
                "trendType": "hexane"
            },
            {
                "name": "KEROSENE",
                "value": "KEROSENE",
                "trendType": "kerosene"
            },
            {
                "name": "LPG/GAS CYL (NON-DOM)",
                "value": "LPG/GAS CYL (NON-DOM)",
                "trendType": "lpg"
            }
        ];
        this.fortnightArray = [
            {
                "name": "BITUMEN",
                "value": "BITUMEN",
                "trendType": "bitumen/fo/hsd/ldo"
            },
            {
                "name": "FURNACE OIL",
                "value": "FURNACE OIL",
                "trendType": "bitumen/fo/hsd/ldo"
            },
            {
                "name": "HSD(INSTITUTIONAL)",
                "value": "HSD(INSTITUTIONAL)",
                "trendType": "bitumen/fo/hsd/ldo"
            },
            {
                "name": "LDO",
                "value": "LDO",
                "trendType": "bitumen/fo/hsd/ldo"
            }
        ];
        this.trendNames = [
            {
                "name": "Fortnight Product",
                "value": "fortnight"
            },
            {
                "name": "Monthly Product",
                "value": "monthly"
            }
        ];
        this.trendArray = [
            {
                "name": "+",
                "value": "+"
            },
            {
                "name": "-",
                "value": "-"
            }
        ];
        this.msdFlag = false;
        this.lpgFlag = false;
        this.bitumenFlag = false;
        this.updateFortFlag = false;
        this.updateMonthFlag = false;
        this.trendsUnitArray = [
            'KL', 'CYLINDER', 'MT'
        ];
    }
    ngOnInit() {
        if (this.InutDataObj.appId) {
            this.trendsObj = this.InutDataObj;
            this.status = this.InutDataObj.status;
            this.checkUpdateFields();
        }
        else {
            this.showUpdateFields();
        }
    }
    ngOnChanges() {
    }
    showUpdateFields() {
        this.updateFortFlag = false;
        this.updateMonthFlag = false;
        if (this.trendsObj.trendName == 'fortnight')
            this.updateFortFlag = true;
        if (this.trendsObj.trendName == 'monthly')
            this.updateMonthFlag = true;
    }
    checkUpdateFields() {
        this.updateFortFlag = false;
        this.updateMonthFlag = false;
        if (this.trendsObj.trendName == 'fortnight')
            this.updateFortFlag = true;
        if (this.trendsObj.trendName == 'monthly')
            this.updateMonthFlag = true;
    }
    showInputFields(data) {
        let selectedArray = [];
        if (this.updateFortFlag == true)
            selectedArray = this.fortnightArray;
        if (this.updateMonthFlag == true)
            selectedArray = this.monthlyArray;
        let obj = selectedArray.find((o) => o.value === data);
        this.trendsObj.trendType = obj.trendType;
        this.trendsObj.productName = obj.value;
    }
    checkInputFields() {
        this.msdFlag = false;
        this.lpgFlag = false;
        this.bitumenFlag = false;
        if (this.trendsObj.appId == 'msd') {
            // this.trendsObj={};
            this.trendsObj.appId = 'msd';
            this.msdFlag = true;
        }
        if (this.trendsObj.appId == 'lpg') {
            // this.trendsObj={};
            this.trendsObj.appId = 'lpg';
            this.lpgFlag = true;
        }
        if (this.trendsObj.appId == 'bitumen') {
            // this.trendsObj={};
            this.trendsObj.appId = 'bitumen';
            this.bitumenFlag = true;
        }
    }
    showInput1Fields() {
        this.msdFlag = false;
        this.lpgFlag = false;
        this.bitumenFlag = false;
        if (this.trendsObj.appId2 == 'msd') {
            this.trendsObj = {};
            this.trendsObj.appId2 = 'msd';
            this.msdFlag = true;
        }
        if (this.trendsObj.appId2 == 'lpg') {
            this.trendsObj = {};
            this.trendsObj.appId2 = 'lpg';
            this.lpgFlag = true;
        }
        if (this.trendsObj.appId2 == 'bitumen') {
            this.trendsObj = {};
            this.trendsObj.appId2 = 'bitumen';
            this.bitumenFlag = true;
        }
    }
    checkInput1Fields() {
        this.msdFlag = false;
        this.lpgFlag = false;
        this.bitumenFlag = false;
        if (this.trendsObj.appId2 == 'msd') {
            // this.trendsObj={};
            this.trendsObj.appId2 = 'msd';
            this.msdFlag = true;
        }
        if (this.trendsObj.appId2 == 'lpg') {
            // this.trendsObj={};
            this.trendsObj.appId2 = 'lpg';
            this.lpgFlag = true;
        }
        if (this.trendsObj.appId2 == 'bitumen') {
            // this.trendsObj={};
            this.trendsObj.appId2 = 'bitumen';
            this.bitumenFlag = true;
        }
    }
    closeDialog(flag) {
        this.onActon.emit({ flag: flag, page: 'addTrends' });
    }
    createTrend() {
        if (this.InutDataObj.appId) {
            this.trendsService.updateTrendsFun(this.trendsObj).subscribe(res => {
                if (res.status == 'Success') {
                    this.closeDialog('cancel');
                }
                else {
                }
            });
        }
        else {
            this.trendsService.createTrendsFun(this.trendsObj).subscribe(res => {
                if (res.status == 'Success') {
                    this.closeDialog('cancel');
                }
                else {
                }
            });
        }
    }
}
AddTrendsComponent.ɵfac = function AddTrendsComponent_Factory(t) { return new (t || AddTrendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_trends_service__WEBPACK_IMPORTED_MODULE_4__["TrendsService"])); };
AddTrendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddTrendsComponent, selectors: [["trends-add-trends"]], inputs: { InutDataObj: "InutDataObj" }, outputs: { onActon: "onActon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
                useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MomentDateAdapter"],
                deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_2__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
            },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 63, vars: 29, consts: [[1, "row", "new-white-bg", "mb-10"], [1, "col-md-12", "pt-20"], [1, "fyt-display-flex"], [1, "new-000000", "new-Montserrat-Medium", "fnt-20", "pl-10"], [1, "sp"], [1, "new-Montserrat-Medium", "fyt-link-btn", "new-808080"], [2, "border-bottom", "1px solid #808080", 3, "click"], [1, "col-md-12", "py-3"], [1, "row"], [1, "col-lg-4"], ["appearance", "outline"], ["name", "trendName", "required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-4", 4, "ngIf"], ["matInput", "", "name", "validFrom", "required", "", 3, "matDatepicker", "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown"], ["matSuffix", "", 3, "for"], ["validFrom", ""], ["matInput", "", "name", "validThrough", "required", "", 3, "matDatepicker", "ngModel", "min", "ngModelOptions", "ngModelChange", "click", "keydown"], ["validThrough", ""], ["matInput", "", "name", "trendDate", "required", "", 3, "matDatepicker", "ngModel", "min", "max", "ngModelOptions", "ngModelChange", "click", "keydown"], ["trendDate", ""], ["matInput", "", "type", "number", "name", "trendValue", "required", "", 3, "ngModel", "ngModelChange"], ["name", "trendUnite", "required", "", 3, "ngModel", "ngModelChange"], ["name", "trend", "required", "", 3, "ngModel", "ngModelChange"], [1, "col-lg-12", "ta-c", "pb-20"], [1, "new-btn-8CC63F-popup", "px-5", "py-1", 3, "click"], [3, "value"], ["name", "appId2", "required", "", 3, "ngModel", "ngModelChange"], ["name", "appId", "required", "", 3, "ngModel", "ngModelChange"]], template: function AddTrendsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTrendsComponent_Template_span_click_7_listener() { return ctx.closeDialog("cancel"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close \u00A0x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Trend Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTrendsComponent_Template_mat_select_ngModelChange_15_listener($event) { return ctx.trendsObj.trendName = $event; })("ngModelChange", function AddTrendsComponent_Template_mat_select_ngModelChange_15_listener() { return ctx.showUpdateFields(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddTrendsComponent_mat_option_16_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddTrendsComponent_div_17_Template, 6, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddTrendsComponent_div_18_Template, 6, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Valid From");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTrendsComponent_Template_input_ngModelChange_23_listener($event) { return ctx.trendsObj.validFrom = $event; })("click", function AddTrendsComponent_Template_input_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return _r3.open(); })("keydown", function AddTrendsComponent_Template_input_keydown_23_listener() { return false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "mat-datepicker-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-datepicker", null, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Valid Through");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTrendsComponent_Template_input_ngModelChange_31_listener($event) { return ctx.trendsObj.validThrough = $event; })("click", function AddTrendsComponent_Template_input_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34); return _r4.open(); })("keydown", function AddTrendsComponent_Template_input_keydown_31_listener() { return false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-datepicker-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-datepicker", null, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Trend Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTrendsComponent_Template_input_ngModelChange_39_listener($event) { return ctx.trendsObj.trendDate = $event; })("click", function AddTrendsComponent_Template_input_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42); return _r5.open(); })("keydown", function AddTrendsComponent_Template_input_keydown_39_listener() { return false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-datepicker-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-datepicker", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Trend Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTrendsComponent_Template_input_ngModelChange_47_listener($event) { return ctx.trendsObj.trendValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Trend Unite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTrendsComponent_Template_mat_select_ngModelChange_52_listener($event) { return ctx.trendsObj.trendUnite = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AddTrendsComponent_mat_option_53_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Trend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddTrendsComponent_Template_mat_select_ngModelChange_58_listener($event) { return ctx.trendsObj.trend = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AddTrendsComponent_mat_option_59_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddTrendsComponent_Template_button_click_61_listener() { return ctx.createTrend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.status, " New Trends ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trendsObj.trendName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateFortFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.updateMonthFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r3)("ngModel", ctx.trendsObj.validFrom)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4)("ngModel", ctx.trendsObj.validThrough)("min", ctx.trendsObj.validFrom)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5)("ngModel", ctx.trendsObj.trendDate)("min", ctx.trendsObj.validFrom)("max", ctx.trendsObj.validThrough)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trendsObj.trendValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trendsObj.trendUnite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendsUnitArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trendsObj.trend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trendArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.status, " Trend");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdHJlbmRzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "PygI":
/*!*****************************************************!*\
  !*** ./src/app/components/trends/trends.service.ts ***!
  \*****************************************************/
/*! exports provided: TrendsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendsService", function() { return TrendsService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-modules/global-api.service */ "nNIA");
/* harmony import */ var src_app_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-modules/services/auth.service */ "w2Rb");





class TrendsService {
    constructor(http, globalApiService, authService) {
        this.http = http;
        this.globalApiService = globalApiService;
        this.authService = authService;
    }
    createTrendsFun(postObj) {
        return this.http.post(this.globalApiService.getApiUrl() + '/trend/create', postObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((e) => this.authService.getCheckError(e)));
    }
    updateTrendsFun(postObj) {
        return this.http.post(this.globalApiService.getApiUrl() + '/trend/update', postObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((e) => this.authService.getCheckError(e)));
    }
    deleteTrendsFun(postObj) {
        return this.http.post(this.globalApiService.getApiUrl() + '/trend/delete', postObj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])((e) => this.authService.getCheckError(e)));
    }
}
TrendsService.ɵfac = function TrendsService_Factory(t) { return new (t || TrendsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_modules_global_api_service__WEBPACK_IMPORTED_MODULE_3__["GlobalApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
TrendsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TrendsService, factory: TrendsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "S8Gx":
/*!****************************************************!*\
  !*** ./src/app/components/trends/trends.module.ts ***!
  \****************************************************/
/*! exports provided: TrendsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendsModule", function() { return TrendsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _trends_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trends-routing.module */ "FgSR");
/* harmony import */ var _trends_trends_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trends/trends.component */ "ZoSL");
/* harmony import */ var _add_trends_add_trends_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-trends/add-trends.component */ "OGrp");
/* harmony import */ var src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-modules/angular.material.module */ "bBoo");
/* harmony import */ var _trends_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trends.service */ "PygI");
/* harmony import */ var src_app_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared-modules/services/auth.service */ "w2Rb");
/* harmony import */ var _generic_modules_generic_table_datatable_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../generic-modules/generic-table/datatable.module */ "9D7/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class TrendsModule {
}
TrendsModule.ɵfac = function TrendsModule_Factory(t) { return new (t || TrendsModule)(); };
TrendsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: TrendsModule });
TrendsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_trends_service__WEBPACK_IMPORTED_MODULE_5__["TrendsService"],
        src_app_shared_modules_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _trends_routing_module__WEBPACK_IMPORTED_MODULE_1__["TrendsRoutingModule"],
            src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _generic_modules_generic_table_datatable_module__WEBPACK_IMPORTED_MODULE_7__["DatatableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TrendsModule, { declarations: [_trends_trends_component__WEBPACK_IMPORTED_MODULE_2__["TrendsComponent"],
        _add_trends_add_trends_component__WEBPACK_IMPORTED_MODULE_3__["AddTrendsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _trends_routing_module__WEBPACK_IMPORTED_MODULE_1__["TrendsRoutingModule"],
        src_app_shared_modules_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
        _generic_modules_generic_table_datatable_module__WEBPACK_IMPORTED_MODULE_7__["DatatableModule"]], exports: [_add_trends_add_trends_component__WEBPACK_IMPORTED_MODULE_3__["AddTrendsComponent"]] }); })();


/***/ }),

/***/ "ZoSL":
/*!**************************************************************!*\
  !*** ./src/app/components/trends/trends/trends.component.ts ***!
  \**************************************************************/
/*! exports provided: TrendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendsComponent", function() { return TrendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trends_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trends.service */ "PygI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _add_trends_add_trends_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-trends/add-trends.component */ "OGrp");
/* harmony import */ var _generic_modules_generic_table_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../generic-modules/generic-table/datatable/datatable.component */ "FczN");








function TrendsComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrendsComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrendsComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TrendsComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "trends-add-trends", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActon", function TrendsComponent_ng_container_22_Template_trends_add_trends_onActon_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onCardAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("InutDataObj", ctx_r4.passObj);
} }
function TrendsComponent_ng_container_26_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "trends-datatable", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectRows", function TrendsComponent_ng_container_26_ng_container_1_Template_trends_datatable_onSelectRows_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onRowsSelected($event); })("onRowClickEvent", function TrendsComponent_ng_container_26_ng_container_1_Template_trends_datatable_onRowClickEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onRowClick($event); })("onActonModal", function TrendsComponent_ng_container_26_ng_container_1_Template_trends_datatable_onActonModal_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx_r15.onModalAction($event, _r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postObj", ctx_r11.postObj);
} }
function TrendsComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendsComponent_ng_container_26_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.postObj.page);
} }
function TrendsComponent_ng_container_27_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "trends-datatable", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectRows", function TrendsComponent_ng_container_27_ng_container_1_Template_trends_datatable_onSelectRows_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.onRowsSelected($event); })("onRowClickEvent", function TrendsComponent_ng_container_27_ng_container_1_Template_trends_datatable_onRowClickEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.onRowClick($event); })("onActonModal", function TrendsComponent_ng_container_27_ng_container_1_Template_trends_datatable_onActonModal_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx_r20.onModalAction($event, _r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postObj", ctx_r16.postObj);
} }
function TrendsComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendsComponent_ng_container_27_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.postObj.page);
} }
function TrendsComponent_ng_container_28_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "trends-datatable", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectRows", function TrendsComponent_ng_container_28_ng_container_1_Template_trends_datatable_onSelectRows_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.onRowsSelected($event); })("onRowClickEvent", function TrendsComponent_ng_container_28_ng_container_1_Template_trends_datatable_onRowClickEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.onRowClick($event); })("onActonModal", function TrendsComponent_ng_container_28_ng_container_1_Template_trends_datatable_onActonModal_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return ctx_r25.onModalAction($event, _r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postObj", ctx_r21.postObj);
} }
function TrendsComponent_ng_container_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrendsComponent_ng_container_28_ng_container_1_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.postObj.page);
} }
function TrendsComponent_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendsComponent_ng_container_29_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.closeDialog("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Close \u00A0x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Are You Sure To Delete Trend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendsComponent_ng_container_29_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.deleteTrends(ctx_r28.deleteTrendData); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendsComponent_ng_container_29_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.closeDialog("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0No");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Delete Trend Of ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 1, ctx_r8.deleteTrendData.appId), "");
} }
class TrendsComponent {
    constructor(trendsService, router) {
        this.trendsService = trendsService;
        this.router = router;
        this.openTrendsForm = false;
        this.passObj = {};
        this.deleteTrendsFlag = false;
        this.postObj = {
            page: 'fortnight'
        };
        this.msdFlag = true;
        this.lpgFlag = false;
        this.bitumenFlag = false;
    }
    ngOnInit() {
        this.applyFilters();
        this.changeTrends('fortnight');
    }
    applyFilters() {
        this.postObj = Object.assign({}, this.postObj);
    }
    changeTrends(name) {
        let urlToAdd = (this.router.url.includes('?')) ? this.router.url.split('?')[0] : this.router.url;
        // console.log('urlToAdd', urlToAdd);
        if (name)
            this.router.navigate([urlToAdd]);
        this.msdFlag = false;
        this.lpgFlag = false;
        this.bitumenFlag = false;
        if (name == 'fortnight') {
            this.postObj = {
                page: 'fortnight'
            };
            this.applyFilters();
            this.msdFlag = true;
        }
        if (name == 'monthly') {
            this.postObj = {
                page: 'monthly'
            };
            this.applyFilters();
            this.lpgFlag = true;
        }
        // if (name == 'bitumen') {
        //   this.postObj = {
        //     page : 'bitumen'
        //   }
        //   this.applyFilters();
        //   this.bitumenFlag = true;
        // }
    }
    createNewTrends() {
        this.passObj = {};
        this.openTrendsForm = true;
    }
    onCardAction(event) {
        this.openTrendsForm = false;
        this.applyFilters();
        // this.postObj = {
        //   page : 'fortnight'
        // }
    }
    onRowsSelected(event) {
    }
    onRowsSelectedSub(event) {
    }
    onRowClick(event) {
    }
    onModalAction(event, $element) {
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
    closeDialog(flag) {
        this.deleteTrendsFlag = false;
        this.applyFilters();
        // this.postObj = {
        //   page : 'fortnight'
        // }
    }
    deleteTrends(data) {
        let obj = {
            'trendsId': data.trendsId,
            'appId': data.appId
        };
        this.trendsService.deleteTrendsFun(obj).subscribe(res => {
            if (res.status == 'Success') {
                this.closeDialog('cancel');
                this.postObj = {
                    page: 'fortnight'
                };
            }
            else {
            }
        });
    }
}
TrendsComponent.ɵfac = function TrendsComponent_Factory(t) { return new (t || TrendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_trends_service__WEBPACK_IMPORTED_MODULE_1__["TrendsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
TrendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendsComponent, selectors: [["trends-trends"]], decls: 30, vars: 10, consts: [[1, "row", "new-white-bg", "py-3"], [1, "col-md-4", "col-lg-4", "py-1", "ta-c"], ["type", "button", 1, "ta-c", 3, "ngClass", "click"], ["src", "../../../../assets/icons/sidenavIcons/enquiry1.png", "width", "18px", "alt", "", 2, "margin-top", "-3px"], [1, "col-md-4", "col-lg-4", "pl-0", "ml-0", "ta-c"], ["type", "button", "mat-raised-button", "", 1, "fr-side", "new-tab-side-enquiry", 2, "margin-right", "auto", 3, "click"], ["target", ""], [1, "row", 2, "margin-top", "-17px"], [1, "col-md-2", "col-lg-2", "ta-c"], [4, "ngIf"], [1, "col-md-12", "pl-0", "pr-0", "ml-0", "mr-0"], ["src", "../../../../assets/img/down-triangle.png", "width", "30px", "alt", ""], [3, "InutDataObj", "onActon"], [1, "mt-0", "mb-0", "pt-0", "pb-0", 3, "postObj", "onSelectRows", "onRowClickEvent", "onActonModal"], [1, "trends-modal-design-branch", "animated", "slideInUp", "slow", "row", 2, "z-index", "3"], [1, "col-md-12", "fyt-display-flex"], [1, "sp"], [1, "new-Montserrat-Medium", "fyt-link-btn", "new-999999", 3, "click"], [2, "border-bottom", "1px solid #999999"], [1, "col-md-12", "ta-c", 2, "border-bottom", "1px solid #999999"], [1, "ta-c", "new-Montserrat-Regular", "fnt-15", "new-333333"], [1, "fnt-15", "new-Montserrat-Regular", "new-808080", "ta-c"], [1, "col-md-6", "col-6", "py-3", "pb-20", 2, "text-align", "end"], ["type", "button", 1, "new-Montserrat-Medium", "yes-btn", 2, "text-align", "initial", 3, "click"], ["src", "../../../../assets/img/yes.png", "width", "22px", "alt", "", 2, "margin-top", "-2px"], [1, "col-md-6", "col-6", "py-3", "pb-20", 2, "text-align", "initial"], ["type", "button", 1, "new-Montserrat-Medium", "no-btn", 2, "text-align", "initial", 3, "click"], ["src", "../../../../assets/img/no.png", "width", "22px", "alt", "", 2, "margin-top", "-2px"]], template: function TrendsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendsComponent_Template_button_click_2_listener() { return ctx.changeTrends("fortnight"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0 FORTNIGHT PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendsComponent_Template_button_click_6_listener() { return ctx.changeTrends("monthly"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0 MONTHLY PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendsComponent_Template_button_click_11_listener() { return ctx.createNewTrends(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ADD TREND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TrendsComponent_ng_container_17_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TrendsComponent_ng_container_19_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TrendsComponent_ng_container_21_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TrendsComponent_ng_container_22_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TrendsComponent_ng_container_26_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TrendsComponent_ng_container_27_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TrendsComponent_ng_container_28_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TrendsComponent_ng_container_29_Template, 21, 3, "ng-container", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.msdFlag ? "new-workout-btn" : "new-workout-btn-unselect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.lpgFlag ? "new-diet-btn" : "new-workout-btn-unselect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msdFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lpgFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bitumenFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openTrendsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.msdFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lpgFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bitumenFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.deleteTrendsFlag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _add_trends_add_trends_component__WEBPACK_IMPORTED_MODULE_6__["AddTrendsComponent"], _generic_modules_generic_table_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_7__["DataTableComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVuZHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=components-trends-trends-module.js.map