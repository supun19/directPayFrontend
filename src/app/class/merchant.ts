
import {Address} from './address'
export class Merchant{




  constructor(public merchantId:string,public merchantName:string,public brNumber:string,public bank:string,public branchCode:string,public phoneNumber:string,public address:Address,public merchantAccountNumber:string,public merchantEmail:string,public tip:boolean,public userName:string,public role:string){

  }

}
