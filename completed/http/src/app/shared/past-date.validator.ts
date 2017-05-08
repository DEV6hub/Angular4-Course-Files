import {ValidatorFn, AbstractControl} from "@angular/forms";
import * as moment from "moment";

export function pastDateValidator(date: Date ): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} => {
		const value: Date = moment(control.value, "YYYY-MM-DD").toDate();
		return moment(value).isAfter(date, "hour") ? { 'futureDate': {value}} : null;
	}
}