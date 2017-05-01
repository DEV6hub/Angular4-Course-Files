import {NgModule} from "@angular/core";
import {peopleRouting} from "./people.routes";
import {PeopleListComponent} from "./people-list.component";
import {PersonDetailsComponent} from "./person-details.component";
import {PeopleService} from "./people.service";
import {PeopleComponent} from "./people.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
@NgModule({
	imports: [BrowserModule, HttpModule, peopleRouting],
	declarations: [PeopleComponent, PeopleListComponent, PersonDetailsComponent],
	providers: [PeopleService],
	exports: [PeopleComponent]
})

export class PeopleModule {}