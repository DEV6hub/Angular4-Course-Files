import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CatDetailComponent} from "./cat-detail.component";
import {FormsModule} from "@angular/forms";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, CatDetailComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}