import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  
  @HostListener('error') handleError():void{
    const elNative = this.elHost.nativeElement
    console.log('Esta imagen revento', this.elHost)
    elNative.src = '../../../assets/images/img-broken.png'
  }

  constructor(private elHost: ElementRef) {
    
  }

}
