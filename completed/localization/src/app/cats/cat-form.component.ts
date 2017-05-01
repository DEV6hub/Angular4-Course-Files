import {Component, OnInit, OnDestroy} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";
import {PetService} from "../pet.service";
import {Pet} from "../pet";
import {Subscription} from "rxjs";

@Component({
	selector: "cat-form",
	template: require("./cat-form.component.html")
})

export class CatFormComponent implements OnInit, OnDestroy {
	cat: Pet;
	subs: Subscription[] = [];
	
	private dateFormat: string = "YYYY-MM-DD";
	
	constructor (private petService: PetService, private route: ActivatedRoute, private router: Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		if ( isNaN(id)) {
			this.cat = new Pet("cat");
			return;
		}
		
		this.subs.push(this.petService.getPet(id, "cat").subscribe(
			(pet) => {
				this.cat = pet;
			},
			(error) => {
				this.cat = new Pet("cat");
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
		return moment(this.cat.birthday).format(this.dateFormat);
	}
	
	setBirthday(dateString: string): void {
		this.cat.birthday = moment(dateString, this.dateFormat).toDate();
	}
	
	saveCat(): any {
		this.subs.push(this.petService.savePet(this.cat).subscribe(
			(pet) => {
				this.router.navigate(["cats", pet.id]);
			}
		));
		
	}
}