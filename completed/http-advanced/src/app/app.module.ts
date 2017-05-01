import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CatModule} from "./cats/cat.module";
import {AppRoutingModule} from "./app-routing.module";
import {PetListComponent} from "./pet-list.component";
import {PetService} from "./pet.service";
import {GuardDogService} from "./guard-dog.service";
import {HttpModule} from "@angular/http";
import {HttpWrapper} from "./http-wrapper.service";

@NgModule({
	imports: [BrowserModule, CatModule, HttpModule, AppRoutingModule],
	declarations: [AppComponent, PetListComponent],
	providers: [PetService, GuardDogService, HttpWrapper],
	bootstrap: [AppComponent]
})
export class AppModule {}