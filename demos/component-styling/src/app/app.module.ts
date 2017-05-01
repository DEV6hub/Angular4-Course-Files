/**
 * Created by tpadley on 2016-09-26.
 */
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RedComponent} from "./red.component";
import {GreenComponent} from "./green.component";
import {NoStyleComponent} from "./no-style.component";
import {NativeStyleComponent} from "./native-style.component";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
	imports: [BrowserModule],
	declarations: [AppComponent, RedComponent, GreenComponent, NoStyleComponent, NativeStyleComponent],
	bootstrap: [AppComponent]
})

export class AppModule {}
