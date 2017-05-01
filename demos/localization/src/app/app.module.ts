import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TranslateModule} from "ng2-translate";

@NgModule({
	imports: [BrowserModule, TranslateModule.forRoot()],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
