import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {appRouting} from "./app.routes";
import {PeopleModule} from "./people/people.module";

@NgModule({
	imports: [RouterModule, BrowserModule, PeopleModule, appRouting],
	declarations: [AppComponent, DashboardComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
