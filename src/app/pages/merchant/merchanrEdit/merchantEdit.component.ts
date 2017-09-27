import {Component, OnInit} from '@angular/core';
import {MerchantService} from "../merchant.service";


import {Merchant} from "../../../class/merchant";
import {register} from "ts-node/dist";
import {Address} from '../../../class/address'
import { FileUploader } from 'ng2-file-upload';



@Component({
  selector: 'merchant-edit',
  templateUrl: 'merchantEdit.component.html',
  styleUrls: ['merchantEdit.component.css'],
  providers:[MerchantService],


})

export class MerchantEditComponent implements OnInit{

  public uploader:FileUploader;
  public itemAlias:string;
  public qrtext;
  public pdf:any;
  private loading = false;
  isChecked: boolean = false;

  address=new Address("","","");

  merchant = new Merchant("-1","","","","","",this.address,"","",false,"","");
  merchantId="";
  register = true;
  qr_code =false;
  detail=false;
  requestDetail={"id":""};

  //permission
  ownpermission;
  //visibility
  registerForm = true;
  merchantDetailByBrnumber:any;
  merchantName:string = "11231";
  private merchant_exit_from_brNumber = false;
  constructor(private merchantService:MerchantService) {

  }

  ngOnInit(){
    this.ownpermission = JSON.parse(localStorage.getItem("ownpermission"));
    console.log("own permission")
    console.log(this.ownpermission.role);
   //this.visibilityForRole(this.ownpermission[0].role);


  }

  onSubmit(): void {

    this.loading = true;
    console.log();
    this.merchantService.update(this.merchant).then(res => {
        console.log(this.merchant)
        if (res.data!=null && res.data[0] != null) {
          /*this.merchant.merchantName =  res.data[0].merchantName;
           this.merchant.brNumber = res.data[0].brNumber;
           this.merchant.phoneNumber = res.data[0].phoneNumber;
           this.merchant.merchantAccountNumber = res.data[0].merchantAccountNumber
           this.merchant.merchantEmail = res.data[0].merchantEmail
           this.merchant.merchantAddress = res.data[0].merchantAddress*/
          this.merchantId = res.data[0].merchantId
          this.qrtext = res.data[0].merchantId + " $ main nsb texi"
          this.qr_code = true;
          this.registerForm =false;
          this.loading = false;


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
            this.merchant.userName = res.data[0].username;
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

  searchMerchantByBrNumber(brNumber){
    this.merchant_exit_from_brNumber = false;
    this.loading = true;
    console.log(brNumber);
    this.merchantService.merchantDetailByBrNumber({"brNumber":brNumber}).then((data) => {

      if(data.data != null){
        if(data.data[0]!=null){
          this.loading = false;

          this.merchantDetailByBrnumber = data.data;
          //this.merchantDetail=  JSON.stringify( data.data[0]);
          this.merchant_exit_from_brNumber = true;
          console.log("data");
          console.log("userName:")
          console.log(data.data[0].merchantName);
          this.merchant.merchantName = data.data[0].merchantName;
          this.merchant.merchantId =  data.data[0].merchantId;
          this.merchant.brNumber = data.data[0].brNumber;
          this.merchant.bank= data.data[0].bank;
          this.merchant.branchCode= data.data[0].branchCode;
          this.merchant.phoneNumber= data.data[0].phoneNumber;

          let address = new Address(data.data[0].address.streetAddress,data.data[0].address.locality,data.data[0].address.region);
          this.merchant.address= address;
          this.merchant.merchantAccountNumber= data.data[0].merchantAccountNumber;
          this.merchant.merchantEmail= data.data[0].merchantEmail;
          this.merchant.tip= data.data[0].tip;
          this.merchant.userName = data.data[0].username;
          this.merchant.role = data.data[0].role;


        }
      }
      else {
        this.loading = false;
      }
    });

  }
}

