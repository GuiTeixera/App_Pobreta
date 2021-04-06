webpackJsonp([9],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescricaoPageModule", function() { return DescricaoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__descricao__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DescricaoPageModule = /** @class */ (function () {
    function DescricaoPageModule() {
    }
    DescricaoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__descricao__["a" /* DescricaoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__descricao__["a" /* DescricaoPage */]),
            ],
        })
    ], DescricaoPageModule);
    return DescricaoPageModule;
}());

//# sourceMappingURL=descricao.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescricaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lembrete_lembrete__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DescricaoPage = /** @class */ (function () {
    function DescricaoPage(navCtrl, navParams, toast, lembreteProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.lembreteProvider = lembreteProvider;
        this.SetupPageTitle();
        this.lembrete = this.navParams.data.lembrete || {};
        var consulta = this.lembreteProvider
            .get(this.navParams.data.lembretekey).subscribe(function (Data) {
            consulta.unsubscribe();
            _this.lembrete = Data;
            _this.titulolembrete = _this.lembrete.titulo;
            _this.descricaolembrete = _this.lembrete.descricao;
        });
    }
    DescricaoPage.prototype.SetupPageTitle = function () {
        if (this.navParams.data.categor) {
            this.title = 'List Ativos';
        }
    };
    DescricaoPage.prototype.editLembrete = function (lembrete) {
        this.navCtrl.push('EditLembretePage', { lembretekey: lembrete.key });
    };
    DescricaoPage.prototype.removeLembrete = function (key) {
        this.lembreteProvider.remove(key);
        this.toast.create({ message: 'Lembrete removido com sucesso!', duration: 3000 }).present();
    };
    DescricaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-descricao',template:/*ion-inline-start:"D:\App\pobreta\src\pages\descricao\descricao.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title style="text-align: center;">Lembrete</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <!-- <h2>Principais funções:</h2> -->\n      <h1>{{titulolembrete}}</h1>\n\n      <!-- <h2>Origem do Ativo:</h2> -->\n      <ion-card-content>{{descricaolembrete}}</ion-card-content>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\App\pobreta\src\pages\descricao\descricao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_lembrete_lembrete__["a" /* LembreteProvider */]])
    ], DescricaoPage);
    return DescricaoPage;
}());

//# sourceMappingURL=descricao.js.map

/***/ })

});
//# sourceMappingURL=9.js.map