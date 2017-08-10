import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(items: any[], query: string): any {
    if (!items) return [];
    if(query=="") return items;
    return items.filter(it => it.id == query);
  }
}
