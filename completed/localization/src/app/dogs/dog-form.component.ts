import { Component, OnInit, OnDestroy } from "@angular/core";
import {PetService} from "../core/pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pet} from "../shared/pet";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {pastDateValidator} from "../shared/past-date.validator";
import * as moment from "moment";
import { Subscription } from "rxjs";

@Component({
	selector: "dog-form",
	template: require("./dog-form.component.html"),
	styles: [require("./dog-form.component.scss")]

})
export class DogFormComponent implements OnInit, OnDestroy {
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
		if ( isNaN(id)) {
			this.dog = new Pet("dog");
			return;
		}
		this.subs.push(this.petService.getPet(id, 'dog').subscribe(
			(dog) => {
				this.dog = dog;
				this.updateDogForm();
			},
			(error) => {
				this.dog = new Pet('dog');
				this.updateDogForm();
			}));

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
	
	setBirthday(dateString: string): Date {
		return moment(dateString, this.dateFormat).toDate();
	}


	saveDog(): any {
		this.dog = Object.assign(this.dog, this.dogForm.value, { birthday: this.setBirthday(this.dogForm.get("birthday").value)});
		this.subs.push(this.petService.savePet(this.dog).subscribe((result) => {
			this.router.navigate(["dogs", this.dog.id]);
		}));
	}

	private updateDogForm(): void {
		this.dogForm.patchValue(this.dog);
		this.dogForm.get("birthday").setValue(this.birthdayForInput(), true);
	}
}
