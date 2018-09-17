import { Directive,Input,ElementRef,HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('appHighlight') highest:boolean;

  constructor(private elem:ElementRef) {
  }
    @HostListener('change') ngOnChanges(){
        if(this.highest){
            this.elem.nativeElement.style.backgroundColor='#222';
            this.elem.nativeElement.style.color='#fff';
        }else{
            this.elem.nativeElement.style.backgroundColor='#fff';
            this.elem.nativeElement.style.color='#000';
        }
    }

}
