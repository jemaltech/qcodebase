import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QcodebaseSharedModule } from 'app/shared/shared.module';
import { PaypalCompletedPaymentsComponent } from './paypal-completed-payments.component';
import { PaypalCompletedPaymentsDetailComponent } from './paypal-completed-payments-detail.component';
import { PaypalCompletedPaymentsUpdateComponent } from './paypal-completed-payments-update.component';
import {
  PaypalCompletedPaymentsDeletePopupComponent,
  PaypalCompletedPaymentsDeleteDialogComponent
} from './paypal-completed-payments-delete-dialog.component';
import { paypalCompletedPaymentsRoute, paypalCompletedPaymentsPopupRoute } from './paypal-completed-payments.route';

const ENTITY_STATES = [...paypalCompletedPaymentsRoute, ...paypalCompletedPaymentsPopupRoute];

@NgModule({
  imports: [QcodebaseSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    PaypalCompletedPaymentsComponent,
    PaypalCompletedPaymentsDetailComponent,
    PaypalCompletedPaymentsUpdateComponent,
    PaypalCompletedPaymentsDeleteDialogComponent,
    PaypalCompletedPaymentsDeletePopupComponent
  ],
  entryComponents: [PaypalCompletedPaymentsDeleteDialogComponent]
})
export class QcodebasePaypalCompletedPaymentsModule {}
