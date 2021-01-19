import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', [
    state('open', style({
      transform: 'translate(68%, 15%)',
      borderRadius: '25px',
    })),
    state('close', style({
      transform: 'translate(0, 0)',
      borderRadius: '0',
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  public constructor(private router: Router) { }

  private isOpen = false;

  public ngOnInit(): void {
  }

  public onCreateAssociation() {
    this.router.navigate(['/create-association']);
  }

  public changeNavState(): void {
    this.isOpen = !this.isOpen;
  }

  get isNavOpen(): Boolean {
    return this.isOpen;
  }

}
