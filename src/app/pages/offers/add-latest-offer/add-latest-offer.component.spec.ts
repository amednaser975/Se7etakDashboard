import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLatestOfferComponent } from './add-latest-offer.component';

describe('AddLatestOfferComponent', () => {
  let component: AddLatestOfferComponent;
  let fixture: ComponentFixture<AddLatestOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLatestOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLatestOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
