import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";
import {PetService} from "../pet.service";
import {Pet} from "../pet";
import {Subscription} from "rxjs";

@Component({
	selector: "dog-form",
	template: require("./dog-form.component.html")
})

export class DogFormComponent implements OnInit, OnDestroy {
	dog: Pet;
	subs: Subscription[] = [];
	
	private dateFormat: string = "YYYY-MM-DD";
	
	constructor (private petService: PetService, private route: ActivatedRoute, private router: Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		if ( isNaN(id)) {
			this.dog = new Pet("dog");
			return;
		}
		
		this.subs.push(this.petService.getPet(id, "dog").subscribe(
			(pet) => {
				this.dog = pet;
			},
			(error) => {
				this.dog = new Pet("dog");
			}
		));
	}
	
	ngOnDestroy(): any {
		if ( this.subs ) {
			this.subs.forEach(sub => sub.unsubscribe());
		}
		
		this.subs = [];
	}
	
	birthdayForInput(): string {
		return moment(this.dog.birthday).format(this.dateFormat);
	}
	
	setBirthday(dateString: string): void {
		this.dog.birthday = moment(dateString, this.dateFormat).toDate();
	}
	
	saveDog(): any {
		this.subs.push(this.petService.savePet(this.dog).subscribe(
			(pet) => {
				this.router.navigate(["dogs", pet.id]);
			}
		));
		
	}
}