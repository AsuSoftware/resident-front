import { LocalStorageService } from './../../common/services/local-storage.service';
import { LoginService } from './services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private profileForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  });

  private errorMessage = null;

  public constructor(private fb: FormBuilder,
                     private router: Router,
                     private loginService: LoginService,
                     private localStorageService: LocalStorageService
  ) { }

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    this.loginService.login(this.profileForm.value)
      .subscribe((token) => {
        this.localStorageService.setToken(token);
        this.router.navigate(['/home']);
      }, (err) => this.errorMessage = err);
  }

  public get messageError(): string {
    return this.errorMessage;
  }

  public get formProfile(): FormGroup {
    return this.profileForm.value;
  }

}
