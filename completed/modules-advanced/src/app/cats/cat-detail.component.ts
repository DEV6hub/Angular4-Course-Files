import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Pet} from "../shared/pet";
@Component({
	selector: "cat-detail",
	template: require("./cat-detail.component.html")
})
export class CatDetailComponent {
	@Input() cat: Pet;
	@Output() isFavourite: EventEmitter<Pet> = new EventEmitter<Pet>();

	setAsFavourite(): any {
		this.isFavourite.emit(this.cat);
	}
}
