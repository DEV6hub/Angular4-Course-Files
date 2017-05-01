import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe("AppComponent", () => {
	let app: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	beforeEach(() => {
		TestBed.configureTestingModule({ declarations: [AppComponent]});
		fixture = TestBed.createComponent(AppComponent);
		app = fixture.componentInstance;
	});
	
	it("should be able to toggle a message", () => {
		expect(app.showMessage).toBeFalse();
		app.toggleMessage();
		expect(app.showMessage).toBeTrue();
	});
	
	it("should show a title in the template", () => {
		let title: string = app.title;
		let element: DebugElement = fixture.debugElement.query(By.css("h1"));
		fixture.detectChanges();
		expect(element.nativeElement.textContent).toContain(title);
	});
});
