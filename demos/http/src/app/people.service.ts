import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Person } from './person';

@Injectable()
export class PeopleService {
  favourite: Person;
  private urlBase = 'http://localhost:9000';

  constructor(private http: Http) {}

  getPeople(): Observable<Person[]> {
    return this.http.get(`${this.urlBase}/people`)
      .map(response => response.json());
  }

  getPerson(id: number): Promise<Person> {
    return this.http.get(`${this.urlBase}/people/${id}`)
      .toPromise()
      .then(response => response.json());
  }

  add(person: Person): Observable<Person> {
    return this.http.post(`${this.urlBase}/people`, JSON.stringify(person))
      .map(response => response.json());
  }

  update(person: Person): Observable<Person> {
    return this.http.put(`${this.urlBase}/people/${person.id}`, JSON.stringify(person))
      .map(response => response.json());
  }

  remove(person: Person): Observable<{message: string}> {
    return this.http.delete(`${this.urlBase}/people/${person.id}`)
      .map(response => response.json());
  }

}
