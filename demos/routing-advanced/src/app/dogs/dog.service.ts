import { Injectable } from '@angular/core';

import { Dog } from './dog';

const spot = new Dog('Spot', 'Dalmation', 'Loves riding in fire trucks', new Date(2015, 1, 21));
spot.id = 1;

const blue = new Dog('Blue', 'German Shepherd', 'Loves to play', new Date(2011, 10, 5));
blue.id = 2;

const yips = new Dog('Yips', 'Chihuahua', 'lives in a purse', new Date(2006, 4, 20));
yips.id = 3;

@Injectable()
export class DogService {
	favouriteDog: Dog = spot;
	private dogs = [spot, blue, yips];
	private idCounter = 4;
	
	getDogList(): Dog[] {
		return this.dogs;
	}
	
	getDog(id: number): Dog {
		return this.dogs.find(dog => dog.id === id);
	}
	
	saveDog(unsavedDog: Dog): Dog {
		if (unsavedDog.id) {
			let currentDog = this.dogs.find(dog => dog.id === unsavedDog.id);
			Object.assign(currentDog, unsavedDog);
			return currentDog;
		} else {
			unsavedDog.id = this.idCounter++;
			this.dogs.push(unsavedDog);
			return unsavedDog;
		}
	}
	
	removeDog(dog: Dog) {
		const index = this.dogs.findIndex(c => c.id === dog.id);
		this.dogs.splice(index, 1);
	}
}
