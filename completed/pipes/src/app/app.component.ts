import {Component} from "@angular/core";
import {Cat} from "./cat";
@Component({
	selector: "herding-cats",
	template: require("./app.component.html")
})
export class AppComponent {
	boots: Cat = new Cat("Boots", "Calico", "purrs like a kitten", new Date(2011, 9, 13));
	mittens: Cat = new Cat("Mittens", "Manx", "no-tailed", new Date(2009, 4, 21));
	fuzzy: Cat = new Cat("Fuzzy", "Tabby", "Rotund", new Date(2014, 10, 10));
	
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