import { Directive, ElementRef, EventEmitter } from 'angular2/angular2';

@Directive({
  selector: '[sort-by]',
  outputs: ['sorted']
})
export class SortByDirective {
	
	sortProperty: string;
	sorted: EventEmitter<string>;
	
    constructor(el: ElementRef) {
      this.sortProperty = el.nativeElement.getAttribute('sort-by');
      el.nativeElement.addEventListener('click', (event: any) => this.elementClicked(event));
      this.sorted = new EventEmitter();
    }

    elementClicked(event: any) {
        event.preventDefault();
        this.sorted.next(this.sortProperty); //Raise clicked event
    }

}