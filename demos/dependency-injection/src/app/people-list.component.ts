import { Component } from '@angular/core';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: require('./people-list.component.html')
})
export class PeopleListComponent {
  people: Person[];

  constructor(private peopleService: PeopleService) { }
}
