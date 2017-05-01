import {Component, OnInit, OnDestroy} from "@angular/core";
import {PetService} from "../pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pet} from "../pet";
import {Subscription} from "rxjs";
@Component({
	selector: "dog-detail",
	template: require("./dog-detail.component.html")
})
export class DogDetailComponent implements OnInit, OnDestroy {
	dog: Pet;
	subs: Subscription[] = [];
	
	constructor(private petService: PetService, private route:ActivatedRoute, private router:Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		this.subs.push(this.petService.getPet(id, "dog").subscribe(
			(pet) => {
				this.dog = pet;
			}
		));
	}
	
	ngOnDestroy(): any {
		if ( this.subs ) {
			this.subs.forEach(sub => sub.unsubscribe());
		}
		
		this.subs = [];
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
		this.subs.push(this.petService.deletePet(this.dog).subscribe());
		this.goBack();
	}
}
