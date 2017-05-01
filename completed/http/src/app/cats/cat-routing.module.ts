import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CatsComponent} from "./cats.component";
import {CatListComponent} from "./cat-list.component";
import {CatDetailComponent} from "./cat-detail.component";
import {CatFormComponent} from "./cat-form.component";
@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: "cats",
			  component: CatsComponent,
			  children: [
				  { path: "", component: CatListComponent, pathMatch: "full" },
				  { path: ":id/edit", component: CatFormComponent },
				  { path: "new", component: CatFormComponent },
				  { path: ":id", component: CatDetailComponent }
			  ]
			}
		])
	],
	exports: [RouterModule]
})
export class CatRoutingModule {}