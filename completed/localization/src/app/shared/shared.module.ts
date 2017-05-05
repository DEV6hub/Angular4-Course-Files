import {NgModule} from "@angular/core";
import {PetListComponent​​} from './pet-list.component';
import {CommonModule} from "@angular/common";
import { TranslateModule } from "ng2-translate";

@NgModule({
	imports: [CommonModule, TranslateModule],
	declarations: [PetListComponent​​],
	exports: [PetListComponent, TranslateModule]
})
export class SharedModule {}