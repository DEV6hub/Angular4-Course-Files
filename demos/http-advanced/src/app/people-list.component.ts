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
	invalidUser: Person = new Person("invalid", "user");
	
	constructor(private peopleService: PeopleService) {
		this.invalidUser.id = 99;
	}
	
	putUser(person: Person) {
		this.peopleService.update(person).subscribe((person) => {
			
		});
	}
	
	ngOnInit() {
		this.people = this.peopleService.getPeople();
	}
}
