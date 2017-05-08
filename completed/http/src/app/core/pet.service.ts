import {Injectable} from "@angular/core";
import {Pet} from "../shared/pet";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
@Injectable()
export class PetService {
	favouritePet: Pet;
	baseUrl: string = "http://localhost:9000";

	constructor(private http: Http) {

	}

	getPetList(type?: "cat" | "dog"): Observable<Pet[]> {
		if ( type ) {
			return this.http.get(`${this.baseUrl}/${type}s`)
                .map(response => response.json())
                .map(response => {
					response.forEach(pet => pet.type = type);
					return response;
				})
		}
	}

	getPet(id: number, type: "cat" | "dog"): Observable<Pet> {
		return this.http.get(`${this.baseUrl}/${type}s/${id}`)
            .map(response => response.json())
            .map(pet => {
				pet.type = type;
				return pet;
			});
	}

	savePet(pet: Pet): any {
		if ( pet.id ) {
			return this.http.put(`${this.baseUrl}/${pet.type}s/${pet.id}`, JSON.stringify(pet)).map(response => response.json())
		} else {
			return this.http.post(`${this.baseUrl}/${pet.type}s`, JSON.stringify(pet)).map(response => response.json())
		}
	}

	deletePet(pet: Pet): any {
		return this.http.delete(`${this.baseUrl}/${pet.type}s/${pet.id}`).map(response => response.json());
	}
}
