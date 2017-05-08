import {Pipe, PipeTransform} from "@angular/core";
import * as moment from "moment";

@Pipe({
	name: "dogYears"
})
export class DogYearsPipe implements PipeTransform {
	transform(value: string): number {
		return Math.floor(moment().diff(moment(value), "years", true) * 7);
		
	}
}