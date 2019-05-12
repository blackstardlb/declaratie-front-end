import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {StatusEnum} from '../../models/StatusEnum';

export interface StatusUpdateInfo {
  comment: any;
  date: string;
  status: string;
  name: string;
}

@Component({
  selector: 'app-status-update',
  templateUrl: './status-update.component.html',
  styleUrls: ['./status-update.component.css']
})

export class StatusUpdateComponent implements OnInit {

  statusUpdateTable = new MatTableDataSource<StatusEnum>();
  displayedColumns = ['comment', 'date', 'status', 'name'];

  @Input() set statusUpdate(statusUpdateHist) {

    this.statusUpdateTable.data = statusUpdateHist.map(value => {
      const newObj: StatusUpdateInfo = {
        comment: value.comment,
        date: new Date(value.date).toISOString(),
        name: value.user.name,
        status: Object.getOwnPropertyNames(StatusEnum)[value.status]
      };
      return newObj;
    }); }

  constructor() {
  }

  ngOnInit() {
  }

}
