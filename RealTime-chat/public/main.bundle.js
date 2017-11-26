webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-content {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n.button-row {\n  right: 0;\n}\n\n.btn-group {\n  margin-left: auto;\n  margin-right: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <mat-toolbar color = \"primary\">\n    <span>HappyHour</span>\n    <div class=\"btn-group\" role=\"group\" aria-pressed=\"true\" aria-label=\"...\" *ngIf='AuthService.isUserAuthenticated()'>\n      <button type=\"button\" class=\"btn btn-default\">{{AuthService.getEmail()}}</button>\n      <button type=\"button\" class=\"btn btn-default\"><a href=\"/logout\">Log out</a></button>\n    </div>\n    <div class=\"btn-group\" role=\"group\" aria-pressed=\"true\" aria-label=\"...\" *ngIf='!AuthService.isUserAuthenticated()'>\n      <button type=\"button\" class=\"btn btn-default\"><a href=\"/login\">Log in</a></button>\n      <button type=\"button\" class=\"btn btn-default\"><a href=\"/signup\">Sign up</a></button>\n    </div>\n  </mat-toolbar>\n\n  <div class=\"app-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(AuthService, router) {
        this.AuthService = AuthService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_chatroom_chatroom_component__ = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_socket_service__ = __webpack_require__("../../../../../src/app/service/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_sign_sign_component__ = __webpack_require__("../../../../../src/app/components/sign/sign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_auth_guard_service__ = __webpack_require__("../../../../../src/app/service/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/components/logout/logout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_chatroom_chatroom_component__["a" /* ChatroomComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_sign_sign_component__["a" /* SignComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_logout_logout_component__["a" /* LogoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__service_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_18__service_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_19__service_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_chatroom_chatroom_component__ = __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_sign_sign_component__ = __webpack_require__("../../../../../src/app/components/sign/sign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_logout_logout_component__ = __webpack_require__("../../../../../src/app/components/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_auth_guard_service__ = __webpack_require__("../../../../../src/app/service/auth-guard.service.ts");






var routes = [
    {
        path: '',
        redirectTo: 'chatroom',
        pathMatch: 'full'
    },
    {
        path: 'chatroom',
        component: __WEBPACK_IMPORTED_MODULE_1__components_chatroom_chatroom_component__["a" /* ChatroomComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__service_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_3__components_sign_sign_component__["a" /* SignComponent */]
    },
    {
        path: 'logout',
        component: __WEBPACK_IMPORTED_MODULE_4__components_logout_logout_component__["a" /* LogoutComponent */]
    },
    {
        path: '**',
        redirectTo: 'chatroom'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[mat-fab] {\n    \n    right: 20%;\n    z-index: 1;\n}\n\n.delete {\n    right: 0;\n}\n\n.main-card {\n    height: 100%;  \n}\n\n.chat-list {\n    overflow: auto;\n    position: fixed;\n    top: 90px;\n    left: 25px;\n    right: 25px;\n    bottom: 120px;\n}\n\n.chat-container {\n    position: fixed;\n    width: 100%; \n    height: 100%;  \n}\n\n.chat-list-item {\n    margin-top: 2px;\n    margin-bottom: 2px;\n    border-radius: 5px;\n    background-color: #E8EAF6;\n}\n\n.chat-input {\n    padding-top: 20px;\n    width: 80%; \n}\n\n.chat-footer-container {\n    position:fixed;\n    bottom:25px;\n    left:25px;\n    right:25px;\n}\n\nmat-sidenav {\n    width: 200px;\n    height: 100%;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav #sidenav>\n        <mat-list>\n            <mat-list-item *ngFor = \"let user of users\">\n                <h3 matline>{{user}}</h3>\n                <button class = 'delete' (click) = \"deleteUser(user)\">\n                    <mat-icon>delete forever</mat-icon>\n                </button>\n            </mat-list-item>\n        </mat-list>\n    </mat-sidenav>\n  \n<button mat-fab (click)=\"sidenav.toggle()\">\n    <mat-icon>person</mat-icon>\n</button>\n<div class = 'chat-container'>\n  <mat-card-content class=\"main-card\">\n      <mat-list class=\"chat-list\">\n            <mat-list-item *ngFor = \"let notice of notices \" Class=\"chat-list-item\">                   \n                    <h5 matLine> \n                      <b>{{notice}}</b>\n                    </h5>                   \n            </mat-list-item>\n            <mat-list-item *ngFor = \"let message of messages \" [ngClass]=\"[(message.from.id === user.id)? 'chat-list-item': '']\">\n              <img matListAvatar  [src]=\"message.from.avatar\">\n              <h4 matLine> \n                <b>{{message.from.name}}</b>\n              </h4>\n              <p matLine >\n                  <span> {{message.content}} </span>                  \n              </p>\n            </mat-list-item>\n      </mat-list>\n      <div class=\"chat-footer-container\">\n          <mat-icon>message</mat-icon>\n          <mat-form-field class = 'chat-input'>\n              <input matInput \n                placeholder=\"Type your message\"\n                [(ngModel)] = \"messageContent\"\n                (keyup.enter) = \"sendMessage(messageContent)\">\n          </mat-form-field>\n      </div>\n  </mat-card-content>\n</div>\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/components/chatroom/chatroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_socket_service__ = __webpack_require__("../../../../../src/app/service/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AVATAR_URL = 'https://api.adorable.io/avatars/285';
var ChatroomComponent = (function () {
    function ChatroomComponent(socketService, http, authService, router) {
        this.socketService = socketService;
        this.http = http;
        this.authService = authService;
        this.router = router;
        this.users = [];
        this.userName = null;
        this.messages = [];
        this.notices = [];
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'authorization': 'bearer ' + this.authService.getToken(),
        });
        this.http.post('/chatroom', { 'status': 'logged' }, { headers: headers }).toPromise()
            .then(function (res) {
            var json = res.json();
            console.log(json);
        }).catch(function (error) {
            console.log(error);
        });
        this.initIoConnection();
    };
    ChatroomComponent.prototype.initModel = function () {
        var randomId = this.getRandomId();
        this.userName = this.authService.getDisplayName();
        this.user = {
            id: randomId,
            avatar: AVATAR_URL + "/" + randomId + ".png",
            name: this.userName,
        };
    };
    ChatroomComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.initModel();
        this.socketService.init(this.userName);
        this.ioConnection = this.socketService.onMessage()
            .subscribe(function (message) {
            _this.messages.push(message);
        });
        this.socketService.onUserslist()
            .subscribe(function (usersList) {
            _this.users = usersList;
            _this.users.push(_this.userName);
            _this.notices.push(_this.userName + ' joined');
        });
        this.socketService.newUser()
            .subscribe(function (name) {
            _this.users.push(name);
            _this.notices.push(name + ' joined');
        });
        this.socketService.loseUser()
            .subscribe(function (name) {
            _this.notices.push(name + ' left');
            var index = _this.users.indexOf(name);
            _this.users.splice(index, 1);
        });
        this.socketService.kickUser()
            .subscribe(function (displayName) {
            _this.notices.push('kick out ' + displayName);
            var index = _this.users.indexOf(displayName);
            _this.users.splice(index, 1);
        });
        this.socketService.onConnect()
            .subscribe(function () {
            console.log('onConnect');
        });
        this.socketService.onDisconnect()
            .subscribe(function () {
            console.log('onDisconnect');
        });
    };
    ChatroomComponent.prototype.getRandomId = function () {
        return Math.floor(Math.random() * (1000000)) + 1;
    };
    ChatroomComponent.prototype.sendMessage = function (message) {
        if (!message) {
            return;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'authorization': 'bearer ' + this.authService.getToken(),
        });
        this.http.post('/chatroom', { 'status': 'logged' }, { headers: headers }).toPromise()
            .then(function (res) {
            var json = res.json();
            console.log(json);
        }).catch(function (error) {
            console.log(error);
        });
        var senddata = {
            from: this.user,
            content: message
        };
        this.socketService.send(senddata);
        this.messages.push(senddata);
        this.messageContent = null;
    };
    ChatroomComponent.prototype.deleteUser = function (displayName) {
        var _this = this;
        this.notices.push('kick out ' + displayName);
        var index = this.users.indexOf(displayName);
        this.users.splice(index, 1);
        this.socketService.deleteUser(displayName);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        this.http.post('/auth/delete', { displayName: displayName }, { headers: headers }).toPromise()
            .then(function (res) {
            var json = res.json();
            _this.router.navigate(['/logout']);
        }).catch(function (error) {
            console.log(error);
        });
    };
    ChatroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chatroom',
            template: __webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/chatroom/chatroom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\n    margin-left: auto;\n    margin-right: auto;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row hor_space_100\">\n    <div class=\"col-lg-8\"></div>\n    <div class=\"col-lg-8\">     \n      <div class=\"col-md-12 col-md-offset-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n              Login\n          </div>\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errors.summary !== null\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Error:</span>\n            {{errors.summary}}\n          </div>          \n          <div class=\"panel-body\">\n            <form\n              novalidate\n              action =\"/\"\n              (ngSubmit)=\"processForm()\"\n              #loginForm=\"ngForm\">\n              <div class=\"form-group\">\n                <div [ngClass]=\"{'has-error' : (emVar.touched || emVar.dirty) && !emVar.valid}\">\n                <label for=\"email\">Email Address</label>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errors.email !== null\">\n                  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Error:</span>\n                  {{errors.email}}\n                </div>\n                <input type=\"text\"\n                        name=\"email\"\n                        id=\"email\"\n                        class=\"form-control\"\n                        required\n                        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n                      \n                        placeholder=\"Email (Required)\"\n                        [(ngModel)]=\"user.email\"\n                        #emVar=\"ngModel\">\n                        <span class=\"help-block\" *ngIf=\"(emVar.touched || emVar.dirty) && emVar.errors\">\n                          <span *ngIf=\"emVar.errors.required\">\n                            Please enter your email\n                          </span>\n                          \n                          <span *ngIf=\"emVar.errors.pattern\">\n                            Please enter a valid email address\n                          </span>\n                        </span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div [ngClass]=\"{'has-error': (pw1Var.touched || pw1Var.dirty) && !pw1Var.valid}\">\n                <label for=\"passowrd\">Password</label>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errors.password !== null\">\n                  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Error:</span>\n                  {{errors.password}}\n                </div> \n                <input type=\"password\"\n                        id=\"password\"\n                        name=\"password\"\n                        class=\"form-control\"\n                        required\n                        placeholder=\"Password (Required)\"\n                        [(ngModel)]=\"user.password\"\n                        #pw1Var=\"ngModel\"/>\n                        <span class=\"help-block\" *ngIf=\"(pw1Var.touched || pw1Var.dirty) && pw1Var.errors\">\n                          Please enter your password\n                        </span>\n                </div>\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\">Keep me logged in.\n                </label>\n              </div>             \n              <div class=\"form-group\">\n               <span>\n               <button type=\"submit\"\n                       class=\"btn btn-success btn_narrow\"\n                       [disabled]=\"!loginForm.valid\"\n                       >Login</button> \n               <button type=\"button\"\n                       class=\"btn btn-default btn_narrow\"\n                       (click)=\"cancel()\">Cancel</button>\n              </span>\n              </div>\n            </form>\n          </div>\n          <div class=\"panel-footer\">\n            Not Registerd? <a [routerLink]=\"['/signup']\" href=\"/signup\">Register Here</a><br>             \n          </div>\n        </div>\n      </div>  \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, http, AuthService) {
        this.router = router;
        this.http = http;
        this.AuthService = AuthService;
        this.user = {
            email: '',
            password: ''
        };
        this.errors = {
            summary: null,
            email: null,
            password: null
        };
    }
    LoginComponent.prototype.processForm = function () {
        var _this = this;
        var email = this.user.email;
        var password = this.user.password;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        var body = {
            email: this.user.email,
            password: this.user.password
        };
        this.http.post('/auth/login', body, { headers: headers }).toPromise()
            .then(function (response) {
            if (response.status === 200) {
                _this.errors = {
                    summary: null,
                    email: null,
                    password: null
                };
                var json = response.json();
                _this.AuthService.authenticateUser(json.token, email, json.user.displayName);
                _this.router.navigate(['']);
            }
        }).catch(function (error) {
            console.log('Login failed');
            var json = error.json();
            _this.errors = {
                summary: json.message,
                email: null,
                password: null
            };
            console.log(error);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogoutComponent = (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.deauthenticateUser();
        this.router.navigate(['login']);
    };
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logout',
            template: __webpack_require__("../../../../../src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sign/sign.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign/sign.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row hor_space_100\">\n    <div class=\"col-md-8\"></div>\n    <div class=\"col-md-8\">\n      <div class=\"col-md-8 col-md-offset-3\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            Register New User\n          </div>\n          <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errors.summary !== null\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Error:</span>\n            {{errors.summary}}\n          </div> \n          <div class=\"panel-body\">\n            <form\n              novalidate\n              (ngSubmit)=\"processForm()\"\n              #registerForm=\"ngForm\">\n              \n              <div class=\"form-group\">\n                <div [ngClass]=\"{'has-error' : (emVar.touched || emVar.dirty) && !emVar.valid}\">\n                <label for=\"email\">Email Address</label>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errors.email !== null\">\n                  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Error:</span>\n                  {{errors.email}}\n                </div>\n                <input type=\"text\"\n                        name=\"email\"\n                        id=\"email\"\n                        class=\"form-control\"\n                        required\n                        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\n                      \n                        placeholder=\"Email (Required)\"\n                        [(ngModel)]=\"user.email\"\n                        #emVar=\"ngModel\">\n                        <span class=\"help-block\" *ngIf=\"(emVar.touched || emVar.dirty) && emVar.errors\">\n                          <span *ngIf=\"emVar.errors.required\">\n                            A email address is required\n                          </span>\n                          \n                          <span *ngIf=\"emVar.errors.pattern\">\n                            Please enter a valid email address\n                          </span>\n                        </span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div [ngClass]=\"{'has-error' : (disNameVar.touched || disNameVar.dirty) && !disNameVar.valid}\">\n                <label for=\"disName\">Display Name</label>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errors.displayName !== null\">\n                  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Error:</span>\n                  {{errors.displayName}}\n                </div>\n                <input type=\"text\"\n                        name=\"disName\"\n                        id=\"disName\"\n                        class=\"form-control\"\n                        required\n                        placeholder=\"Display Name (Required)\"\n                        [(ngModel)]=\"user.displayName\"\n                        #disNameVar=\"ngModel\">\n                        <span class=\"help-block\" *ngIf=\"(disNameVar.touched || disNameVar.dirty) && disNameVar.errors\">\n                          A display name is required\n                        </span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div [ngClass]=\"{'has-error' : (pw1Var.touched || pw1Var.dirty) && !pw1Var.valid}\">\n                <label for=\"password1\">Password</label>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errors.password !== null\">\n                  <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Error:</span>\n                  {{errors.password}}\n                </div>\n                <input type=\"password\"\n                        id=\"password1\"\n                        name=\"password1\"\n                        class=\"form-control\"\n                        required\n                        placeholder=\"Password (Required)\"\n                        [(ngModel)]=\"user.password\"\n                        #pw1Var=\"ngModel\">\n                        <span class=\"help-block\" *ngIf=\"(pw1Var.touched || pw1Var.dirty) && pw1Var.errors\">\n                          A password is required\n                        </span>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <div [ngClass]=\"{'has-error' : (pw2Var.touched || pw2Var.dirty) && !pw2Var.valid}\">\n                <label for=\"confirm_password\">Confirm Password</label>\n                <input type=\"password\"\n                id=\"confirm_password\"\n                name=\"confirm_password\"\n                class=\"form-control\"\n                required\n                placeholder=\"Confirm Password (Required)\"\n                [(ngModel)]=\"user.confirm_password\"\n                #pw2Var=\"ngModel\">\n                <span class=\"help-block\" *ngIf=\"(pw2Var.touched || pw2Var.dirty) && pw2Var.errors\">\n                  Please confirm your password\n                </span>\n                </div>\n              </div>\n\n              <div *ngIf=\"user.password !== user.confirm_password\" class=\"alert alert-warning\">\n                Passwords Do Not Match\n              </div>\n\n              <div class=\"form-group\">\n              <span>\n              <button type=\"submit\"\n                     class=\"btn btn-success btn_narrow\"\n                     [disabled]=\"!registerForm.valid\"\n                     >Register</button> \n               <button type=\"button\"\n                     class=\"btn btn-default btn_narrow \"\n                     (click)=\"cancel()\">Cancel</button>\n              </span>\n              </div>\n\n            </form>\n          </div>\n          <div class=\"panel-footer\">\n            Register? <a [routerLink]=\"['']\" href=\"\">Login Here</a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sign/sign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignComponent = (function () {
    function SignComponent(router, http) {
        this.router = router;
        this.http = http;
        this.user = {
            email: '',
            password: '',
            confirm_password: '',
            displayName: ''
        };
        this.errors = {
            summary: null,
            email: null,
            displayName: null,
            password: null
        };
    }
    SignComponent.prototype.processForm = function () {
        var _this = this;
        var email = this.user.email;
        var password = this.user.password;
        var confirm_password = this.user.confirm_password;
        var displayName = this.user.displayName;
        if (password !== confirm_password) {
            return;
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        return this.http.post('/auth/signup', {
            email: email,
            password: password,
            displayName: displayName
        }, { headers: headers }).toPromise()
            .then(function (response) {
            if (response.status === 200) {
                console.log('Signup succeed.');
                _this.errors = {
                    summary: null,
                    email: null,
                    displayName: null,
                    password: null
                };
                _this.router.navigate(['/login']);
            }
        }).catch(function (error) {
            console.log('Signup failed.');
            var json = error.json();
            _this.errors = json.errors ? json.errors : {
                summary: null,
                email: null,
                displayName: null,
                password: null
            };
            _this.errors.summary = json.message;
            console.log(error);
        });
    };
    SignComponent.prototype.ngOnInit = function () {
    };
    SignComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign',
            template: __webpack_require__("../../../../../src/app/components/sign/sign.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sign/sign.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SignComponent);
    return SignComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isUserAuthenticated()) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.authenticateUser = function (token, email, displayName) {
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        localStorage.setItem('displayName', displayName);
    };
    AuthService.prototype.isUserAuthenticated = function () {
        return localStorage.getItem('token') !== null;
    };
    AuthService.prototype.deauthenticateUser = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('displayName');
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.getEmail = function () {
        return localStorage.getItem('email');
    };
    AuthService.prototype.getDisplayName = function () {
        return localStorage.getItem('displayName');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/service/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SERVER_URL = 'http://localhost:3000';
var SocketService = (function () {
    function SocketService() {
    }
    SocketService.prototype.init = function (userName) {
        this.socket = io(SERVER_URL);
        this.socket.emit('newUser', userName);
        this.socket.on('hello', function (hello) {
            console.log('hello recevied from server:' + hello);
        });
    };
    SocketService.prototype.send = function (message) {
        this.socket.emit('message', message);
    };
    SocketService.prototype.deleteUser = function (displayName) {
        this.socket.emit('deleteUser', displayName);
    };
    SocketService.prototype.onUserslist = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('init', function (usersList) {
                observer.next(usersList);
            });
        });
    };
    SocketService.prototype.newUser = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('newUser', function (name) {
                observer.next(name);
            });
        });
    };
    SocketService.prototype.loseUser = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('loseUser', function (name) {
                observer.next(name);
            });
        });
    };
    SocketService.prototype.kickUser = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('deleteUser', function (displayName) {
                observer.next(displayName);
            });
        });
    };
    SocketService.prototype.onMessage = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.onConnect = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('connect', function () { return observer.next(); });
        });
    };
    SocketService.prototype.onDisconnect = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on('disconnect', function () {
                return observer.next();
            });
        });
    };
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map