import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { showNotification } from 'src/app/helpers/show-toast';
import { LatestOffer } from 'src/app/_models/latestOffers.model';
import { MobileRoutes } from 'src/app/_models/routes.model';
import { LatestOffersService } from 'src/app/_services/latest-offers.service';
import { RoutesService } from 'src/app/_services/routes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-latest-offer',
  templateUrl: './add-latest-offer.component.html',
  styleUrls: ['./add-latest-offer.component.scss'],
})
export class AddLatestOfferComponent implements OnInit {
  routes: MobileRoutes[];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  ranks = Array(15);
  imageFile;
  editMode = false;

  latestOffer: LatestOffer = {};

  constructor(
    private latestOffersService: LatestOffersService,
    private routesService: RoutesService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastrService
  ) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit(): void {
    this.editMode =
      this.activatedRoute.snapshot.url[1] &&
      this.activatedRoute.snapshot.url[1].path === 'edit' &&
      true;

    if (this.editMode) {
      const id = this.activatedRoute.snapshot.params.offerId;
      this.latestOffersService.getOfferById(id).subscribe((res) => {
        this.latestOffer = res.data;
        console.log(res.data.startDate);
        
        this.bsValue = new Date(res.data.startDate);
        this.maxDate = new Date(res.data.endDate);
        this.bsRangeValue = [this.bsValue, this.maxDate];

        console.log(res);
      });
    }

    this.routesService.getAllRoutes().subscribe((res) => {
      this.routes = res.data?.routes;
    });
  }

  routeChanged(value): void {
    // tslint:disable-next-line: no-unused-expression
    !environment.production && console.log(value);
    // tslint:disable-next-line: no-unused-expression
    !environment.production && console.log(this.routes);

    const route = this.routes.find((r) => r.id === +value);
    if (route) {
      this.latestOffer.routeId = route.id;
      this.latestOffer.routeName = route.routeName;
    }
  }

  onImageUpload(imageFile): void {
    this.imageFile = imageFile.target.files[0];
  }

  onAddLatestOffer(): void {
    console.log(this.bsRangeValue[0]);
    this.latestOffer.startDate = this.bsRangeValue[0];
    this.latestOffer.endDate = this.bsRangeValue[1];

    // this.latestOffer.startDate = `${this.bsRangeValue[0].getDate()}-
    // ${this.bsRangeValue[0].getUTCMonth() + 1}-${this.bsRangeValue[0].getFullYear()}`;
    // this.latestOffer.endDate = `${this.bsRangeValue[1].getDate()}-
    // ${this.bsRangeValue[1].getUTCMonth() + 1}-${this.bsRangeValue[1].getFullYear()}`;

    console.log(this.latestOffer);
    if (this.editMode) {
      this.latestOffersService
        .updateOffer(this.imageFile, this.latestOffer)
        .subscribe((res) => {
          showNotification(
            'success',
            `${res.data.name} has been added`,
            this.toastr
          );
          console.log(res);
        });
    } else {
      this.latestOffersService
        .addNewOffer(this.imageFile, this.latestOffer)
        .subscribe((res) => {
          showNotification(
            'success',
            `${res.data.name} has been added`,
            this.toastr
          );
          console.log(res);
        });
    }
  }
}
