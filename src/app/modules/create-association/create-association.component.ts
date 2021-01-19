import { CreateAssociationService } from './services/create-association.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-association',
  templateUrl: './create-association.component.html',
  styleUrls: ['./create-association.component.scss']
})
export class CreateAssociationComponent implements OnInit {

  private profileForm = this.fb.group({
    associationName: [null, Validators.required],
    apartments: this.fb.array([
      this.fb.control(null, Validators.required)
    ]),
  });

  private errorMessage: String = null;

  public constructor(private fb: FormBuilder,
                     private createAssociationService: CreateAssociationService,
                     private router: Router) { }


  public ngOnInit(): void {
  }

  public addApartment(): void {
    this.apartments.push(this.fb.control(null, Validators.required));
  }

  public get apartments(): FormArray {
    return this.profileForm.get('apartments') as FormArray;
  }

  public onSubmit(): void {
    if (this.profileForm.valid) {
      this.createAssociationService.createAssociation(this.profileForm.value).subscribe(
        (data) => {
          this.router.navigate(['/create-user/admin'], { queryParams: { associationId: data.id } });
        },
        (error) => this.errorMessage = error);
    }
  }

  public get messageError(): String {
    return this.errorMessage;
  }

  public get formProfile(): FormGroup {
    return this.profileForm.value;
  }

}
