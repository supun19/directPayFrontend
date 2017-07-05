import {Component, OnInit} from '@angular/core';
import {MerchantService} from "../merchant.service";


import {Merchant} from "../../../class/merchant";
import {register} from "ts-node/dist";
import {Address} from '../../../class/address'
@Component({
  selector: 'merchant-register',
  templateUrl: 'merchantRegister.component.html',
  providers:[MerchantService],

})
export class MerchantRegisterComponent implements OnInit{

  public qrtext;
  isChecked: boolean = false;

  address=new Address("","","");

  merchant = new Merchant("-1","","","",this.address,"","");
  merchantId="";
  register = true;
  qr_code =false;
  detail=false;
  requestDetail={"id":""};

  //permission
  ownpermission;
  //visibility
  registerForm = true;
  constructor(private merchantService:MerchantService) {
  }

  ngOnInit(){
    this.ownpermission = JSON.parse(localStorage.getItem("ownpermission"));
    console.log("own permission")
    console.log(this.ownpermission.role);
   //this.visibilityForRole(this.ownpermission[0].role);


  }

  onSubmit(): void {


    this.merchantService.register(this.merchant).then(res => {
        console.log(this.merchant)
        if (res.data!=null && res.data[0] != null) {
          /*this.merchant.merchantName =  res.data[0].merchantName;
           this.merchant.brNumber = res.data[0].brNumber;
           this.merchant.phoneNumber = res.data[0].phoneNumber;
           this.merchant.merchantAccountNumber = res.data[0].merchantAccountNumber
           this.merchant.merchantEmail = res.data[0].merchantEmail
           this.merchant.merchantAddress = res.data[0].merchantAddress*/
          this.merchantId = res.data[0].merchantId
          this.qrtext = res.data[0].merchantId + "$ main nsb texi"
          this.qr_code = true;
          this.registerForm =false;
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
            this.merchant.address.streetAddress = res.data[0].streetAddress
            this.merchant.address.locality = res.data[0].locality
            this.merchant.address.region = res.data[0].region
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

  visibilityForRole(role){

    switch (role){
      case "superAdmin" :

        this.register = true;
        break;

      case "admin" :
        this.register = true;
        break;

      case "manager" :
        this.register = true;
        break;

      case "supervisor" :
        this.register = false;
        break;

      case "operator" :
        this.register = false;
        break;

      case "customerSupport" :
        this.register = false;
        break;

    }


  }
}

