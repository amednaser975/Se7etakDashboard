import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { showNotification } from 'src/app/helpers/show-toast';
import { Doctor } from 'src/app/_models/doctor.model';
import { DoctorsService } from 'src/app/_services/doctors.service';
import { environment } from 'src/environments/environment';
import { baseUrl } from 'src/environments/environment.prod';

@Component({
  selector: 'app-doctors-lisiting',
  templateUrl: './doctors-lisiting.component.html',
  styleUrls: ['./doctors-lisiting.component.scss']
})
export class DoctorsLisitingComponent implements OnInit {

  doctorsArray: Doctor[] = [];
  dismissible = true;
  showAlertSuccess = false;
  successAlertMessage;
  loading = true;
  constructor(
    private _DoctorsService: DoctorsService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this._DoctorsService.getAllDoctors().subscribe((res) => {
      // tslint:disable-next-line: no-unused-expression
      !environment.production && console.log(res);
      res?.data?.items.map((doctor) => {
        doctor.imagePath = `${baseUrl}${doctor.imagePath}`;
        this.doctorsArray.push(doctor);
        this.loading = false;
      });
    });
  } 
  onDeleteHandler(id): void {
    console.log(id);
    this._DoctorsService.deleteDoctor(id).subscribe((res) => {
      console.log(res);
      this.showAlertSuccess = true;
      this.successAlertMessage = `${res.data.name} has been deleted`;
      showNotification('success', `${res.data.name} has been deleted`, this.toastr);
      this.doctorsArray = this.doctorsArray.filter(
        (doctor) => doctor.id !== res.data.id
      );
    });
  }

}
