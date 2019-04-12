(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcdemo-fcdemo-module"],{

/***/ "./src/assets/plugin/spread/gc.spread.sheets.angular.ts":
/*!**************************************************************!*\
  !*** ./src/assets/plugin/spread/gc.spread.sheets.angular.ts ***!
  \**************************************************************/
/*! exports provided: ColumnComponent, WorksheetComponent, SpreadSheetsComponent, SpreadSheetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnComponent", function() { return ColumnComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetComponent", function() { return WorksheetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadSheetsComponent", function() { return SpreadSheetsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadSheetsModule", function() { return SpreadSheetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grapecity/spread-sheets */ "./node_modules/@grapecity/spread-sheets/index.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ColumnComponent = /** @class */ (function () {
    function ColumnComponent() {
        this.changes = {};
    }
    ColumnComponent.prototype.onAttached = function (sheet, index) {
        this.sheet = sheet;
        this.index = index;
        this.onColumnChanged();
    };
    ColumnComponent.prototype.onColumnChanged = function () {
        if (this.sheet) {
            var sheet = this.sheet;
            sheet.suspendPaint();
            sheet.suspendEvent();
            var changes = this.changes;
            for (var changeName in changes) {
                var newValue = changes[changeName].currentValue;
                if (newValue === null || newValue === void 0) {
                    continue;
                }
                switch (changeName) {
                    case 'width':
                        sheet.setColumnWidth(this.index, newValue);
                        break;
                    case 'visible':
                        sheet.setColumnVisible(this.index, newValue);
                        break;
                    case 'resizable':
                        sheet.setColumnResizable(this.index, newValue);
                        break;
                    case 'autoFit':
                        if (newValue) {
                            sheet.autoFitColumn(this.index);
                        }
                        break;
                    case 'style':
                        sheet.setStyle(-1, this.index, newValue);
                        break;
                    case 'headerStyle':
                        sheet.setStyle(-1, this.index, newValue, _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.SheetArea.colHeader);
                        break;
                    case 'cellType':
                        sheet.setCellType(-1, this.index, newValue);
                        break;
                    case 'formatter':
                        sheet.setFormatter(-1, this.index, newValue, _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.SheetArea.viewport);
                        break;
                }
            }
            sheet.resumeEvent();
            sheet.resumePaint();
        }
    };
    ColumnComponent.prototype.ngOnChanges = function (changes) {
        this.changes = {};
        var changesCache = this.changes;
        for (var changeName in changes) {
            changesCache[changeName] = changes[changeName];
        }
        this.onColumnChanged();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ColumnComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ColumnComponent.prototype, "dataField", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ColumnComponent.prototype, "headerText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ColumnComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ColumnComponent.prototype, "resizable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ColumnComponent.prototype, "autoFit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Style)
    ], ColumnComponent.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.CellTypes.Base)
    ], ColumnComponent.prototype, "cellType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Style)
    ], ColumnComponent.prototype, "headerStyle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColumnComponent.prototype, "formatter", void 0);
    ColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'gc-column',
            template: "\n        <ng-content></ng-content>\n    "
        })
    ], ColumnComponent);
    return ColumnComponent;
}());

