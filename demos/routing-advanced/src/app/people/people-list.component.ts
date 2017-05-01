import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: require('./people-list.component.html')
})
export class PeopleListComponent implements OnInit {
  people: Observable<Person[]>;

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

  seeDetails(person: Person) {
    this.router.navigate(['people', person.id]);
  }
}
