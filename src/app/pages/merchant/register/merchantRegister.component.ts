import { Component } from '@angular/core';
import {MerchantService} from "../../../services/merchant.service";


import {Merchant} from "../../../class/merchant";
import {register} from "ts-node/dist";
import {Address} from '../../../class/address'
@Component({
  selector: 'merchant-register',
  templateUrl: 'merchantRegister.component.html',
  providers:[MerchantService],

})
export class MerchantRegisterComponent {
  isChecked: boolean = false;
  address=new Address("","","");

  merchant = new Merchant("-1","","","",this.address,"","");
  merchantId="";
  register = true;
  qr_code =false;
  detail=false;
  requestDetail={"id":""};
  constructor(private merchantService:MerchantService) {
  }


  onSubmit(): void {


    this.merchantService.register(this.merchant).then(res => {
        console.log(this.merchant)
        if (res.data[0] != null) {
          this.register = false;
          /*this.merchant.merchantName =  res.data[0].merchantName;
           this.merchant.brNumber = res.data[0].brNumber;
           this.merchant.phoneNumber = res.data[0].phoneNumber;
           this.merchant.merchantAccountNumber = res.data[0].merchantAccountNumber
           this.merchant.merchantEmail = res.data[0].merchantEmail
           this.merchant.merchantAddress = res.data[0].merchantAddress*/
          this.merchantId = res.data[0].merchantId
          this.qr_code = true;
        }
        else {

        }

      },
      error => {
        console.log("res");
        alert('Invalid Username or Password');

      }
    );
    this.requestDetail.id = this.merchantId;
    if (this.qr_code) {
      this.merchantService.merchantDetail(this.requestDetail).then(res => {
          console.log("sds", "fsfds");
          if (res.data[0] != null) {

            this.merchant.merchantName = res.data[0].merchantName;
            this.merchant.brNumber = res.data[0].brNumber;
            this.merchant.phoneNumber = res.data[0].phoneNumber;
            this.merchant.merchantAccountNumber = res.data[0].merchantAccountNumber
            this.merchant.merchantEmail = res.data[0].merchantEmail
            this.merchant.merchantAddress.merchantAddressNo = res.data[0].merchantAddressNo
            this.merchant.merchantAddress.merchantAddressStreet1 = res.data[0].merchantAddressStreet1
            this.merchant.merchantAddress.merchantAddressState = res.data[0].merchantAddressState
            this.merchantId = res.data[0].merchantId
            this.detail = true;
          }
          else {

          }

        },
        error => {
          console.log("res");
          alert('Invalid Username or Password');

        }
      );
    }
  }
}

