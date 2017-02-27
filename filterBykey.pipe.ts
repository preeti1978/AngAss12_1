import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'filterByKey'})
export class FilterByKey implements PipeTransform{
   transform(arr:Array<string>, key:string):Array{
     var i=0; 
     var tempArr=[];
     for(i=0;i<arr.length;i++){
	 var tempObj = arr[i];
         if (tempObj["type"]==key){
		tempArr.push(tempObj);
	}//end if	
     }//end for 
     return tempArr;
  }//end transform

}//end class





