import { Component, Input } from '@angular/core';

import { Person } from './person';

@Component({
  selector: 'person-details',
  template: `<p>{{person.firstName}} {{person.lastName}}</p>`
})
export class PersonDetailsComponent {
  @Input() person: Person;
}
