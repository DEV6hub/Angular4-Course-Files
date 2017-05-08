import {Injectable} from "@angular/core";
import {CanActivate} from "@angular/router";
import {PetService} from "./pet.service";
@Injectable()
export class GuardDogService implements CanActivate {
	constructor(private service: PetService) {
	}

	canActivate(): boolean {
		if ( this.service.favouritePet ) {
			return this.service.favouritePet.breed !== "Chihuahua";
		} else {
			return true;
		}
	}
}