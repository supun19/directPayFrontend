"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by thilina on 12/16/16.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AppSetting_1 = require("../../class/AppSetting");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.userDetailByNicUrl = AppSetting_1.AppSettings.DIRECT_PAY_ENDPOINT + '/user/detail/nic';
        this.merchantLastTransactions = AppSetting_1.AppSettings.DIRECT_PAY_ENDPOINT + '/transactions/last';
        this.merchantLastTransaction = AppSetting_1.AppSettings.DIRECT_PAY_ENDPOINT + '/transaction/last';
    }
    UserService.prototype.userDetailByBrNumber = function (nic) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http
                .post(_this.userDetailByNicUrl, JSON.stringify({ nic: nic }), { headers: _this.headers })
                .toPromise()
                .then(function (response) {
                //noinspection TypeScriptUnresolvedFunction
                console.log(response.json());
                resolve(response.json());
            }, function (error) {
                console.log(error);
                reject(error);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    UserService.prototype.getLastTransaction = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http
                .post(_this.merchantLastTransaction, JSON.stringify({ id: id }), { headers: _this.headers })
                .toPromise()
                .then(function (response) {
                console.log(response.json());
                resolve(response.json());
            }, function (error) {
                console.log(error);
                reject(error);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    UserService.prototype.getLastTransactions = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.http
                .post(_this.merchantLastTransactions, JSON.stringify({ id: id }), { headers: _this.headers })
                .toPromise()
                .then(function (response) {
                console.log(response.json());
                resolve(response.json());
            }, function (error) {
                console.log(error);
                reject(error);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
