import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestsService } from 'src/app/_services/tests.service';
import { ToastrService } from 'ngx-toastr';
import { Test, TestType } from 'src/app/_models/test.model';
import { showNotification } from 'src/app/helpers/show-toast';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss'],
})
export class AddTestComponent implements OnInit {
  testTypes: TestType[];
  editMode = false;

  test: Test = {};

  constructor(
    private testService: TestsService,
    private activatedRoute: ActivatedRoute,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.editMode =
      this.activatedRoute.snapshot.url[1] &&
      this.activatedRoute.snapshot.url[1].path === 'edit' &&
      true;

    if (this.editMode) {
      const id = this.activatedRoute.snapshot.params.testId;
      this.testService.getTestById(id).subscribe((res) => {
        this.test = res.data;
        console.log(res.data.startDate);
        console.log(res);
      });
    }

    this.testService.getAllTestTypes().subscribe((res) => {
      this.testTypes = res.data?.testTypes;
    });
  }

  onAddTest(): void {
    console.log(this.test);

    if (this.editMode) {
      // this.testService
      //   .updateService(this.imageFile, this.latestService)
      //   .subscribe((res) => {
      //     showNotification(
      //       'success',
      //       `${res.data.name} has been added`,
      //       this.toastr
      //     );
      //     console.log(res);
      //   });
    } else {
      this.testService.addNewTest(this.test).subscribe((res) => {
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
