import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CatModule} from "./cats/cat.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
	imports: [BrowserModule, CatModule, AppRoutingModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}