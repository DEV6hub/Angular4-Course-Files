import {Component} from "@angular/core";

@Component({
  selector: 'dev6-app',
  template: require('./app.component.html')
})
export class AppComponent {
  title = 'Lifecycle Hooks';
  showReporter: boolean;
  num = 0;

  toggleReporter() {
    this.showReporter = !this.showReporter;
  }

  doSomething() {
    // Anything...
  }

  increment() {
    this.num++;
  }
}
