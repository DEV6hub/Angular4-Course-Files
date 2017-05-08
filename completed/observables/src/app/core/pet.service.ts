import {Injectable} from "@angular/core";
import {Pet} from "../shared/pet";
import { Observable } from "rxjs";
@Injectable()
export class PetService {
	boots: Pet = new Pet("cat", 1, "Boots", "Calico", "purrs like a kitten", new Date(2011, 9, 13));
	mittens: Pet = new Pet("cat", 2, "Mittens", "Manx", "no-tailed", new Date(2009, 4, 21));
	fuzzy: Pet = new Pet("cat", 3, "Fuzzy", "Tabby", "Rotund", new Date(2014, 10, 10));

	spot: Pet = new Pet("dog", 4, "Spot", "Dalmation", "faithful pet", new Date(2008, 4, 9));
	rover: Pet = new Pet("dog", 5, "Rover", "Basset Hound", "droopy ears", new Date(2004, 5, 30));
	yips: Pet = new Pet("dog", 6, "Yips", "Chihuahua", "lives in a purse", new Date(2014, 8, 14));

	private increment: number = 7;

	private pets: Pet[] = [this.boots, this.mittens, this.fuzzy, this.spot, this.rover, this.yips];

	favouritePet: Pet;

	getPetList(type?: "cat" | "dog"): Observable<Pet> {
		if ( type ) {
			return Observable.from(this.pets)
				.filter(pet => pet.type === type);
		} else {
			return Observable.from(this.pets);
		}
	}

	getPet(id: number): Observable<Pet> {
		return this.getPetList()
            .filter(pet => pet.id === id)
            .first();
	}

	savePet(pet: Pet): Observable<Pet> {
		return new Observable<Pet>((observer) => {
			let idx: number = this.pets.findIndex(existingPet => existingPet.id === pet.id);
			if ( idx != -1 ) {
				this.pets.splice(idx, 1, pet);
			} else {
				pet.id = this.increment++;
				this.pets.push(pet);
			}

			observer.next(pet);
			observer.complete();
		});
	}

	deletePet(pet: Pet): Observable<Pet | boolean> {
		return new Observable<Pet | boolean>((observer) => {
			let idx: number = this.pets.findIndex(existingPet => existingPet.id === pet.id);

			if ( idx != -1 ) {
				this.pets.splice(idx, 1);
			}

			observer.next(true);
			observer.complete();
		});
	}
}
