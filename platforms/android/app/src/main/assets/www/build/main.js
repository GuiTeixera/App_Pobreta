webpackJsonp([12],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeProvider = /** @class */ (function () {
    function HomeProvider(db) {
        this.db = db;
        this.PATH = 'produtos/';
    }
    HomeProvider.prototype.getAll = function () {
        return this.db.list(this.PATH)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.key }, c.payload.val())); });
        });
    };
    HomeProvider.prototype.get = function (categorykey) {
        return this.db.object(this.PATH + categorykey)
            .snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    HomeProvider.prototype.save = function (treinoData) {
        var treino = {
            nome: treinoData.nome,
        };
        if (treinoData.key) {
            this.db.list(this.PATH).update(treinoData.key, treino);
        }
        else {
            this.db.list(this.PATH).push(treino);
        }
    };
    HomeProvider.prototype.remove = function (key) {
        this.db.list(this.PATH).remove(key);
    };
    HomeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomeProvider);
    return HomeProvider;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountProvider = /** @class */ (function () {
    function AccountProvider(auth, db) {
        this.auth = auth;
        this.db = db;
        this.PATH = 'users/';
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */];
    }
    AccountProvider.prototype.createAccount = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
                .then(function (firebaseUser) {
                _this.db.object(_this.PATH + firebaseUser.uid).set({ nome: user.nome, email: user.email });
                _this.db.object(_this.PATH + firebaseUser.uid).update({ emailVerified: false, email: user.email });
                firebaseUser.updateProfile({ displayName: user.nome, photoURL: null });
                firebaseUser.sendEmailVerification();
                _this.signOut();
                resolve();
            })
                .catch(function (e) {
                reject(_this.handlerError(e));
            });
        });
    };
    AccountProvider.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
                .then(function (firebaseUser) {
                if (firebaseUser.emailVerified) {
                    _this.db.object(_this.PATH + firebaseUser.uid).update({ emailVerified: true });
                }
                resolve({ emailVerified: firebaseUser.emailVerified });
            })
                .catch(function (e) {
                reject(_this.handlerError(e));
            });
        });
    };
    AccountProvider.prototype.forgotEmail = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.auth.auth.sendPasswordResetEmail(email)
                .then(function () {
                resolve();
            })
                .catch(function (e) {
                reject(_this.handlerError(e));
            });
        });
    };
    AccountProvider.prototype.signOut = function () {
        this.auth.auth.signOut();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */];
    };
    AccountProvider.prototype.handlerError = function (error) {
        var message = '';
        if (error.code == 'auth/email-already-in-use') {
            message = 'O e-mail informado já está sendo usado.';
        }
        else if (error.code == 'auth/invalid-email') {
            message = 'O e-mail informado é inválido.';
        }
        else if (error.code == 'auth/weak-password') {
            message = 'A senha informada é muito fraca.';
        }
        else if (error.code == 'auth/user-not-found') {
            message = 'Usuário não encontrado.';
        }
        else if (error.code == 'auth/wrong-password') {
            message = 'Usuário/senha inválido(s).';
        }
        else {
            message = 'Ocorreu algum erro, por favor tente novamente.';
        }
        return message;
    };
    AccountProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AccountProvider);
    return AccountProvider;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, FormBuilder, menu, loadingCtrl, auth, toast, navParams) {
        this.navCtrl = navCtrl;
        this.FormBuilder = FormBuilder;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.toast = toast;
        this.navParams = navParams;
        this.createForm();
    }
    SigninPage.prototype.createForm = function () {
        this.form = this.FormBuilder.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].email]],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
        });
    };
    SigninPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.form.valid) {
            this.auth.login(this.form.value)
                .then(function (user) {
                if (user.emailVerified) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
                }
                else {
                    _this.toast.create({ message: 'Seu e-mail ainda não foi verificado. Por favor acesse seu e-mail e clique no link para verificar conta.', duration: 4000 }).present();
                }
            })
                .catch(function (message) {
                _this.toast.create({ message: message, duration: 3000 }).present();
            });
        }
    };
    SigninPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    SigninPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    SigninPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Carregando...",
            duration: 2000
        });
        loader.present();
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"D:\App\pobreta\src\pages\signin\signin.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title style="text-align: center;">Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<Form [formGroup]="form">\n  <img style="margin-top: 75px; margin-left: 90px;"src="../assets/imgs/lagarto.gif">\n <br><br><br><br>\n\n  <ion-item>\n    <ion-label stacked>E-mail</ion-label>\n    <ion-input type="email" formControlName="email"></ion-input>\n  </ion-item>\n\n    <ion-item *ngIf="!form.controls.email.valid && (form.controls.email.dirty || form.controls.email.touched)" color="danger">\n      <div [hidden]="!form.controls.email.errors.required">\n      o campo é obrigatorio\n      </div>\n    </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Senha</ion-label>\n    <ion-input color="dark" type="password" formControlName="password"></ion-input>\n  </ion-item>\n\n  <ion-item *ngIf="!form.controls.password.valid && (form.controls.password.dirty || form.controls.password.touched)" color="danger">\n      <div [hidden]="!form.controls.password.errors.required">\n      o campo é obrigatorio\n      </div>\n    </ion-item>\n\n  <div padding>\n    <br>\n    <button ion-button block  (click)="onSubmit()" (click)="presentLoading()" color="dark" type="submit" [disabled]="! form.valid" round>\n      Entrar\n    </button>\n  </div>\n  <br>\n  <button ion-button block color="dark" clear navPush="ForgotPasswordPage">Esqueci minha senha</button>\n  <button ion-button block color="dark" clear navPush="SignupPage">Criar conta</button>\n\n\n</Form>\n</ion-content>\n'/*ion-inline-end:"D:\App\pobreta\src\pages\signin\signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/descricao/descricao.module": [
		444,
		9
	],
	"../pages/detalhe/detalhe.module": [
		443,
		8
	],
	"../pages/edit-detalhe/edit-detalhe.module": [
		442,
		7
	],
	"../pages/edit-home/edit-home.module": [
		452,
		6
	],
	"../pages/edit-lembrete/edit-lembrete.module": [
		445,
		5
	],
	"../pages/forgot-password/forgot-password.module": [
		446,
		4
	],
	"../pages/home/home.module": [
		451,
		11
	],
	"../pages/lembrete/lembrete.module": [
		447,
		3
	],
	"../pages/menu/menu.module": [
		449,
		2
	],
	"../pages/signin/signin.module": [
		448,
		10
	],
	"../pages/signup/signup.module": [
		453,
		1
	],
	"../pages/sobre/sobre.module": [
		450,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LembreteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LembreteProvider = /** @class */ (function () {
    function LembreteProvider(db) {
        this.db = db;
        this.PATH = 'lembret/';
        console.log('Hello LembreteProvider Provider');
    }
    LembreteProvider.prototype.getAlll = function () {
        return this.db.list(this.PATH)
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.key }, c.payload.val())); });
        });
    };
    LembreteProvider.prototype.get = function (categorkey) {
        return this.db.object(this.PATH + categorkey)
            .snapshotChanges()
            .map(function (c) {
            return __assign({ key: c.key }, c.payload.val());
        });
    };
    LembreteProvider.prototype.save = function (descricaoData) {
        var descricao = {
            titulo: descricaoData.titulo,
            descricao: descricaoData.descricao,
        };
        if (descricaoData.key) {
            this.db.list(this.PATH).update(descricaoData.key, descricao);
        }
        else {
            this.db.list(this.PATH).push(descricao);
        }
    };
    LembreteProvider.prototype.remove = function (key) {
        this.db.list(this.PATH).remove(key);
    };
    LembreteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LembreteProvider);
    return LembreteProvider;
}());

