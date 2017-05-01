import { Component, OnInit } from '@angular/core';

import { Person } from './person.model';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: require('./people-list.component.html')
})
export class PeopleListComponent implements OnInit {
  people: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople()
      .then((people) => {
        this.people = people;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
