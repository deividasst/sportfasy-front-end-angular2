webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div  id=\"body\">\r\n    <div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__web_components_shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_components_shared_tokenholder_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/tokenholder.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(tokenHolder, ds) {
        this.tokenHolder = tokenHolder;
        this.ds = ds;
        this.title = 'app';
        if (localStorage.getItem('id_token') && !this.tokenHolder.getUserID()) {
            this.refreshUserData();
        }
    }
    AppComponent.prototype.OnInit = function () {
    };
    AppComponent.prototype.refreshUserData = function () {
        var _this = this;
        this.ds.getUserCredentials().subscribe(function (obj) {
            _this.tokenHolder.setUserID(obj._id);
            _this.tokenHolder.setUserEmail(obj.email);
            _this.tokenHolder.setUserName(obj.name);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.sass")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__web_components_shared_tokenholder_srv__["a" /* TokenHolderServise */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__web_components_shared_tokenholder_srv__["a" /* TokenHolderServise */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__web_components_shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__web_components_shared_data_srv__["a" /* DService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__web_components_sign_log_log_out_log_out_component__ = __webpack_require__("../../../../../src/app/web_components/sign_log/log-out/log-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__web_components_sign_log_log_in_log_in_component__ = __webpack_require__("../../../../../src/app/web_components/sign_log/log-in/log-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__web_components_sign_log_sing_up_sing_up_component__ = __webpack_require__("../../../../../src/app/web_components/sign_log/sing-up/sing-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__web_components_game_components_tournment_creat_tournment_creat_tournment_component__ = __webpack_require__("../../../../../src/app/web_components/game_components/tournment/creat-tournment/creat-tournment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__web_components_game_components_tournment_join_tournment_join_tournment_component__ = __webpack_require__("../../../../../src/app/web_components/game_components/tournment/join-tournment/join-tournment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__web_components_game_components_team_list_team_list_team_component__ = __webpack_require__("../../../../../src/app/web_components/game_components/team/list-team/list-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__web_components_game_components_team_create_team_create_team_component__ = __webpack_require__("../../../../../src/app/web_components/game_components/team/create-team/create-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__web_components_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/web_components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__web_components_shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__http_factory__ = __webpack_require__("../../../../../src/app/http.factory.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__web_components_shared_tokenholder_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/tokenholder.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__web_components_game_components_team_over_all_teams_widget_over_all_teams_widget_component__ = __webpack_require__("../../../../../src/app/web_components/game_components/team/over-all-teams-widget/over-all-teams-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__web_components_game_components_tournment_over_all_tournaments_widget_over_all_tournaments_widget_component__ = __webpack_require__("../../../../../src/app/web_components/game_components/tournment/over-all-tournaments-widget/over-all-tournaments-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__web_components_home_home_component__ = __webpack_require__("../../../../../src/app/web_components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__web_components_game_components_tournment_tournament_dialog_tournament_dialog_component__ = __webpack_require__("../../../../../src/app/web_components/game_components/tournment/tournament-dialog/tournament-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__web_components_game_components_tournment_tournament_userlist_component_tournament_userlist_component_component__ = __webpack_require__("../../../../../src/app/web_components/game_components/tournment/tournament-userlist-component/tournament-userlist-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__popup_popup_component__ = __webpack_require__("../../../../../src/app/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__web_components_shared_security_trimming_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/security-trimming.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__progress_kendo_angular_buttons__ = __webpack_require__("../../../../@progress/kendo-angular-buttons/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__progress_kendo_angular_intl__ = __webpack_require__("../../../../@progress/kendo-angular-intl/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__progress_kendo_angular_dateinputs__ = __webpack_require__("../../../../@progress/kendo-angular-dateinputs/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__progress_kendo_angular_dialog__ = __webpack_require__("../../../../@progress/kendo-angular-dialog/dist/es/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// Import the Animations module

// Import the ButtonsModule





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__web_components_sign_log_log_out_log_out_component__["a" /* LogOutComponent */],
            __WEBPACK_IMPORTED_MODULE_8__web_components_sign_log_log_in_log_in_component__["a" /* LogInComponent */],
            __WEBPACK_IMPORTED_MODULE_9__web_components_sign_log_sing_up_sing_up_component__["a" /* SingUpComponent */],
            __WEBPACK_IMPORTED_MODULE_10__web_components_game_components_tournment_creat_tournment_creat_tournment_component__["a" /* CreatTournmentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__web_components_game_components_tournment_join_tournment_join_tournment_component__["a" /* JoinTournmentComponent */],
            __WEBPACK_IMPORTED_MODULE_12__web_components_game_components_team_list_team_list_team_component__["a" /* ListTeamComponent */],
            __WEBPACK_IMPORTED_MODULE_13__web_components_game_components_team_create_team_create_team_component__["a" /* CreateTeamComponent */],
            __WEBPACK_IMPORTED_MODULE_14__web_components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_21__web_components_game_components_team_over_all_teams_widget_over_all_teams_widget_component__["a" /* OverAllTeamsWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_22__web_components_game_components_tournment_over_all_tournaments_widget_over_all_tournaments_widget_component__["a" /* OverAllTournamentsWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_23__web_components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_24__web_components_game_components_tournment_tournament_dialog_tournament_dialog_component__["a" /* TournamentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_25__web_components_game_components_tournment_tournament_userlist_component_tournament_userlist_component_component__["a" /* TournamentUserlistComponentComponent */],
            __WEBPACK_IMPORTED_MODULE_26__popup_popup_component__["a" /* PopupComponent */],
            __WEBPACK_IMPORTED_MODULE_33__navbar_navbar_component__["a" /* NavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["a" /* DatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_19_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_32__progress_kendo_angular_dialog__["a" /* DialogModule */],
            __WEBPACK_IMPORTED_MODULE_28__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_29__progress_kendo_angular_buttons__["a" /* ButtonsModule */],
            __WEBPACK_IMPORTED_MODULE_30__progress_kendo_angular_intl__["a" /* IntlModule */],
            __WEBPACK_IMPORTED_MODULE_31__progress_kendo_angular_dateinputs__["a" /* DateInputsModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_material__["b" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["b" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap__["a" /* DatepickerModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_23__web_components_home_home_component__["a" /* HomeComponent */]
                },
                {
                    path: 'logout',
                    component: __WEBPACK_IMPORTED_MODULE_7__web_components_sign_log_log_out_log_out_component__["a" /* LogOutComponent */]
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_8__web_components_sign_log_log_in_log_in_component__["a" /* LogInComponent */]
                },
                {
                    path: 'singup',
                    component: __WEBPACK_IMPORTED_MODULE_9__web_components_sign_log_sing_up_sing_up_component__["a" /* SingUpComponent */]
                },
                {
                    path: 'createtournment',
                    component: __WEBPACK_IMPORTED_MODULE_10__web_components_game_components_tournment_creat_tournment_creat_tournment_component__["a" /* CreatTournmentComponent */]
                },
                {
                    path: 'jointournment',
                    component: __WEBPACK_IMPORTED_MODULE_11__web_components_game_components_tournment_join_tournment_join_tournment_component__["a" /* JoinTournmentComponent */]
                },
                {
                    path: 'listteam',
                    component: __WEBPACK_IMPORTED_MODULE_12__web_components_game_components_team_list_team_list_team_component__["a" /* ListTeamComponent */]
                },
                {
                    path: 'creatteam',
                    component: __WEBPACK_IMPORTED_MODULE_13__web_components_game_components_team_create_team_create_team_component__["a" /* CreateTeamComponent */]
                },
                {
                    path: 'userprofile',
                    component: __WEBPACK_IMPORTED_MODULE_14__web_components_user_profile_user_profile_component__["a" /* UserProfileComponent */]
                }
            ])
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */],
                useFactory: __WEBPACK_IMPORTED_MODULE_17__http_factory__["a" /* httpFactory */],
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_18__web_components_shared_tokenholder_srv__["a" /* TokenHolderServise */]]
            },
            __WEBPACK_IMPORTED_MODULE_16__web_components_shared_data_srv__["a" /* DService */],
            __WEBPACK_IMPORTED_MODULE_18__web_components_shared_tokenholder_srv__["a" /* TokenHolderServise */],
            __WEBPACK_IMPORTED_MODULE_7__web_components_sign_log_log_out_log_out_component__["a" /* LogOutComponent */],
            __WEBPACK_IMPORTED_MODULE_27__web_components_shared_security_trimming_srv__["a" /* SecurityTrimming */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_24__web_components_game_components_tournment_tournament_dialog_tournament_dialog_component__["a" /* TournamentDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_26__popup_popup_component__["a" /* PopupComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/http.factory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_interceptor__ = __webpack_require__("../../../../../src/app/http.interceptor.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = httpFactory;

function httpFactory(xhrBackend, requestOptions, router, tokenHolder) {
    return new __WEBPACK_IMPORTED_MODULE_0__http_interceptor__["a" /* InterceptedHttp */](xhrBackend, requestOptions, router, tokenHolder);
}
//# sourceMappingURL=http.factory.js.map

/***/ }),

/***/ "../../../../../src/app/http.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_components_shared_tokenholder_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/tokenholder.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InterceptedHttp = (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions, router, tokenHolder) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.tokenHolder = tokenHolder;
        _this.router = router;
        return _this;
    }
    InterceptedHttp.prototype.request = function (url, options) {
        return this.intercept(_super.prototype.request.call(this, url, options));
    };
    InterceptedHttp.prototype.get = function (url, options) {
        url = this.updateUrl(url);
        return this.intercept(_super.prototype.get.call(this, url, this.getRequestOptionArgs(options)));
    };
    InterceptedHttp.prototype.post = function (url, body, options) {
        url = this.updateUrl(url);
        return this.intercept(_super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options)));
    };
    InterceptedHttp.prototype.put = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.delete = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.updateUrl = function (req) {
        return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].origin + req;
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Headers */]();
        }
        options.headers.append('Content-Type', 'application/json');
        if (localStorage.getItem('id_token')) {
            options.headers.append('x-access-token', localStorage.getItem('id_token'));
        }
        return options;
    };
    // private refreshUSerData() {
    //     this.get('/api/users')
    //         .map((res: Response) => res.json()).subscribe(
    //         obj => {
    //             this.tokenHolder.setUserID(obj._id);
    //             this.tokenHolder.setUserEmail(obj.email);
    //             this.tokenHolder.setUserName(obj.name);
    //         }
    //     )
    // }
    InterceptedHttp.prototype.intercept = function (observable) {
        var _this = this;
        return observable.catch(function (err) {
            if (err.status !== 200) {
                switch (err.status) {
                    case 401:
                        console.log('BAD CREDENTIALS');
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
                    case 403:
                        _this.router.navigate(['/login']);
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
                    case 409:
                        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
                }
            }
        });
    };
    return InterceptedHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));
