import {Component, OnInit} from "@angular/core";
import {Cat} from "./cat";
import {CatService} from "./cat.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";

@Component({
	selector: "cat-form",
	template: require("./cat-form.component.html")
})

export class CatFormComponent implements OnInit {
	cat: Cat;
	
	private dateFormat: string = "YYYY-MM-DD";
	
	constructor (private catService: CatService, private route: ActivatedRoute, private router: Router) {
		
	}
	
	ngOnInit(): any {
		let id: number = parseInt(this.route.snapshot.params["id"]);
		this.catService.getCat(id).then((cat) => {
			this.cat = cat;
			
			if ( !this.cat ) {
				this.cat = new Cat();
			}
		});
	}
	
	birthdayForInput(): string {
		return moment(this.cat.birthday).format(this.dateFormat);
	}
	
	setBirthday(dateString: string): void {
		this.cat.birthday = moment(dateString, this.dateFormat).toDate();
	}
	
	saveCat(): any {
		this.catService.saveCat(this.cat).then((result) => {
			this.router.navigate(["cats", this.cat.id]);
		});
	}
}