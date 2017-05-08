import { Component, ViewEncapsulation } from "@angular/core";
@Component({
	selector: "herding-cats",
	template: `<h1>Herding Cats</h1>
				<nav>
					<a [routerLink]="['cats']">Cats</a> or <a [routerLink]="['dogs']">Dogs</a>
				</nav>
			   <router-outlet></router-outlet>`,
	encapsulation: ViewEncapsulation.None,
	styles: [require('./app.component.scss')]
})
export class AppComponent {}