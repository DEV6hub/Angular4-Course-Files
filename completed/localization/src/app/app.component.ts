import {Component} from "@angular/core";
import {TranslateService} from "ng2-translate";
@Component({
	selector: "herding-cats",
	template: `<h1>Herding {{"PLURAL" | translate}}</h1>
				<nav>
					<a [routerLink]="['cats']">Cats</a> or <a [routerLink]="['dogs']">Dogs</a>
				</nav>
			   <router-outlet></router-outlet>`
})
export class AppComponent {
	constructor(private translateService: TranslateService) {
		translateService.setDefaultLang("cat");
		translateService.use("cat");
	}
}