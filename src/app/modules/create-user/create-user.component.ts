import { ApartmentService } from './../../common/services/apartment.service';
import { Apartment } from './../../common/interfaces/apartment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserService } from './services/create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

 private profileForm = this.fb.group({
    apartmentId: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
    userType: null,
    phone: [null, Validators.required]
  });

 private errorMessage: String = null;

  private apartments: Apartment[] = [];

  public constructor(private fb: FormBuilder,
                     private route: ActivatedRoute,
                     private createUserService: CreateUserService,
                     private apartmentService: ApartmentService,
                     private router: Router
                     ) { }

  public ngOnInit(): void {
    this.profileForm.patchValue({ userType: this.route.parent.snapshot.url[1].path.toUpperCase() });
    if (this.profileForm.get('userType').value == 'ADMIN') {
      let associationId = null;
      this.route.queryParams.subscribe((params) => associationId = params['associationId']);
      this.apartmentService.findAllByAssociation(associationId)
        .subscribe((data) => this.apartments = data,
          (err) => this.errorMessage = err);
    } else if (this.profileForm.get('userType').value == 'USER') {
      let apartmentId = null;
      this.route.queryParams.subscribe((params) => apartmentId = params['apartmentId']);
      this.apartmentService.findApartmentById(apartmentId).subscribe(
        (data) => {
          this.apartments.push(data);
          this.profileForm.patchValue({ apartmentId: data.id });
        }, (err) => this.errorMessage = err);
    }
  }

  public onApartmentSelected(id: String): void {
    this.profileForm.patchValue({ apartmentId: id });
  }

  public onSubmit(): void {
    this.createUserService.createUser(this.profileForm.value)
      .subscribe(
        () => this.router.navigate(['/login']),
        (err) => this.errorMessage = err);
  }

  public get messageError(): String {
    return this.messageError;
  }

  public get apartmentsList(): Apartment[] {
    return this.apartments;
  }

  public get formProfile(): FormGroup {
    return this.profileForm.value;
  }

}
