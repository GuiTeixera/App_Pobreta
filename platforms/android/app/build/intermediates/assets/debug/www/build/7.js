webpackJsonp([7],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetalhePageModule", function() { return EditDetalhePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_detalhe__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditDetalhePageModule = /** @class */ (function () {
    function EditDetalhePageModule() {
    }
    EditDetalhePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_detalhe__["a" /* EditDetalhePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_detalhe__["a" /* EditDetalhePage */]),
            ],
        })
    ], EditDetalhePageModule);
    return EditDetalhePageModule;
}());

//# sourceMappingURL=edit-detalhe.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDetalhePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_detalhe_detalhe__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditDetalhePage = /** @class */ (function () {
    function EditDetalhePage(navCtrl, navParams, formBuilder, toast, detalheProvider, homeProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.detalheProvider = detalheProvider;
        this.homeProvider = homeProvider;
        this.file = null;
        this.treinos = this.navParams.data.treino || {};
        this.SetupPageTitle();
        this.createForm();
        this.loadCategories();
        var subscribe = this.detalheProvider.get(this.navParams.data.treinoKey).subscribe(function (detalheData) {
            subscribe.unsubscribe();
            _this.treinos = detalheData;
            _this.createForm();
        });
    }
    EditDetalhePage.prototype.SetupPageTitle = function () {
        if (this.navParams.data.treinos) {
            this.title = 'Alterando produtos';
        }
        else {
            this.title = 'Novo produto';
        }
    };
    EditDetalhePage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            key: [this.treinos.key],
            descricao: [this.treinos.descricao],
            quantidade: [this.treinos.quantidade],
            categoryKey: [this.treinos.categoryKey, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            categoryName: [this.treinos.categoryName],
        });
    };
    EditDetalhePage.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.detalheProvider.save(this.form.value, this.file);
            this.toast.show('Produtos salvo com sucesso');
            this.navCtrl.pop();
        }
    };
    EditDetalhePage.prototype.loadCategories = function () {
        this.categories = this.homeProvider.getAll();
    };
    EditDetalhePage.prototype.getCategorias = function () {
        var _this = this;
        var subscribe = this.homeProvider.get(this.form.value.categoryKey).subscribe(function (categoriasData) {
            subscribe.unsubscribe();
            _this.categoriaItem = categoriasData;
            console.log(_this.categoriaItem);
            _this.form.controls['categoryName'].setValue(_this.categoriaItem.nome);
            console.log(_this.categoriaItem.name);
        });
    };
    EditDetalhePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-detalhe',template:/*ion-inline-start:"D:\App\pobreta\src\pages\edit-detalhe\edit-detalhe.html"*/'<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title style="text-align: center;">Novo Produto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n<form [formGroup]="form">\n\n  <ion-item>\n    <ion-label>Categorias</ion-label>\n      <ion-select formControlName="categoryKey" (ionChange)="getCategorias()" interface="popover">\n      <ion-option value="" [selected]="true">Selecione</ion-option>\n      <ion-option *ngFor="let categoria of categories | async" [value]="categoria.key">{{ categoria.nome }}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item>\n    <ion-label stacked>Descrição</ion-label>\n    <ion-input type="text" formControlName="descricao"></ion-input>\n  </ion-item>\n\n\n  <ion-item *ngIf="!form.controls.descricao.valid && (form.controls.descricao.dirty || form.controls.descricao.touched)"\n    color="danger">\n    <div [hidden]="!form.controls.descricao.errors.required">\n      O campo é obrigatório\n    </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Quantidade</ion-label>\n    <ion-input type="number" formControlName="quantidade"></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf="!form.controls.quantidade.valid && (form.controls.quantidade.dirty || form.controls.quantidade.touched)"\n    color="danger">\n    <div [hidden]="!form.controls.quantidade.errors.required">\n      O campo é obrigatório\n    </div>\n  </ion-item>\n\n\n  <div padding>\n    <button ion-button block type="submit" color="dark" [disabled]="!form.valid" (click)="onSubmit()" round>Salvar</button>\n  </div>\n\n</form>\n\n</ion-content>\n'/*ion-inline-end:"D:\App\pobreta\src\pages\edit-detalhe\edit-detalhe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_detalhe_detalhe__["a" /* DetalheProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_home_home__["a" /* HomeProvider */]])
    ], EditDetalhePage);
    return EditDetalhePage;
}());

//# sourceMappingURL=edit-detalhe.js.map

/***/ })

});
//# sourceMappingURL=7.js.map