var WorksheetComponent = /** @class */ (function () {
    function WorksheetComponent() {
        this.sheet = new _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Worksheet("");
    }
    WorksheetComponent.prototype.onAttached = function () {
        var _this = this;
        var sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        if (this.dataSource) {
            sheet.setDataSource(this.dataSource);
            this.columns.forEach(function (columnComponent, index) {
                if (columnComponent.dataField) {
                    sheet.bindColumn(index, {
                        name: columnComponent.dataField,
                        displayName: columnComponent.headerText
                    });
                }
            });
        }
        if (this.columns.length > 0) {
            sheet.setColumnCount(this.columns.length);
            this.columns.forEach(function (columnComponent, index) {
                columnComponent.onAttached(_this.sheet, index);
            });
        }
        sheet.resumeEvent();
        sheet.resumePaint();
    };
    WorksheetComponent.prototype.getSheet = function () {
        return this.sheet;
    };
    WorksheetComponent.prototype.ngOnChanges = function (changes) {
        var sheet = this.sheet;
        sheet.suspendPaint();
        sheet.suspendEvent();
        for (var changeName in changes) {
            var newValue = changes[changeName].currentValue;
            if (newValue === null || newValue === void 0) {
                continue;
            }
            switch (changeName) {
                case "rowCount":
                    sheet.setRowCount(newValue);
                    break;
                case "colCount":
                    sheet.setColumnCount(newValue);
                    break;
                case "name":
                    sheet.name(newValue);
                    break;
                case "frozenColumnCount":
                    sheet.frozenColumnCount(newValue);
                    break;
                case "frozenRowCount":
                    sheet.frozenRowCount(newValue);
                    break;
                case "frozenTrailingRowCount":
                    sheet.frozenTrailingRowCount(newValue);
                    break;
                case "frozenTrailingColumnCount":
                    sheet.frozenTrailingColumnCount(newValue);
                    break;
                case "selectionPolicy":
                    sheet.selectionPolicy(newValue);
                    break;
                case "selectionUnit":
                    sheet.selectionUnit(newValue);
                    break;
                case "zoom":
                    sheet.zoom(newValue);
                    break;
                case "currentTheme":
                    sheet.currentTheme(newValue);
                    break;
                case "defaultStyle":
                    sheet.setDefaultStyle(newValue);
                    break;
                case "rowOutlineInfo":
                    newValue.forEach(function (item) {
                        sheet.rowOutlines.group(item.index, item.count);
                    });
                    sheet.repaint();
                    break;
                case "columnOutlineInfo":
                    newValue.forEach(function (item) {
                        sheet.columnOutlines.group(item.index, item.count);
                    });
                    sheet.repaint();
                    break;
                case "showRowOutline":
                    sheet.showRowOutline(newValue);
                    break;
                case "showColumnOutline":
                    sheet.showColumnOutline(newValue);
                    break;
                case "dataSource":
                    sheet.setDataSource(newValue);
                    break;
                case "autoGenerateColumns":
                    sheet[changeName] = newValue;
                default:
                    sheet.options[changeName] = newValue;
            }
        }
        sheet.resumeEvent();
        sheet.resumePaint();
    };
    WorksheetComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.columns.changes.subscribe(function () { _this.onAttached(); });
    };
    WorksheetComponent.prototype.ngOnDestroy = function () {
        var sheet = this.sheet;
        var spread = sheet ? sheet.getParent() : null;
        if (spread) {
            var sheetIndex = spread.getSheetIndex(sheet.name());
            if (sheetIndex !== void 0) {
                spread.removeSheet(sheetIndex);
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(ColumnComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], WorksheetComponent.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "rowCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "colCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorksheetComponent.prototype, "dataSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorksheetComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "frozenColumnCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "frozenRowCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "frozenTrailingRowCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "frozenTrailingColumnCount", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WorksheetComponent.prototype, "allowCellOverflow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorksheetComponent.prototype, "frozenlineColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorksheetComponent.prototype, "sheetTabColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "selectionPolicy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "selectionUnit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "zoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorksheetComponent.prototype, "currentTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "clipBoardOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WorksheetComponent.prototype, "rowHeaderVisible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WorksheetComponent.prototype, "colHeaderVisible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "rowHeaderAutoText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "colHeaderAutoText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "rowHeaderAutoTextIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], WorksheetComponent.prototype, "colHeaderAutoTextIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WorksheetComponent.prototype, "isProtected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WorksheetComponent.prototype, "showRowOutline", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WorksheetComponent.prototype, "showColumnOutline", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorksheetComponent.prototype, "selectionBackColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorksheetComponent.prototype, "selectionBorderColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Style)
    ], WorksheetComponent.prototype, "defaultStyle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WorksheetComponent.prototype, "rowOutlineInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], WorksheetComponent.prototype, "columnOutlineInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], WorksheetComponent.prototype, "autoGenerateColumns", void 0);
    WorksheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'gc-worksheet',
            template: "\n        <ng-content></ng-content>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorksheetComponent);
    return WorksheetComponent;
}());

