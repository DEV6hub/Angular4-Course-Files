import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Cat} from "./cat";
@Injectable()
export class MockCatService {
	cats: Cat[] = [
		new Cat()
	];
	
	getCatList(): Observable<Cat[]> {
		return Observable.of(this.cats);
	}
	
	getCat(): Observable<Cat> {
		return Observable.of(this.cats[0]);
	}
	
	saveCat(): void {}
	
	deleteCat(): void {}
}