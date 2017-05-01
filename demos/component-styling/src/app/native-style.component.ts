import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'native-style',
  template: `<h3>Native Style Component</h3>`,
  encapsulation: ViewEncapsulation.Native,
  styles: [require('./native-style.component.css')]
})
export class NativeStyleComponent {}
