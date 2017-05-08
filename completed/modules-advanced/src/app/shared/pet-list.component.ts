import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Pet} from "./pet";
import {PetService} from "../core/pet.service";

@Component({
    selector: "pet-list",
    template: require("./pet-list.component.html")
})
export class PetListComponent implements OnInit {
    pets: Pet[];
    @Output() selectedPet: EventEmitter<Pet> = new EventEmitter<Pet>();

    constructor(private petService: PetService) {}

    ngOnInit (): any {
        this.pets = this.petService.getPetList();
    }

    selectPet(pet: Pet): any {
        this.selectedPet.emit(pet);
    }
}