import { Component, OnInit } from '@angular/core';
import { LatestOffer } from 'src/app/_models/latestOffers.model';
import { LatestOffersService } from 'src/app/_services/latest-offers.service';
import { environment, baseUrl } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { showNotification } from 'src/app/helpers/show-toast';

@Component({
  selector: 'app-latest-offers',
  templateUrl: './latest-offers.component.html',
  styleUrls: ['./latest-offers.component.scss'],
})
export class LatestOffersComponent implements OnInit {
  latestOffersArray: LatestOffer[] = [];
  dismissible = true;
  showAlertSuccess = false;
  successAlertMessage;
  loading = true;
  constructor(
    private latestOffersService: LatestOffersService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.latestOffersService.getAllOffers().subscribe((res) => {
      // tslint:disable-next-line: no-unused-expression
      !environment.production && console.log(res);

      res?.data?.latestOffers.map((offer) => {
        offer.picture = `${baseUrl}${offer.picture}`;
        this.latestOffersArray.push(offer);
        this.loading = false;
      });
    });
  }
  onDeleteHandler(id): void {
    console.log(id);
    this.latestOffersService.deleteOffer(id).subscribe((res) => {
      console.log(res);
      this.showAlertSuccess = true;
      // this.successAlertMessage = `${res.data.name} has been deleted`;
      showNotification('success', `${res.data.name} has been deleted`, this.toastr);
      this.latestOffersArray = this.latestOffersArray.filter(
        (offer) => offer.id !== res.data.id
      );
    });
  }
}
