import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {IDeclaration} from '../../models/IDeclaration';
import {DECLARATIONS} from '../../mocks/mock-declarations';

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
  constructor() { }

  getDeclarations() {
    this.declarationsTable.data = DECLARATIONS;
  }

  createDeclaration() {
    alert('clicked create button');
  }

  openDeclaration(selected: IDeclaration) {
    alert('selected: ' + JSON.stringify(selected));
  }

  ngOnInit() {
    this.declarationsTable.sort = this.sort;
    this.declarationsTable.paginator = this.paginator;
    this.getDeclarations();
  }

}
