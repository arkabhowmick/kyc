(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-file-upload (onProceed)=\"uploadFile($event)\" *ngIf=\"!file\"></app-file-upload>\n  <app-main-view *ngIf=\"file\" [file]=\"file\"></app-main-view>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/file-upload/file-upload.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/file-upload/file-upload.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n    <div class=\"box-header\">\n        <h5>Upload File For KYC</h5>\n    </div>\n    \n    <form name=\"form\">\n        <div class=\"custom-file\">\n            <input name=\"csvfile\" type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"uploadFile($event.target.files)\">\n            <label class=\"custom-file-label\" for=\"customFile\">{{file ? filename : 'Choose File'}}</label>\n        </div>\n    </form>\n\n    <div *ngIf=\"file\" class=\"box-buttons\">\n        <form name=\"details\"> \n            <div class=\"form-group\">\n                <label for=\"image1\">Image 1 column number</label>\n                <input type=\"number\" name=\"image1\" class=\"form-control\" [(ngModel)]=\"dataModel.image1\" placeholder=\"Image 1 Column\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"image1\">Image 2 column number</label>\n                <input type=\"number\" name=\"image2\" class=\"form-control\" [(ngModel)]=\"dataModel.image2\" placeholder=\"Image 2 Column\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"image1\">Image 3 column number</label>\n                <input type=\"number\" name=\"image3\" class=\"form-control\" [(ngModel)]=\"dataModel.image3\" placeholder=\"Image 3 Column\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"image1\">Image 4 column number</label>\n                <input type=\"number\" name=\"image4\" class=\"form-control\" [(ngModel)]=\"dataModel.image4\" placeholder=\"Image 4 Column\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"status\">Status column number</label>\n                <input type=\"number\" name=\"status\" class=\"form-control\" [(ngModel)]=\"dataModel.status\" placeholder=\"Status Column\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"show\">Show Only These Columns</label>\n                <input type=\"text\" name=\"show\" class=\"form-control\" [(ngModel)]=\"dataModel.displayColumns\" placeholder=\"Show These Columns e.g. 1,6,7 or leave empty\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"image1\">Pass Value</label>\n                <input type=\"text\" name=\"pass\" class=\"form-control\" [(ngModel)]=\"dataModel.pass\" placeholder=\"Pass Value\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"image1\">Fail Value</label>\n                <input type=\"text\" name=\"fail\" class=\"form-control\" [(ngModel)]=\"dataModel.fail\" placeholder=\"Fail Value\">\n            </div>\n        </form>\n        <div style=\"text-align: center;\">\n            <button class=\"btn btn-success\" (click)=\"proceed()\">Proceed</button>\n            <button class=\"btn btn-danger\" (click)=\"removeFile()\">Remove</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-view/main-view.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-view/main-view.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-top:20px;\">\n    <div class=\"col col-4\" style=\"text-align : left;\">\n        <button class=\"btn btn-primary\" (click)=\"previous()\" style=\"margin-right : 10px;\">Previous</button>\n        <input type=\"number\" name=\"gotopage\" class=\"form-control\" [(ngModel)]=\"gotopage\" style=\"width:100px;display:inline;\" placeholder=\"Go to page\">    \n        <button class=\"btn btn-success\" (click)=\"goTo()\" style=\"margin-right : 10px;\">Go To</button>\n        <button class=\"btn btn-primary\" (click)=\"next()\" style=\"margin-right : 10px;\">Next</button>\n        <button class=\"btn btn-warning\" (click)=\"getImages()\" style=\"margin-right : 10px;\">Reload Images</button>    \n    </div>\n    <div class=\"col col-4\" style=\"text-align : center;\">\n        <button class=\"btn btn-success\" (click)=\"pass()\" style=\"margin-right : 10px;\">Pass</button>\n        <button class=\"btn btn-danger\" (click)=\"fail()\" style=\"margin-right:10px;\">Fail</button>\n        <input type=\"text\" name=\"custommessage\" class=\"form-control\" [(ngModel)]=\"customMessage\" (ngModelChange)=\"updateStatus($event)\" style=\"width:200px;display:inline;\" placeholder=\"Custom Message\">    \n    </div>\n    <div class=\"col col-4\" style=\"text-align : right;\">\n        <button class=\"btn btn-secondary\" (click)=\"save()\" style=\"margin-right : 10px;\">Save</button>\n    </div>\n</div>\n\n<div class=\"row\" style=\"margin-top: 20px;\">\n    <div class=\"col col-12\">\n        <table class=\"table table-bordered\" *ngIf=\"displayColumns.length == 0\">\n            <thead>\n                <th *ngFor=\"let col of csvData[0]\">{{col}}</th>\n            </thead>\n            <tbody>\n                <tr>\n                    <td *ngFor=\"let col of csvData[currentIndex]\">{{col}}</td>\n                </tr>\n            </tbody>\n        </table>\n        <table class=\"table table-bordered\" *ngIf=\"displayColumns.length > 0\">\n            <thead>\n                <th *ngFor=\"let col of displayColumns\">{{csvData[0][col-1]}}</th>\n            </thead>\n            <tbody>\n                <tr>\n                    <td *ngFor=\"let col of displayColumns\">{{csvData[currentIndex][col-1]}}</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n\n<div style=\"text-align : center;\">\n    Row : {{currentIndex}} of {{csvData.length}}\n</div>\n\n<div class=\"row\" style=\"margin-top:20px;\">\n    <div class=\"col col-6\">\n        <img class=\"view-image\" *ngIf=\"image.image1\" [src]=\"image.image1\" alt=\"\">\n    </div>\n    <div class=\"col col-6\">\n        <img class=\"view-image\" *ngIf=\"image.image2\" [src]=\"image.image2\" alt=\"\">\n    </div>\n</div>\n<div class=\"row\" style=\"margin-top : 20px;\">\n    <div class=\"col col-6\">\n        <img class=\"view-image\" *ngIf=\"image.image3\" [src]=\"image.image3\" alt=\"\">\n    </div>\n    <div class=\"col col-6\">\n        <img class=\"view-image\" *ngIf=\"image.image4\" [src]=\"image.image4\" alt=\"\">\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kyc';
        this.file = null;
    }
    AppComponent.prototype.uploadFile = function (file) {
        this.file = file;
        // console.log('File : ', this.file);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-upload/file-upload.component */ "./src/app/file-upload/file-upload.component.ts");
/* harmony import */ var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-view/main-view.component */ "./src/app/main-view/main-view.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_6__["FileUploadComponent"],
                _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_7__["MainViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/file-upload/file-upload.component.scss":
/*!********************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  width: 500px;\n  margin: auto;\n  margin-top: 100px;\n}\n.box .box-header {\n  color: gray;\n  text-align: center;\n}\n.box .box-buttons {\n  margin-top: 50px;\n}\n.box .box-buttons button {\n  margin-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fya2EvaG9tZS9wcm9qZWN0cy9hbmd1bGFyL2t5Yy9zcmMvYXBwL2ZpbGUtdXBsb2FkL2ZpbGUtdXBsb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjtBREFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDRVI7QURBSTtFQUNJLGdCQUFBO0FDRVI7QUREUTtFQUNJLGtCQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9maWxlLXVwbG9hZC9maWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xuICAgIHdpZHRoIDogNTAwcHg7XG4gICAgbWFyZ2luIDogYXV0bztcbiAgICBtYXJnaW4tdG9wIDogMTAwcHg7XG4gICAgLmJveC1oZWFkZXIge1xuICAgICAgICBjb2xvciA6IGdyYXk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmJveC1idXR0b25zIHtcbiAgICAgICAgbWFyZ2luLXRvcCA6IDUwcHg7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5ib3gge1xuICB3aWR0aDogNTAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4uYm94IC5ib3gtaGVhZGVyIHtcbiAgY29sb3I6IGdyYXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ib3ggLmJveC1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5ib3ggLmJveC1idXR0b25zIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/file-upload/file-upload.component.ts":
/*!******************************************************!*\
  !*** ./src/app/file-upload/file-upload.component.ts ***!
  \******************************************************/
/*! exports provided: FileUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function() { return FileUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent() {
        this.onProceed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.file = null;
    }
    FileUploadComponent.prototype.ngOnInit = function () {
        this.dataModel = {
            image1: 1,
            image2: 2,
            image3: 3,
            image4: 4,
            status: 5,
            displayColumns: '',
            pass: 1,
            fail: 0
        };
    };
    FileUploadComponent.prototype.uploadFile = function (file) {
        var _this = this;
        this.filename = file[0].name;
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.file = fileReader.result.toString();
        };
        fileReader.readAsText(file[0]);
    };
    FileUploadComponent.prototype.proceed = function () {
        this.onProceed.emit({ file: this.file, data: this.dataModel });
    };
    FileUploadComponent.prototype.removeFile = function () {
        this.file = null;
        this.filename = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FileUploadComponent.prototype, "onProceed", void 0);
    FileUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-file-upload',
            template: __webpack_require__(/*! raw-loader!./file-upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/file-upload/file-upload.component.html"),
            styles: [__webpack_require__(/*! ./file-upload.component.scss */ "./src/app/file-upload/file-upload.component.scss")]
        })
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "./src/app/main-view/main-view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main-view/main-view.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view-image {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fya2EvaG9tZS9wcm9qZWN0cy9hbmd1bGFyL2t5Yy9zcmMvYXBwL21haW4tdmlldy9tYWluLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4tdmlldy9tYWluLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tYWluLXZpZXcvbWFpbi12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXctaW1hZ2Uge1xuICAgIHdpZHRoIDogMTAwJTtcbn0iLCIudmlldy1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-view/main-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-view/main-view.component.ts ***!
  \**************************************************/
