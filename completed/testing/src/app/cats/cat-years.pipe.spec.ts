import {CatYearsPipe} from "./cat-years.pipe";
import * as moment from "moment";

describe("CatYearsPipe", () => {
	let pipe: CatYearsPipe;
	let dateFormat: string = "YYYY-MM-DD";
	
	beforeEach(() => {
		pipe = new CatYearsPipe();
	});
	
	it("should translate 2 years of age into 25 cat years", () => {
		let value: string = moment(new Date()).subtract(2, "years").format(dateFormat);
		expect(pipe.transform(value)).toBe(25);
	});
	
	it("should add 4 years for every year after", () => {
		let value: string = moment(new Date()).subtract(4, "years").format(dateFormat);
		expect(pipe.transform(value)).toBe(33);
	});
	
	it ("should allow for partial year calculations", () => {
		let value: string = moment(new Date()).subtract(29, "months").format(dateFormat);
		expect(pipe.transform(value)).toBe(27);
		value = moment(new Date()).subtract(55, "months").format(dateFormat);
		expect(pipe.transform(value)).toBe(35);
	})
});
