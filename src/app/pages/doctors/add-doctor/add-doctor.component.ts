import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { showNotification } from 'src/app/helpers/show-toast';
import { Doctor } from 'src/app/_models/doctor.model';
import { MobileRoutes } from 'src/app/_models/routes.model';
import { DoctorsService } from 'src/app/_services/doctors.service';
import { RoutesService } from 'src/app/_services/routes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  routes: MobileRoutes[];
  ranks = Array(15);
  imageFile;
  editMode = false;

  doctor: Doctor = {id: 0};

  constructor(
    private _DoctorsService: DoctorsService,
    private routesService: RoutesService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.editMode =
      this.activatedRoute.snapshot.url[1] &&
      this.activatedRoute.snapshot.url[1].path === 'edit' &&
      true;

    if (this.editMode) {
      const id = this.activatedRoute.snapshot.params.doctorId;
      this._DoctorsService.getDoctorById(id).subscribe((res) => {
        this.doctor = res.data;
        console.log(res.data);
        
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
      this.doctor.id = route.id;
      this.doctor.name = route.routeName;
    }
  }

  onImageUpload(imageFile): void {
    this.imageFile = imageFile.target.files[0];
  }

  onAddNewDoctor(): void {
    console.log(this.doctor);
    if (this.editMode) {
      this._DoctorsService
        .updateDoctor(this.imageFile, this.doctor)
        .subscribe((res) => {
          showNotification(
            'success',
            `${res.data.name} has been added`,
            this.toastr
          );
          console.log(res);
        });
    } else {
      this._DoctorsService
        .addNewDoctor(this.imageFile, this.doctor)
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
