import {Injectable} from "@angular/core";
import {Cat} from "./cat";
import {Observable} from "rxjs";
import {Http} from "@angular/http";
@Injectable()
export class CatService {
	favouriteCat: Cat;
	baseUrl: string = "http://localhost:9000";
	
	constructor(private http: Http) {
		
	}
	
	getCatList(): Observable<Cat[]> {
		return this.http.get(`${this.baseUrl}/cats`)
			.map(response => response.json())
	}
	
	getCat(id: number): Observable<Cat> {
		return this.http.get(`${this.baseUrl}/cats/${id}`)
			.map(response => response.json())
	}
	
	saveCat(cat: Cat): Observable<Cat> {
		if ( cat.id ) {
			return this.http.put(`${this.baseUrl}/cats/${cat.id}`, JSON.stringify(cat))
				.map(response => response.json())
		} else {
			cat.id = null;
			return this.http.post(`${this.baseUrl}/cats`, JSON.stringify(cat))
				.map(response => response.json())
		}
	}
	
	deleteCat(cat: Cat): Observable<boolean> {
		return this.http.delete(`${this.baseUrl}/cats/${cat.id}`)
			.map(response => response.json())
	}
}