/*! exports provided: MainViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainViewComponent", function() { return MainViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Rx';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
var MainViewComponent = /** @class */ (function () {
    function MainViewComponent(papa, http) {
        this.papa = papa;
        this.http = http;
        this.currentIndex = 1;
        this.dataModel = {};
        this.image = {};
        this.gotopage = 0;
        this.displayColumns = [];
        this.customMessage = '';
    }
    MainViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.image = {
            image1: '',
            image2: '',
            image3: '',
            image4: ''
        };
        this.dataModel = this.file['data'];
        if (this.dataModel['displayColumns']) {
            this.displayColumns = this.dataModel['displayColumns'].split(',');
        }
        this.papa.parse(this.file['file'], {
            complete: function (result) {
                _this.csvData = result.data;
                _this.getImages();
            }
        });
    };
    MainViewComponent.prototype.next = function () {
        this.currentIndex = this.currentIndex + 1;
        this.currentIndex = this.currentIndex >= this.csvData.length ? this.csvData.length - 1 : this.currentIndex;
        this.getImages();
        this.customMessage = '';
    };
    MainViewComponent.prototype.clearImages = function () {
        this.image['image1'] = '';
        this.image['image2'] = '';
        this.image['image3'] = '';
        this.image['image4'] = '';
    };
    MainViewComponent.prototype.previous = function () {
        this.currentIndex = this.currentIndex - 1;
        this.currentIndex = this.currentIndex <= 1 ? 1 : this.currentIndex;
        this.getImages();
        this.customMessage = '';
    };
    MainViewComponent.prototype.goTo = function () {
        this.currentIndex = this.gotopage;
        this.getImages();
        this.customMessage = '';
    };
    MainViewComponent.prototype.pass = function () {
        this.csvData[this.currentIndex][parseInt(this.dataModel['status']) - 1] = this.dataModel['pass'];
        this.customMessage = '';
    };
    MainViewComponent.prototype.fail = function () {
        this.csvData[this.currentIndex][parseInt(this.dataModel['status']) - 1] = this.dataModel['fail'];
        this.customMessage = '';
    };
    MainViewComponent.prototype.updateStatus = function (value) {
        this.csvData[this.currentIndex][parseInt(this.dataModel['status']) - 1] = value;
    };
    MainViewComponent.prototype.save = function () {
        var newArray = [];
        for (var index in this.csvData) {
            newArray.push('"' + this.csvData[index].join('","') + '"');
        }
        var a = document.createElement('a');
        var blob = new Blob([newArray.join('\n')], { type: 'text/csv' }), url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = "output.csv";
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
    };
    MainViewComponent.prototype.getImages = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_j) {
                switch (_j.label) {
                    case 0:
                        this.clearImages();
                        _a = this.image;
                        _b = 'image1';
                        return [4 /*yield*/, this.getImage(this.csvData[this.currentIndex][parseInt(this.dataModel['image1']) - 1])];
                    case 1:
                        _a[_b] = _j.sent();
                        _c = this.image;
                        _d = 'image2';
                        return [4 /*yield*/, this.getImage(this.csvData[this.currentIndex][parseInt(this.dataModel['image2']) - 1])];
                    case 2:
                        _c[_d] = _j.sent();
                        _e = this.image;
                        _f = 'image3';
                        return [4 /*yield*/, this.getImage(this.csvData[this.currentIndex][parseInt(this.dataModel['image3']) - 1])];
                    case 3:
                        _e[_f] = _j.sent();
                        _g = this.image;
                        _h = 'image4';
                        return [4 /*yield*/, this.getImage(this.csvData[this.currentIndex][parseInt(this.dataModel['image4']) - 1])];
                    case 4:
                        _g[_h] = _j.sent();
                        this.customMessage = '';
                        return [2 /*return*/];
                }
            });
        });
    };
    MainViewComponent.prototype.getImage = function (url) {
        return new Promise(function (resolve, reject) {
            try {
                var xhr_1 = new XMLHttpRequest();
                xhr_1.onload = function () {
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        resolve(reader.result);
                    };
                    reader.readAsDataURL(xhr_1.response);
                };
                xhr_1.open('GET', url);
                xhr_1.responseType = 'blob';
                xhr_1.send();
            }
            catch (err) {
                console.log('Error.');
                resolve('');
            }
        });
    };
    MainViewComponent.ctorParameters = function () { return [
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_2__["Papa"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], MainViewComponent.prototype, "file", void 0);
    MainViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-view',
            template: __webpack_require__(/*! raw-loader!./main-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-view/main-view.component.html"),
            styles: [__webpack_require__(/*! ./main-view.component.scss */ "./src/app/main-view/main-view.component.scss")]
        })
    ], MainViewComponent);
    return MainViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/arka/home/projects/angular/kyc/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map