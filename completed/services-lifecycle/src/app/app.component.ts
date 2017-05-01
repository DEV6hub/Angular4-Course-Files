import {Component, OnInit} from "@angular/core";
import {Cat} from "./cat";
import {CatService} from "./cat.service";
@Component({
	selector: "herding-cats",
	template: require("./app.component.html")
})
export class AppComponent implements OnInit {
	
	favouriteCat: Cat;
	selectedCat: Cat;
	cats: Cat[];
	
	constructor(private catService: CatService) {
		
	}
	
	selectCat(cat: Cat): any {
		this.selectedCat = cat;
	}
	
	selectFavourite(cat: Cat): any {
		this.catService.favouriteCat = this.favouriteCat = cat;
	}
	
	ngOnInit (): any {
		this.cats = this.catService.getCatList();
		this.favouriteCat = this.catService.favouriteCat;
	}
}