import { Component } from '@angular/core';
import {TranslateService} from "ng2-translate";

@Component({
	selector: 'dev6-app',
	template: `<h1>{{ 'HELLO' | translate }}</h1>
				<button type="button" (click)="toggle()">Toggle</button>`
})
export class AppComponent {
	constructor (private translateService: TranslateService) {
		translateService.setDefaultLang("en");
		translateService.use("en");
	}
	
	toggle(): any {
		let lang: string = this.translateService.currentLang == "en" ? "fr" : "en";
		this.translateService.use(lang);
	}
}
