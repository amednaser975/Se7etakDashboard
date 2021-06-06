import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLatestServiceComponent } from './add-latest-service.component';

describe('AddLatestServiceComponent', () => {
  let component: AddLatestServiceComponent;
  let fixture: ComponentFixture<AddLatestServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLatestServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLatestServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