InterceptedHttp = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__web_components_shared_tokenholder_srv__["a" /* TokenHolderServise */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__web_components_shared_tokenholder_srv__["a" /* TokenHolderServise */]) === "function" && _d || Object])
], InterceptedHttp);

var _a, _b, _c, _d;
//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n    <div id=\"navbar-wrapper\">\r\n        <header>\r\n            <p routerLink=\"/userprofile\" class=\"logo text-left\">Sportfasy</p>\r\n        </header>\r\n    </div>\r\n    <div id=\"wrapper\">\r\n        <div id=\"sidebar-wrapper\">\r\n            <aside id=\"sidebar\">\r\n                <ul id=\"sidemenu\" class=\"sidebar-nav\">\r\n                    <li>\r\n                        <a class=\"icon\" routerLink=\"/userprofile\">\r\n                            <span class=\"sidebar-icon\"><i class=\"fa fa-newspaper-o\"></i></span>\r\n                            <span class=\"sidebar-title\"><b>PROFILE</b></span>\r\n                        </a>\r\n                        <div class=\"profile prof\">\r\n                            <p class=\"p\"><b>Hello, </b>{{name}}</p>\r\n                            <p class=\"p\"><b>Budget:</b> 200$</p>\r\n                            <p class=\"p\"><b>W:</b> 0 <b>L:</b> 0</p>\r\n                            <a (click)=\"logOut()\">\r\n                                <span><i class=\"fa fa-sign-out i\" aria-hidden=\"true\"></i></span>\r\n                                <span class=\"i\">LogOut</span>\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"accordion-toggle collapsed toggle-switch\" data-toggle=\"collapse\">\r\n                            <span class=\"sidebar-icon\"><i class=\"fa fa-users\"></i></span>\r\n                            <span class=\"sidebar-title\"><b>TOURNAMENT</b></span>\r\n                            <b class=\"caret\"></b>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a class=\"accordion-toggle collapsed toggle-switch\" data-toggle=\"collapse\"\r\n                           routerLink=\"/createtournment\">\r\n                            <span class=\"sidebar-icon\"><i class=\"fa fa-pencil-square-o i\"></i></span>\r\n                            <span class=\"sidebar-title2\">Create New</span>\r\n                            <b class=\"caret\"></b>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"accordion-toggle collapsed toggle-switch\" data-toggle=\"collapse\"\r\n                           routerLink=\"/jointournment\">\r\n                            <span class=\"sidebar-icon\"><i class=\"fa fa-user-plus i\"></i></span>\r\n                            <span class=\"sidebar-title2\">Join</span>\r\n                            <b class=\"caret\"></b>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a class=\"accordion-toggle collapsed toggle-switch\" data-toggle=\"collapse\">\r\n                            <span class=\"sidebar-icon\"><i class=\"fa fa-dashboard\"></i></span>\r\n                            <span class=\"sidebar-title\"><b>MY TEAM</b></span>\r\n                            <b class=\"caret\"></b>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <li>\r\n                        <a class=\"accordion-toggle collapsed toggle-switch\" data-toggle=\"collapse\"\r\n                           routerLink=\"/creatteam\">\r\n                            <span class=\"sidebar-icon\"><i class=\"fa fa-plus i\"></i></span>\r\n                            <span class=\"sidebar-title2\">Create New</span>\r\n                            <b class=\"caret\"></b>\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a class=\"accordion-toggle collapsed toggle-switch\" data-toggle=\"collapse\"\r\n                           routerLink=\"/listteam\">\r\n                            <span class=\"sidebar-icon\"><i class=\"fa fa-bars i\"></i></span>\r\n                            <span class=\"sidebar-title2\">View List</span>\r\n                            <b class=\"caret\"></b>\r\n                        </a>\r\n                        <p></p>\r\n                    </li>\r\n                </ul>\r\n            </aside>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "header {\n  background: #212121;\n  padding-bottom: 0.01%;\n  position: fixed;\n  top: 0;\n  z-index: 5555;\n  width: 100%;\n  height: 10%; }\n\nmain {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: #d2d2d2;\n  overflow: scroll; }\n\n#pav {\n  text-align: center;\n  float: left;\n  width: 92%;\n  height: 40%;\n  background-color: #f8f9f9;\n  color: #ffad01;\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: 2px;\n  margin-bottom: 2%; }\n\n#all_tour {\n  text-align: center;\n  text-decoration: none;\n  float: left;\n  width: 92%;\n  height: 55%;\n  color: #ffad01;\n  background-color: #212121;\n  margin-bottom: 1%;\n  margin-left: 4%; }\n\n#all_teams {\n  text-align: center;\n  text-decoration: none;\n  float: left;\n  width: 92%;\n  height: 55%;\n  background-color: #212121;\n  color: #ffad01;\n  margin-bottom: 1%;\n  margin-left: 4%; }\n\n.sidebar-nav {\n  background-color: #ffad01;\n  height: 100%;\n  max-height: 100%;\n  position: fixed;\n  overflow: hidden;\n  bottom: 0;\n  width: 40%; }\n\n.logo {\n  padding-left: 2%;\n  font-size: 230%;\n  color: white;\n  text-decoration: none; }\n\n.sidebar-title {\n  color: #212121;\n  font-size: 110%; }\n\n.sidebar-title2 {\n  color: white;\n  font-size: 110%;\n  padding-bottom: 2%; }\n\ni {\n  color: #212121; }\n\n.i {\n  color: white; }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.p {\n  text-decoration: none;\n  padding: 0%;\n  margin: 0%; }\n\n.logout {\n  color: #ffffff;\n  padding: 0%;\n  margin: 0%; }\n\n.profile {\n  position: relative;\n  border-radius: 10px;\n  height: 10%;\n  padding: 5%;\n  margin-left: 20%;\n  margin-right: 20%;\n  text-align: center;\n  background-color: #212121;\n  color: white; }\n\n.navbar-default .navbar-nav #user-profile {\n  height: 50px;\n  padding-top: 15px;\n  padding-left: 58px; }\n  .navbar-default .navbar-nav #user-profile img {\n    height: 45px;\n    width: 45px;\n    position: absolute;\n    top: 2px;\n    left: 8px;\n    padding: 1px; }\n\n#wrapper {\n  padding-left: 0;\n  transition: all .5s ease; }\n\n@media (min-width: 992px) {\n  #wrapper {\n    padding-left: 225px; } }\n\n@media (min-width: 992px) {\n  #wrapper #sidebar-wrapper {\n    width: 225px; } }\n\n#sidebar-wrapper {\n  border-right: 1px solid #e7e7e7;\n  z-index: 1000;\n  position: fixed;\n  left: 225px;\n  width: 0;\n  height: 100%;\n  margin-left: -225px;\n  background: #f8f8f8;\n  transition: all .5s ease; }\n  #sidebar-wrapper .sidebar-nav {\n    position: absolute;\n    top: 0;\n    width: 225px;\n    overflow: hidden;\n    font-size: 14px;\n    margin: 0;\n    padding: 90px 0 0 0;\n    list-style: none; }\n    #sidebar-wrapper .sidebar-nav li {\n      text-indent: 0;\n      line-height: 45px; }\n      #sidebar-wrapper .sidebar-nav li a {\n        display: block;\n        text-decoration: none;\n        color: #428bca; }\n\n#sidebar-wrapper .sidebar-nav li a .sidebar-icon {\n  width: 45px;\n  height: 45px;\n  font-size: 14px;\n  padding: 0 2px;\n  display: inline-block;\n  text-indent: 7px;\n  margin-right: 10px;\n  color: #fff;\n  float: left; }\n\n#sidebar-wrapper .sidebar-nav li a .caret {\n  position: absolute;\n  right: 23px;\n  top: auto;\n  margin-top: 20px; }\n\n#sidebar-wrapper .sidebar-nav li ul.panel-collapse {\n  list-style: none;\n  -webkit-padding-start: 0;\n  -khtml-padding-start: 0;\n  -o-padding-start: 0;\n  padding-start: 0;\n  padding: 0; }\n  #sidebar-wrapper .sidebar-nav li ul.panel-collapse li {\n    text-indent: 15px; }\n    #sidebar-wrapper .sidebar-nav li ul.panel-collapse li i {\n      margin-right: 10px; }\n\n@media (max-width: 992px) {\n  #wrapper #sidebar-wrapper {\n    width: 45px; }\n    #wrapper #sidebar-wrapper #sidebar #sidemenu li ul {\n      position: fixed;\n      left: 45px;\n      margin-top: -45px;\n      z-index: 1000;\n      width: 200px;\n      height: 0; } }\n\n.button {\n  background-color: #ffad01;\n  color: #212121;\n  border: 0px; }\n\n.body {\n  background-color: #ffad01; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web_components_shared_tokenholder_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/tokenholder.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__web_components_sign_log_log_out_log_out_component__ = __webpack_require__("../../../../../src/app/web_components/sign_log/log-out/log-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_components_shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(ds, logout, tokenHolder, dialog) {
        var _this = this;
        this.ds = ds;
        this.logout = logout;
        this.tokenHolder = tokenHolder;
        this.dialog = dialog;
        this.tokenHolder.nameChange$.subscribe(function (item) { return _this.name = item; });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logOut = function () {
        this.logout.logOut();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__web_components_shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__web_components_shared_data_srv__["a" /* DService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__web_components_sign_log_log_out_log_out_component__["a" /* LogOutComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__web_components_sign_log_log_out_log_out_component__["a" /* LogOutComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__web_components_shared_tokenholder_srv__["a" /* TokenHolderServise */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__web_components_shared_tokenholder_srv__["a" /* TokenHolderServise */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialog */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    You do not participate in any tournament\r\n</div>\r\n<br>\r\n<div>\r\n    <button md-button md-dialog-close>\r\n    <a class=\"accordion-toggle collapsed toggle-switch\" data-toggle=\"collapse\" routerLink=\"/createtournment\">\r\n        <span class=\"sidebar-icon\"><i class=\"fa fa-pencil-square-o i\"></i></span>\r\n        <span class=\"sidebar-title2\">Create New</span>\r\n        <b class=\"caret\"></b>\r\n    </a>\r\n    </button>\r\n</div>\r\n<br>\r\n<div>\r\n    <button md-button md-dialog-close>\r\n        <a class=\"accordion-toggle collapsed toggle-switch\" data-toggle=\"collapse\" routerLink=\"/jointournment\">\r\n        <span class=\"sidebar-icon\"><i class=\"fa fa-user-plus i\"></i></span>\r\n        <span class=\"sidebar-title2\">Join</span>\r\n        <b class=\"caret\"></b>\r\n    </a>\r\n    </button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/popup/popup.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  z-index: 50;\n  text-align: center;\n  color: orange;\n  background-color: #212121; }\n\nmain {\n  background-color: #212121; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PopupComponent = (function () {
    function PopupComponent(data) {
        this.data = data;
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    return PopupComponent;
}());
PopupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-popup',
        template: __webpack_require__("../../../../../src/app/popup/popup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/popup/popup.component.sass")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object])
], PopupComponent);

