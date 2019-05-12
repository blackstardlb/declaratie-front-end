import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingFieldsComponent } from './parking-fields.component';

describe('ParkingFieldsComponent', () => {
  let component: ParkingFieldsComponent;
  let fixture: ComponentFixture<ParkingFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
