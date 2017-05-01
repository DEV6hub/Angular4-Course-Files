import {Component} from "@angular/core";
import {PeopleService} from "./people.service";

@Component({
  selector: 'dev6-app',
  template: require('./app.component.html')
})
export class AppComponent {
  title = 'Dependency Injection';

  constructor(private peopleService: PeopleService) { }
}
