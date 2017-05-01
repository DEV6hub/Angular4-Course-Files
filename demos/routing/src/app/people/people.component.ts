import { Component } from '@angular/core';

import { PeopleService } from './people.service';

@Component({
  template: `<router-outlet></router-outlet>`,
  providers: [PeopleService]
})
export class PeopleComponent { }
