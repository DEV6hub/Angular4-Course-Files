import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CatDetailComponent} from "./cat-detail.component";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, CatDetailComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}