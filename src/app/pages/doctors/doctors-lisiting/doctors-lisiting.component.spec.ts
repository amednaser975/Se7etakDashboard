import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsLisitingComponent } from './doctors-lisiting.component';

describe('DoctorsLisitingComponent', () => {
  let component: DoctorsLisitingComponent;
  let fixture: ComponentFixture<DoctorsLisitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsLisitingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsLisitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
