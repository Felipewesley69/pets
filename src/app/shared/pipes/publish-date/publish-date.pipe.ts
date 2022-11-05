import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'publishDate'
})
export class PublishDatePipe implements PipeTransform {

  constructor() {
    moment.locale('pt-br');
  }
  
  transform(value: any, args?: any): any {
    return moment(value).startOf('seconds').fromNow();
  }

}