//# sourceMappingURL=lembrete.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalheProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetalheProvider = /** @class */ (function () {
    function DetalheProvider(db) {
        this.db = db;
        this.PATH = 'Detalhes/';
    }
    DetalheProvider.prototype.getAllTreinos = function (categoryKey) {
        return this.db.list(this.PATH, function (ref) {
            if (categoryKey) {
                return ref.orderByChild('categoryKey').equalTo(categoryKey); // equalTo(categoryKey) é igual ao do banco
            }
            else {
                return ref.orderByChild('name');
            }
        }).snapshotChanges().map(function (changes) {
            return changes.map(function (m) { return ({ key: m.key, data: m.payload.val() }); });
        });
    };
    DetalheProvider.prototype.getAll = function () {
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('categoryName'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (m) { return ({ key: m.key, data: m.payload.val() }); });
        });
    };
    DetalheProvider.prototype.get = function (key) {
        return this.db.object(this.PATH + key).snapshotChanges();
    };
    // file é o arquivo passando por parâmetro
    DetalheProvider.prototype.save = function (item, file) {
        var product = {
            descricao: item.descricao,
            quantidade: item.quantidade,
            categoryKey: item.categoryKey,
            categoryName: item.categoryName
        };
        if (item.key) {
            this.db.object(this.PATH + item.key).update(product).then(function () {
                // quando o usuário clicar pra salvar eu salvo a imagem e se salvou com sucesso (then) e daí fazer o upload da imagem
                // Se não ficaria assim: this.db.object(this.PATH + item.key).update(product);
            });
        }
        else {
            this.db.list(this.PATH).push(product).then(function (result) {
            });
        }
    };
    DetalheProvider.prototype.updateCategories = function (categoryKey, categoryName) {
        var _this = this;
        // fazendo uma consulta no Produtos com essa categoria
        var subscribe = this.db.list(this.PATH, function (ref) { return ref.orderByChild('categoryKey').equalTo(categoryKey); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (m) { return ({ key: m.key }); });
        }) // neste subscrite Eu recebi a key do produto
            .subscribe(function (items) {
            subscribe.unsubscribe();
            items.forEach(function (product) {
                _this.db.object(_this.PATH + product.key).update({
                    categoryKey: categoryKey,
                    categoryName: categoryName
                });
            });
        });
    };
    DetalheProvider.prototype.remove = function (key) {
        this.db.list(this.PATH).remove(key);
    };
    DetalheProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DetalheProvider);
    return DetalheProvider;
}());

