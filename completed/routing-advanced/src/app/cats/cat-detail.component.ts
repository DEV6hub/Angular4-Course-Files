import {Component, OnInit} from "@angular/core";
import {PetService} from "../pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pet} from "../pet";
@Component({
	selector: "cat-detail",
	template: require("./cat-detail.component.html")
})
export class CatDetailComponent implements OnInit {
	cat: Pet;
	constructor(private petService: PetService, private route:ActivatedRoute, private router:Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		if ( isNaN(id)) {
			this.goBack();
		}
		this.cat = this.petService.getPet(id);
	}
	
	setAsFavourite(): any {
		this.petService.favouritePet = this.cat;
	}
	
	goBack(): any {
		this.router.navigate(["cats"]);
	}
}
