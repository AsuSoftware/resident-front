import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Provider } from './interfaces/provider';
import * as data from './data.json';

@Component({
  selector: 'app-utility-management',
  templateUrl: './utility-management.component.html',
  styleUrls: ['./utility-management.component.scss']
})
export class UtilityManagementComponent implements OnInit {

  public data: Provider[] = [];

  public priceForm = this.fb.group({
    price: [null, Validators.required]
  });

  public newData: Provider[] = [];

  public elementSelectedToEdit = null;

  public actualCategory = 'All';

  public modalState = false; // by default the modal is closed

  public constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.data = (data  as  any).default;
    this.newData = this.data;
  }

  public getUnitOfMisurement(typeOfService: string): string {
    if (typeOfService === 'Apa' || typeOfService === 'Gaz') {
      return 'm³';
    } else if (typeOfService === 'Curent') {
      return 'Kw';
    }
  }

  public filterData(filterType: string): void {
    this.actualCategory = filterType;
    this.newData = (filterType === 'All') ? this.data : this.data.filter(element => element.serviciu === filterType);
  }

  public filterCategory(filterType: string): number {
    return this.data.filter(element => element.serviciu === filterType).length;
  }

  public onStateChangeModal(): void {
    this.modalState = !this.modalState;
  }

  public editPrice(id: string): void {
    this.elementSelectedToEdit = id;
    this.onStateChangeModal();
  }

  public get formPrice(): FormGroup {
    return this.priceForm;
  }

  public searchByProviderName(providerName: any): void {
    this.newData = this.data.filter(element => element.title.toLowerCase().startsWith(providerName.target.value.toLowerCase()));
    if (providerName.target.value === '') {
      this.actualCategory = 'All';
    }
  }

  public onSubmit(): void {
    if (this.formPrice.valid) {
      this.data.map(element => {
        if (element.id === this.elementSelectedToEdit) {
          element.pret = this.formPrice.get('price').value;
          const today = new Date();
          const dd = today.getDate();
          const mm = (today.getMonth() < 10) ? `0${today.getMonth() + 1}` : today.getMonth();
          const yy = today.getFullYear().toString().substr(-2);
          element.data = `${dd}/${mm}/${yy}`;
        }
      });
      this.formPrice.controls.price.setValue(null); // refresh the input to initial state
      this.onStateChangeModal();
    }
  }
}

// TODO: Some optimization in this code, like optimize the search option, because startWith is not actually good
