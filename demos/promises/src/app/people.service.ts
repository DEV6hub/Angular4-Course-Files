import { Injectable } from '@angular/core';

import { Person } from './person.model';

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

  getPeople(): Promise<Person[]> {
    return Promise.resolve(this.people);
  }

  add(person: Person): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.people.push(person);
      resolve();
    });
  }

  remove(person: Person) {
    const index = this.people.findIndex(p => p === person);
    this.people.splice(index, 1);
  }

}
