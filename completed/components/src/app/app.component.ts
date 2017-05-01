import {Component} from "@angular/core";
import {Cat} from "./cat";
@Component({
	selector: "herding-cats",
	template: require("./app.component.html")
})
export class AppComponent {
	boots: Cat = new Cat("Boots", "Calico", "purrs like a kitten");
	mittens: Cat = new Cat("Mittens", "Manx", "no-tailed");
	
	selectedCat: Cat = this.boots;
	
	constructor() {
		
	}
	
	selectCat(cat: Cat): any {
		this.selectedCat = cat;
	}
}