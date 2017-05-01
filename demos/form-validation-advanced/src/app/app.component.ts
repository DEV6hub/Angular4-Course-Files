import {Component} from "@angular/core";
import {Person} from "./person.model";

@Component({
  selector: 'dev6-app',
  template: require('./app.component.html')
})
export class AppComponent {
  title = 'Forms & Validation';
  person: Person;

  personCreated(person: Person) {
    this.person = person;
  }
}
