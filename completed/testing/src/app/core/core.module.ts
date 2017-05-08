import {NgModule} from "@angular/core";
import {PetService} from "./pet.service";
import {GuardDogService} from "./guard-dog.service";
import { HttpWrapper } from "./http-wrapper.service";

@NgModule({
    providers: [PetService, GuardDogService, HttpWrapper]
})
export class CoreModule {}