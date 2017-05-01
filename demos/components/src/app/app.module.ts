import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {InsideOutsideComponent} from "./inside-outside.component";
import {PersonDetailsComponent} from "./person-details.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, InsideOutsideComponent, PersonDetailsComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
