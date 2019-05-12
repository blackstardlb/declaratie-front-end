import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Observable} from 'rxjs';
import {Category} from '../../models/category';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {ParkingFieldsComponent} from '../parking-fields/parking-fields.component';
import {DeclarationArgs} from '../../models/IDeclaration';
import {DeclarationService} from '../../services/declaration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  categories: Observable<Category[]>;
  @ViewChild('parkingFields') parkingFields: ParkingFieldsComponent;

  constructor(
    readonly categoryService: CategoryService,
    readonly authService: AuthenticationService,
    readonly declarationService: DeclarationService,
    readonly router: Router,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      category: new FormControl('', Validators.required),
      bank: new FormControl('', Validators.pattern(/^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}$/)),
      abroad: new FormControl('', Validators.required),
      chargeCustomer: new FormControl('', Validators.required),
      motivation: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.form.controls.abroad.setValue('false');
    this.form.controls.chargeCustomer.setValue('false');
    this.categories = this.categoryService.getCategories();
    this.authService.user.subscribe(user => {
      console.log(user);
      if (user) {
        this.form.controls.bank.setValue(user.bankAccount);
      }
    });
    this.restoreSavedFields();
    this.detectAndSaveChanges();
  }

  restoreSavedFields() {
    Object.keys(this.form.controls).forEach(key => {
      const value = localStorage.getItem('field_' + key);
      if (value) {
        this.form.controls[key].setValue(value);
      }
    });
  }

  detectAndSaveChanges() {
    Object.keys(this.form.controls).forEach(key => {
      this.form.controls[key].valueChanges.subscribe(value => {
        localStorage.setItem('field_' + key, value);
      });
    });
  }

  clearSavedFields() {
    Object.keys(this.form.controls).forEach(key => {
      localStorage.removeItem('field_' + key);
    });
  }

  save() {
    const parkingModel = this.parkingFields.getModel();
    const declarationModel: DeclarationArgs = {
      date: new Date(),
      foreignCountry: this.form.controls.abroad.value === 'true',
      chargeCustomer: this.form.controls.chargeCustomer.value === 'true',
      categoryId: parseInt(this.form.controls.category.value, null),
      description: this.form.controls.motivation.value,
      currency: '€',
      amount: parkingModel.rows.map(value => value.amount).reduce((previousValue, currentValue) => previousValue + currentValue),
      parkingInfo: parkingModel,
      bankAccount: this.form.controls.bank.value
    };
    this.declarationService.createDeclaration(declarationModel).subscribe(value => {
      this.clearSavedFields();
      this.parkingFields.removeSavedChanges();
      this.router.navigateByUrl('/overview');
    });
  }

  valid() {
    return this.form && this.form.valid && this.parkingFields && this.parkingFields.valid();
  }
}
