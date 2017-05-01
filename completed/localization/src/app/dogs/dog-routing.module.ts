import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {DogsComponent} from "./dogs.component";
import {PetListComponent} from "../pet-list.component";
import {DogDetailComponent} from "./dog-detail.component";
import {DogFormComponent} from "./dog-form.component";
@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: "",
			  component: DogsComponent,
			  children: [
				  { path: "", component: PetListComponent, pathMatch: "full", data: { type: "dog" } },
				  { path: "new", component: DogFormComponent },
				  { path: ":id/edit", component: DogFormComponent },
				  { path: ":id", component: DogDetailComponent }
			  ]
			}
		])
	],
	exports: [RouterModule]
})
export class DogRoutingModule {}