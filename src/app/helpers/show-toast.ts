export function showNotification(type, message, toastr): void {
  const color = Math.floor(Math.random() * 5 + 1);
  if (type === 'default') {
    toastr.show(
      `<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">${message}</span></div>`,
      '',
      {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: false,
        titleClass: 'alert-title',
        positionClass: 'toast-top-center',
        toastClass:
          'ngx-toastr alert alert-dismissible alert-default alert-notify',
      }
    );
  }
  if (type === 'danger') {
    toastr.show(
      `<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">${message}</span></div>`,
      '',
      {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: false,
        titleClass: 'alert-title',
        positionClass: 'toast-top-center',
        toastClass:
          'ngx-toastr alert alert-dismissible alert-danger alert-notify',
      }
    );
  }
  if (type === 'success') {
    toastr.show(
      `<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">${message}</span></div>`,
      '',
      {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: false,
        titleClass: 'alert-title',
        positionClass: 'toast-top-center',
        toastClass:
          'ngx-toastr alert alert-dismissible alert-success alert-notify',
      }
    );
  }
  if (type === 'warning') {
    toastr.show(
      `<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">${message}</span></div>`,
      '',
      {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: false,
        titleClass: 'alert-title',
        positionClass: 'toast-top-center',
        toastClass:
          'ngx-toastr alert alert-dismissible alert-warning alert-notify',
      }
    );
  }
  if (type === 'info') {
    toastr.show(
      `<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">${message}</span></div>`,
      '',
      {
        timeOut: 8000,
        closeButton: true,
        enableHtml: true,
        tapToDismiss: false,
        titleClass: 'alert-title',
        positionClass: 'toast-top-center',
        toastClass:
          'ngx-toastr alert alert-dismissible alert-info alert-notify',
      }
    );
  }
}
