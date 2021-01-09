import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-association',
  templateUrl: './create-association.component.html',
  styleUrls: ['./create-association.component.scss']
})
export class CreateAssociationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    associationName: ['', Validators.required],
    apartments: this.fb.array([
      this.fb.control('')
    ]),
  });

  ngOnInit(): void {
  }

  addApartment(): void {
    this.apartments.push(this.fb.control(''));
  }

  get apartments() {
    return this.profileForm.get('apartments') as FormArray;
  }

  onSubmit(): void {}

}
