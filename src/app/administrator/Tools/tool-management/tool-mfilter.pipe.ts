import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toolMFilter'
})
export class ToolMFilterPipe implements PipeTransform {

   /* transform(items: any[], searchText: string): any[] {
     console.log(items)
     let empty = {CatergoryID:"Not tool",ConditionID:"No Tool"}
      if (!items){
        let itemz = []
        itemz.push(empty)
        return itemz;
      } 
      if (!searchText) return items;
      searchText = searchText.toLowerCase();
      console.log(searchText)
      return items.filter(it => {
        return it.ToolName.toLowerCase().includes(searchText) || it.ConditionID.toLowerCase().includes(searchText) || it.Status.toLowerCase().includes(searchText) || it.ToolDateAdded.toLowerCase().includes(searchText);
        // console
      });

  }*/

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
