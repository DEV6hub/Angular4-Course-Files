import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {CatModule} from "./cats/cat.module";

@NgModule({
	imports: [BrowserModule, CoreModule, CatModule, SharedModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}