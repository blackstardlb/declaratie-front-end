import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IDeclaration} from '../../models/IDeclaration';
import {DECLARATIONS} from '../../mocks/mock-declarations';
import {StatusEnum} from '../../models/StatusEnum';
import {AuthenticationService} from '../../../services/authentication/authentication.service';
import {Role} from '../../../models/role/role.enum';
import {User} from '../../../models/user/user.model';
import {ConfirmationDialogComponent} from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import {of} from 'rxjs';
import {MatDialog} from '@angular/material';
import {IMessageDialog} from '../../models/IMessageDialog';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  private user: User;
  declaration: IDeclaration;
  disabled = true;
  selectOptions = [StatusEnum.NONE, StatusEnum.APPROVED, StatusEnum.REJECTED];
  isManager = false;

  // TODO REST DeclarationService
  constructor(private dialog: MatDialog, private router: Router, private activateRouter: ActivatedRoute,
              private auth: AuthenticationService) {
    this.auth.user.subscribe(value => {
      this.isManager = value.role === Role.UNIT_MANAGER || value.role === Role.INDIA_GUY;
      this.user = value;
    });
    const selected = this.activateRouter.snapshot.paramMap.get('id');
    // TODO Get Call
    // this.declaration = this.declarationService.getDeclaration(selected).subsc
    this.declaration = DECLARATIONS[0];
  }

  onChange(selected: StatusEnum) {
    if (selected !== StatusEnum.NONE) {
      const msg: IMessageDialog = {
        name: 'update',
        message: 'Are you sure?'
      };
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {data: msg, disableClose: true});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.updateDeclaration(selected);
        }
      });
    }
  }

  private updateDeclaration(selected: StatusEnum) {
    if (this.user.role === Role.UNIT_MANAGER) {
      this.declaration.status = selected === StatusEnum.APPROVED ? StatusEnum.INPROGRESS : StatusEnum.REJECTED;
    } else {
      this.declaration.status = selected === StatusEnum.APPROVED ? StatusEnum.APPROVED : StatusEnum.REJECTED;
    }

    // TODO onchange save the update and do some succes and error notification
    // this.declarationService.updateDeclaration(this.declaration).subsribe

    // TODO return to list after goedkeuren
    // this.backToList();
  }

  backToList() {
    this.router.navigateByUrl('overview');
  }

  ngOnInit() {
  }

}
