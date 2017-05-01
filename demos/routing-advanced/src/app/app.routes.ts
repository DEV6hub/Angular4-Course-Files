import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {GuardDog} from "./guard-dog.service";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
	{ path: 'dogs', loadChildren: './dogs/dog.module#DogModule', canLoad: [GuardDog] },
	{ path: '', component: DashboardComponent, pathMatch: 'full' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
