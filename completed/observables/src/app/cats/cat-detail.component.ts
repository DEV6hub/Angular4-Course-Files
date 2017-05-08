import {Component, OnInit} from "@angular/core";
import {PetService} from "../core/pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pet} from "../shared/pet";
import { Subscription } from "rxjs";
@Component({
	selector: "cat-detail",
	template: require("./cat-detail.component.html")
})
export class CatDetailComponent implements OnInit {
	cat: Pet;
	subs: Subscription[] = [];

	constructor(private petService: PetService, private route:ActivatedRoute, private router:Router) {
		
	}

	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		this.subs.push(this.petService.getPet(id).subscribe((cat) => {
			this.cat = cat;
		}));
	}

	ngOnDestroy(): any {
		if ( this.subs ) {
			this.subs.forEach(sub => sub.unsubscribe());
		}

		this.subs = [];
	}

	setAsFavourite(): any {
		this.petService.favouritePet = this.cat;
	}

	goBack(): any {
		this.router.navigate(["cats"]);
	}

	editCat(): any {
		this.router.navigate(["cats", this.cat.id, "edit"]);
	}

	deleteCat(): any {
		this.subs.push(this.petService.deletePet(this.cat).subscribe((result) => {
			this.goBack();
		}));
	}
}
