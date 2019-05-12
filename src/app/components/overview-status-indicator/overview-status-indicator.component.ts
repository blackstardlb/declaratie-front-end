import {Component, Input, OnInit} from '@angular/core';
import {statusName} from "../../models/StatusEnum";

@Component({
  selector: 'app-overview-status-indicator',
  templateUrl: './overview-status-indicator.component.html',
  styleUrls: ['./overview-status-indicator.component.css']
})
export class OverviewStatusIndicatorComponent implements OnInit {

  @Input() state: string;

  color1: string;
  color2: string;
  color3: string;
  message: string;

  constructor() {
  }

  ngOnInit() {
    switch (this.state) {
      case '1':
        this.color1 = 'yellow';
        this.color2 = '';
        this.color3 = '';
        break;
      case '2':
        this.color1 = 'green';
        this.color2 = 'yellow';
        this.color3 = '';
        break;
      case '3':
        this.color1 = 'green';
        this.color2 = 'green';
        this.color3 = 'yellow';
        break;
      case '4':
        this.color1 = 'green';
        this.color2 = 'green';
        this.color3 = 'green';
        break;
      case '5':
        this.color1 = 'red';
        this.color2 = 'red';
        this.color3 = '';
        break;
      case '6':
        this.color1 = 'red';
        this.color2 = 'red';
        this.color3 = 'red';
        break;
      default:
        this.color1 = '';
        this.color2 = '';
        this.color3 = '';
    }
    this.message = statusName(this.state);
  }

}
