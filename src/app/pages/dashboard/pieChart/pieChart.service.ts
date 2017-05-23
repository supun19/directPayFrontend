import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PieChartService {
  chartdetailUrl= "http://192.168.8.103:8000//users";
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private _baConfig:BaThemeConfigProvider,private http:Http) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'dashboard.new_visits',
        stats: '57,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'dashboard.purchases',
        stats: 'LKR 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'dashboard.active_users',
        stats: '178,391',
        icon: 'face',
      }
    ];


  }
  /*getData(): Promise<any> {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return new Promise((resolve, reject) => {
      return this.http
        .get(this.chartdetailUrl, {headers: this.headers})
        .toPromise()
        .then(response => {
          //noinspection TypeScriptUnresolvedFunction
          console.log(response.json());


          resolve(response.json());
        }, error => {
          console.log(error);
          reject(error);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });

    });
  }*/
}