var SpreadSheetsComponent = /** @class */ (function () {
    function SpreadSheetsComponent(elRef) {
        this.style = {
            width: '800px',
            height: '600px'
        };
        //outputs events
        this.workbookInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.validationError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.enterCell = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.leaveCell = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.valueChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.topRowChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.leftColumnChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.invalidOperation = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeFiltering = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeFiltered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.tableFiltering = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.tableFiltered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeSorting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeSorted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardPasting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.clipboardPasted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.columnWidthChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.columnWidthChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rowHeightChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rowHeightChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragDropBlock = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragDropBlockCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragFillBlock = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.dragFillBlockCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editStarting = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editEnding = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeGroupStateChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeGroupStateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.selectionChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetTabClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetTabDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetNameChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sheetNameChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.userZooming = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.userFormulaEntered = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.columnChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rowChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.activeSheetChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.activeSheetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sparklineChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.editorStatusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.pictureChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectRemoving = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.pictureSelectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.floatingObjectLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.touchToolStripOpening = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.commentChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.commentRemoving = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.commentRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.slicerChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.elRef = elRef;
    }
    SpreadSheetsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var elRef = this.elRef;
        var dom = elRef.nativeElement;
        var hostElement = dom.querySelector('div');
        this.spread = new _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Workbook(hostElement, { sheetCount: 0 });
        this.setSpreadOptions();
        this.initSheets();
        this.sheets.changes.subscribe(function (changes) { _this.onSheetsChanged(changes); }); // may change sheets using bingidng.
        this.bindCustomEvent(this.spread);
        this.workbookInitialized.emit({ spread: this.spread });
    };
    SpreadSheetsComponent.prototype.onSheetsChanged = function (sheetComponents) {
        var spread = this.spread;
        spread.suspendPaint();
        if (sheetComponents) {
            sheetComponents.forEach(function (sheetComponent, index) {
                var sheet = sheetComponent.getSheet();
                if (sheet && !sheet.getParent()) {
                    spread.addSheet(index, sheetComponent.getSheet());
                    sheetComponent.onAttached();
                }
            });
        }
        spread.resumePaint();
    };
    SpreadSheetsComponent.prototype.initSheets = function () {
        var sheets = this.sheets;
        var spread = this.spread;
        spread.clearSheets();
        sheets.forEach(function (sheetComponent, index) {
            spread.addSheet(index, sheetComponent.getSheet());
            sheetComponent.onAttached();
        });
        // when there is no sheet, add default sheet to spread
        if (sheets.length === 0) {
            this.spread.addSheet(0, new _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_1__["Spread"].Sheets.Worksheet(""));
        }
    };
    SpreadSheetsComponent.prototype.bindCustomEvent = function (spread) {
        var _this = this;
        var customEventNameSpace = '.ng';
        var events = ['ValidationError', 'CellClick', 'CellDoubleClick', 'EnterCell',
            'LeaveCell', 'ValueChanged', 'TopRowChanged', 'LeftColumnChanged',
            'InvalidOperation', 'RangeFiltering', 'RangeFiltered', 'TableFiltering',
            'TableFiltered', 'RangeSorting', 'RangeSorted', 'ClipboardChanging',
            'ClipboardChanged', 'ClipboardPasting', 'ClipboardPasted', 'ColumnWidthChanging',
            'ColumnWidthChanged', 'RowHeightChanging', 'RowHeightChanged', 'DragDropBlock',
            'DragDropBlockCompleted', 'DragFillBlock', 'DragFillBlockCompleted', 'EditStarting',
            'EditChange', 'EditEnding', 'EditEnd', 'EditEnded', 'RangeGroupStateChanging',
            'RangeGroupStateChanged', 'SelectionChanging', 'SelectionChanged', 'SheetTabClick',
            'SheetTabDoubleClick', 'SheetNameChanging', 'SheetNameChanged',
            'UserZooming', 'UserFormulaEntered', 'CellChanged', 'ColumnChanged',
            'RowChanged', 'ActiveSheetChanging', 'ActiveSheetChanged',
            'SparklineChanged',
            'RangeChanged', 'ButtonClicked', 'EditorStatusChanged',
            'FloatingObjectChanged', 'FloatingObjectSelectionChanged', 'PictureChanged', 'FloatingObjectRemoving', 'FloatingObjectRemoved', 'PictureSelectionChanged',
            'FloatingObjectLoaded', 'TouchToolStripOpening', 'CommentChanged', 'CommentRemoving', 'CommentRemoved', 'SlicerChanged'];
        events.forEach(function (event) {
            spread.bind(event + customEventNameSpace, function (event, data) {
                var eventType = event.type;
                var camelCaseEvent = eventType[0].toLowerCase() + eventType.substr(1);
                _this[camelCaseEvent].emit(data);
            });
        });
    };
    SpreadSheetsComponent.prototype.setSpreadOptions = function () {
        var spread = this.spread;
        if (!this.spread) {
            return;
        }
        spread.suspendEvent();
        spread.suspendPaint();
        var options = this.spreadOptions;
        options && options.forEach(function (option) {
            if (option.name === 'name') {
                spread.name = option.value;
            }
            else {
                spread.options[option.name] = option.value;
            }
        });
        spread.resumePaint();
        spread.resumeEvent();
    };
    SpreadSheetsComponent.prototype.ngOnChanges = function (changes) {
        var options = [];
        for (var changeName in changes) {
            var newValue = changes[changeName].currentValue;
            if (newValue !== null && newValue !== void 0) {
                switch (changeName) {
                    case 'hostStyle':
                        this.style = newValue;
                        break;
                    case 'hostClass':
                        break;
                    default:
                        options.push({ name: changeName, value: newValue });
                }
            }
        }
        this.spreadOptions = options;
        this.setSpreadOptions();
    };
    SpreadSheetsComponent.prototype.ngOnDestroy = function () {
        this.spread.destroy();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "allowUserResize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "allowUserZoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "allowUserEditFormula", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "allowUserDragFill", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "allowUserDragDrop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "highlightInvalidData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "newTabVisible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "tabStripVisible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "tabEditable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SpreadSheetsComponent.prototype, "autoFitType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SpreadSheetsComponent.prototype, "referenceStyle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpreadSheetsComponent.prototype, "backColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpreadSheetsComponent.prototype, "grayAreaBackColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "showVerticalScrollbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "showHorizontalScrollbar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "hostStyle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpreadSheetsComponent.prototype, "hostClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpreadSheetsComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SpreadSheetsComponent.prototype, "backgroundImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SpreadSheetsComponent.prototype, "backgroundImageLayout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SpreadSheetsComponent.prototype, "showScrollTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], SpreadSheetsComponent.prototype, "showResizeTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "showDragDropTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], SpreadSheetsComponent.prototype, "showDragFillTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "workbookInitialized", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "validationError", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "cellClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "cellDoubleClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "enterCell", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "leaveCell", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "valueChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "topRowChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "leftColumnChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "invalidOperation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "rangeFiltering", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "rangeFiltered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "tableFiltering", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "tableFiltered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "rangeSorting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "rangeSorted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "clipboardChanging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "clipboardChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "clipboardPasting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "clipboardPasted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "columnWidthChanging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "columnWidthChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "rowHeightChanging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "rowHeightChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "dragDropBlock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "dragDropBlockCompleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "dragFillBlock", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "dragFillBlockCompleted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "editStarting", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "editChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "editEnding", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "editEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "editEnded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "rangeGroupStateChanging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "rangeGroupStateChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "selectionChanging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "selectionChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "sheetTabClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "sheetTabDoubleClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "sheetNameChanging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "sheetNameChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "userZooming", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "userFormulaEntered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "cellChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "columnChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "rowChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "activeSheetChanging", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "activeSheetChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "sparklineChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "rangeChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "buttonClicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "editorStatusChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "floatingObjectChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "floatingObjectSelectionChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "pictureChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "floatingObjectRemoving", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "floatingObjectRemoved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "pictureSelectionChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "floatingObjectLoaded", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "touchToolStripOpening", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "commentChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "commentRemoving", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "commentRemoved", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpreadSheetsComponent.prototype, "slicerChanged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(WorksheetComponent),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["QueryList"])
    ], SpreadSheetsComponent.prototype, "sheets", void 0);
    SpreadSheetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'gc-spread-sheets',
            template: "\n        <div [ngStyle]=\"style\" [ngClass]=\"hostClass\">\n            <ng-content></ng-content>\n        </div>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], SpreadSheetsComponent);
    return SpreadSheetsComponent;
}());

