import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
	imports: [BrowserModule, BrowserAnimationsModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
