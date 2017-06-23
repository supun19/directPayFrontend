import {Component, OnInit, Input} from '@angular/core';
import {SettingService} from "../setting.service";
import {Permission} from "../../../class/permission";


@Component({

  selector:'permission',
  templateUrl:'permission.component.html',
  providers:[SettingService]

})

export class PermissionComponent implements OnInit{

  permissions;
  ownpermission;
  authorize = false;

  constructor(private settingSevice:SettingService) {
    //console.log(localStorage.getItem('userEdit'));


  }

  ngOnInit() {

    this.setPermission();
  }

  setPermission(){


    this.ownpermission = JSON.parse(localStorage.getItem("ownpermission"));
    console.log("own permission")
    console.log(this.ownpermission[0].role);
    this.getAuthorization(this.ownpermission[0].role);
    if(this.authorize){
      this.settingSevice.getPermission(this.ownpermission[0].role).then(
        data=>{
          if(data!=null){
            if(data.data[0]!=null){
              localStorage.setItem("permissions",JSON.stringify(data.data[0].permissions));

              this.permissions = JSON.parse(localStorage.getItem("permissions"));
              console.log("ddddddddddd");
              console.log(data.data[0].permissions);
            }
          }




          console.log(data);
        },
        error=>{


        }

      );

    }
    //TODO else
    // this.permission.userEdit= localStorage.getItem('userEdit');
    // this.permission.userEditApprove = localStorage.getItem('userEditApprove');
    // this.permission.merchantEdit = localStorage.getItem('merchantEdit');
    // this.permission.merchantEditApprove = localStorage.getItem('merchantEditApprove');
    // this.permission.userRegister = localStorage.getItem('userRegister');
    // this.permission.userRegisterApprove = localStorage.getItem('userRegisterApprove');
    // this.permission.merchantRegister = localStorage.getItem('merchantRegister');
    // this.permission.merchantRegisterApprove = localStorage.getItem('merchantRegisterApprove');


  }
  savePermission(){

      console.log(this.permissions);
      this.settingSevice.changePermission(this.permissions).then(data => {

        if(data!=null){
            if(data.data[0]!=null){
              localStorage.setItem("permissions",JSON.stringify(data.data[0].permissions));

              this.permissions = JSON.parse(localStorage.getItem("permissions"));
              console.log(this.permissions);
            }
        }




          console.log(data);
        },
        error => {


        }
      );
  }
  getAuthorization(role){
    switch (role){
      case "superadmin" :this.authorize = true;
        break;
      case "admin" :this.authorize = true;
        break;
      case "manager" :this.authorize = true;
        break;
      case "supervisor" :this.authorize = false;
        break;
      case "operator" :this.authorize = false;
        break;
      case "Customer support" :this.authorize = false;
        break;

    }
  }
}
