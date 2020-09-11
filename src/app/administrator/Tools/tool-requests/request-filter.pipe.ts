import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'requestFilter'
})
export class RequestFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    // console.log(items)
    let other = []

     if(!items) return [];
     if(!searchText) return items;
     searchText = searchText.toLowerCase();
     console.log(searchText)
     return items.filter( it => {
      other = it.ConditionID.toLowerCase().includes(searchText) || it.ToolDescription.toLowerCase().includes(searchText) || it.ToolName.toLowerCase().includes(searchText);
      return other
     });
    }


}
