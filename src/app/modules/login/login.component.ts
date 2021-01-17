import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  });

  errorMessage: String = null;
  rememberMe = false;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onRememberMe() {
    this.rememberMe = !this.rememberMe;
  }

  // TODO: need to know how to implement remember me. If we need to save email and password or token..
  onSubmit(): void {
    this.loginService.login(this.profileForm.value).subscribe(() => this.router.navigate(['/home']), (err) => this.errorMessage = err);
  }

}
