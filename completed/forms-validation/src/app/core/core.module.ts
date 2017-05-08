import {NgModule} from "@angular/core";
import {PetService} from "./pet.service";
import {GuardDogService} from "./guard-dog.service";

@NgModule({
    providers: [PetService, GuardDogService]
})
export class CoreModule {}