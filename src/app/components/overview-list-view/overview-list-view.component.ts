import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {IDeclaration} from '../../models/IDeclaration';
import {Router} from '@angular/router';
import {DeclarationService} from '../../services/declaration.service';

@Component({
  selector: 'app-overview-list-view',
  templateUrl: './overview-list-view.component.html',
  styleUrls: ['./overview-list-view.component.css']
})
export class OverviewListViewComponent implements OnInit {

  declarationsTable = new MatTableDataSource<IDeclaration>();
  displayedColumns = ['description', 'date', 'amount', 'category', 'status'];
  pageSizeOptions = [5, 10, 15];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // TODO add REST Service
  constructor(private router: Router, private decService: DeclarationService) {
  }

  getDeclarations() {
    this.decService.getEmployeeDeclarations().subscribe(decs => {
      console.log(decs);
      return this.declarationsTable.data = decs;
    });
  }

  createDeclaration() {
    alert('clicked create button');
  }

  openDeclaration(selected: IDeclaration) {
    this.router.navigate(['/view', selected.id]);
  }

  ngOnInit() {
    this.declarationsTable.sort = this.sort;
    this.declarationsTable.paginator = this.paginator;
    this.getDeclarations();
  }

}
