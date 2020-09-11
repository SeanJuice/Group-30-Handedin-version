import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpDocFilter'
})
export class CpDocFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    console.log(items)
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    console.log(searchText)
    return items.filter( it => {
      console.log("here")
          return it.Name.toLowerCase().includes(searchText) || it.type.toLowerCase().includes(searchText) 
        
        });
   }

}



