import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewListViewComponent } from './overview-list-view.component';

describe('OverviewListViewComponent', () => {
  let component: OverviewListViewComponent;
  let fixture: ComponentFixture<OverviewListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
