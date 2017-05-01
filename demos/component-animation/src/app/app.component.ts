import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'dev6-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  animations: [
    trigger('fade', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ]),
    trigger('slideInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Component Animation';
  showMessage = false;

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}
