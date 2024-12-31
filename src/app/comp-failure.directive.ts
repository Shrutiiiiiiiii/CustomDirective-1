import { Directive } from '@angular/core';
import { HostListener } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCompFailure]',
  standalone: true
})
export class CompFailureDirective {

  constructor(private obj : ElementRef, private renderer : Renderer2) { }


  @HostListener('mouseenter') onmouseenter()
  {
    this.renderer.setStyle(this.obj.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.renderer.setStyle(this.obj.nativeElement, 'color', 'black');
  }

}
