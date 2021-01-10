import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({
    apartmentId: [null, Validators.required],
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.required, Validators.email],
    userType: 'Admin', // TODO: aici trebuie sa adaug ce imi vine din back-end, si anume daca userul a create asociatia(Admin) sau nu
    phone: [null, Validators.required]
  });

  apartmentSelected = null;

  fakeListApartment = [
    {
      id: 1,
      name: "Ovidius"
    },
    {
      id: 2,
      name: "Mangalia's"
    },
    {
      id: 3,
      name: "Ghihar"
    },
    {
      id: 4,
      name: "Payge"
    },
    {
      id: 5,
      name: "Resort"
    }
  ];

  ngOnInit(): void {
  }

  onApartmentSelected(id: String): void {
    this.apartmentSelected = id;
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
  }

}
