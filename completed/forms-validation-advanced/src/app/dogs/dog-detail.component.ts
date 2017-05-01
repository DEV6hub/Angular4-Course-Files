import {Component, OnInit} from "@angular/core";
import {PetService} from "../pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pet} from "../pet";
@Component({
	selector: "dog-detail",
	template: require("./dog-detail.component.html")
})
export class DogDetailComponent implements OnInit {
	dog: Pet;
	constructor(private petService: PetService, private route:ActivatedRoute, private router:Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		this.dog = this.petService.getPet(id);
	}
	
	setAsFavourite(): any {
		this.petService.favouritePet = this.dog;
	}
	
	goBack(): any {
		this.router.navigate(["dogs"]);
	}
	
	editDog(): any {
		this.router.navigate(["dogs", this.dog.id, "edit"]);
	}
	
	deleteDog(): any {
		this.petService.deletePet(this.dog);
		this.goBack();
	}
}
