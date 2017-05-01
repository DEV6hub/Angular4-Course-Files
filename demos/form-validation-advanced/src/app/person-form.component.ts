import {Component, Output, EventEmitter} from "@angular/core";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {Person} from "./person.model";
import {handednessValidator} from "./handedness.validator";

@Component({
	selector: 'person-form',
	template: require('./person-form.component.html')
})
export class PersonFormComponent {
	@Output() submission = new EventEmitter<Person>();
	form: FormGroup;
	submitted: boolean = false;
	
	constructor( private formBuilder: FormBuilder ) {
		this.form = formBuilder.group({
			firstName: ["", Validators.required],
			lastName: ["", Validators.required],
			handedness: ["", handednessValidator],
			age: []
		})
	}
	
	submitForm() {
		this.submitted = true;
		if ( this.form.valid ) {
			let person = Object.assign(new Person(), this.form.value);
			this.submission.emit(person);
			this.resetForm();
		}
	}
	
	isInvalid(control: string): boolean {
		let formControl: FormControl = <FormControl> this.form.get(control);
		return (formControl.touched && !formControl.valid) || this.submitted;
	}
	
	private resetForm() {
		this.submitted = false;
		this.form.reset();
	}
}
