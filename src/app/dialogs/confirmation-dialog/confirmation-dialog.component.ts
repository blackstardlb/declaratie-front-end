import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {IMessageDialog} from '../../models/IMessageDialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  private statusOfConfirmation = true;

  constructor(private dialogRef: MatDialogRef<ConfirmationDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: IMessageDialog) { }

  public closeDialog = () => {
    this.dialogRef.close();
  }

  public confirmationClick = () => {
    return this.statusOfConfirmation;
  }

  ngOnInit() {
  }

}
