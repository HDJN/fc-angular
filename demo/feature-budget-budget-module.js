(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-budget-budget-module"],{

/***/ "./src/feature/budget/budget.module.ts":
/*!*********************************************!*\
  !*** ./src/feature/budget/budget.module.ts ***!
  \*********************************************/
/*! exports provided: BudgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BudgetModule", function() { return BudgetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _budget_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./budget.route */ "./src/feature/budget/budget.route.ts");






var BudgetModule = /** @class */ (function () {
    function BudgetModule() {
    }
    BudgetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_budget_route__WEBPACK_IMPORTED_MODULE_5__["Routers"]),
            ]
        })
    ], BudgetModule);
    return BudgetModule;
}());



/***/ }),

/***/ "./src/feature/budget/budget.route.ts":
/*!********************************************!*\
  !*** ./src/feature/budget/budget.route.ts ***!
  \********************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
var Routers = [
    {
        path: '',
        loadChildren: './tx/tx.module#TxModule'
    },
    {
        path: '',
        loadChildren: './budget_report/bgreport.module#BgreportModule'
    }
];


/***/ })

}]);
//# sourceMappingURL=feature-budget-budget-module.js.map