import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { IPaypalCompletedPayments } from 'app/shared/model/paypal-completed-payments.model';
import { PaypalCompletedPaymentsService } from './paypal-completed-payments.service';

@Component({
  selector: 'jhi-paypal-completed-payments',
  templateUrl: './paypal-completed-payments.component.html'
})
export class PaypalCompletedPaymentsComponent implements OnInit, OnDestroy {
  paypalCompletedPayments: IPaypalCompletedPayments[];
  eventSubscriber: Subscription;
  currentSearch: string;

  constructor(
    protected paypalCompletedPaymentsService: PaypalCompletedPaymentsService,
    protected eventManager: JhiEventManager,
    protected activatedRoute: ActivatedRoute
  ) {
    this.currentSearch =
      this.activatedRoute.snapshot && this.activatedRoute.snapshot.queryParams['search']
        ? this.activatedRoute.snapshot.queryParams['search']
        : '';
  }

  loadAll() {
    if (this.currentSearch) {
      this.paypalCompletedPaymentsService
        .search({
          query: this.currentSearch
        })
        .subscribe((res: HttpResponse<IPaypalCompletedPayments[]>) => (this.paypalCompletedPayments = res.body));
      return;
    }
    this.paypalCompletedPaymentsService.query().subscribe((res: HttpResponse<IPaypalCompletedPayments[]>) => {
      this.paypalCompletedPayments = res.body;
      this.currentSearch = '';
    });
  }

  search(query) {
    if (!query) {
      return this.clear();
    }
    this.currentSearch = query;
    this.loadAll();
  }

  clear() {
    this.currentSearch = '';
    this.loadAll();
  }

  ngOnInit() {
    this.loadAll();
    this.registerChangeInPaypalCompletedPayments();
  }

  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IPaypalCompletedPayments) {
    return item.id;
  }

  registerChangeInPaypalCompletedPayments() {
    this.eventSubscriber = this.eventManager.subscribe('paypalCompletedPaymentsListModification', () => this.loadAll());
  }
}
