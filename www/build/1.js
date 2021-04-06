webpackJsonp([1],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(462);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_account_account__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, formBuilder, auth, toast, menu, navParams) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.toast = toast;
        this.menu = menu;
        this.navParams = navParams;
        this.createForm();
    }
    SignupPage.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            //  nascimento:[''],
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
        });
    };
    SignupPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.auth.createAccount(this.form.value)
                .then(function () {
                _this.toast.create({ message: 'Conta criada com sucesso. Foi enviado um e-mail para você confirmar, antes de efetuar o login', duration: 3000 }).present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
            })
                .catch(function (message) {
                _this.toast.create({ message: message, duration: 3000 }).present();
            });
        }
    };
    SignupPage.prototype.onClose = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"D:\App\pobreta\src\pages\signup\signup.html"*/'<ion-header >\n\n  <ion-navbar color="dark">\n    <ion-title style="text-align: center;">Criar Conta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <Form [formGroup]="form">\n\n    <ion-item>\n      <ion-label stacked>Nome e Sobrenome:</ion-label>\n      <ion-input type="text" formControlName="nome" placeholder="Digite seu Nome e Sobrenome!"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!form.controls.nome.valid && (form.controls.nome.dirty || form.controls.nome.touched)" color="danger">\n      <div [hidden]="!form.controls.nome.errors.required">\n        o campo é obrigatorio\n      </div>\n    </ion-item>\n\n    <!-- <ion-item>\n      <ion-label stacked>Data de nascimento:</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" formControlName="nascimento" placeholder="DD/MM/YYYY"></ion-datetime>\n    </ion-item>\n\n    <ion-item *ngIf="!form.controls.nascimento.valid && (form.controls.nascimento.dirty || form.controls.nascimento.touched)" color="danger">\n      <div [hidden]="!form.controls.nascimento.errors.required">\n        o campo é obrigatorio\n      </div>\n    </ion-item> -->\n\n    <ion-item>\n      <ion-label stacked>E-mail:</ion-label>\n      <ion-input type="email" formControlName="email" placeholder="@email.com"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!form.controls.email.valid && (form.controls.email.dirty || form.controls.email.touched)" color="danger">\n      <div [hidden]="!form.controls.email.errors.required">\n        o campo é obrigatorio\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Senha:</ion-label>\n      <ion-input type="password" formControlName="password" placeholder="Digite sua Senha!"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="!form.controls.password.valid && (form.controls.password.dirty || form.controls.password.touched)" color="danger">\n      <div [hidden]="!form.controls.password.errors.required">\n        o campo é obrigatorio\n      </div>\n    </ion-item>\n\n    <div padding>\n      <button ion-button block color="dark" (click)="onSubmit()" type="submit" [disabled]="! form.valid">\n        Cadastrar\n      </button>\n    </div>\n\n  </Form>\n\n</ion-content>\n'/*ion-inline-end:"D:\App\pobreta\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _f || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=1.js.map