//# sourceMappingURL=popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/team/create-team/create-team.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<main id=\"page-content-wrapper\" role=\"main\">\r\n    <div class=\"container\">\r\n        <div id=\"pav\">\r\n            <br>\r\n            <p>image</p>\r\n            <br>\r\n        </div>\r\n        <div id=\"all_tour\">\r\n            <p>ALL TOURNAMENTS</p>\r\n            <ul>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n            </ul>\r\n        </div>\r\n        <div id=\"all_teams\">\r\n            <p>ALL TEAMS</p>\r\n            <ul>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/team/create-team/create-team.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "main {\n  position: fixed;\n  min-width: 84%;\n  height: 90%;\n  background-color: #d2d2d2;\n  overflow-y: scroll;\n  float: right;\n  bottom: 0;\n  right: 0; }\n\n.container {\n  padding: 2% 5% 2% 5%; }\n\n#pav {\n  text-align: center;\n  float: left;\n  width: 92%;\n  height: 40%;\n  background-color: #f8f9f9;\n  color: #ffad01;\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: 2px;\n  margin-bottom: 2%; }\n\n#all_tour {\n  text-align: center;\n  text-decoration: none;\n  float: left;\n  width: 92%;\n  height: 55%;\n  color: #ffad01;\n  background-color: #212121;\n  margin-bottom: 1%;\n  margin-left: 4%; }\n\n#all_teams {\n  text-align: center;\n  text-decoration: none;\n  float: left;\n  width: 92%;\n  height: 55%;\n  background-color: #212121;\n  color: #ffad01;\n  margin-bottom: 1%;\n  margin-left: 4%; }\n\ni {\n  color: #212121; }\n\n.i {\n  color: white; }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.p {\n  text-decoration: none;\n  padding: 0%;\n  margin: 0%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/team/create-team/create-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CreateTeamComponent = (function () {
    function CreateTeamComponent() {
    }
    CreateTeamComponent.prototype.ngOnInit = function () {
    };
    return CreateTeamComponent;
}());
CreateTeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create-team',
        template: __webpack_require__("../../../../../src/app/web_components/game_components/team/create-team/create-team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/game_components/team/create-team/create-team.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], CreateTeamComponent);

//# sourceMappingURL=create-team.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/team/list-team/list-team.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<main id=\"page-content-wrapper\" role=\"main\">\r\n    <div class=\"container\">\r\n        <div id=\"pav\">\r\n            <br>\r\n            <p>image</p>\r\n            <br>\r\n        </div>\r\n        <div id=\"all_tour\">\r\n            <p>ALL TOURNAMENTS</p>\r\n            <ul>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n            </ul>\r\n        </div>\r\n        <div id=\"all_teams\">\r\n            <p>ALL TEAMS</p>\r\n            <ul>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</main>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/team/list-team/list-team.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "main {\n  position: fixed;\n  min-width: 84%;\n  height: 90%;\n  background-color: #d2d2d2;\n  overflow-y: scroll;\n  float: right;\n  bottom: 0;\n  right: 0; }\n\n.container {\n  padding: 2% 5% 2% 5%; }\n\n#pav {\n  text-align: center;\n  float: left;\n  width: 92%;\n  height: 40%;\n  background-color: #f8f9f9;\n  color: #ffad01;\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: 2px;\n  margin-bottom: 2%; }\n\n#all_tour {\n  text-align: center;\n  text-decoration: none;\n  float: left;\n  width: 92%;\n  height: 55%;\n  color: #ffad01;\n  background-color: #212121;\n  margin-bottom: 1%;\n  margin-left: 4%; }\n\n#all_teams {\n  text-align: center;\n  text-decoration: none;\n  float: left;\n  width: 92%;\n  height: 55%;\n  background-color: #212121;\n  color: #ffad01;\n  margin-bottom: 1%;\n  margin-left: 4%; }\n\ni {\n  color: #212121; }\n\n.i {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/team/list-team/list-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListTeamComponent = (function () {
    function ListTeamComponent() {
    }
    ListTeamComponent.prototype.ngOnInit = function () {
    };
    return ListTeamComponent;
}());
ListTeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list-team',
        template: __webpack_require__("../../../../../src/app/web_components/game_components/team/list-team/list-team.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/game_components/team/list-team/list-team.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], ListTeamComponent);

//# sourceMappingURL=list-team.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/team/over-all-teams-widget/over-all-teams-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Overall Teams\r\n</p>\r\n\r\n<table class=\"table\">\r\n    <tr>\r\n        <th>Team name</th>\r\n        <th>Team master</th>\r\n        <th>Players in team</th>\r\n    </tr>\r\n    <tr *ngFor=\"let team of teams\">\r\n        <td>{{team.name}}</td>\r\n        <td>{{team.master}}</td>\r\n        <td>{{team.players}}</td>\r\n    </tr>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/team/over-all-teams-widget/over-all-teams-widget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/team/over-all-teams-widget/over-all-teams-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverAllTeamsWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverAllTeamsWidgetComponent = (function () {
    function OverAllTeamsWidgetComponent(ds) {
        this.ds = ds;
    }
    OverAllTeamsWidgetComponent.prototype.getTeams = function () {
        var _this = this;
        this.ds.getAllTeams().subscribe(function (team) { _this.teams = team; });
    };
    OverAllTeamsWidgetComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    return OverAllTeamsWidgetComponent;
}());
OverAllTeamsWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-over-all-teams-widget',
        template: __webpack_require__("../../../../../src/app/web_components/game_components/team/over-all-teams-widget/over-all-teams-widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/game_components/team/over-all-teams-widget/over-all-teams-widget.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */]) === "function" && _a || Object])
], OverAllTeamsWidgetComponent);

