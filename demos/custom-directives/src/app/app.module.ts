import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HoverHighlightDirective} from "./hover-highlight.directive";
import {UnlessDirective} from "./unless.directive";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, HoverHighlightDirective, UnlessDirective],
	bootstrap: [AppComponent]
})

export class AppModule {}
