import {NgModule} from "@angular/core";
import {DogYearsPipe} from "./dog-years.pipe";
import {DogDetailComponent} from "./dog-detail.component";
import {FormsModule} from "@angular/forms";
import {DogsComponent} from "./dogs.component";
import {DogRoutingModule} from "./dog-routing.module";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
@NgModule({
	imports: [CommonModule, FormsModule, DogRoutingModule, SharedModule],
	declarations: [DogDetailComponent, DogYearsPipe, DogsComponent],
})
export default class DogModule {}
