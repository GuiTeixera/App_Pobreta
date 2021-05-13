webpackJsonp([3],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LembretePageModule", function() { return LembretePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lembrete__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LembretePageModule = /** @class */ (function () {
    function LembretePageModule() {
    }
    LembretePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lembrete__["a" /* LembretePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lembrete__["a" /* LembretePage */]),
            ],
        })
    ], LembretePageModule);
    return LembretePageModule;
}());

//# sourceMappingURL=lembrete.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembretePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_lembrete_lembrete__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LembretePage = /** @class */ (function () {
    function LembretePage(navCtrl, navParams, toast, lembreteProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.lembreteProvider = lembreteProvider;
        this.lembretes = this.lembreteProvider.getAlll();
    }
    LembretePage.prototype.newLembrete = function () {
        this.navCtrl.push('EditLembretePage');
    };
    LembretePage.prototype.editLembrete = function (lembrete) {
        this.navCtrl.push('EditLembretePage', { lembretekey: lembrete.key });
    };
    LembretePage.prototype.removeLembrete = function (key) {
        this.lembreteProvider.remove(key);
        this.toast.create({ message: 'Lembrete removido com sucesso!', duration: 3000 }).present();
    };
    LembretePage.prototype.listLembretes = function (lembrete) {
        this.navCtrl.push('DescricaoPage', { lembretekey: lembrete.key });
    };
    LembretePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lembrete',template:/*ion-inline-start:"D:\App\pobreta\src\pages\lembrete\lembrete.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="text-align: center;">Lembrete</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list no-lines>\n    <ion-item-sliding *ngFor="let lembrete of lembretes | async">\n        <ion-item>\n          <br>\n          <h2 (click)="listLembretes(lembrete)">{{lembrete.titulo}}</h2>\n\n        </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="secundary" (click)="editLembrete(lembrete)"><ion-icon name="create"></ion-icon>Editar</button>\n      </ion-item-options>\n\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="removeLembrete(lembrete.key)"><ion-icon name="trash"></ion-icon>Remover</button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="dark" (click)="newLembrete()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\App\pobreta\src\pages\lembrete\lembrete.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_lembrete_lembrete__["a" /* LembreteProvider */]])
    ], LembretePage);
    return LembretePage;
}());

//# sourceMappingURL=lembrete.js.map

/***/ })

});
//# sourceMappingURL=3.js.map