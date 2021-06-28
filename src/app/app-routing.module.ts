import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDoctorComponent } from './pages/doctors/add-doctor/add-doctor.component';
import { DoctorsLisitingComponent } from './pages/doctors/doctors-lisiting/doctors-lisiting.component';
import { AddLatestOfferComponent } from './pages/offers/add-latest-offer/add-latest-offer.component';
import { LatestOffersComponent } from './pages/offers/latest-offers/latest-offers.component';
import { AddLatestServiceComponent } from './pages/services/add-latest-service/add-latest-service.component';
import { LatestServicesListComponent } from './pages/services/latest-services-list/latest-services-list.component';
import { AddTestComponent } from './pages/tests/add-test/add-test.component';
import { TestsListComponent } from './pages/tests/tests-list/tests-list.component';

const routes: Routes = [
  { path: 'offers', component: LatestOffersComponent},
  { path: 'doctors', component: DoctorsLisitingComponent},
  { path: 'doctors/add', component: AddDoctorComponent},
  { path: 'offers/add', component: AddLatestOfferComponent},
  { path: 'doctors/edit/:doctorId', component: AddDoctorComponent},
  { path: 'offers/edit/:offerId', component: AddLatestOfferComponent},
  { path: 'services', component: LatestServicesListComponent},
  { path: 'services/add', component: AddLatestServiceComponent},
  { path: 'services/edit/:serviceId', component: AddLatestServiceComponent},
  { path: 'tests', component: TestsListComponent},
  { path: 'tests/add', component: AddTestComponent},
  { path: 'tests/edit/:testId', component: AddTestComponent},
  { path: 'geo', component: TestsListComponent, children: [
  { path: 'cities', component: TestsListComponent},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
