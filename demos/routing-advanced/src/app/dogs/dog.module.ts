import {NgModule} from "@angular/core";
import {dogRouting} from "./dogs.routes";
import {DogListComponent} from "./dog-list.component";
import {DogDetailComponent} from "./dog-detail.component";
import {DogYearsPipe} from "./dog-years.pipe";
import {DogsComponent} from "./dogs.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
	imports: [CommonModule, dogRouting],
	declarations: [DogListComponent, DogDetailComponent, DogYearsPipe, DogsComponent]
})

export class DogModule {}