var SpreadSheetsModule = /** @class */ (function () {
    function SpreadSheetsModule() {
    }
    SpreadSheetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            declarations: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent],
            exports: [SpreadSheetsComponent, WorksheetComponent, ColumnComponent]
        })
    ], SpreadSheetsModule);
    return SpreadSheetsModule;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgcreate/bgcreate.component.html":
/*!***************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgcreate/bgcreate.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form nz-form [formGroup]=\"validateForm\" (ngSubmit)=\"submitForm($event, validateForm.value)\">\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"7\" nzRequired>姓名</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n        <input nz-input formControlName=\"userName\" placeholder=\"请输入姓名\" />\n        <nz-form-explain\n          *ngIf=\"\n            (validateForm.get('userName')?.dirty && validateForm.get('userName')?.errors) ||\n            validateForm.get('userName')?.pending\n          \"\n        >\n          <ng-container *ngIf=\"validateForm.get('userName')?.hasError('required')\">\n            姓名不能为空!\n          </ng-container>\n          <ng-container *ngIf=\"validateForm.get('userName')?.hasError('duplicated')\">\n            The username is redundant!\n          </ng-container>\n          <ng-container *ngIf=\"validateForm.get('userName')?.pending\">\n            验证中...\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"7\" nzRequired>E-mail</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n        <input nz-input formControlName=\"email\" placeholder=\"email\" type=\"email\" />\n        <nz-form-explain *ngIf=\"validateForm.get('email')?.dirty && validateForm.get('email')?.errors\">\n          <ng-container *ngIf=\"validateForm.get('email')?.hasError('email')\">\n            The input is not valid E-mail!\n          </ng-container>\n          <ng-container *ngIf=\"validateForm.get('email')?.hasError('required')\">\n            Please input your E-mail!\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"7\" nzRequired>Password</nz-form-label>\n      <div>\n        <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n          <input nz-input type=\"password\" formControlName=\"password\" (ngModelChange)=\"validateConfirmPassword()\" />\n          <nz-form-explain\n            *ngIf=\"validateForm.get('password')?.dirty && validateForm.get('password')?.hasError('required')\"\n            >Please input your password!</nz-form-explain\n          >\n        </nz-form-control>\n      </div>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"7\" nzRequired>Confirm Password</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\" nzHasFeedback>\n        <input nz-input type=\"password\" formControlName=\"confirm\" placeholder=\"confirm your password\" />\n        <nz-form-explain *ngIf=\"validateForm.get('confirm')?.dirty && validateForm.get('confirm')?.errors\">\n          <ng-container *ngIf=\"validateForm.get('confirm')?.hasError('required')\">\n            Please confirm your password!\n          </ng-container>\n          <ng-container *ngIf=\"validateForm.get('confirm')?.hasError('confirm')\">\n            Password is inconsistent!\n          </ng-container>\n        </nz-form-explain>\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-label [nzSpan]=\"7\" nzRequired>Comment</nz-form-label>\n      <nz-form-control [nzSpan]=\"12\">\n        <textarea formControlName=\"comment\" nz-input rows=\"2\" placeholder=\"write any thing\"></textarea>\n        <nz-form-explain\n          *ngIf=\"validateForm.get('comment')?.dirty && validateForm.get('comment')?.hasError('required')\"\n          >Please write something here!</nz-form-explain\n        >\n      </nz-form-control>\n    </nz-form-item>\n    <nz-form-item>\n      <nz-form-control [nzOffset]=\"7\" [nzSpan]=\"12\">\n        <button nz-button nzType=\"primary\" [disabled]=\"!validateForm.valid\">Submit</button>\n        <button nz-button (click)=\"resetForm($event)\">Reset</button>\n      </nz-form-control>\n    </nz-form-item>\n  </form>"

/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgcreate/bgcreate.component.ts":
/*!*************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgcreate/bgcreate.component.ts ***!
  \*************************************************************************/
