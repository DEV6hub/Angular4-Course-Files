import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Person } from './person';

@Component({
  selector: 'person-details-immutable',
  template: `<p>{{person.firstName}} {{person.lastName}}</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonDetailsImmutableComponent {
  @Input() person: Person;
}
