webpackJsonp([11],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasPageModule", function() { return ComprasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compras__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComprasPageModule = /** @class */ (function () {
    function ComprasPageModule() {
    }
    ComprasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__compras__["a" /* ComprasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__compras__["a" /* ComprasPage */]),
            ],
        })
    ], ComprasPageModule);
    return ComprasPageModule;
}());

//# sourceMappingURL=compras.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_compras_compras__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { AngularFireAuth } from 'angularfire2/auth';

var ComprasPage = /** @class */ (function () {
    function ComprasPage(navCtrl, navParams, toast, 
        // private auth: AngularFireAuth,
        comprasProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.comprasProvider = comprasProvider;
        this.categorias = this.comprasProvider.getAll();
    }
    // ionViewDidLoad() {
    //   const userState = this.auth.authState.subscribe( user => {
    //     if (user){
    //       this.userName = user.displayName;
    //       userState.unsubscribe();
    //     }
    //   })
    // }
    ComprasPage.prototype.newCategory = function () {
        this.navCtrl.push('EditComprasPage');
    };
    ComprasPage.prototype.editCategory = function (categoria) {
        this.navCtrl.push('EditComprasPage', { categoriakey: categoria.key });
    };
    ComprasPage.prototype.removeCategory = function (key) {
        this.comprasProvider.remove(key);
        this.toast.create({ message: 'Categoria removida com sucesso!', duration: 3000 }).present();
    };
    ComprasPage.prototype.listProdutos = function (categoria) {
        this.navCtrl.push('DetalhePage', { categoriakey: categoria.key });
    };
    ComprasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compras',template:/*ion-inline-start:"D:\App\pobreta\src\pages\compras\compras.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="text-align: center;">Pobreta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list >\n\n    <ion-item-sliding *ngFor="let categoria of categorias | async">\n        <ion-item>\n          <br>\n          <h2 (click)="listProdutos(categoria)">{{categoria.nome}}</h2>\n\n        </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="secundary" (click)="editCategory(categoria)"><ion-icon name="create"></ion-icon>Editar</button>\n      </ion-item-options>\n\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="removeCategory(categoria.key)"><ion-icon name="trash"></ion-icon>Remover</button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n\n  <ion-fab right bottom>\n    <button ion-fab color="dark" (click)="newCategory()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\App\pobreta\src\pages\compras\compras.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_compras_compras__["a" /* ComprasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_compras_compras__["a" /* ComprasProvider */]) === "function" && _d || Object])
    ], ComprasPage);
    return ComprasPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=compras.js.map

/***/ })

});
//# sourceMappingURL=11.js.map