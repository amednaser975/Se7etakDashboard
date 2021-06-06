import { Component, OnInit } from '@angular/core';
import { showNotification } from 'src/app/helpers/show-toast';
import { Test } from 'src/app/_models/test.model';
import { TestsService } from 'src/app/_services/tests.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss'],
})
export class TestsListComponent implements OnInit {
  testArray: Test[];
  showAlertSuccess = false;
  loading = true;
  constructor(
    private testService: TestsService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.testService.getAllTests().subscribe((res) => {
      this.testArray = res.data.tests;
      this.loading = false;
      console.log(this.testArray);
    });
  }

  onDeleteHandler(id): void {
    console.log(id);
    this.testService.deleteTest(id).subscribe((res) => {
      console.log(res);
      this.showAlertSuccess = true;
      // this.successAlertMessage = `${res.data.name} has been deleted`;
      showNotification(
        'success',
        `${res.data.name} has been deleted`,
        this.toastr
      );
      this.testArray = this.testArray.filter((test) => test.id !== res.data.id);
    });
  }
}
