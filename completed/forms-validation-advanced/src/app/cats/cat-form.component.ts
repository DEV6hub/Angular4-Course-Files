import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";
import {PetService} from "../pet.service";
import {Pet} from "../pet";

@Component({
	selector: "cat-form",
	template: require("./cat-form.component.html")
})

export class CatFormComponent implements OnInit {
	cat: Pet;
	
	private dateFormat: string = "YYYY-MM-DD";
	
	constructor (private petService: PetService, private route: ActivatedRoute, private router: Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		if ( isNaN(id)) {
			this.cat = new Pet("cat");
			return;
		}
		this.cat = this.petService.getPet(id);
		
		if ( !this.cat ) {
			this.cat = new Pet("cat");
		}
	}
	
	birthdayForInput(): string {
		return moment(this.cat.birthday).format(this.dateFormat);
	}
	
	setBirthday(dateString: string): void {
		this.cat.birthday = moment(dateString, this.dateFormat).toDate();
	}
	
	saveCat(): any {
		this.petService.savePet(this.cat);
		this.router.navigate(["cats", this.cat.id]);
	}
}