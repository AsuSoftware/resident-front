import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Provider } from './interfaces/provider';

@Component({
  selector: 'app-utility-management',
  templateUrl: './utility-management.component.html',
  styleUrls: ['./utility-management.component.scss']
})
export class UtilityManagementComponent implements OnInit {

  public data: Provider[] = [
    {
      id: '1',
      image: './assets/img/acea-logo.png',
      title: 'Acea',
      serviciu: 'Apa',
      pret: '13',
      data: '12/08/20'
    },
    {
      id: '2',
      image: './assets/img/engie-logo.png',
      title: 'Engie',
      serviciu: 'Curent',
      pret: '15',
      data: '25/10/20'
    },
    {
      id: '3',
      image: './assets/img/engie-logo.png',
      title: 'Engie',
      serviciu: 'Gaz',
      pret: '12',
      data: '06/07/20'
    },
  ];

  public priceForm = this.fb.group({
    price: [null, Validators.required]
  });

  public currentElement = null;

  public actualCategory = 'All';

  public modalState = false; // by default the modal is closed

  public constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
  }

  public getUnitOfMisurement(typeOfService: string): string {
    if (typeOfService === 'Apa' || typeOfService === 'Gaz') {
      return 'm³';
    } else if (typeOfService === 'Curent') {
      return 'Kw';
    }
  }

  public filterData(filterType: string): Provider[] {
    return (this.actualCategory === 'All') ? this.data : this.data.filter(element => element.serviciu === filterType);
  }

  public onStateChangeModal(): void {
    this.modalState = !this.modalState;
  }

  public editPrice(id: string): void {
    this.currentElement = id;
    this.onStateChangeModal();
  }

  public get formPrice(): FormGroup {
    return this.priceForm;
  }

  public onSubmit(): void {
    if (this.formPrice.valid) {
      this.data.map(element => {
        if (element.id === this.currentElement) {
          element.pret = this.formPrice.get('price').value;
          const today = new Date();
          const dd = today.getDate();
          const mm = (today.getMonth() < 10) ? `0${today.getMonth() + 1}` : today.getMonth();
          const yy = today.getFullYear().toString().substr(-2);
          element.data = `${dd}/${mm}/${yy}`;
        }
      });
      this.onStateChangeModal();
    }
  }

}


/*
 * TODO:
 * 1. Sa golesc inputul cand il folosesc, findca cand editex alt box ramane pe input acel numar de dinainte
 * 2. Sa rezolv filtrarea ca sa se schimbe in mod reactiv in functie de ce categorie aleg
*/
