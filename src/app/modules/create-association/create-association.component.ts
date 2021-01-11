import { CreateAssociationService } from './services/create-association.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-association',
  templateUrl: './create-association.component.html',
  styleUrls: ['./create-association.component.scss']
})
export class CreateAssociationComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private createAssociationService: CreateAssociationService,
    private router: Router) { }

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

  get apartments(): FormArray {
    return this.profileForm.get('apartments') as FormArray;
  }

  onSubmit(): void {
    if(this.profileForm.valid) {
      this.createAssociationService.createAssociation(this.profileForm.value);
      this.router.navigate(['/create-user/Admin']);
    }
  }

}
