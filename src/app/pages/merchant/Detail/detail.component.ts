import {Component, OnInit, Input} from '@angular/core';
import  {Merchant} from '../../../class/merchant'

@Component({

  selector:'detail',
  templateUrl:'./detail.component.html',


})

export class DetailComponent{
  @Input() merchant:Merchant;
  constructor(){

  }






}
