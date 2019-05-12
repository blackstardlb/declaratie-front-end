import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {StatusEnum, statusName} from '../../models/StatusEnum';
import {StatusUpdateDialogComponent} from '../../dialogs/status-update-dialog/status-update-dialog.component';

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
  displayedColumns = ['date', 'status', 'name'];

  @Input() set statusUpdate(statusUpdateHist) {

    this.statusUpdateTable.data = statusUpdateHist.map(value => {
      const newObj: StatusUpdateInfo = {
        comment: value.comment,
        date: new Date(value.date).toISOString(),
        name: value.user.name,
        status: statusName(value.status)
      };
      return newObj;
    });
  }

  constructor(private dialog: MatDialog) {
  }

  showDetails(selected: StatusUpdateInfo) {
    this.dialog.open(StatusUpdateDialogComponent, {data: selected, disableClose: true});
  }

  ngOnInit() {
  }

}