//# sourceMappingURL=detalhe.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastProvider = /** @class */ (function () {
    function ToastProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastProvider.prototype.show = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_account_account__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_toast_toast__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_detalhe_detalhe__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_lembrete_lembrete__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-detalhe/edit-detalhe.module#EditDetalhePageModule', name: 'EditDetalhePage', segment: 'edit-detalhe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe/detalhe.module#DetalhePageModule', name: 'DetalhePage', segment: 'detalhe', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/descricao/descricao.module#DescricaoPageModule', name: 'DescricaoPage', segment: 'descricao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-lembrete/edit-lembrete.module#EditLembretePageModule', name: 'EditLembretePage', segment: 'edit-lembrete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lembrete/lembrete.module#LembretePageModule', name: 'LembretePage', segment: 'lembrete', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin/signin.module#SigninPageModule', name: 'SigninPage', segment: 'signin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-home/edit-home.module#EditHomePageModule', name: 'EditHomePage', segment: 'edit-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp({
                    apiKey: "AIzaSyAuXs7Wh9ndzNVxRaq6dy2nScpEckROfDc",
                    authDomain: "pobreta-e0ca4.firebaseapp.com",
                    databaseURL: "https://pobreta-e0ca4.firebaseio.com",
                    projectId: "pobreta-e0ca4",
                    storageBucket: "pobreta-e0ca4.appspot.com",
                    messagingSenderId: "432377849257",
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_account_account__["a" /* AccountProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_toast_toast__["a" /* ToastProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_home_home__["a" /* HomeProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_detalhe_detalhe__["a" /* DetalheProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_lembrete_lembrete__["a" /* LembreteProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, auth, splashScreen) {
        // this.initializeApp();
        this.platform = platform;
        this.statusBar = statusBar;
        this.auth = auth;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */];
        this.pages = [
            { icon: 'home', title: 'Pagina Inicial', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { icon: 'basket', title: 'Compras', component: 'DetalhePage' },
            { icon: 'clipboard', title: 'Lembrete', component: 'LembretePage' },
            { icon: 'attach', title: 'Sobre', component: 'SobrePage' }
        ];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide(); // <-- aqui
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.signOut = function () {
        this.auth.auth.signOut();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_signin_signin__["a" /* SigninPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\App\pobreta\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header >\n    <ion-toolbar color="dark">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}" item-left color="dark"io></ion-icon>{{p.title}}\n      </button>\n      <button menuClose ion-item (click)="signOut()">Sair\n        <ion-icon name="exit" item-left color="dark"io></ion-icon>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"D:\App\pobreta\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, toast, auth, homeProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.auth = auth;
        this.homeProvider = homeProvider;
        this.categorias = this.homeProvider.getAll();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var userState = this.auth.authState.subscribe(function (user) {
            if (user) {
                _this.userName = user.displayName;
                userState.unsubscribe();
            }
        });
    };
    HomePage.prototype.newCategory = function () {
        this.navCtrl.push('EditHomePage');
    };
    HomePage.prototype.editCategory = function (categoria) {
        this.navCtrl.push('EditHomePage', { categoriakey: categoria.key });
    };
    HomePage.prototype.removeCategory = function (key) {
        this.homeProvider.remove(key);
        this.toast.create({ message: 'Categoria removida com sucesso!', duration: 3000 }).present();
    };
    HomePage.prototype.listProdutos = function (categoria) {
        this.navCtrl.push('DetalhePage', { categoriakey: categoria.key });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\App\pobreta\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title style="text-align: center;">Pobreta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <br>\n  <h6 style="text-align: center;">Bem vindo, {{userName}}</h6>\n  <br>\n  <ion-list >\n\n    <ion-item-sliding *ngFor="let categoria of categorias | async">\n        <ion-item>\n          <br>\n          <h2 (click)="listProdutos(categoria)">{{categoria.nome}}</h2>\n\n        </ion-item>\n\n      <ion-item-options side="left">\n        <button ion-button color="secundary" (click)="editCategory(categoria)"><ion-icon name="create"></ion-icon>Editar</button>\n      </ion-item-options>\n\n      <ion-item-options side="right">\n        <button ion-button color="danger" (click)="removeCategory(categoria.key)"><ion-icon name="trash"></ion-icon>Remover</button>\n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n\n\n  <ion-fab right bottom>\n    <button ion-fab color="dark" (click)="newCategory()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"D:\App\pobreta\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__providers_home_home__["a" /* HomeProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[286]);
//# sourceMappingURL=main.js.map