import {Component, OnInit} from "@angular/core";
import {Pet} from "./pet";
import {PetService} from "../core/pet.service";
import {Router} from "@angular/router";

@Component({
    selector: "pet-list",
    template: require("./pet-list.component.html")
})
export class PetListComponent implements OnInit {
    favouritePet: Pet;
    pets: Pet[];

    constructor(private petService: PetService, private router: Router) {
    }

    ngOnInit (): any {
        this.pets = this.petService.getPetList();
        this.favouritePet = this.petService.favouritePet;
    }

    selectPet(pet: Pet): any {
        this.router.navigate(["cats", pet.id]);
    }
}