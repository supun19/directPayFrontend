import { Component } from '@angular/core';
import {MerchantService} from "../../../services/merchant.service";


import {Merchant} from "../../../class/merchant";

@Component({
  selector: 'merchant-register',
  templateUrl: 'merchantRegister.component.html',
  providers:[MerchantService],

})
export class MerchantRegisterComponent {
  isChecked: boolean = false;
  merchant = new Merchant("","","no 65","kils@gmail.com");

  constructor(private merchantService:MerchantService) {
  }


  onSubmit(): void {


    this.merchantService.register(this.merchant).then(res => {


          console.log(res.data[0]);

      },
      error => {
        console.log("res");
        alert('Invalid Username or Password');

      }
    );
  }
}
