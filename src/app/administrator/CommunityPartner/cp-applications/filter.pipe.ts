import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(items)
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    console.log(searchText)
    return items.filter( it => {
          return it.ContactPerson.toLowerCase().includes(searchText) || it.ContactNumber.toLowerCase().includes(searchText) || it.Date.toLowerCase().includes(searchText);
          console
        });
   }

}
