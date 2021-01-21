import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  private isUserLogged = false;
  private userType: string = null;

  public constructor(private localStorageService: LocalStorageService) { }

  public ngOnInit(): void {
    const token = this.localStorageService.getToken();
    if (token !== undefined) {
      this.isUserLogged = true;
    }
  }

  public get userIsLogged(): boolean {
    return this.isUserLogged;
  }

  public get typeOfUser(): string {
    return this.userType;
  }
}
