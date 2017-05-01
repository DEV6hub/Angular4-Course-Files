import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {appRouting} from "./app.routes";
import {BrowserModule} from "@angular/platform-browser";
import {GuardDog} from "./guard-dog.service";
import {DogService} from "./dogs/dog.service";
import {DashboardComponent} from "./dashboard.component";
import {PeopleModule} from "./people/people.module";

@NgModule({
	imports: [BrowserModule, PeopleModule, appRouting],
	declarations: [AppComponent, DashboardComponent],
	providers: [GuardDog, DogService],
	bootstrap: [AppComponent]
})

export class AppModule {}