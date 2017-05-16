import {Component, OnInit, Input} from '@angular/core';
import {TransactionService} from '../../../services/transaction.service'

@Component({

  selector:'all',
  templateUrl:'./all.component.html',
  providers:[TransactionService]

})

export class AllComponent{

  data;
  filterQuery = "";
  rowsOnPage = 10;
  sortBy = "email";
  sortOrder = "asc";

  constructor(private trasaction: TransactionService) {
    this.trasaction.getData().then((data) => {
      this.data = data;
    });
  }

  toInt(num: string) {
    return +num;
  }

  sortByWordLength = (a: any) => {
    return a.city.length;
  }


}
