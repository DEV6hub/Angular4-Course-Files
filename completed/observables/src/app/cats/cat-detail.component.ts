import {Component, OnInit, OnDestroy} from "@angular/core";
import {CatService} from "./cat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cat} from "./cat";
import {Subscription} from "rxjs";
@Component({
	selector: "cat-detail",
	template: require("./cat-detail.component.html")
})
export class CatDetailComponent implements OnInit, OnDestroy {
	cat: Cat;
	subs: Subscription[] = [];
	
	constructor(private catService: CatService, private route:ActivatedRoute, private router:Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		this.subs.push(this.catService.getCat(id).subscribe((cat) => {
			this.cat = cat;
		}));
	}
	
	ngOnDestroy(): any {
		if ( this.subs ) {
			this.subs.forEach(sub => sub.unsubscribe());
		}
		
		this.subs = [];
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
		this.subs.push(this.catService.deleteCat(this.cat).subscribe((result) => {
			this.goBack();
		}));
	}
}
