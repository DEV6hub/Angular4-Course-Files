import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Person } from './person';
import { PeopleService } from './people.service';

@Component({
  selector: 'people-list',
  template: require('./people-list.component.html')
})
export class PeopleListComponent implements OnInit, OnDestroy {
  people: Person[];
  private subscription: Subscription;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.subscription = this.peopleService.getPeople()
      .subscribe(
        people => this.people = people,
        error => console.error(error)
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
