import {Component, OnInit} from "@angular/core";
import {PetService} from "../core/pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pet} from "../shared/pet";
import { Subscription } from "rxjs";
@Component({
	selector: "dog-detail",
	template: require("./dog-detail.component.html"),
	styles: [require("./dog-detail.component.scss")]
})
export class DogDetailComponent implements OnInit {
	dog: Pet;
	subs: Subscription[] = [];
	constructor(private petService: PetService, private route:ActivatedRoute, private router:Router) {
		
	}

	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		this.subs.push(this.petService.getPet(id, 'dog').subscribe((dog) => {
			this.dog = dog;
		}));
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
		this.subs.push(this.petService.deletePet(this.dog).subscribe((result) => {
			this.goBack();
		}));
	}
}
