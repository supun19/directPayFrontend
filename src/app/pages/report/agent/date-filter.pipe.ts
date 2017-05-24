import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datefilter',
  pure: false
})
export class DateFilterPipe implements PipeTransform {
  transform(items: any[], date: any): any {

    // filter items array, items which match and return true will be kept, false will be filtered out


    return items.filter(

      item => {

        var val =[];
        val = item.data.split(".");
        var from=[];
        val = date.fromdate.split(".");
        var to=[];
        val = date.todate.split(".");


        var hide = false;

        var fd:number = +from[2]
        var fm:number = +from[1]
        var fy:number = +from[0]

        var td:number = +from[2]
        var tm:number = +from[1]
        var ty:number = +from[0]

        var vd:number = +val[2]
        var vm:number = +val[1]
        var vy:number = +val[0]

        if( fy<= vy && vy <= ty ){

          if( fm<=vm  && vm <= tm ){
            if( fd<=vd  && vd <= td ){
                hide =false;

            }
            else{

              hide= true;
            }

          }
          else{

            hide= true;
          }
        }
        else{

          hide= true;
        }

        return hide;
      }




    );
  }
}
