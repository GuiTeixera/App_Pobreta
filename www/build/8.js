webpackJsonp([8],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhePageModule", function() { return DetalhePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalhePageModule = /** @class */ (function () {
    function DetalhePageModule() {
    }
    DetalhePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe__["a" /* DetalhePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe__["a" /* DetalhePage */]),
            ],
        })
    ], DetalhePageModule);
    return DetalhePageModule;
}());

//# sourceMappingURL=detalhe.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_detalhe_detalhe__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetalhePage = /** @class */ (function () {
    function DetalhePage(navCtrl, navParams, detalheProvider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detalheProvider = detalheProvider;
        this.toast = toast;
        this.categoria = this.navParams.data.categoria || {};
        this.treinos = this.detalheProvider.getAllTreinos(this.navParams.data.categoriakey);
    }
    // editItemProdutos(treinos: any) {                      // categoria.key é igual ao
    //   this.navCtrl.push('EditDetalhePage', { treinosKey: treinos.key });
    // }
    DetalhePage.prototype.removeItemProdutos = function (key) {
        this.detalheProvider.remove(key);
        this.toast.create({ message: 'Produto removido com sucesso!', duration: 3000 }).present();
    };
    DetalhePage.prototype.newDetail = function () {
        this.navCtrl.push('EditDetalhePage');
    };
    DetalhePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhe',template:/*ion-inline-start:"D:\App\pobreta\src\pages\detalhe\detalhe.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title style="text-align: center;">Produtos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of treinos | async">\n\n      <ion-item>\n        <br>\n        <h2>{{ item.data.descricao }}</h2>\n        <p>Quantidade: {{ item.data.quantidade }}</p>\n        <p>Categoria:{{ item.data.categoryName }}</p>\n      </ion-item>\n\n\n\n      <!-- <ion-item-options side="left">\n        <button ion-button color="secondary" (click)="editItemProdutos(treinos)"><ion-icon name="create"></ion-icon>Editar</button>\n      </ion-item-options> -->\n\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="removeItemProdutos(item.key)"><ion-icon name="trash"></ion-icon>Rmv</button>\n\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="dark" (click)="newDetail()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\App\pobreta\src\pages\detalhe\detalhe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_detalhe_detalhe__["a" /* DetalheProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], DetalhePage);
    return DetalhePage;
}());

//# sourceMappingURL=detalhe.js.map

/***/ })

});
//# sourceMappingURL=8.js.map