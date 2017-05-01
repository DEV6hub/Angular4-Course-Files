import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CatDetailComponent} from "./cat-detail.component";
import {FormsModule} from "@angular/forms";
import {CatYearsPipe} from "./cat-years.pipe";
import {CatService} from "./cat.service";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent, CatDetailComponent, CatYearsPipe],
	providers: [CatService],
	bootstrap: [AppComponent]
})
export class AppModule {}