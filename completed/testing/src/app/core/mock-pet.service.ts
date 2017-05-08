import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Pet} from "../shared/pet";
@Injectable()
export class MockPetService {
	pets: Pet[] = [
		new Pet('cat')
	];
	
	getPetList(): Observable<Pet[]> {
		return Observable.of(this.pets);
	}
	
	getPet(): Observable<Pet> {
		return Observable.of(this.pets[0]);
	}
	
	saveCat(): void {}
	
	deleteCat(): void {}
}