var _a;
//# sourceMappingURL=over-all-teams-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/creat-tournment/creat-tournment.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n <main id=\"page-content-wrapper\" role=\"main\">\r\n\r\n        <div class=\"container\">\r\n\r\n            <form class=\"form-signin\" #tournamentForm=\"ngForm\" method=\"post\" novalidate>\r\n                <h2 class=\"form-signin-heading\">Create your tournament!</h2>\r\n                <label for=\"name\" class=\"label\">Tournament name: </label>\r\n                <input type=\"text\" id=\"name\" class=\"form-control\" name=\"name\" [(ngModel)]=\"tournament.name\" placeholder=\"Tournament name\" required  minlength=\"4\" maxlength=\"24\"  #name=\"ngModel\"  autofocus>\r\n                <div *ngIf=\"name.errors && (name.dirty || name.touched)\"\r\n                     class=\"alert alert-danger\">\r\n                    <div [hidden]=\"!name.errors.required\">\r\n                        Name is required\r\n                    </div>\r\n                    <div [hidden]=\"!name.errors.minlength\">\r\n                        Name must be at least 4 characters long.\r\n                    </div>\r\n                    <div [hidden]=\"!name.errors.maxlength\">\r\n                        Name cannot be more than 24 characters long.\r\n                    </div>\r\n                </div>\r\n\r\n               <!-- Tournament starts: <material-datepicker  name=\"start\" [(ngModel)]=\"tournament.start\" placeholder=\"start date\" [rangeEnd]='maxDate' [rangeStart]='minDate' [(date)]=\"yourModelDate\"  ngDefaultControl></material-datepicker>\r\n                Tournament ends: <material-datepicker name=\"end\" [(ngModel)]=\"tournament.end\" placeholder=\"end date\" [rangeEnd]='maxDate' [rangeStart]='minDate' [(date)]=\"yourModelDate1\"  ngDefaultControl></material-datepicker>\r\n               -->\r\n                <br>\r\n                <label for=\"teams\" class=\"label\">Maximum teams:</label>\r\n                <input type=\"number\" id=\"teams\" name=\"teams\" [(ngModel)]=\"tournament.max_teams\" #teams=\"ngModel\"  [min]=\"2\" class=\"form-control\" placeholder=\"Maximum teams\" required>\r\n                <p  class=\"alert alert-danger\" *ngIf=\"teams.errors?.min\">there should be 2 teams at least</p>\r\n                <br>\r\n                <label for=\"players\" class=\"label\">Maximum Players in team: </label>\r\n                <input type=\"number\" id=\"players\" name=\"players\" [(ngModel)]=\"tournament.max_players\" #players=\"ngModel\"  [min]=\"3\" [max]=\"10\" class=\"form-control\" placeholder=\"Maximum players in team\" required>\r\n                <p  class=\"alert alert-danger\" *ngIf=\"players.errors?.min\">there should be at least 3 players in team</p>\r\n                <p  class=\"alert alert-danger\" *ngIf=\"players.errors?.max\">you can have more than 10 players</p>\r\n                <br>\r\n                <label for=\"budget\" class=\"label\">Maximum budget: </label>\r\n                <input type=\"number\" id=\"budget\" name=\"budget\" [(ngModel)]=\"tournament.budget\" #budget=\"ngModel\"  [min]=\"200\" [max]=\"2000\"class=\"form-control\" placeholder=\"Maximum budget\" required>\r\n                <p  class=\"alert alert-danger\" *ngIf=\"budget.errors?.min\">minimum budget is 200</p>\r\n                <p  class=\"alert alert-danger\" *ngIf=\"budget.errors?.max\">maximum budget is 2000</p>\r\n                <br>\r\n                <div class=\"example-wrapper\">\r\n                    <p>Start date:</p>\r\n                    <kendo-datepicker\r\n                        name=\"start\"\r\n                        [min]=\"min\"\r\n                        [max]=\"min2\"\r\n                        [(ngModel)]=\"value\"\r\n                        [(ngModel)]=\"tournament.start\"\r\n                        #dateModel=\"ngModel\"\r\n                    ></kendo-datepicker>\r\n                </div>\r\n                <div class=\"example-wrapper\">\r\n                    <p>End date:</p>\r\n                    <kendo-datepicker\r\n                        name=\"end\"\r\n                        [min]=\"max\"\r\n                        [max]=\"max2\"\r\n                        [(ngModel)]=\"tournament.end\"\r\n                        #dateModel=\"ngModel\"\r\n                    ></kendo-datepicker>\r\n                </div>\r\n                <div *ngIf=\"err\" class=\"error alert alert-danger text-center\"><span >{{err}}</span></div><br>\r\n                <div class=\"text-center\">\r\n                 <button type=\"submit\"  class=\"btn btn-danger button \" [disabled]=\"!tournamentForm.form.valid\" (click)=\"addTournament()\" >Create Tournament</button>\r\n                </div>\r\n            </form>\r\n        </div> <!-- /container -->\r\n    </main>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/creat-tournment/creat-tournment.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  position: fixed;\n  min-width: 84%;\n  height: 90%;\n  background-color: #d2d2d2;\n  overflow-y: scroll;\n  float: right;\n  bottom: 0;\n  right: 0; }\n  main .container {\n    padding: 2% 5% 2% 5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/creat-tournment/creat-tournment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_tokenholder_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/tokenholder.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_log_log_out_log_out_component__ = __webpack_require__("../../../../../src/app/web_components/sign_log/log-out/log-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_Tournament__ = __webpack_require__("../../../../../src/app/web_components/shared/Tournament.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatTournmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {DatepickerModule} from 'angular2-material-datepicker'






var CreatTournmentComponent = (function () {
    function CreatTournmentComponent(piker, ds, router, tokenHolder, logout) {
        this.ds = ds;
        this.router = router;
        this.tokenHolder = tokenHolder;
        this.logout = logout;
        this.dateObj = new Date();
        this.min = new Date(this.dateObj.getUTCFullYear(), this.dateObj.getUTCMonth(), this.dateObj.getUTCDate());
        this.max = new Date(this.dateObj.getUTCFullYear(), this.dateObj.getUTCMonth() + 1, this.dateObj.getUTCDate());
        this.value = new Date(this.yy = this.dateObj.getUTCFullYear(), this.mm = this.dateObj.getUTCMonth(), this.dd = this.dateObj.getUTCDate());
        this.min2 = new Date(this.yy, this.mm, this.dd + 30);
        this.max2 = new Date(this.yy, this.mm + 1, this.dd + 30);
        this.name1 = localStorage.getItem('name_user');
        this.minDate = new Date(2017, 5);
        this.tokenEmail = this.tokenHolder.getEmail();
    }
    CreatTournmentComponent.prototype.getDate = function () {
        return this.tournament.start && this.tournament.start.getTime() || new Date().getTime();
    };
    CreatTournmentComponent.prototype.getDate2 = function () {
        return this.tournament.end && this.tournament.end.getTime() || new Date().getTime();
    };
    CreatTournmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tournament = new __WEBPACK_IMPORTED_MODULE_6__shared_Tournament__["a" /* Tournament */]();
        this.tokenHolder.idChange$.subscribe(function (item) {
            _this.tournament._tournament_master = item;
        });
    };
    CreatTournmentComponent.prototype.save = function (model, isValid) {
        // call API to save customer
        console.log(model, isValid);
    };
    CreatTournmentComponent.prototype.addTournament = function (tournament) {
        var _this = this;
        this.ds.registerTournament(JSON.stringify(this.tournament))
            .subscribe(function (obj) { _this.router.navigate(['/userprofile']); }, function (err) { return _this.err = 'Tournament with this name already exists'; });
        console.log(JSON.stringify({ data: this.tournament }, null, 4));
    };
    CreatTournmentComponent.prototype.logOut = function () {
        this.logout.logOut();
    };
    return CreatTournmentComponent;
}());
CreatTournmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-creat-tournment',
        template: __webpack_require__("../../../../../src/app/web_components/game_components/tournment/creat-tournment/creat-tournment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/game_components/tournment/creat-tournment/creat-tournment.component.sass")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* DatepickerModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* DatepickerModule */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_tokenholder_srv__["a" /* TokenHolderServise */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_tokenholder_srv__["a" /* TokenHolderServise */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__sign_log_log_out_log_out_component__["a" /* LogOutComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__sign_log_log_out_log_out_component__["a" /* LogOutComponent */]) === "function" && _e || Object])
], CreatTournmentComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=creat-tournment.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/join-tournment/join-tournment.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<main id=\"page-content-wrapper\" role=\"main\">\r\n    <div class=\"container\">\r\n        <div id=\"pav\">\r\n            <br>\r\n            <p>image</p>\r\n            <br>\r\n        </div>\r\n        <div id=\"all_tour\">\r\n            <p>ALL TOURNAMENTS</p>\r\n            <ul>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n            </ul>\r\n        </div>\r\n        <div id=\"all_teams\">\r\n            <p>ALL TEAMS</p>\r\n            <ul>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n                <a>List</a><br>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/join-tournment/join-tournment.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);", ""]);

