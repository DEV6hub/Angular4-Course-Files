import {PeopleService} from "./people.service";
import {Person} from "./person";

describe("PeopleService", () => {
	let service: PeopleService;
	
	beforeEach(() => {
		service = new PeopleService();
	});
	
	it("should start with an empty list of people", () => {
		expect(service.getPeople()).toEqual([]);
	});
	
	it("should add a new person to the list", () => {
		const person: Person = new Person("John", "Smith");
		service.add(person);
		expect(service.getPeople().length).toEqual(1);
		expect(service.getPeople()).toContain(person);
	});
});
