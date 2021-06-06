import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestServicesListComponent } from './latest-services-list.component';

describe('LatestServicesListComponent', () => {
  let component: LatestServicesListComponent;
  let fixture: ComponentFixture<LatestServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestServicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
