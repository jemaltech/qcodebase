import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';
import { JhiAlertService } from 'ng-jhipster';
import { IPaypalCompletedPayments, PaypalCompletedPayments } from 'app/shared/model/paypal-completed-payments.model';
import { PaypalCompletedPaymentsService } from './paypal-completed-payments.service';
import { IUser } from 'app/core/user/user.model';
import { UserService } from 'app/core/user/user.service';

@Component({
  selector: 'jhi-paypal-completed-payments-update',
  templateUrl: './paypal-completed-payments-update.component.html'
})
export class PaypalCompletedPaymentsUpdateComponent implements OnInit {
  isSaving: boolean;

  users: IUser[];

  editForm = this.fb.group({
    id: [],
    date: [null, [Validators.required]],
    idPayment: [null, [Validators.required]],
    currency: [null, [Validators.required]],
    amount: [null, [Validators.required, Validators.min(0)]],
    email: [null, [Validators.required]],
    name: [null, [Validators.required]],
    status: [null, [Validators.required]],
    user: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected paypalCompletedPaymentsService: PaypalCompletedPaymentsService,
    protected userService: UserService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ paypalCompletedPayments }) => {
      this.updateForm(paypalCompletedPayments);
    });
    this.userService
      .query()
      .subscribe((res: HttpResponse<IUser[]>) => (this.users = res.body), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(paypalCompletedPayments: IPaypalCompletedPayments) {
    this.editForm.patchValue({
      id: paypalCompletedPayments.id,
      date: paypalCompletedPayments.date != null ? paypalCompletedPayments.date.format(DATE_TIME_FORMAT) : null,
      idPayment: paypalCompletedPayments.idPayment,
      currency: paypalCompletedPayments.currency,
      amount: paypalCompletedPayments.amount,
      email: paypalCompletedPayments.email,
      name: paypalCompletedPayments.name,
      status: paypalCompletedPayments.status,
      user: paypalCompletedPayments.user
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const paypalCompletedPayments = this.createFromForm();
    if (paypalCompletedPayments.id !== undefined) {
      this.subscribeToSaveResponse(this.paypalCompletedPaymentsService.update(paypalCompletedPayments));
    } else {
      this.subscribeToSaveResponse(this.paypalCompletedPaymentsService.create(paypalCompletedPayments));
    }
  }

  private createFromForm(): IPaypalCompletedPayments {
    return {
      ...new PaypalCompletedPayments(),
      id: this.editForm.get(['id']).value,
      date: this.editForm.get(['date']).value != null ? moment(this.editForm.get(['date']).value, DATE_TIME_FORMAT) : undefined,
      idPayment: this.editForm.get(['idPayment']).value,
      currency: this.editForm.get(['currency']).value,
      amount: this.editForm.get(['amount']).value,
      email: this.editForm.get(['email']).value,
      name: this.editForm.get(['name']).value,
      status: this.editForm.get(['status']).value,
      user: this.editForm.get(['user']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPaypalCompletedPayments>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackUserById(index: number, item: IUser) {
    return item.id;
  }
}
