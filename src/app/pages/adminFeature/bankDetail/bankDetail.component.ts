import {Component, OnInit} from '@angular/core';
import {AdminFeatureService} from "../adminFeature.service";
import {User} from "../../../class/User"



import {register} from "ts-node/dist";
import {Address} from '../../../class/address'
import {BankUser} from '../../../class/bankUser';
@Component({
  selector: 'bank-detail',
  templateUrl: 'bankDetail.component.html',
  styleUrls: ['bankDetail.component.css'],
  providers:[AdminFeatureService],


})
export class BankDetailComponent implements OnInit{


  bankUser:BankUser;
  private loading = false;


  constructor(private adminFeatureService:AdminFeatureService) {
  }

  ngOnInit(){
        this.bankUser = new BankUser("","","","");
  }


  onSubmit(): void {
    this.loading = true;
    this.adminFeatureService.bankRegister(this.bankUser).then(res => {
      this.loading = false;
        if (res.data!=null && res.data[0] != null) {
          console.log(res)
        }
        else {

        }
      },
    );
  }


}

