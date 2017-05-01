import {Component, OnInit} from "@angular/core";
import {PetService} from "../pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pet} from "../pet";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {pastDateValidator} from "../past-date.validator";
import * as moment from "moment";
import {Subscription} from "rxjs";

@Component({
	selector: "dog-form",
	template: require("./dog-form.component.html")
})
export class DogFormComponent implements OnInit {
	dog: Pet;
	subs: Subscription[] = [];
	
	private dateFormat: string = "YYYY-MM-DD";
	
	protected dogForm: FormGroup;
	
	constructor(private petService: PetService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
		this.dogForm = fb.group({
			name: ["", Validators.required],
			breed: [""],
			description: [""],
			birthday: ["", pastDateValidator(new Date())]
		})
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		if ( isNaN(id) ) {
			this.dog = new Pet("dog");
			this.initDog();
			return;
		}
		
		this.subs.push(this.petService.getPet(id, "dog").subscribe(
			(pet) => {
				this.dog = pet;
				this.initDog();
			},
			(error) => {
				this.dog = new Pet("dog");
				this.initDog();
			}
		));
	}
	
	initDog(): any {
		this.dogForm.patchValue(this.dog);
		this.dogForm.get("birthday").setValue(this.birthdayForInput(), true);
	}
	
	birthdayForInput(): string {
		return moment(this.dog.birthday).format(this.dateFormat);
	}
	
	setBirthday(dateString: string): Date {
		return moment(dateString, this.dateFormat).toDate();
	}
	
	saveDog(): any {
		this.dog = Object.assign(this.dog, this.dogForm.value, { birthday: this.setBirthday(this.dogForm.get("birthday").value)});
		this.petService.savePet(this.dog);
		this.router.navigate(["dogs", this.dog.id]);
	}
}