/*! exports provided: BgcreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgcreateComponent", function() { return BgcreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var BgcreateComponent = /** @class */ (function () {
    function BgcreateComponent(router, activedRoute, fb) {
        var _this = this;
        this.router = router;
        this.activedRoute = activedRoute;
        this.fb = fb;
        this.submitForm = function ($event, value) {
            $event.preventDefault();
            for (var key in _this.validateForm.controls) {
                _this.validateForm.controls[key].markAsDirty();
                _this.validateForm.controls[key].updateValueAndValidity();
            }
            console.log(value);
        };
        this.userNameAsyncValidator = function (control) {
            return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
                setTimeout(function () {
                    if (control.value === 'JasonWood') {
                        observer.next({ error: true, duplicated: true });
                    }
                    else {
                        observer.next(null);
                    }
                    observer.complete();
                }, 1000);
            });
        };
        this.confirmValidator = function (control) {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== _this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
        this.validateForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required], [this.userNameAsyncValidator]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            confirm: ['', [this.confirmValidator]],
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    BgcreateComponent.prototype.resetForm = function (e) {
        e.preventDefault();
        this.validateForm.reset();
        for (var key in this.validateForm.controls) {
            this.validateForm.controls[key].markAsPristine();
            this.validateForm.controls[key].updateValueAndValidity();
        }
    };
    BgcreateComponent.prototype.validateConfirmPassword = function () {
        var _this = this;
        setTimeout(function () { return _this.validateForm.controls.confirm.updateValueAndValidity(); });
    };
    BgcreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bgcreate',
            template: __webpack_require__(/*! ./bgcreate.component.html */ "./src/feature/fc/fcdemo/components/bgcreate/bgcreate.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BgcreateComponent);
    return BgcreateComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgiframe/bgiframe.component.html":
/*!***************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgiframe/bgiframe.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe style=\"width:100%;height:800px;\" [src]=\"iframeUrl\">\n</iframe>\n"

/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgiframe/bgiframe.component.ts":
/*!*************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgiframe/bgiframe.component.ts ***!
  \*************************************************************************/
/*! exports provided: BgiframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgiframeComponent", function() { return BgiframeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var BgiframeComponent = /** @class */ (function () {
    function BgiframeComponent(router, activedRoute, sanitizer) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.sanitizer = sanitizer;
        var url = 'https://ng.ant.design/docs/introduce/zh';
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    BgiframeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bgiframe',
            template: __webpack_require__(/*! ./bgiframe.component.html */ "./src/feature/fc/fcdemo/components/bgiframe/bgiframe.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], BgiframeComponent);
    return BgiframeComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bglistinfo/bglistinfo.component.html":
/*!*******************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bglistinfo/bglistinfo.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fc-page fc-page-list\">\n  <div class=\"fc-toolbar\">\n    <button nz-button nzType=\"primary\">新增</button>\n    <button nz-button nzType=\"primary\">修改</button>\n    <button nz-button nzType=\"primary\">删除</button>\n  </div>\n  <form nz-form class=\"fc-searchbar\">\n    <div nz-row [nzGutter]=\"24\">\n      <div nz-col [nzSpan]=\"8\">\n        <nz-form-item nzFlex>\n          <nz-form-label nzFor=\"taskCode\">任务代码</nz-form-label>\n          <nz-form-control>\n            <input nz-input placeholder=\"请输入任务代码\" [(ngModel)]=\"searchObj.taskCode\" name=\"taskCode\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n      <div nz-col [nzSpan]=\"8\">\n        <nz-form-item nzFlex>\n          <nz-form-label nzFor=\"taskName\">任务名称</nz-form-label>\n          <nz-form-control>\n            <input nz-input placeholder=\"请输入任务名称\" [(ngModel)]=\"searchObj.taskName\" name=\"taskName\" />\n          </nz-form-control>\n        </nz-form-item>\n      </div>\n    </div>\n    <div nz-row>\n      <div nz-col [nzSpan]=\"24\" style=\"text-align: right;\">\n        <button nz-button [nzType]=\"'primary'\" (click)=\"search()\">查询</button>\n        <button nz-button (click)=\"reset()\">重置</button>\n      </div>\n    </div>\n  </form>\n  <div class=\"table-wrap\">\n    <nz-table #basicTable [nzData]=\"pageList\" [nzBordered]=\"true\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Age</th>\n          <th>Address</th>\n          <th>Action</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let data of basicTable.data\">\n          <td>{{ data.name }}</td>\n          <td>{{ data.age }}</td>\n          <td>{{ data.address }}</td>\n          <td>\n            <a>Action 一 {{ data.name }}</a>\n            <nz-divider nzType=\"vertical\"></nz-divider>\n            <a>Delete</a>\n          </td>\n        </tr>\n      </tbody>\n    </nz-table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bglistinfo/bglistinfo.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bglistinfo/bglistinfo.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BglistinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BglistinfoComponent", function() { return BglistinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var BglistinfoComponent = /** @class */ (function () {
    function BglistinfoComponent(router, activedRoute, http) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.http = http;
        // 获取列表数据
        this.pageList = [
            {
                key: '1',
                name: '张三',
                age: 32,
                address: '北京'
            },
            {
                key: '2',
                name: '李四',
                age: 42,
                address: '上海'
            },
            {
                key: '3',
                name: '小明',
                age: 32,
                address: '杭州'
            }
        ];
        // 查询对象
        this.searchObj = {
            taskName: '',
            taskCode: ''
        };
    }
    BglistinfoComponent.prototype.ngOnInit = function () {
        // this.http.get('/')
        // listinfo
    };
    /**
     * 查询
     */
    BglistinfoComponent.prototype.search = function () { };
    /**
     * 重置
     */
    BglistinfoComponent.prototype.reset = function () { };
    BglistinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bglistinfo',
            template: __webpack_require__(/*! ./bglistinfo.component.html */ "./src/feature/fc/fcdemo/components/bglistinfo/bglistinfo.component.html"),
            styles: ["\n      .toolbar {\n      }\n      .toolbar button {\n        margin-right: 10px;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BglistinfoComponent);
    return BglistinfoComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgremove/bgremove.component.html":
/*!***************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgremove/bgremove.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "删"

/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgremove/bgremove.component.ts":
/*!*************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgremove/bgremove.component.ts ***!
  \*************************************************************************/
/*! exports provided: BgremoveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgremoveComponent", function() { return BgremoveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BgremoveComponent = /** @class */ (function () {
    function BgremoveComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
    BgremoveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bgremove',
            template: __webpack_require__(/*! ./bgremove.component.html */ "./src/feature/fc/fcdemo/components/bgremove/bgremove.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BgremoveComponent);
    return BgremoveComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgspread/bgspread.component.html":
/*!***************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgspread/bgspread.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <div class=\"fc-toolbar\">\n    <button nz-button nzType=\"primary\">新增</button>\n    <button nz-button nzType=\"primary\">修改</button>\n    <button nz-button nzType=\"primary\">删除</button>\n  </div>\n  <div class=\"fc-spread-content\">\n    <gc-spread-sheets  [hostStyle]=\"hostStyle\" (workbookInitialized)=\"workbookInit($event)\">\n    </gc-spread-sheets>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgspread/bgspread.component.ts":
/*!*************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgspread/bgspread.component.ts ***!
  \*************************************************************************/
/*! exports provided: BgspreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgspreadComponent", function() { return BgspreadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BgspreadComponent = /** @class */ (function () {
    function BgspreadComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // spread 样式
        this.hostStyle = {
            width: '100%',
            height: '100%'
        };
    }
    /**
     * @description spreadJs 初始化
     * @param args
     */
    BgspreadComponent.prototype.workbookInit = function (args) {
        this.spread = args.spread;
    };
    BgspreadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bgspread',
            template: __webpack_require__(/*! ./bgspread.component.html */ "./src/feature/fc/fcdemo/components/bgspread/bgspread.component.html"),
            styles: ["\n      .fc-spread-content {\n        width: 100%;\n        height: 700px;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BgspreadComponent);
    return BgspreadComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgtable/bgtable.component.html":
/*!*************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgtable/bgtable.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgtable/bgtable.component.ts":
/*!***********************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgtable/bgtable.component.ts ***!
  \***********************************************************************/
/*! exports provided: BgtableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgtableComponent", function() { return BgtableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BgtableComponent = /** @class */ (function () {
    function BgtableComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
    BgtableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bgtable',
            template: __webpack_require__(/*! ./bgtable.component.html */ "./src/feature/fc/fcdemo/components/bgtable/bgtable.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BgtableComponent);
    return BgtableComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgupdate/bgupdate.component.html":
/*!***************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgupdate/bgupdate.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "改"

/***/ }),

/***/ "./src/feature/fc/fcdemo/components/bgupdate/bgupdate.component.ts":
/*!*************************************************************************!*\
  !*** ./src/feature/fc/fcdemo/components/bgupdate/bgupdate.component.ts ***!
  \*************************************************************************/
/*! exports provided: BgupdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BgupdateComponent", function() { return BgupdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BgupdateComponent = /** @class */ (function () {
    function BgupdateComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
    BgupdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'bgupdate',
            template: __webpack_require__(/*! ./bgupdate.component.html */ "./src/feature/fc/fcdemo/components/bgupdate/bgupdate.component.html"),
            styles: ["\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BgupdateComponent);
    return BgupdateComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcdemo.module.ts":
/*!************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcdemo.module.ts ***!
  \************************************************/
/*! exports provided: FcdemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcdemoModule", function() { return FcdemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fcdemo_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fcdemo.route */ "./src/feature/fc/fcdemo/fcdemo.route.ts");
/* harmony import */ var _components_bglistinfo_bglistinfo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bglistinfo/bglistinfo.component */ "./src/feature/fc/fcdemo/components/bglistinfo/bglistinfo.component.ts");
/* harmony import */ var _components_bgcreate_bgcreate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/bgcreate/bgcreate.component */ "./src/feature/fc/fcdemo/components/bgcreate/bgcreate.component.ts");
/* harmony import */ var _components_bgupdate_bgupdate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bgupdate/bgupdate.component */ "./src/feature/fc/fcdemo/components/bgupdate/bgupdate.component.ts");
/* harmony import */ var _components_bgremove_bgremove_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bgremove/bgremove.component */ "./src/feature/fc/fcdemo/components/bgremove/bgremove.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _components_bgspread_bgspread_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/bgspread/bgspread.component */ "./src/feature/fc/fcdemo/components/bgspread/bgspread.component.ts");
/* harmony import */ var _components_bgtable_bgtable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/bgtable/bgtable.component */ "./src/feature/fc/fcdemo/components/bgtable/bgtable.component.ts");
/* harmony import */ var _components_bgiframe_bgiframe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/bgiframe/bgiframe.component */ "./src/feature/fc/fcdemo/components/bgiframe/bgiframe.component.ts");
/* harmony import */ var src_assets_plugin_spread_gc_spread_sheets_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/assets/plugin/spread/gc.spread.sheets.angular */ "./src/assets/plugin/spread/gc.spread.sheets.angular.ts");















var FcdemoModule = /** @class */ (function () {
    function FcdemoModule() {
    }
    FcdemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_fcdemo_route__WEBPACK_IMPORTED_MODULE_5__["Routers"]),
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_10__["NgZorroAntdModule"],
                src_assets_plugin_spread_gc_spread_sheets_angular__WEBPACK_IMPORTED_MODULE_14__["SpreadSheetsModule"]
            ],
            declarations: [
                _components_bglistinfo_bglistinfo_component__WEBPACK_IMPORTED_MODULE_6__["BglistinfoComponent"],
                _components_bgcreate_bgcreate_component__WEBPACK_IMPORTED_MODULE_7__["BgcreateComponent"],
                _components_bgupdate_bgupdate_component__WEBPACK_IMPORTED_MODULE_8__["BgupdateComponent"],
                _components_bgremove_bgremove_component__WEBPACK_IMPORTED_MODULE_9__["BgremoveComponent"],
                _components_bgspread_bgspread_component__WEBPACK_IMPORTED_MODULE_11__["BgspreadComponent"],
                _components_bgtable_bgtable_component__WEBPACK_IMPORTED_MODULE_12__["BgtableComponent"],
                _components_bgiframe_bgiframe_component__WEBPACK_IMPORTED_MODULE_13__["BgiframeComponent"] // iframe
            ],
            providers: []
        })
    ], FcdemoModule);
    return FcdemoModule;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcdemo.route.ts":
/*!***********************************************!*\
  !*** ./src/feature/fc/fcdemo/fcdemo.route.ts ***!
  \***********************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _components_bglistinfo_bglistinfo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/bglistinfo/bglistinfo.component */ "./src/feature/fc/fcdemo/components/bglistinfo/bglistinfo.component.ts");
/* harmony import */ var _components_bgcreate_bgcreate_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/bgcreate/bgcreate.component */ "./src/feature/fc/fcdemo/components/bgcreate/bgcreate.component.ts");
/* harmony import */ var _components_bgupdate_bgupdate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/bgupdate/bgupdate.component */ "./src/feature/fc/fcdemo/components/bgupdate/bgupdate.component.ts");
/* harmony import */ var _components_bgremove_bgremove_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bgremove/bgremove.component */ "./src/feature/fc/fcdemo/components/bgremove/bgremove.component.ts");
/* harmony import */ var _components_bgspread_bgspread_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bgspread/bgspread.component */ "./src/feature/fc/fcdemo/components/bgspread/bgspread.component.ts");
/* harmony import */ var _components_bgiframe_bgiframe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bgiframe/bgiframe.component */ "./src/feature/fc/fcdemo/components/bgiframe/bgiframe.component.ts");






