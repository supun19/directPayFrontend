import {Component, OnInit} from '@angular/core';
import {AdminFeatureService} from "../adminFeature.service";
import {User} from "../../../class/User"



import {register} from "ts-node/dist";
import {Address} from '../../../class/address'
@Component({
  selector: 'bank-detail',
  templateUrl: 'bankDetail.component.html',
  styleUrls: ['bankDetail.component.css'],
  providers:[AdminFeatureService],


})
export class BankDetailComponent implements OnInit{


  constructor(private adminFeatureService:AdminFeatureService) {
  }

  ngOnInit(){

  }


}