// module
exports.push([module.i, "main {\n  position: fixed;\n  min-width: 84%;\n  height: 90%;\n  background-color: #d2d2d2;\n  overflow-y: scroll;\n  float: right;\n  bottom: 0;\n  right: 0; }\n\n.container {\n  padding: 2% 5% 2% 5%; }\n\n#pav {\n  text-align: center;\n  float: left;\n  width: 92%;\n  height: 40%;\n  background-color: #f8f9f9;\n  color: #ffad01;\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: 2px;\n  margin-bottom: 2%; }\n\n#all_tour {\n  text-align: center;\n  text-decoration: none;\n  float: left;\n  width: 92%;\n  height: 55%;\n  color: #ffad01;\n  background-color: #212121;\n  margin-bottom: 1%;\n  margin-left: 4%; }\n\n#all_teams {\n  text-align: center;\n  text-decoration: none;\n  float: left;\n  width: 92%;\n  height: 55%;\n  background-color: #212121;\n  color: #ffad01;\n  margin-bottom: 1%;\n  margin-left: 4%; }\n\ni {\n  color: #212121; }\n\n.i {\n  color: white; }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.p {\n  text-decoration: none;\n  padding: 0%;\n  margin: 0%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/join-tournment/join-tournment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinTournmentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JoinTournmentComponent = (function () {
    function JoinTournmentComponent() {
    }
    JoinTournmentComponent.prototype.ngOnInit = function () {
    };
    return JoinTournmentComponent;
}());
JoinTournmentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-join-tournment',
        template: __webpack_require__("../../../../../src/app/web_components/game_components/tournment/join-tournment/join-tournment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/game_components/tournment/join-tournment/join-tournment.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], JoinTournmentComponent);

//# sourceMappingURL=join-tournment.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/over-all-tournaments-widget/over-all-tournaments-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Overall Toutnaments\r\n</p>\r\n\r\n<table class=\"table\">\r\n    <tr>\r\n        <th>Tournament's name</th>\r\n        <th>Tournament's players</th>\r\n        <th>Tournament's budget</th>\r\n    </tr>\r\n\r\n    <tr *ngFor=\"let tournament of tournaments\">\r\n        <td>{{tournament.name}}</td>\r\n        <td>{{tournament.max_players}}</td>\r\n        <td>{{tournament.budget}}</td>\r\n        <button md-button (click)=\"openDialog(tournament)\">More info</button>\r\n\r\n    </tr>\r\n\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/over-all-tournaments-widget/over-all-tournaments-widget.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/over-all-tournaments-widget/over-all-tournaments-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tournament_dialog_tournament_dialog_component__ = __webpack_require__("../../../../../src/app/web_components/game_components/tournment/tournament-dialog/tournament-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popup_popup_component__ = __webpack_require__("../../../../../src/app/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_security_trimming_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/security-trimming.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverAllTournamentsWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OverAllTournamentsWidgetComponent = (function () {
    function OverAllTournamentsWidgetComponent(ds, dialog, secureTrim) {
        this.ds = ds;
        this.dialog = dialog;
        this.secureTrim = secureTrim;
    }
    OverAllTournamentsWidgetComponent.prototype.openDialog = function (tournament) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__tournament_dialog_tournament_dialog_component__["a" /* TournamentDialogComponent */], {
            data: tournament,
            height: '600px',
            width: '600px'
        });
    };
    OverAllTournamentsWidgetComponent.prototype.sugestToJoinTournament = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__popup_popup_component__["a" /* PopupComponent */], {});
    };
    OverAllTournamentsWidgetComponent.prototype.getTournaments = function () {
        var _this = this;
        this.ds.getAllTournaments().subscribe(function (tournament) {
            _this.tournaments = tournament;
            _this.secureTrim.setMastersTournaments(tournament);
        });
    };
    OverAllTournamentsWidgetComponent.prototype.ngOnInit = function () {
        this.getTournaments();
    };
    return OverAllTournamentsWidgetComponent;
}());
OverAllTournamentsWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-over-all-tournaments-widget',
        template: __webpack_require__("../../../../../src/app/web_components/game_components/tournment/over-all-tournaments-widget/over-all-tournaments-widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/game_components/tournment/over-all-tournaments-widget/over-all-tournaments-widget.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_security_trimming_srv__["a" /* SecurityTrimming */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_security_trimming_srv__["a" /* SecurityTrimming */]) === "function" && _c || Object])
], OverAllTournamentsWidgetComponent);

var _a, _b, _c;
//# sourceMappingURL=over-all-tournaments-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/tournament-dialog/tournament-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main\"><h1>Tournament info</h1>\r\n    <md-tab-group>\r\n        <md-tab id=\"tab\" label=\"Main info\">\r\n            <p class=\"infotext paddingtop\">Name: <a>{{data.name}}</a></p>\r\n            <p class=\"infotext\">Master: <a class = \"up\">{{data._tournament_master.name}} {{data._tournament_master.surname}}</a></p>\r\n            <p class=\"infotext\">Max players allowed: <a>{{data.max_players}}</a></p>\r\n            <p class=\"infotext\">Max teams allowed: <a>{{data.max_teams}}</a></p>\r\n            <p class=\"infotext\">Budget: <a>{{data.budget}}</a></p>\r\n            <p class=\"infotext underline text-center\">Tournament starts: <a>{{data.start| date: 'yyyy-MM-dd'}}</a></p>\r\n            <p class=\"infotext underline text-center\">Tournament ends: <a>{{data.end| date: 'yyyy-MM-dd'}}</a></p>\r\n        </md-tab>\r\n        <md-tab  label=\"Tournament players list\">\r\n            <div id=\"tabas2\">\r\n                <app-tournament-userlist-component [is_allowed]=\"is_allowed\"\r\n                                                   [users]=\"users\"></app-tournament-userlist-component>\r\n            </div>\r\n        </md-tab>\r\n    </md-tab-group>\r\n    <button class=\"btn btn-primary margintop\">join</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/tournament-dialog/tournament-dialog.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  z-index: 50;\n  text-align: center;\n  color: orange;\n  background-color: #212121; }\n\nmain {\n  background-color: #212121; }\n\n.infotext {\n  padding-left: 10%;\n  font-size: 100%;\n  text-align: left;\n  color: white; }\n\n.infotext > a {\n  color: #ff9900;\n  font-size: 120%;\n  text-align: right;\n  text-decoration: none; }\n\n.paddingtop {\n  padding-top: 2%; }\n\nh1 {\n  color: white; }\n\n.underline {\n  text-decoration: underline; }\n\n.margintop {\n  margin-top: 5%; }\n\n#tab {\n  height: 100%; }\n\n#main {\n  height: 100%; }\n\n#tabas2 {\n  height: 300px; }\n\n.up {\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/tournament-dialog/tournament-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_security_trimming_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/security-trimming.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TournamentDialogComponent = (function () {
    function TournamentDialogComponent(data, ds, securityTrimm) {
        this.data = data;
        this.ds = ds;
        this.securityTrimm = securityTrimm;
        this.users = data._users;
        this.is_allowed = this.securityTrimm.isAllowedMasterRights(data._id);
        console.log('data._id' + data._id);
    }
    TournamentDialogComponent.prototype.ngOnInit = function () {
    };
    return TournamentDialogComponent;
}());
TournamentDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tournament-dialog',
        template: __webpack_require__("../../../../../src/app/web_components/game_components/tournment/tournament-dialog/tournament-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/game_components/tournment/tournament-dialog/tournament-dialog.component.sass")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_srv__["a" /* DService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_security_trimming_srv__["a" /* SecurityTrimming */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_security_trimming_srv__["a" /* SecurityTrimming */]) === "function" && _b || Object])
], TournamentDialogComponent);

