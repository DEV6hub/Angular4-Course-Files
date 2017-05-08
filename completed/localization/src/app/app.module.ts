import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CatModule} from "./cats/cat.module";
import {AppRoutingModule} from "./app-routing.module";
import {CoreModule} from "./core/core.module";
import {TranslateModule} from "ng2-translate";

@NgModule({
	imports: [BrowserModule, CatModule, AppRoutingModule, CoreModule,  TranslateModule.forRoot()],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}