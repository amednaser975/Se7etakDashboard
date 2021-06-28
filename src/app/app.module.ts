import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastrModule } from 'ngx-toastr';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { LatestOffersComponent } from './pages/offers/latest-offers/latest-offers.component';
import { AddLatestOfferComponent } from './pages/offers/add-latest-offer/add-latest-offer.component';
import { TokenInterceptorService } from './_services/token-interceptor.service';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { LatestServicesListComponent } from './pages/services/latest-services-list/latest-services-list.component';
import { AddLatestServiceComponent } from './pages/services/add-latest-service/add-latest-service.component';
import { TestsListComponent } from './pages/tests/tests-list/tests-list.component';
import { AddTestComponent } from './pages/tests/add-test/add-test.component';
import { ShimmerComponent } from './components/shimmer/shimmer.component';
import { CollapseModule } from "ngx-bootstrap/collapse";
import { CountriesListComponent } from './pages/geo-info/countries/countries-list/countries-list.component';
import { AddCountryComponent } from './pages/geo-info/countries/add-country/add-country.component';
import { AddCityComponent } from './pages/geo-info/cities/add-city/add-city.component';
import { CitiesListComponent } from './pages/geo-info/cities/cities-list/cities-list.component';
import { AreasListComponent } from './pages/geo-info/areas/areas-list/areas-list.component';
import { AddAreaComponent } from './pages/geo-info/areas/add-area/add-area.component';
import { DoctorsLisitingComponent } from './pages/doctors/doctors-lisiting/doctors-lisiting.component';
import { AddDoctorComponent } from './pages/doctors/add-doctor/add-doctor.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LatestOffersComponent,
    AddLatestOfferComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    AdminLayoutComponent,
    LatestServicesListComponent,
    AddLatestServiceComponent,
    TestsListComponent,
    AddTestComponent,
    ShimmerComponent,
    CountriesListComponent,
    AddCountryComponent,
    AddCityComponent,
    CitiesListComponent,
    AreasListComponent,
    AddAreaComponent,
    DoctorsLisitingComponent,
    AddDoctorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    ToastrModule.forRoot(),
    PerfectScrollbarModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),

  ],
  providers: [
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
