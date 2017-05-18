import { Component } from '@angular/core';
import {MerchantService} from "../../../services/merchant.service";


import {Merchant} from "../../../class/merchant";
import {register} from "ts-node/dist";

@Component({
  selector: 'merchant-register',
  templateUrl: 'merchantRegister.component.html',
  providers:[MerchantService],

})
export class MerchantRegisterComponent {
  isChecked: boolean = false;
  merchant = new Merchant("1234","supun","madushanka","no 65","kils@gmail.com");
  merchantId="";
  register = true;
  qr_code =false;
  detail=false;
  constructor(private merchantService:MerchantService) {
  }


  onSubmit(): void {


    this.merchantService.register(this.merchant).then(res => {

        if(res.data[0] != null){
          this.register=false;

          this.merchant.merchantAccountNumber = res.data[0].merchantAccountNumber
          this.merchant.merchantEmail = res.data[0].merchantEmail
          this.merchant.merchantAddress = res.data[0].merchantAddress
          this.merchantId = res.data[0].merchantId
          this.qr_code =true;
          this.detail=true;
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
