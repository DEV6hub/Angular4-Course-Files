import {Injectable} from "@angular/core";
import {Cat} from "./cat";
@Injectable()
export class CatService {
	boots: Cat = new Cat(1, "Boots", "Calico", "purrs like a kitten", new Date(2011, 9, 13));
	mittens: Cat = new Cat(2, "Mittens", "Manx", "no-tailed", new Date(2009, 4, 21));
	fuzzy: Cat = new Cat(3, "Fuzzy", "Tabby", "Rotund", new Date(2014, 10, 10));
	
	private increment: number = 4;
	
	private cats: Cat[] = [this.boots, this.mittens, this.fuzzy];
	
	favouriteCat: Cat;
	
	getCatList(): Cat[] {
		return this.cats;
	}
	
	getCat(id: number): Cat {
		return this.cats.find(cat => cat.id === id);
	}
	
	saveCat(cat: Cat): any {
		let idx: number = this.cats.findIndex(existingCat => existingCat.id === cat.id);
		if ( idx != -1 ) {
			this.cats.splice(idx, 1, cat);
		} else {
			cat.id = this.increment++;
			this.cats.push(cat);
		}
	}
	
	deleteCat(cat: Cat): any {
		let idx: number = this.cats.findIndex(existingCat => existingCat.id === cat.id);
		
		if ( idx != -1 ) {
			this.cats.splice(idx, 1);
		}
	}
}
