import { Component } from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Component({
	selector: "dev6-app",
	template: require("./app.component.html")
})
export class AppComponent {
	constructor ( private sanitizer: DomSanitizer) {
		
	}
	
	htmlSnippet: string = `Testing a <script>alert("tag")</script> <b>tag</b>`;
	unsafeUrl: string = "javascript:alert('Hi There')";
	safeUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(this.unsafeUrl);
}
