import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CatModule} from "./cats/cat.module";
import {AppRoutingModule} from "./app-routing.module";
import {PetListComponent} from "./pet-list.component";
import {PetService} from "./pet.service";
import {GuardDogService} from "./guard-dog.service";

@NgModule({
	imports: [BrowserModule, CatModule, AppRoutingModule],
	declarations: [AppComponent, PetListComponent],
	providers: [PetService, GuardDogService],
	bootstrap: [AppComponent]
})
export class AppModule {}