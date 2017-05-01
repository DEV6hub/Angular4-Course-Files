import {Component, Input} from "@angular/core";
import {Cat} from "./cat";
@Component({
	selector: "cat-detail",
	template: require("./cat-detail.component.html")
})
export class CatDetailComponent {
	@Input() cat: Cat;
}
