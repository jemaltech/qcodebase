import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QcodebaseSharedModule } from 'app/shared/shared.module';

import { PAYPAL_PAYMENTS_ROUTE, PaypalPaymentsComponent } from './';

@NgModule({
  imports: [QcodebaseSharedModule, RouterModule.forRoot([PAYPAL_PAYMENTS_ROUTE], { useHash: true })],
  declarations: [PaypalPaymentsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QcodebaseAppPaypalPaymentsModule {}
