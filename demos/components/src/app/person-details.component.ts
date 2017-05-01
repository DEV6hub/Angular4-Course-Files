import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Person } from './person';

@Component({
  selector: 'person-details',
  template: require('./person-details.component.html')
})
export class PersonDetailsComponent {
  @Input() person: Person;
  @Output() highFive = new EventEmitter<string>();

  giveHighFive() {
    this.highFive.emit(`${this.person.firstName} gave you a high five!`);
  }

}
