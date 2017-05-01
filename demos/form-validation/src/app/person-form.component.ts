import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Person } from './person.model';

@Component({
  selector: 'person-form',
  template: require('./person-form.component.html')
})
export class PersonFormComponent {
  @Output() submitted = new EventEmitter<Person>();
  firstName: string;
  lastName: string;
  handedness: 'left' | 'right';
  age: number;
  active = true;

  submitForm() {
    let person = new Person(this.firstName, this.lastName);
    person.handedness = this.handedness;
    person.age = this.age;

    this.submitted.emit(person);
    this.resetForm();
  }

  isInvalid(input: NgModel, form: NgForm): boolean {
    return !input.valid && (input.touched || form.submitted);
  }

  private resetForm() {
    this.firstName = undefined;
    this.lastName = undefined;
    this.handedness = undefined;
    this.age = undefined;

    // Form state reset trick. Waiting for framework support
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
