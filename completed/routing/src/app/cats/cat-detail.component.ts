import {Component, OnInit} from "@angular/core";
import {CatService} from "./cat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cat} from "./cat";
@Component({
	selector: "cat-detail",
	template: require("./cat-detail.component.html")
})
export class CatDetailComponent implements OnInit {
	cat: Cat;
	constructor(private catService: CatService, private route:ActivatedRoute, private router:Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		if ( isNaN(id)) {
			this.goBack();
		}
		this.cat = this.catService.getCat(id);
	}
	
	setAsFavourite(): any {
		this.catService.favouriteCat = this.cat;
	}
	
	goBack(): any {
		this.router.navigate(["cats"]);
	}
}
