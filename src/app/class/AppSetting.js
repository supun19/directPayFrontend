"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppSettings = (function () {
    function AppSettings() {
    }
    return AppSettings;
}());
//dev
//public static DIRECT_PAY_ENDPOINT='http://192.168.8.103:8000';
//prod
AppSettings.DIRECT_PAY_ENDPOINT = 'http://13.58.144.197';
exports.AppSettings = AppSettings;
