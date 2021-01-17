import { Apartment } from './../../common/interfaces/apartment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateUserService } from './services/create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  profileForm = this.fb.group({
    apartmentId: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
    userType: null,
    phone: [null, Validators.required]
  });

  errorMessage: String = null;

  // TODO: 2 chestii principale:
  // 1. cand creezi user trebuyie sa avem associationId ca si query param sus in url, ca sa luam apartamente pentru acea asociatie(ADMIN)
  // 2. Iar la un USER simplu nu va selecta niciun apartament ca ADMINUL deja i-a dat invitatie pt un apartament anume, si o sa aiba apartmentId in url

  apartments: Apartment[] = [];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private createUserService: CreateUserService, private router: Router) { }

  ngOnInit(): void {
    this.profileForm.patchValue({ userType: this.route.parent.snapshot.url[1].path.toUpperCase() });
    if (this.profileForm.get('userType').value == 'ADMIN') {
      const associationId = this.route.parent.snapshot.url[2].path;
      this.createUserService.findAllByAssociation(associationId).subscribe((data) => this.apartments = data, (err) => this.errorMessage = err);
    } else if (this.profileForm.get('userType').value == 'USER') {
      const apartmentId = this.route.parent.snapshot.url[2].path;
      this.createUserService.findApartmentById(apartmentId).subscribe((data) => {
        this.apartments.push(data);
        this.profileForm.patchValue({apartmentId: data});
      }, (err) => this.errorMessage = err);
    }
  }

  onApartmentSelected(id: String): void {
    this.profileForm.patchValue({ apartmentId: id });
  }

  onSubmit(): void {
    this.createUserService.createUser(this.profileForm.value).subscribe(() => this.router.navigate(['/login']), (err) => this.errorMessage = err);
  }

}
