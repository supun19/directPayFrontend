import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router, Routes} from '@angular/router';
import {LoginService} from './login.service';
import {StorageService} from "../storage.service";
import {BaMenuService} from "../../theme/services/baMenu/baMenu.service";
import {Permission} from "../../class/permission";
import {PAGES_MENU} from "../pages.menu";
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';




@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  providers:[LoginService,BaMenuService]
})
export class LoginComponent {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  data;
  filterdata;
  ownpermission;
  register;

  loading = false;
  private loggedIn = false;

  constructor(fb:FormBuilder,private loginService: LoginService,private router: Router,private _menuService: BaMenuService,private storage:LocalStorageService) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  ngOnInit() {
    console.log("got it");

  }

  public onSubmit(values:Object):void {

    this.loading = true;

    this.submitted = true;
    if (this.form.valid) {
      // your code goes here

      console.log(values);
      this.loginService.login(values).then((data) => {

        if(data.data != null){
          this.data = data.data;
          console.log(this.data);
          if(data.data[0]!=null){
            this.filterdata = data.data[0];
            console.log(this.filterdata);
            this.storage.store('ownpermission', this.filterdata.permission[0]);
            //localStorage.setItem("ownpermission",JSON.stringify(this.filterdata.permission[0]));
            //Permission.merchantRegister = true;
            //console.log("login permisiiom");
            //console.log(localStorage.getItem("ownpermission"));
            this.storage.store('accessToken',this.filterdata.accessToken);
            this.storage.store("loggedIn","true");
            //this.setPermission();
            this.router.navigate(['/pages/transaction/all']);
          }
        }
        else {

        }
      });

    }
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  visibilityForRole(role) {

    switch (role) {
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
