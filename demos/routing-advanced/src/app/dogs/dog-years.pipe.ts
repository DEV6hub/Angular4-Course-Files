import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dogYears'
})
export class DogYearsPipe
implements PipeTransform {
  transform(input: Date): number {
    return Math.floor(moment().diff(moment(input), 'years', true) * 7);
  }
}
