import {FormControl} from "@angular/forms";
export function handednessValidator (control: FormControl) {
	if (control.pristine || control.value === "left" || control.value === "right" ) {
		return null;
	}
	
	return { "handedness": false };
}