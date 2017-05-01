import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Dog} from "./dog";
import {DogService} from "./dog.service";

@Component({
  selector: 'dog-list',
  template: require('./dog-list.component.html')
})
export class DogListComponent implements OnInit {
  favouriteDog: Dog;
  dogs: Dog[];

  constructor(
    private router: Router,
    private dogService: DogService
  ) { }

  ngOnInit(): void {
    this.dogs = this.dogService.getDogList();
    this.favouriteDog = this.dogService.favouriteDog;
  }

  selectDog(dog: Dog) {
    this.router.navigate(['dogs', dog.id]);
  }
}
