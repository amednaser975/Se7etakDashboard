import { Component, OnInit } from '@angular/core';
import { LatestService } from 'src/app/_models/latestService.model';
import { ToastrService } from 'ngx-toastr';
import { baseUrl, environment } from 'src/environments/environment';
import { showNotification } from 'src/app/helpers/show-toast';
import { LatestServicesService } from 'src/app/_services/latest-services.service';

@Component({
  selector: 'app-latest-services-list',
  templateUrl: './latest-services-list.component.html',
  styleUrls: ['./latest-services-list.component.scss'],
})
export class LatestServicesListComponent implements OnInit {
  latestServiceArray: LatestService[] = [];
  dismissible = true;
  showAlertSuccess = false;
  successAlertMessage;
  loading = true;
  shimmerArray = Array(4);
  constructor(
    private latestService: LatestServicesService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.latestService.getAllServices().subscribe((res) => {
      // tslint:disable-next-line: no-unused-expression
      !environment.production && console.log(res);

      res?.data?.services.map((service) => {
        service.picture = `${baseUrl}${service.picture}`;
        this.latestServiceArray.push(service);
      });

      this.loading = false;
    });
  }
  onDeleteHandler(id): void {
    console.log(id);
    this.latestService.deleteService(id).subscribe((res) => {
      console.log(res);
      this.showAlertSuccess = true;
      // this.successAlertMessage = `${res.data.name} has been deleted`;
      showNotification(
        'success',
        `${res.data.name} has been deleted`,
        this.toastr
      );
      this.latestServiceArray = this.latestServiceArray.filter(
        (service) => service.id !== res.data.id
      );
    });
  }
}
