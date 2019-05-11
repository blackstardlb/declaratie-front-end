import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewStatusIndicatorComponent } from './overview-status-indicator.component';

describe('OverviewStatusIndicatorComponent', () => {
  let component: OverviewStatusIndicatorComponent;
  let fixture: ComponentFixture<OverviewStatusIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewStatusIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewStatusIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
