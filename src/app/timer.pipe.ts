import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: any) {
      if(value > 0 && value < 60) {
          return "Created a few seconds ago";
      } else if(value >= 60 && value < 3600 ) {
          return "Created " + Math.round(value/60) + " minutes ago";
      } else if(value >= 3600) {
          return "Created " + Math.round(value/3600) + " hours ago";
      }
  }


}
