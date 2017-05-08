import {ComponentFixture, TestBed} from "@angular/core/testing";
import {CatDetailComponent} from "./cat-detail.component";
import {ActivatedRoute, Router} from "@angular/router";
import {PetService} from "../core/pet.service";
import {MockPetService} from "../core/mock-pet.service";
import {CatYearsPipe} from "./cat-years.pipe";
import {Pet} from "../shared/pet";

describe("CatDetailComponent", () => {
	let component: CatDetailComponent;
	let fixture: ComponentFixture<CatDetailComponent>;
	let petService: PetService;
	let cat: Pet = new Pet("cat", 4, "Mittens", "Calico", "playful", new Date(2010, 4, 19));
	
	beforeEach(() => {
		TestBed.configureTestingModule(
			{
				declarations: [CatDetailComponent, CatYearsPipe],
				providers: [
					{ provide: ActivatedRoute, useValue: { snapshot: { params: { id: "4" }}}},
					{ provide: Router, useValue: { navigate: function () {} }},
					{ provide: PetService, useClass: MockPetService }
				]
		});
		
		fixture = TestBed.createComponent(CatDetailComponent);
		component = fixture.componentInstance;
		petService = TestBed.get(PetService);
	});
	
	it("should trigger a return if the id is not found", () => {
		let route: ActivatedRoute = fixture.debugElement.injector.get(ActivatedRoute);
		route.snapshot.params["id"] = null;
		let spy = spyOn(component, "goBack").and.callThrough();
		component.ngOnInit();
		expect(spy).toHaveBeenCalled();
	});
	
	it("should ask the cat service for the id in the route", () => {
		let spy = spyOn(petService, "getPet").and.callThrough();
		component.ngOnInit();
		expect(spy).toHaveBeenCalledWith(4, "cat");
	});
	
	it("should navigate to the edit form of the given cat", () => {
		component.cat = cat;
		let router: Router = TestBed.get(Router);
		let spy = spyOn(router, "navigate").and.callThrough();
		component.editCat();
		expect(spy).toHaveBeenCalledWith(["cats", cat.id, "edit"]);
	});
});
