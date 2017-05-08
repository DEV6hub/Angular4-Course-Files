import {Component, OnInit} from "@angular/core";
import {Pet} from "../shared/pet";
import {PetService} from "../core/pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";

@Component({
	selector: "dog-form",
	template: require("./dog-form.component.html")
})

export class DogFormComponent implements OnInit {
	dog: Pet;
	
	private dateFormat: string = "YYYY-MM-DD";
	
	constructor (private petService: PetService, private route: ActivatedRoute, private router: Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		
		if ( isNaN(id)) {
			this.dog = new Pet("dog");
			return;
		}
		
		this.dog = this.petService.getPet(id);
		
		if ( !this.dog ) {
			this.dog = new Pet("dog");
		}
	}
	
	birthdayForInput(): string {
		return moment(this.dog.birthday).format(this.dateFormat);
	}
	
	setBirthday(dateString: string): void {
		this.dog.birthday = moment(dateString, this.dateFormat).toDate();
	}
	
	saveDog(): any {
		this.petService.savePet(this.dog);
		this.router.navigate(["dogs", this.dog.id]);
	}
}