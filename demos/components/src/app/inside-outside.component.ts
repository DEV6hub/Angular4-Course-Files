import { Component } from '@angular/core';

@Component({
  selector: 'inside-outside',
  template: `
    <p>Content from inside the component template</p>
    <ng-content></ng-content>
    <p>Content from inside the component template</p>
  `
})
export class InsideOutsideComponent {
  internalHello = 'Hello'; // Cannot be accessed by projected content
}
