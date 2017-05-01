import {BaseRequestOptions} from "@angular/http";
export class JSONOptions extends BaseRequestOptions {
	constructor() {
		super();
		this.headers.append("Content-Type", "application/json");
	}
}