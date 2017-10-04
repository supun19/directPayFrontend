import {Component, OnInit} from '@angular/core';
import {AdminFeatureService} from "../adminFeature.service";
import {User} from "../../../class/User"



import {register} from "ts-node/dist";
import {Address} from '../../../class/address'
import {bankDetail} from "../../../class/bankDetail";
@Component({
  selector: 'bank-detail',
  templateUrl: 'bankDetail.component.html',
  styleUrls: ['bankDetail.component.css'],
  providers:[AdminFeatureService],


})
export class BankDetailComponent implements OnInit{


    bankDetail:bankDetail;
  private loading = false;


  constructor(private adminFeatureService:AdminFeatureService) {
  }

  ngOnInit(){

  }


  onSubmit(): void {
    this.loading = true;
    this.adminFeatureService.bankRegister(this.bankDetail).then(res => {
        if (res.data!=null && res.data[0] != null) {
          console.log(res)
        }
        else {

        }
      },
    );
  }


}

