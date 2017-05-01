import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
	name: "catYears"
})
export class CatYearsPipe implements PipeTransform {
	transform(value: string): number {
		let diff = Math.floor(moment().diff(moment(value), "months", true));
		
		if ( diff <= 24 ) {
			return Math.round(diff / 24 * 25);
		} else {
			return 25 + Math.round((diff - 24) / 12 * 4);
		}
	}
}