import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CatsComponent} from "./cats.component";
import {PetListComponent} from "../pet-list.component";
import {CatDetailComponent} from "./cat-detail.component";
@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: "cats",
			  component: CatsComponent,
			  children: [
				  { path: "", component: PetListComponent, pathMatch: "full", data: { type: "cat" } },
				  { path: ":id", component: CatDetailComponent }
			  ]
			}
		])
	],
	exports: [RouterModule]
})
export class CatRoutingModule {}