import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {GuardDogService} from "./guard-dog.service";
@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: "", redirectTo: "cats", pathMatch: "full" },
			{ path: "dogs", loadChildren: "./dogs/dog.module", canLoad: [GuardDogService] }
		])
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}