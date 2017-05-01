import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {PeopleService} from "./people.service";
import {PeopleListComponent} from "./people-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, RequestOptions, Http, XHRBackend} from "@angular/http";
import {CustomRequestOptions} from "./custom-request-options";
import {HttpComposition} from "./http-composition.service";
import {HttpInheritance} from "./http-inheritance.service";

let httpFactory = (xhrBackend: XHRBackend, requestOptions: RequestOptions) => {
	return new HttpInheritance(xhrBackend, requestOptions);
}

@NgModule({
	imports: [BrowserModule, HttpModule],
	declarations: [AppComponent, PeopleListComponent],
	providers: [
		PeopleService,
		//HttpComposition,
		//{ provide: RequestOptions, useClass: CustomRequestOptions }
		{ provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] }
		],
	bootstrap: [AppComponent]
})

export class AppModule {}