var _a, _b;
//# sourceMappingURL=tournament-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/tournament-userlist-component/tournament-userlist-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let user of users\">\r\n    <div id=\"userContent\" style=\"display: none;\">\r\n    </div>\r\n    <button style=\"display: none;\" id=\"contentas1\" class=\"text-right\" type=\"button\" class=\"btn btn-danger \"\r\n            (click)=\"conceal()\"><i> close</i></button>\r\n    <br/>\r\n    <button class=\"text-right\" type=\"button\" class=\"btn \" (click)=\"show(user)\"><i>View info</i></button>\r\n    {{user.name}}<button kendoButton *ngIf=\"is_allowed\" class=\"fa fa-close\" (click)=\"open()\"> Delete</button>\r\n       <div class=\"example-wrapper\">\r\n        <kendo-dialog title=\"Please confirm\" *ngIf=\"opened\" (close)=\"close('cancel')\">\r\n            <p style=\"margin: 30px; text-align: center;\">This user will be deleted</p>\r\n            <kendo-dialog-actions>\r\n                <button kendoButton (click)=\"close('no')\">Cancel</button>\r\n                <button kendoButton (click)=\"delete(user)\" primary=\"true\">Delete</button>\r\n            </kendo-dialog-actions>\r\n        </kendo-dialog>\r\n      </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/tournament-userlist-component/tournament-userlist-component.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show {\n  display: block; }\n\n.hide {\n  display: none; }\n\n#contentas1 {\n  margin: 10px auto 0 auto;\n  text-align: center; }\n\n#userContent {\n  border: 1px solid orange;\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n\nbutton {\n  color: white;\n  border: 0px;\n  padding-left: 0;\n  padding-right: 0;\n  font-weight: bold;\n  text-align: center;\n  background: #212121;\n  font-size: 80%;\n  margin-right: 2%;\n  width: 10%;\n  height: 15%; }\n\nspan {\n  color: #E04006;\n  padding-left: 3%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/game_components/tournment/tournament-userlist-component/tournament-userlist-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dialog__ = __webpack_require__("../../../../@progress/kendo-angular-dialog/dist/es/main.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TournamentUserlistComponentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TournamentUserlistComponentComponent = (function () {
    function TournamentUserlistComponentComponent(data, dialogService, ds) {
        this.data = data;
        this.dialogService = dialogService;
        this.ds = ds;
        this.opened = false;
        console.log('is_allowed ' + this.is_allowed);
    }
    TournamentUserlistComponentComponent.prototype.close = function (status) {
        this.opened = false;
    };
    TournamentUserlistComponentComponent.prototype.open = function () {
        this.opened = true;
    };
    TournamentUserlistComponentComponent.prototype.delete = function (user) {
        var _this = this;
        var index = this.users.indexOf(user);
        this.users.splice(index, 1);
        this.ds.updateTournament(JSON.stringify(this.data)).subscribe(function (obj) {
            _this.opened = false;
        });
    };
    TournamentUserlistComponentComponent.prototype.ngOnInit = function () {
    };
    TournamentUserlistComponentComponent.prototype.conceal = function (user) {
        if (document.getElementById('userContent').style.display === 'block') {
            document.getElementById('userContent').style.display = 'none';
            document.getElementById('contentas1').style.display = 'none';
        }
    };
    TournamentUserlistComponentComponent.prototype.show = function (user) {
        if (document.getElementById('userContent').style.display === 'none') {
            document.getElementById('userContent').innerHTML = 'Name: ' + user.name + '<br/>' + 'Surname: ' + user.surname + '<br/>' + 'Email: ' + user.email;
            document.getElementById('userContent').style.display = 'block';
            document.getElementById('contentas1').style.display = 'block';
        }
    };
    return TournamentUserlistComponentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TournamentUserlistComponentComponent.prototype, "tournament", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TournamentUserlistComponentComponent.prototype, "users", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TournamentUserlistComponentComponent.prototype, "is_allowed", void 0);
TournamentUserlistComponentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tournament-userlist-component',
        template: __webpack_require__("../../../../../src/app/web_components/game_components/tournment/tournament-userlist-component/tournament-userlist-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/game_components/tournment/tournament-userlist-component/tournament-userlist-component.component.sass")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dialog__["b" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dialog__["b" /* DialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_srv__["a" /* DService */]) === "function" && _b || Object])
], TournamentUserlistComponentComponent);

var _a, _b;
//# sourceMappingURL=tournament-userlist-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"body fade\">\r\n    <!-- Page Content -->\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 text-center\">\r\n                <h1>Welcome to Sportfasy!</h1>\r\n                <p class=\"lead\">RealTime Fantasy Sports Game</p>\r\n                <br>\r\n                <button class=\"btn button\" routerLink=\"/login\">Log in!</button>\r\n                <button class=\"btn button\" routerLink=\"/singup\">Join now!</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/home/home.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body {\n  padding-top: 70px;\n  background-color: #212121;\n  color: #ffffff;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n.button {\n  background-color: #ffad01;\n  font-size: 110%;\n  color: #212121;\n  border: 0px; }\n\nh1 {\n  color: #ff9900;\n  font-size: 400%; }\n\np {\n  font-size: 200%; }\n\n.fade {\n  opacity: 1;\n  -webkit-animation: fadein 4s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein 4s; }\n\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/web_components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/home/home.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/shared/Tournament.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tournament; });
var Tournament = (function () {
    function Tournament() {
    }
    return Tournament;
}());

//# sourceMappingURL=Tournament.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/shared/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/shared/data.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DService = (function () {
    function DService(http) {
        this.http = http;
    }
    DService.prototype.getUserCredentials = function () {
        return this.http.get('/api/users')
            .map(function (res) { return res.json(); });
    };
    DService.prototype.registerUser = function (user) {
        return this.http.post('/api/users', user).map(function (res) { return res.json(); });
    };
    DService.prototype.loginUser = function (user) {
        return this.http.post('/api/login', user).map(function (res) { return res.json(); });
    };
    DService.prototype.registerTournament = function (tournament) {
        return this.http.post('/api/tournaments', tournament).map(function (res) { return res.json(); });
    };
    DService.prototype.logOutUser = function () {
        return this.http.get('/api/logout').map(function (res) { return res.json(); });
    };
    DService.prototype.getAllTeams = function () {
        return this.http.get('/api/teams').map(function (res) { return res.json(); });
    };
    DService.prototype.getAllTournaments = function () {
        return this.http.get('/api/tournaments').map(function (res) { return res.json(); });
    };
    DService.prototype.updateTournament = function (tournament) {
        return this.http.put('/api/tournaments', tournament).map(function (res) { return res.json(); });
    };
    DService.prototype.getUserTurnaments = function (userID) {
        return this.http.get("/api/tournaments/?userID=" + userID).map(function (res) { return res.json(); });
    };
    return DService;
}());
DService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DService);

var _a;
//# sourceMappingURL=data.srv.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/shared/security-trimming.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tokenholder_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/tokenholder.srv.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityTrimming; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SecurityTrimming = (function () {
    function SecurityTrimming(tokenHolder) {
        this.tokenHolder = tokenHolder;
    }
    SecurityTrimming.prototype.getMastersTournaments = function () {
        return this._master_in_tournaments;
    };
    SecurityTrimming.prototype.setMastersTournaments = function (tournaments) {
        var _this = this;
        console.log('tournaments ' + tournaments);
        this._master_in_tournaments = tournaments.map(function (tournament) {
            console.log('tournament._tournament_master ' + JSON.stringify({ data: tournament._tournament_master }, null, 4));
            if (tournament._tournament_master._id === _this.tokenHolder.getUserID()) {
                console.log('tournament._id ' + tournament._id);
                return tournament._id;
            }
        });
        console.log('_master_in_tournaments ' + this._master_in_tournaments);
        console.log('this.tokenHolder.getUserID() ' + this.tokenHolder.getUserID());
    };
    SecurityTrimming.prototype.isAllowedMasterRights = function (tournamentId) {
        if (this._master_in_tournaments.indexOf(tournamentId) !== -1) {
            return true;
        }
    };
    return SecurityTrimming;
}());
SecurityTrimming = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__tokenholder_srv__["a" /* TokenHolderServise */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__tokenholder_srv__["a" /* TokenHolderServise */]) === "function" && _a || Object])
], SecurityTrimming);

var _a;
//# sourceMappingURL=security-trimming.srv.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/shared/tokenholder.srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenHolderServise; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenHolderServise = (function () {
    function TokenHolderServise() {
        // Observable sources
        this._nameChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"]();
        this._idChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"]();
        this._emailChange = new __WEBPACK_IMPORTED_MODULE_2_rxjs_ReplaySubject__["ReplaySubject"]();
        // Observable streams
        this.nameChange$ = this._nameChange.asObservable();
        this.idChange$ = this._idChange.asObservable();
        this.emailChange$ = this._emailChange.asObservable();
    }
    TokenHolderServise.prototype.getToken = function () {
        return this.token;
    };
    TokenHolderServise.prototype.setToken = function (value) {
        this.token = value;
        localStorage.setItem('id_token', value);
    };
    TokenHolderServise.prototype.getUserID = function () {
        return this._userID;
    };
    TokenHolderServise.prototype.setUserID = function (value) {
        this._userID = value;
        this._idChange.next(value);
    };
    TokenHolderServise.prototype.getEmail = function () {
        return this._userEmail;
    };
    TokenHolderServise.prototype.setUserEmail = function (value) {
        this._userEmail = value;
    };
    TokenHolderServise.prototype.getUserName = function () {
        return this._userName;
    };
    TokenHolderServise.prototype.setUserName = function (value) {
        this._userName = value;
        this._nameChange.next(value);
    };
    TokenHolderServise.prototype.storeUserData = function (token, id_user, email_user, name_user) {
        this.setUserEmail(email_user);
        this.setUserName(name_user);
        this.setUserID(id_user);
        this.setToken(token);
    };
    return TokenHolderServise;
}());
TokenHolderServise = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TokenHolderServise);

