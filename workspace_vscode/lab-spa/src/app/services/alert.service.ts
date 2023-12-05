import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable ({
  providedIn: 'root',
})

export class AlertService {

  constructor() {}

  private showGenericAlert(
    title: string,
    message: string,
    icon: SweetAlertIcon
  ): void {
    Swal.fire(title, message, icon);
  }

  public error(title: string, message: string): void {
    this.showGenericAlert(title, message, 'error');
  }

  public success(title: string, message: string): void {
    this.showGenericAlert(title, message, 'success');
  }

}
