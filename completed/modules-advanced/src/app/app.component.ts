import {Component, OnInit} from "@angular/core";
import {Pet} from "./shared/pet";
import { PetService } from "./core/pet.service";

@Component({
	selector: "herding-cats",
	template: require("./app.component.html")
})
export class AppComponent implements OnInit {

	selectedPet: Pet;
	favouritePet: Pet;
	
	constructor(private petService: PetService) {
	}

	ngOnInit(): void {
		this.favouritePet = this.petService.favouritePet;
	}

	selectPet(pet: Pet): void {
		this.selectedPet = pet;
	}

	selectFavourite(pet: Pet): void {
		this.favouritePet = pet;
	}


}