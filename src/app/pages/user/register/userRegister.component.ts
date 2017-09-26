import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../../../class/User"



import {register} from "ts-node/dist";
import {Address} from '../../../class/address'
@Component({
  selector: 'user-register',
  templateUrl: 'userRegister.component.html',
  styleUrls: ['userRegister.component.css'],
  providers:[UserService],


})
export class UserRegisterComponent implements OnInit{

  public qrtext;
  private loading = false;
  isChecked: boolean = false;

  address=new Address("","","");

  user = new User("","","","","");
  merchantId="";
  register = true;
  qr_code =false;
  detail=false;
  requestDetail={"id":""};

  //permission
  ownpermission;
  //visibility
  registerForm = true;
  constructor(private userService:UserService) {
  }

  ngOnInit(){
    this.ownpermission = JSON.parse(localStorage.getItem("ownpermission"));
    console.log("own permission")
    console.log(this.ownpermission.role);
   //this.visibilityForRole(this.ownpermission[0].role);


  }

  onSubmit(): void {

    this.loading = true;

    this.userService.register(this.user).then(res => {
        console.log(this.user)
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

