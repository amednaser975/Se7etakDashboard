import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LatestService } from 'src/app/_models/latestService.model';
import { MobileRoutes } from 'src/app/_models/routes.model';
import { LatestServicesService } from 'src/app/_services/latest-services.service';
import { RoutesService } from 'src/app/_services/routes.service';
import { ToastrService } from 'ngx-toastr';
import { showNotification } from 'src/app/helpers/show-toast';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-latest-service',
  templateUrl: './add-latest-service.component.html',
  styleUrls: ['./add-latest-service.component.scss']
})
export class AddLatestServiceComponent implements OnInit {

  routes: MobileRoutes[];
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  ranks = Array(15);
  imageFile;
  editMode = false;

  latestService: LatestService = {};

  constructor(
    private latestServiceService: LatestServicesService,
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
      const id = this.activatedRoute.snapshot.params.serviceId;
      this.latestServiceService.getServiceById(id).subscribe((res) => {
        this.latestService = res.data;
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
      this.latestService.routeId = route.id;
      this.latestService.routeName = route.routeName;
    }
  }

  onImageUpload(imageFile): void {
    this.imageFile = imageFile.target.files[0];
  }

  onAddLatestOffer(): void {
    console.log(this.bsRangeValue[0]);
    this.latestService.startDate = this.bsRangeValue[0];
    this.latestService.endDate = this.bsRangeValue[1];

    // this.latestService.startDate = `${this.bsRangeValue[0].getDate()}-
    // ${this.bsRangeValue[0].getUTCMonth() + 1}-${this.bsRangeValue[0].getFullYear()}`;
    // this.latestService.endDate = `${this.bsRangeValue[1].getDate()}-
    // ${this.bsRangeValue[1].getUTCMonth() + 1}-${this.bsRangeValue[1].getFullYear()}`;

    console.log(this.latestService);
    if (this.editMode) {
      this.latestServiceService
        .updateService(this.imageFile, this.latestService)
        .subscribe((res) => {
          showNotification(
            'success',
            `${res.data.name} has been added`,
            this.toastr
          );
          console.log(res);
        });
    } else {
      this.latestServiceService
        .addNewService(this.imageFile, this.latestService)
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
