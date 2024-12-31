import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]',
  standalone: true
})
export class CompSuccessDirective {

    constructor(private obj : ElementRef, private renderer : Renderer2) { }
  
  
    @HostListener('mouseenter') onmouseenter()
    {
      this.renderer.setStyle(this.obj.nativeElement, 'color', 'green');
    }
  
    @HostListener('mouseleave') onmouseleave()
    {
      this.renderer.setStyle(this.obj.nativeElement, 'color', 'black');
    }

}
