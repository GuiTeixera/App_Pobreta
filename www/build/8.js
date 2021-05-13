webpackJsonp([8],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComprasPageModule", function() { return EditComprasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_compras__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditComprasPageModule = /** @class */ (function () {
    function EditComprasPageModule() {
    }
    EditComprasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_compras__["a" /* EditComprasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_compras__["a" /* EditComprasPage */]),
            ],
        })
    ], EditComprasPageModule);
    return EditComprasPageModule;
}());

//# sourceMappingURL=edit-compras.module.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_compras_compras__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComprasPage = /** @class */ (function () {
    function EditComprasPage(navCtrl, navParams, formBuilder, toast, comprasProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.comprasProvider = comprasProvider;
        this.categoria = this.navParams.data.categoria || {};
        this.SetupPageTitle();
        this.createForm();
        var consulta = this.comprasProvider.get(this.navParams.data.categoriakey).subscribe(function (Data) {
            consulta.unsubscribe();
            _this.categoria = Data;
            _this.createForm();
        });
    }
    EditComprasPage.prototype.SetupPageTitle = function () {
        if (this.navParams.data.categoria) {
            this.title = 'Alterando Produto';
        }
        else {
            this.title = 'Novo Produto';
        }
    };
    EditComprasPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.categoria.key],
            nome: [this.categoria.nome],
        });
    };
    EditComprasPage.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.comprasProvider.save(this.form.value);
            this.toast.create({ message: 'produto salvo com sucesso!', duration: 3000 }).present();
            this.navCtrl.pop();
        }
    };
    EditComprasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-compras',template:/*ion-inline-start:"D:\App\pobreta\src\pages\edit-compras\edit-compras.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title style="text-align: center;">Nova categoria</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form">\n      <ion-item>\n        <ion-label stacked> Categoria dos Produtos </ion-label>\n        <ion-input type="text" formControlName="nome"></ion-input>\n      </ion-item>\n\n      <!-- <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n        <div [hidden]="!form.controls.nome.errors.required">\n          O Campo é Obrigatório\n        </div>\n      </ion-item> -->\n\n      <!-- <ion-item>\n        <ion-label stacked> Nome do Exercicio </ion-label>\n        <ion-input type="text" formControlName="exercicio"></ion-input>\n      </ion-item> -->\n\n\n      <div padding>\n          <button ion-button block color="dark" type="submit" (click)="onSubmit()" [disabled]="!form.valid" round>Salvar</button>\n        </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\App\pobreta\src\pages\edit-compras\edit-compras.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_compras_compras__["a" /* ComprasProvider */]])
    ], EditComprasPage);
    return EditComprasPage;
}());

//# sourceMappingURL=edit-compras.js.map

/***/ })

});
//# sourceMappingURL=8.js.map