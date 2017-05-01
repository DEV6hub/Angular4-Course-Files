import {Injectable} from "@angular/core";
import {CanLoad, Route} from "@angular/router";
import {DogService} from "./dogs/dog.service";

@Injectable()
export class GuardDog implements CanLoad {
	constructor(private dogService: DogService) {
		
	}
	
	canLoad(route: Route): boolean {
		return this.dogService.favouriteDog.type != "Chihuahua";
	}
}
