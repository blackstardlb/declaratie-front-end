import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Observable} from 'rxjs';
import {Category} from '../../models/category';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  categories: Observable<Category[]>;

  constructor(
    readonly categoryService: CategoryService,
    formBuilder: FormBuilder
  ) {
    this.form = formBuilder.group({
      category: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  showErrors() {
    console.log(this.form.controls);
    if (!this.form.controls) {
      return '';
    }
    return JSON.stringify(this.form.controls.errors);
  }

}
