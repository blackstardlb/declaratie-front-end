import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {Observable} from 'rxjs';
import {Category} from '../../models/category';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  categories: Observable<Category[]>;

  constructor(
    readonly categoryService: CategoryService
  ) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}
