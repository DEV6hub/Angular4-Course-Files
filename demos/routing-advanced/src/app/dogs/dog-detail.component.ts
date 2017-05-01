import {Component} from "@angular/core";
import {Dog} from "./dog";
import {ActivatedRoute} from "@angular/router";
import {DogService} from "./dog.service";

@Component({
	selector: 'dog-detail',
	template: require('./dog-detail.component.html')
})
export class DogDetailComponent {
	dog: Dog;
	
	constructor(private route: ActivatedRoute, private service: DogService) {
		let id: number = parseInt(route.snapshot.params["id"]);
		if ( isNaN(id) )
			return;
		
		this.dog = service.getDog(id);
	}
	
	isFavourite (): boolean {
		return this.service.favouriteDog === this.dog;
	}
	
	selectFavourite() {
		this.service.favouriteDog = this.dog;
	}
}
