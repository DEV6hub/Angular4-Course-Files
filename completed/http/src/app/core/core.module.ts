import {NgModule} from "@angular/core";
import {PetService} from "./pet.service";
import {GuardDogService} from "./guard-dog.service";
import { JSONOptions } from "./json-options.service";
import { RequestOptions } from "@angular/http";

@NgModule({
    providers: [PetService, GuardDogService, { provide: RequestOptions, useClass: JSONOptions }]
})
export class CoreModule {}