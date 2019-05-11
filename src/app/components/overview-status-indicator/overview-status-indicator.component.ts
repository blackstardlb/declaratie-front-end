import { Component, OnInit, Input } from '@angular/core';

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

  constructor() {  }

  ngOnInit() {
    console.log(this.state);
    switch(this.state) {
      case "1":
        this.color1 = "green"
        this.color2 = "yellow"
        this.color3 = ""
        this.message = "Waiting on Unit Manager"
        break;
      case "2":
      this.color1 = "green"
      this.color2 = "green"
      this.color3 = "yellow"
      this.message = "Waiting on an India response"
      break;
      case "3":
      this.color1 = "green"
      this.color2 = "green"
      this.color3 = "green"
      this.message = "Finished."
      break;
      default:
      this.color1 = ""
      this.color2 = ""
      this.color3 = ""
      this.message = "None"
    }
  }

}
