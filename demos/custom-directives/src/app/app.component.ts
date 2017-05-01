import {Component} from "@angular/core";

@Component({
  selector: 'dev6-app',
  template: require('./app.component.html')
})
export class AppComponent {
  title = 'Custom Directives';
  hideMessage = false;

  toggleMessage() {
    this.hideMessage = !this.hideMessage;
  }
}
