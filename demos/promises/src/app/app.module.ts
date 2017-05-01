import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {PeopleService} from "./people.service";
import {PeopleListComponent} from "./people-list.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, PeopleListComponent],
	providers: [PeopleService],
	bootstrap: [AppComponent]
})

export class AppModule {}
