import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: require('./people-list.component.html')
})
export class PeopleListComponent implements OnInit {
  people: Observable<Person[]>;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }
}
