import {Injectable} from "@angular/core";
import {Pet} from "../shared/pet";

@Injectable()
export class PetService {
	boots: Pet = new Pet(1, "Boots", "Calico", "purrs like a kitten", new Date(2011, 9, 13));
	mittens: Pet = new Pet(2, "Mittens", "Manx", "no-tailed", new Date(2009, 4, 21));
	fuzzy: Pet = new Pet(3, "Fuzzy", "Tabby", "Rotund", new Date(2014, 10, 10));
	
	private cats: Pet[] = [this.boots, this.mittens, this.fuzzy];

	favouritePet: Pet;
	
	getPetList(): Pet[] {
		return this.cats;
	}
	
	getPet(id: number): Pet {
		return this.cats.find(cat => cat.id === id);
	}
}
