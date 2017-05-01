import {NgModule} from "@angular/core";
import {DogYearsPipe} from "./dog-years.pipe";
import {DogDetailComponent} from "./dog-detail.component";
import {ReactiveFormsModule} from "@angular/forms";
import {DogsComponent} from "./dogs.component";
import {DogRoutingModule} from "./dog-routing.module";
import {CommonModule} from "@angular/common";
import {DogFormComponent} from "./dog-form.component";
@NgModule({
	imports: [CommonModule, ReactiveFormsModule, DogRoutingModule],
	declarations: [DogDetailComponent, DogYearsPipe, DogsComponent, DogFormComponent],
})
export default class DogModule {}
