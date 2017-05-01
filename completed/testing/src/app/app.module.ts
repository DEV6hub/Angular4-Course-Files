import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CatModule} from "./cats/cat.module";
import {AppRoutingModule} from "./app-routing.module";
import {RequestOptions} from "@angular/http";
import {JSONOptions} from "./json-options.service";

@NgModule({
	imports: [BrowserModule, CatModule, AppRoutingModule],
	declarations: [AppComponent],
	providers: [{ provide: RequestOptions, useClass: JSONOptions }],
	bootstrap: [AppComponent]
})
export class AppModule {}