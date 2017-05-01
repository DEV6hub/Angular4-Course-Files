import {Injectable} from "@angular/core";
import {CanLoad, Route} from "@angular/router";
import {PetService} from "./pet.service";
@Injectable()
export class GuardDogService implements CanLoad {
	constructor(private service: PetService) {
		
	}
	
	canLoad( route: Route ): boolean {
		if ( this.service.favouritePet ) {
			return this.service.favouritePet.breed != "Chihuahua";
		} else {
			return true;
		}
	}
}