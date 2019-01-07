import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from './friend.model';

@Pipe({
  name: 'fullNamePipe'
})
export class FullNamePipe implements PipeTransform {

  transform(value: Friend, args: any): any {
    return `${value.firstName} ${value.lastName}`;
  }
}
