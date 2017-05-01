import { Injectable } from '@angular/core';

import { Person } from './person';

@Injectable()
export class PeopleService {
  favourite: Person;
  private people: Person[];

  constructor() {
    this.people = [
      new Person('John', 'Smith'),
      new Person('Jane', 'Doe'),
      new Person('Sam', 'Hill')
    ];
  }

  getPeople(): Person[] {
    return this.people;
  }

  add(person: Person) {
    this.people.push(person);
  }

  remove(person: Person) {
    const index = this.people.findIndex(p => p === person);
    this.people.splice(index, 1);
  }

}
