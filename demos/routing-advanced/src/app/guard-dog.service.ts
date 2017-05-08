import {Injectable} from "@angular/core";
import {CanActivate, Route} from "@angular/router";
import {DogService} from "./dogs/dog.service";

@Injectable()
export class GuardDog implements CanActivate {
	constructor(private dogService: DogService) {
		
	}
	
	canActivate(): boolean {
		return this.dogService.favouriteDog.type !== "Chihuahua";
	}
}
