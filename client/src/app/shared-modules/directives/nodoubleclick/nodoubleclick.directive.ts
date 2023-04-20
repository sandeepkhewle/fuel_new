import { Directive, HostListener } from '@angular/core';


@Directive({
  selector: '[fytNodoubleclick]'
})
export class NodoubleclickDirective {

  constructor() { }

  @HostListener('click', ['$event'])
  clickEvent(event:any) {
    event.srcElement.setAttribute('disabled', true);
    setTimeout(function () {
      event.srcElement.removeAttribute('disabled');
    }, 3000);
  }
}