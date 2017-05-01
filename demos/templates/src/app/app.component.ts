import { Component } from '@angular/core';

@Component({
  selector: 'dev6-app',
  template: require('./app.component.html')
})
export class AppComponent {
  title = 'Templates';
  listOfThings = ['Hi!', 'How', 'are', 'you?'];
  isFound: boolean;
  name: string;
  greetingTargets = ['Man', 'Woman', 'Dog', 'Cat'];
  greetingTarget: string;

  toggleFound() {
    this.isFound = !this.isFound;
  }

}
