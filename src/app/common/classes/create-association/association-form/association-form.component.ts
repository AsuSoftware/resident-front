import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-association-form',
  templateUrl: './association-form.component.html',
  styleUrls: ['./association-form.component.scss']
})
export class AssociationFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    associationName: [null, Validators.required],
    apartments: this.fb.array([
      this.fb.control(null, Validators.required)
    ]),
  });

  ngOnInit(): void {
  }

  addApartment(): void {
    this.apartments.push(this.fb.control(null, Validators.required));
  }

  get apartments() {
    return this.profileForm.get('apartments') as FormArray;
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
  }

}
