import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private catService: CategoryService) {
    catService.getCategories().subscribe(cat => console.log(cat));
  }

  ngOnInit() {
  }

}
