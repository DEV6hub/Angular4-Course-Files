import { DashboardComponent } from './dashboard.component';
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
