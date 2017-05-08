import {NgModule} from "@angular/core";
import {PetListComponent​​} from './pet-list.component';
import {CommonModule} from "@angular/common";

@NgModule({
	imports: [CommonModule],
	declarations: [PetListComponent​​],
	exports: [PetListComponent​​]
})
export class SharedModule {}