import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Pet} from "./pet";
import {PetService} from "./pet.service";
import {Observable} from "rxjs";
import {TranslateService} from "ng2-translate";
@Component({
	selector: "pet-list",
	template: require("./pet-list.component.html")
})
export class PetListComponent implements OnInit {
	favouritePet: Pet;
	pets: Observable<Pet[]>;
	
	private type: "cat" | "dog";
	
	constructor(private petService: PetService, private router: Router, private route: ActivatedRoute, private translateService: TranslateService) {
		this.type = route.snapshot.data["type"];
		
		translateService.use(this.type);
	}
	
	ngOnInit (): any {
		this.pets = this.petService.getPetList(this.type);
		this.favouritePet = this.petService.favouritePet;
	}
	
	selectPet(pet: Pet): any {
		this.router.navigate([this.type + "s", pet.id]);
	}
	
	addPet(): any {
		this.router.navigate([this.type + "s", "new"]);
	}
}