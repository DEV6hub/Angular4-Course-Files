import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'no-style',
  template: `<h3>No Style Component</h3>`,
  styles: [require('./no-style.component.css')],
  encapsulation: ViewEncapsulation.None
})
export class NoStyleComponent {}
