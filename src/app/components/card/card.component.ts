import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardHeadline;
  @Input() cardTitle;
  @Input() imgSrc;
  @Input() statistics;
  @Input() spanText;
  @Input() editUrl;
  @Input() id;
  @Input() loading = true;
  @Output() deleteSubmitHandler = new EventEmitter<number>();
  notificationModal: BsModalRef;
  notification = {
    keyboard: true,
    class: 'modal-dialog-centered modal-danger',
  };

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}
  openNotificationModal(modalNotification: TemplateRef<any>): void {
    this.notificationModal = this.modalService.show(
      modalNotification,
      this.notification
    );
  }
  onDeleteSubmit(): void {
    this.deleteSubmitHandler.emit(this.id);
    this.notificationModal.hide();
  }
}
