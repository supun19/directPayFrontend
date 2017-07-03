import {Component, OnInit, Input} from '@angular/core';
import {SettingService} from "../setting.service";
import {Permission} from "../../../class/permission";
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';


@Component({

  selector:'permission',
  templateUrl:'permission.component.html',
  providers:[SettingService]

})

export class PermissionComponent implements OnInit{

  permissions;
  ownpermission;
  authorize = false;

  constructor(private settingSevice:SettingService,private storage:LocalStorageService) {
    //console.log(localStorage.getItem('userEdit'));


  }

  ngOnInit() {

    this.setPermission();
  }

  setPermission(){


    this.ownpermission = this.storage.retrieve("ownpermission");
    console.log("own permission")
    console.log(this.ownpermission.role);
    this.getAuthorization(this.ownpermission.role);
    if(this.authorize){
      this.settingSevice.getPermission(this.ownpermission.role).then(
        data=>{
          if(data!=null){
            if(data.data[0]!=null){
              this.storage.store("permissions",data.data[0].permissions);

              this.permissions = this.storage.retrieve("permissions");
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
