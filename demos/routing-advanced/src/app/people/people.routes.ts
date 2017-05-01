import { PeopleComponent } from './people.component';
import { PeopleListComponent } from './people-list.component';
import { PersonDetailsComponent } from './person-details.component';
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

export const peopleRoutes: Routes = [
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      { path: ':id', component: PersonDetailsComponent },
      { path: '', component: PeopleListComponent }
    ]
  }
];

export const peopleRouting: ModuleWithProviders = RouterModule.forChild(peopleRoutes);