//# sourceMappingURL=tokenholder.srv.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/sign_log/log-in/log-in.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-offset-5 col-md-3\">\r\n        <div class=\"form-login\">\r\n          <h4>Welcome to Sportfasy!</h4>\r\n          <form method=\"post\" novalidate=\"\">\r\n\r\n\r\n            <label class=\"label\" for=\"email\">Email:</label><br>\r\n            <input class=\"form-control input-sm chat-input\" name=\"email\" [(ngModel)]=\"user.email\">\r\n\r\n\r\n            <label class=\"label\" for=\"password\">Password:</label><br>\r\n            <input class=\"form-control input-sm chat-input\" type=\"password\" required minlength=\"6\" name=\"password\"\r\n                   [(ngModel)]=\"user.password\"><br>\r\n\r\n              <div class=\"error text-center\"><span *ngIf=\"error\">{{error}}</span></div><br>\r\n            <div class=\"text-center\"><input class=\"btn button\" type=\"submit\" (click)=\"loginUser()\" value=\"LOG IN\"></div>\r\n            <p>Not a member yet? <a class=\"a\" routerLink=\"/singup\"><br>Join now!</a></p>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/sign_log/log-in/log-in.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background-color: #fff;\n  -webkit-font-smoothing: antialiased;\n  font: normal 14px Roboto,arial,sans-serif; }\n\n.container {\n  overflow: auto;\n  padding: 25px;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #dde7e9; }\n\n.form-login {\n  width: 120%;\n  position: absolute;\n  background-color: #212121;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-radius: 15px;\n  border-color: #d2d2d2;\n  border-width: 5px;\n  box-shadow: 0 1px 0 #cfcfcf; }\n\nh4 {\n  border: 0 solid #dde7e9;\n  color: #ffad01;\n  border-bottom-width: 1px;\n  padding-bottom: 10px;\n  text-align: center; }\n\n.form-control {\n  border-radius: 10px; }\n\n.wrapper {\n  text-align: center; }\n\n.button {\n  background-color: #ffad01;\n  color: #212121;\n  border: 0px; }\n\n.row {\n  padding-left: 40%; }\n\np {\n  padding-top: 5%;\n  color: white;\n  text-align: center; }\n\n.a {\n  color: #ffad01;\n  text-align: center; }\n\n.error {\n  color: #ff9900;\n  font-size: 80%;\n  margin: 0;\n  padding: 0; }\n\n.label {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/sign_log/log-in/log-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_User__ = __webpack_require__("../../../../../src/app/web_components/shared/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_tokenholder_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/tokenholder.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogInComponent = (function () {
    function LogInComponent(ds, tokenHolder, router) {
        this.ds = ds;
        this.tokenHolder = tokenHolder;
        this.router = router;
    }
    LogInComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_1__shared_User__["a" /* User */]();
        this.user.password = '123456';
        this.user.email = 'root@gmail.com';
    };
    LogInComponent.prototype.loginUser = function (user) {
        var _this = this;
        this.ds.loginUser(JSON.stringify(this.user))
            .subscribe(function (obj) {
            if (obj.success) {
                _this.tokenHolder.storeUserData(obj.token, obj.userID, obj.userEmail, obj.userName),
                    _this.router.navigate(['/userprofile']);
            }
        }, function (err) { return _this.error = 'Email or password invalid. Please try again.'; });
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-log-in',
        template: __webpack_require__("../../../../../src/app/web_components/sign_log/log-in/log-in.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/sign_log/log-in/log-in.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_data_srv__["a" /* DService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_data_srv__["a" /* DService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_tokenholder_srv__["a" /* TokenHolderServise */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_tokenholder_srv__["a" /* TokenHolderServise */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LogInComponent);

var _a, _b, _c;
//# sourceMappingURL=log-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/sign_log/log-out/log-out.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-offset-5 col-md-3\">\r\n        <div class=\"form-login\">\r\n          <h4>Welcome to Sportfasy!</h4>\r\n          <input type=\"text\" id=\"userName\" class=\"form-control input-sm chat-input\" placeholder=\"username\"/>\r\n          <br>\r\n          <input type=\"text\" id=\"userPassword\" class=\"form-control input-sm chat-input\" placeholder=\"password\"/>\r\n          <br>\r\n          <div class=\"wrapper\">\r\n            <span class=\"group-btn\">\r\n                <a routerLink=\"/userprofile\" class=\"btn btn-primary btn-md button\">login <i class=\"fa fa-sign-in\"></i></a>\r\n            </span>\r\n          </div>\r\n          <p>Not a member yet? <a class=\"a\" routerLink=\"/singup\"><br>Join now!</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/sign_log/log-out/log-out.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto:400);", ""]);

// module
exports.push([module.i, "body {\n  background-color: #fff;\n  -webkit-font-smoothing: antialiased;\n  font: normal 14px Roboto,arial,sans-serif; }\n\n.container {\n  padding: 25px;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #dde7e9; }\n\n.form-login {\n  width: 120%;\n  position: absolute;\n  background-color: #212121;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  border-radius: 15px;\n  border-color: #d2d2d2;\n  border-width: 5px;\n  box-shadow: 0 1px 0 #cfcfcf; }\n\nh4 {\n  border: 0 solid #dde7e9;\n  color: #ffad01;\n  border-bottom-width: 1px;\n  padding-bottom: 10px;\n  text-align: center; }\n\n.form-control {\n  border-radius: 10px; }\n\n.wrapper {\n  text-align: center; }\n\n.button {\n  background-color: #ffad01;\n  border: 0px; }\n\n.row {\n  padding-left: 40%; }\n\np {\n  padding-top: 5%;\n  color: white;\n  text-align: center; }\n\n.a {\n  color: #ffad01;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/sign_log/log-out/log-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_tokenholder_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/tokenholder.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogOutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogOutComponent = (function () {
    function LogOutComponent(ds, tokenHolder, router) {
        this.ds = ds;
        this.tokenHolder = tokenHolder;
        this.router = router;
    }
    LogOutComponent.prototype.ngOnInit = function () {
    };
    LogOutComponent.prototype.logOut = function () {
        localStorage.removeItem('id_token');
        localStorage.removeItem('id_user');
        localStorage.removeItem('email_user');
        localStorage.removeItem('name_user');
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    return LogOutComponent;
}());
LogOutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-log-out',
        template: __webpack_require__("../../../../../src/app/web_components/sign_log/log-out/log-out.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/sign_log/log-out/log-out.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_tokenholder_srv__["a" /* TokenHolderServise */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_tokenholder_srv__["a" /* TokenHolderServise */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], LogOutComponent);

var _a, _b, _c;
//# sourceMappingURL=log-out.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/sign_log/sing-up/sing-up.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<div class=\"login-form\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-offset-5 col-md-3\">\r\n                <div class=\"form-login\">\r\n                    <h4>Join us!</h4>\r\n                    <form [formGroup]=\"form\" #forma=\"ngForm\" method=\"post\" novalidate (ngSubmit)=\"onSubmit()\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"label\" for=\"name\">First Name:</label><br>\r\n                            <div>\r\n                                <input class=\"form-control\" type=\"text\" [formGroup]=\"form\" id=\"name\"\r\n                                       formControlName=\"name\" name=\"name\" [(ngModel)]=\"user.name\"\r\n                                       onfocus=\"this.value = '';\" placeholder=\"Name\"><a href=\"#\"></a><br>\r\n                                <ul class=\"help-block error\">\r\n                                    <li *ngIf=\"form.controls.name.errors?.required && form.controls.name.dirty\">This\r\n                                        field is required\r\n                                    </li>\r\n                                    <li *ngIf=\"form.controls.name.errors?.minlength && form.controls.name.dirty || form.controls.name.errors?.maxlength && form.controls.name.dirty \">\r\n                                        Minimum characters: 3, Maximum characters: 15\r\n                                    </li>\r\n                                    <li *ngIf=\"form.controls.name.errors?.validateUsername && form.controls.name.dirty\">\r\n                                        Username must not have any special characters\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"label\" for=\"surname\">Last Name:</label><br>\r\n                            <div>\r\n                                <input class=\"form-control\" [formGroup]=\"form\" formControlName=\"surname\" type=\"text\"\r\n                                       name=\"surname\" [(ngModel)]=\"user.surname\" onfocus=\"this.value = '';\"\r\n                                       placeholder=\"Surname\"><a href=\"#\"></a><br>\r\n                                <ul class=\"help-block error\">\r\n                                    <li *ngIf=\"form.controls.surname.errors?.required && form.controls.surname.dirty\">\r\n                                        This field is required\r\n                                    </li>\r\n                                    <li *ngIf=\"form.controls.surname.errors?.minlength && form.controls.surname.dirty || form.controls.surname.errors?.maxlength && form.controls.surname.dirty \">\r\n                                        Minimum characters: 3, Maximum characters: 15\r\n                                    </li>\r\n                                    <li *ngIf=\"form.controls.surname.errors?.validateUsername && form.controls.surname.dirty\">\r\n                                        Surname must not have any special characters\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"label\" for=\"password\">Password:</label><br>\r\n                            <div>\r\n                                <input class=\"form-control\" [formGroup]=\"form\" formControlName=\"password\" id=\"password\"\r\n                                       type=\"password\" name=\"password\" [(ngModel)]=\"user.password\"\r\n                                       onfocus=\"this.value = '';\" placeholder=\"••••••••••••\"><a href=\"#\"></a><br>\r\n                                <ul class=\"help-block error\">\r\n                                    <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">\r\n                                        This field is required\r\n                                    </li>\r\n                                    <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">\r\n                                        Minimum characters: 8, Maximum characters: 35\r\n                                    </li>\r\n                                    <li *ngIf=\"form.controls.password.errors?.validateUsername && form.controls.password.dirty\">\r\n                                        Password must not have any special characters\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"label\" for=\"cPassword\">Confirm Password:</label><br>\r\n                            <div>\r\n                                <input class=\"form-control\" [formGroup]=\"form\" formControlName=\"cPassword\"\r\n                                       type=\"password\" id=\"cPassword\" name=\"cPassword\" [(ngModel)]=\"user.cPassword\"\r\n                                       placeholder=\"••••••••••••\"><br>\r\n                                <ul class=\"help-block error\">\r\n                                    <li *ngIf=\"form.controls.cPassword.errors?.required && form.controls.cPassword.dirty\">\r\n                                        This field is required\r\n                                    </li>\r\n                                    <li *ngIf=\"form.errors?.matchingPasswords && form.controls.cPassword.dirty\">Password\r\n                                        do not match\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"alert alert-danger\" *ngIf=\"form.controls.cPassword.errors?.MatchPassword\">Password\r\n                            not match\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"label\" for=\"email\">Email:</label><br>\r\n                            <div>\r\n                                <input class=\"form-control\" [formGroup]=\"form\" formControlName=\"email\" type=\"email\"\r\n                                       name=\"email\" [(ngModel)]=\"user.email\" required onfocus=\"this.value = '';\"\r\n                                       placeholder=\"Email address\"><a href=\"#\"></a>\r\n                                <ul class=\"help-block error\">\r\n                                    <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This\r\n                                        field is required\r\n                                    </li>\r\n                                    <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">\r\n                                        Minimum characters: 5, Maximum characters: 30\r\n                                    </li>\r\n                                    <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">\r\n                                        This must be a valid e-mail\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"text-center\">\r\n                            <button type=\"submit\" class=\"btn button \" [disabled]=\"!forma.form.valid\" (click)=\"addUser()\">SIGN UP</button>\r\n                            <h3 class=\"error\">{{errorMsg}}</h3>\r\n                            <p  style=\"color:white\">Already have an account? <a class=\"a\" routerLink=\"/login\">Login</a></p>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/sign_log/sing-up/sing-up.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  background-color: #fff;\n  -webkit-font-smoothing: antialiased;\n  font: normal 14px Roboto,arial,sans-serif; }\n\n.container {\n  overflow: auto;\n  padding: 25px;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #dde7e9; }\n\n.form-login {\n  position: absolute;\n  width: 120%;\n  background-color: #212121;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 15px;\n  border-color: #d2d2d2;\n  border-width: 5px;\n  box-shadow: 0 1px 0 #cfcfcf; }\n\nh4 {\n  border: 0 solid #dde7e9;\n  color: #ffad01;\n  border-bottom-width: 1px;\n  padding-bottom: 10px;\n  text-align: center; }\n\n.form-control {\n  border-radius: 10px; }\n\n.wrapper {\n  text-align: center; }\n\n.button {\n  background-color: #ff9900;\n  opacity: 1;\n  border: 0px;\n  color: #212121;\n  margin-top: 5%; }\n\n.label {\n  color: white; }\n\n.row {\n  padding-left: 40%; }\n\n.error {\n  color: #ff9900;\n  font-size: 80%; }\n\na {\n  color: #ffad01; }\n\ninput {\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/sign_log/sing-up/sing-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_User__ = __webpack_require__("../../../../../src/app/web_components/shared/User.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingUpComponent = (function () {
    function SingUpComponent(ds, router, fb) {
        this.ds = ds;
        this.router = router;
        this.dataHolder = [];
        this.form = fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30),
                    this.validateUsername])],
            surname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(35),
                    this.validateUsername])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(35),
                    this.validateUsername // Custom validation
                ])],
            cPassword: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            // Confirm Password Input
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30),
                    this.validateEmail])]
        }, {
            validator: this.matchingPasswords('password', 'cPassword') // your validation method
        });
    }
    // Function to validate e-mail is proper format
    SingUpComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    SingUpComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    SingUpComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Funciton to ensure passwords match
    SingUpComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // private formBuilder: FormBuilder
    SingUpComponent.prototype.onSubmit = function () {
        console.log(this.form);
    };
    SingUpComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_4__shared_User__["a" /* User */]();
    };
    SingUpComponent.prototype.addUser = function (user) {
        var _this = this;
        this.ds.registerUser(JSON.stringify(this.user))
            .subscribe(function (obj) { return _this.router.navigate(['/login']); });
    };
    return SingUpComponent;
}());
SingUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sing-up',
        template: __webpack_require__("../../../../../src/app/web_components/sign_log/sing-up/sing-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/sign_log/sing-up/sing-up.component.sass")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object])
], SingUpComponent);

