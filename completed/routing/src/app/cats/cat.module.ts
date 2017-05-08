import {NgModule} from "@angular/core";
import {CatYearsPipe} from "./cat-years.pipe";
import {CatDetailComponent} from "./cat-detail.component";
import {FormsModule} from "@angular/forms";
import {CatsComponent} from "./cats.component";
import {CatRoutingModule} from "./cat-routing.module";
import {CommonModule} from "@angular/common";
import { SharedModule } from "../shared/shared.module";

@NgModule({
	imports: [CommonModule, FormsModule, CatRoutingModule, SharedModule],
	declarations: [CatDetailComponent, CatYearsPipe, CatsComponent]
})
export class CatModule {}
