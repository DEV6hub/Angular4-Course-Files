import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {PersonDetailsComponent} from "./person-details.component";
import {PersonFormComponent} from "./person-form.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
	imports: [BrowserModule, ReactiveFormsModule],
	declarations: [AppComponent, PersonDetailsComponent, PersonFormComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