var _a, _b, _c;
//# sourceMappingURL=sing-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/web_components/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div>\r\n    <main id=\"page-content-wrapper\" role=\"main\">\r\n\r\n        <div id=\"all_tour\">\r\n            <app-over-all-tournaments-widget></app-over-all-tournaments-widget>\r\n        </div>\r\n        <div id=\"all_teams\">\r\n            <app-over-all-teams-widget></app-over-all-teams-widget>\r\n        </div>\r\n    </main>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/web_components/user-profile/user-profile.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  position: fixed;\n  min-width: 84%;\n  height: 90%;\n  background-color: #d2d2d2;\n  overflow-y: scroll;\n  float: right;\n  bottom: 0;\n  right: 0; }\n\n#all_tour {\n  margin-top: 2%;\n  text-align: center;\n  position: relative;\n  text-decoration: none;\n  float: left;\n  width: 92%;\n  min-height: 25%;\n  color: #ffad01;\n  background-color: #212121;\n  margin-bottom: 1%;\n  margin-left: 4%; }\n\n#all_teams {\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  float: left;\n  width: 92%;\n  min-heigh: 35%;\n  background-color: #212121;\n  color: #ffad01;\n  margin-bottom: 1%;\n  margin-left: 4%; }\n\n.logo {\n  padding-left: 2%;\n  font-size: 230%;\n  color: white;\n  text-decoration: none; }\n\ni {\n  color: #212121; }\n\n.i {\n  color: white; }\n\n.p {\n  text-decoration: none;\n  padding: 0%;\n  margin: 0%; }\n\n.logout {\n  color: #ffffff;\n  padding: 0%;\n  margin: 0%; }\n\n.profile {\n  position: relative;\n  border-radius: 10px;\n  height: 10%;\n  padding: 5%;\n  margin-left: 20%;\n  margin-right: 20%;\n  text-align: center;\n  background-color: #212121;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/web_components/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/data.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_tokenholder_srv__ = __webpack_require__("../../../../../src/app/web_components/shared/tokenholder.srv.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popup_popup_component__ = __webpack_require__("../../../../../src/app/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProfileComponent = (function () {
    function UserProfileComponent(ds, tokenHolder, dialog) {
        this.ds = ds;
        this.tokenHolder = tokenHolder;
        this.dialog = dialog;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tokenHolder.idChange$.subscribe(function (item) {
            _this.userId = item;
            _this.getUserTurnaments(item);
        });
    };
    UserProfileComponent.prototype.getUserTurnaments = function (userId) {
        var _this = this;
        this.ds.getUserTurnaments(userId).subscribe(function (tournament) {
            if (tournament.length === 0) {
                _this.sugestToJoinTournament();
            }
        });
    };
    UserProfileComponent.prototype.sugestToJoinTournament = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__popup_popup_component__["a" /* PopupComponent */]);
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/web_components/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/web_components/user-profile/user-profile.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_srv__["a" /* DService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_tokenholder_srv__["a" /* TokenHolderServise */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_tokenholder_srv__["a" /* TokenHolderServise */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdDialog */]) === "function" && _c || Object])
], UserProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    origin: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].origin) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map