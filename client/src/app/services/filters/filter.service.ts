import { User } from 'src/app/models/users/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filtrar = (value: string, colection: Array<any>, keys: Array<string>): Array<any> => {
    return (value.length === 0)
      ? colection
      : colection.filter((element) => this.filtarAux(element, value, keys));
  }

  private filtarAux = (element: User, value: string, keys: Array<string>): boolean => {
    for (let key of keys) {
      if (element[key] && element[key].toLowerCase().search(value.toLowerCase()) !== -1)
        return true;
    }
    return false;
  }

}
