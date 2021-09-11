import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input('appHighLight') appHighLight = 'blue';


  constructor(private el: ElementRef) { 
    // console.log('ngOnInit HighLightDirective',this.appHighlight);
    // el.nativeElement.style.color = this.appHighlight;
  }
   ngOnInit():void {
     console.log('ngOnInit HighLightDirective',this.appHighLight);
     this.el.nativeElement.style.color = this.appHighLight;
   }
}
