import {Component} from "@angular/core";
@Component({
	selector: "herding-cats",
	template: `<h1>Herding Cats</h1>
				<nav>
					<a [routerLink]="['cats']">Cats</a> or <a [routerLink]="['dogs']">Dogs</a>
				</nav>
			   <router-outlet></router-outlet>`
})
export class AppComponent {}