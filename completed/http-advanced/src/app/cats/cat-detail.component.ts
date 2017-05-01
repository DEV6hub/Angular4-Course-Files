import {Component, OnInit, OnDestroy} from "@angular/core";
import {PetService} from "../pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pet} from "../pet";
import {Subscription} from "rxjs";
@Component({
	selector: "cat-detail",
	template: require("./cat-detail.component.html")
})
export class CatDetailComponent implements OnInit, OnDestroy {
	cat: Pet;
	subs: Subscription[] = [];
	
	constructor(private petService: PetService, private route:ActivatedRoute, private router:Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		if ( isNaN(id)) {
			this.goBack();
		}
		
		this.subs.push(this.petService.getPet(id, "cat").subscribe(
			(pet) => {
				this.cat = pet;
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
		this.petService.favouritePet = this.cat;
	}
	
	goBack(): any {
		this.router.navigate(["cats"]);
	}
	
	editCat(): any {
		this.router.navigate(["cats", this.cat.id, "edit"]);
	}
	
	deleteCat(): any {
		this.subs.push(this.petService.deletePet(this.cat).subscribe());
		this.goBack();
	}
}
