import {Component} from "@angular/core";
import {Cat} from "./cat";
import {CatService} from "./cat.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
@Component({
	selector: "cat-list",
	template: require("./cat-list.component.html")
})
export class CatListComponent {
	favouriteCat: Cat;
	cats: Observable<Cat[]>;
	
	constructor(private catService: CatService, private router: Router) {
		
	}
	
	ngOnInit (): any {
		this.cats = this.catService.getCatList().reduce((array, cat) => {
			array.push(cat);
			return array;
		}, []);
		
		this.favouriteCat = this.catService.favouriteCat;
	}
	
	selectCat(cat: Cat): any {
		this.router.navigate(["cats", cat.id]);
	}
	
	addCat(): any {
		this.router.navigate(["cats", "new"])
	}
}