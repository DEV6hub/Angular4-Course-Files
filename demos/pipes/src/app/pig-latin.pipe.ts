import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pigLatin'
})
export class PigLatinPipe implements PipeTransform {
  transform(value: string): string {
    return `Pig${value}`;
  }
}
