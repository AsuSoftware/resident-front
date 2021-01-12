import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
    userType: null,
    phone: [null, Validators.required]
  });


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

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.profileForm.patchValue({userType: this.route.parent.snapshot.url[1].path.toUpperCase()});
  }

  onApartmentSelected(id: String): void {
    this.profileForm.patchValue({apartmentId: id});
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
  }

}
