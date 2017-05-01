import {Component, OnInit, OnDestroy} from "@angular/core";
import {Cat} from "./cat";
import {CatService} from "./cat.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";
import {Subscription} from "rxjs";

@Component({
	selector: "cat-form",
	template: require("./cat-form.component.html")
})

export class CatFormComponent implements OnInit, OnDestroy {
	cat: Cat;
	subs: Subscription[] = [];
	
	private dateFormat: string = "YYYY-MM-DD";
	
	constructor (private catService: CatService, private route: ActivatedRoute, private router: Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		
		if ( isNaN(id) ) {
			this.cat = new Cat();
			return;
		}
		
		this.subs.push(this.catService.getCat(id).subscribe(
			(cat) => {
				this.cat = cat;
			},
			(error) => {
				this.cat = new Cat();
			}));
	}
	
	ngOnDestroy(): any {
		if ( this.subs ) {
			this.subs.forEach(sub => sub.unsubscribe());
		}
		
		this.subs = [];
	}
	
	birthdayForInput(): string {
		return moment(this.cat.birthday).format(this.dateFormat);
	}
	
	setBirthday(dateString: string): void {
		this.cat.birthday = moment(dateString, this.dateFormat).toDate();
	}
	
	saveCat(): any {
		this.subs.push(this.catService.saveCat(this.cat).subscribe((cat) => {
			this.router.navigate(["cats", cat.id]);
		}));
	}
}