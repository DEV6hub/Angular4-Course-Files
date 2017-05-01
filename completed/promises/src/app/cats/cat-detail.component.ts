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
		this.catService.getCat(id).then((cat) => {
			this.cat = cat;
		});
	}
	
	setAsFavourite(): any {
		this.catService.favouriteCat = this.cat;
	}
	
	goBack(): any {
		this.router.navigate(["cats"]);
	}
	
	editCat(): any {
		this.router.navigate(["cats", this.cat.id, "edit"]);
	}
	
	deleteCat(): any {
		this.catService.deleteCat(this.cat).then((result) => {
			this.goBack();
		});
	}
}
