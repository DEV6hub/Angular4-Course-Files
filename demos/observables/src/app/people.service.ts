import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

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

  getPeople(): Observable<Person[]> {
    return Observable.of(this.people);
  }

  add(person: Person): Observable<void> {
    return new Observable<void>((subscriber: Subscriber<void>) => {
      this.people.push(person);
      subscriber.next();
    });
  }

  remove(person: Person) {
    const index = this.people.findIndex(p => p === person);
    this.people.splice(index, 1);
  }

}