var Routers = [
    {
        path: 'bglistinfoList',
        component: _components_bglistinfo_bglistinfo_component__WEBPACK_IMPORTED_MODULE_0__["BglistinfoComponent"]
    },
    {
        path: 'bgcreateList',
        component: _components_bgcreate_bgcreate_component__WEBPACK_IMPORTED_MODULE_1__["BgcreateComponent"]
    },
    {
        path: 'bgupdateList',
        component: _components_bgupdate_bgupdate_component__WEBPACK_IMPORTED_MODULE_2__["BgupdateComponent"]
    },
    {
        path: 'bgremoveList',
        component: _components_bgremove_bgremove_component__WEBPACK_IMPORTED_MODULE_3__["BgremoveComponent"]
    },
    {
        path: 'bgspreadList',
        component: _components_bgspread_bgspread_component__WEBPACK_IMPORTED_MODULE_4__["BgspreadComponent"]
    },
    {
        path: 'bgtableList',
        component: _components_bgspread_bgspread_component__WEBPACK_IMPORTED_MODULE_4__["BgspreadComponent"]
    },
    {
        path: 'bgiframeList',
        component: _components_bgiframe_bgiframe_component__WEBPACK_IMPORTED_MODULE_5__["BgiframeComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=fcdemo-fcdemo-module.js.map