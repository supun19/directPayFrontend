"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Merchant = (function () {
    function Merchant(merchantId, merchantName, brNumber, bank, branchCode, phoneNumber, address, merchantAccountNumber, merchantEmail, tip) {
        this.merchantId = merchantId;
        this.merchantName = merchantName;
        this.brNumber = brNumber;
        this.bank = bank;
        this.branchCode = branchCode;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.merchantAccountNumber = merchantAccountNumber;
        this.merchantEmail = merchantEmail;
        this.tip = tip;
    }
    return Merchant;
}());
exports.Merchant = Merchant;
