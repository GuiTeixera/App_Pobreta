webpackJsonp([5],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditLembretePageModule", function() { return EditLembretePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_lembrete__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditLembretePageModule = /** @class */ (function () {
    function EditLembretePageModule() {
    }
    EditLembretePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_lembrete__["a" /* EditLembretePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_lembrete__["a" /* EditLembretePage */]),
            ],
        })
    ], EditLembretePageModule);
    return EditLembretePageModule;
}());

//# sourceMappingURL=edit-lembrete.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLembretePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_lembrete_lembrete__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditLembretePage = /** @class */ (function () {
    function EditLembretePage(navCtrl, navParams, formBuilder, toast, lembreteProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.lembreteProvider = lembreteProvider;
        this.lembrete = this.navParams.data.lembrete || {};
        // this.SetupPageTitle();
        this.createForm();
        var consulta = this.lembreteProvider.get(this.navParams.data.lembretekey).subscribe(function (Data) {
            consulta.unsubscribe();
            _this.lembrete = Data;
            _this.createForm();
        });
    }
    // private SetupPageTitle(){
    //   if(this.navParams.data.lembrete){
    //     this.title = 'Alterando Descrição';
    //   }
    //   else{
    //     this.title = 'Nova Descrição';
    //   }
    // }
    EditLembretePage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.lembrete.key],
            titulo: [this.lembrete.titulo],
            descricao: [this.lembrete.descricao],
        });
    };
    EditLembretePage.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.lembreteProvider.save(this.form.value);
            this.toast.create({ message: 'produto salvo com sucesso!', duration: 3000 }).present();
            this.navCtrl.pop();
        }
    };
    EditLembretePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-lembrete',template:/*ion-inline-start:"D:\App\pobreta\src\pages\edit-lembrete\edit-lembrete.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title style="text-align: center;">Novo Lembrete</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form">\n\n      <ion-item>\n        <ion-label stacked> Titulo </ion-label>\n        <ion-input type="text" formControlName="titulo"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked> Descrição </ion-label>\n        <ion-input type="text" formControlName="descricao"></ion-input>\n      </ion-item>\n\n      <div padding>\n          <button ion-button block color="dark" type="submit" (click)="onSubmit()" [disabled]="!form.valid" round>Salvar</button>\n        </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\App\pobreta\src\pages\edit-lembrete\edit-lembrete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_lembrete_lembrete__["a" /* LembreteProvider */]])
    ], EditLembretePage);
    return EditLembretePage;
}());

//# sourceMappingURL=edit-lembrete.js.map

/***/ })

});
//# sourceMappingURL=5.js.map