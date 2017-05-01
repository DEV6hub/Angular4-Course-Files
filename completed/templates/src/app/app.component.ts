import {Component} from "@angular/core";
import {Cat} from "./cat";
@Component({
	selector: "herding-cats",
	template: require("./app.component.html")
})
export class AppComponent {
	boots: Cat = new Cat("Boots", "Calico", "purrs like a kitten");
	mittens: Cat = new Cat("Mittens", "Manx", "no-tailed");
	fuzzy: Cat = new Cat("Fuzzy", "Tabby", "Rotund");
	
	cats: Cat[] = [this.boots, this.mittens, this.fuzzy];
	
	selectedCat: Cat;
	favouriteCat: Cat;
	
	constructor() {
		
	}
	
	selectCat(cat: Cat): any {
		this.selectedCat = cat;
	}
	
	selectFavourite(cat: Cat): any {
		this.favouriteCat = cat;
	}
}