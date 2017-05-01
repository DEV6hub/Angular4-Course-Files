import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Pet} from "./pet";
import {PetService} from "./pet.service";
@Component({
	selector: "pet-list",
	template: require("./pet-list.component.html")
})
export class PetListComponent implements OnInit {
	favouritePet: Pet;
	pets: Pet[];
	
	private type: "cat" | "dog";
	
	constructor(private petService: PetService, private router: Router, private route: ActivatedRoute) {
		this.type = route.snapshot.data["type"];
	}
	
	ngOnInit (): any {
		this.pets = this.petService.getPetList(this.type);
		this.favouritePet = this.petService.favouritePet;
	}
	
	selectPet(pet: Pet): any {
		this.router.navigate([this.type + "s", pet.id]);
	}
}