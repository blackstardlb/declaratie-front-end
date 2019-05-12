import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface StatusUpdateInfo {
  comment: any;
  date: string;
  status: string;
  name: string;
}

@Component({
  selector: 'app-status-update-dialog',
  templateUrl: './status-update-dialog.component.html',
  styleUrls: ['./status-update-dialog.component.css']
})
export class StatusUpdateDialogComponent implements OnInit {

  statusUpdate: StatusUpdateInfo;
  disabled = true;

  constructor(private dialogRef: MatDialogRef<StatusUpdateDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: StatusUpdateInfo) {
    this.statusUpdate = data;
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data.comment);
  }

}
