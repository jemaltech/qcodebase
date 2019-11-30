import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'paypal-completed-payments',
        loadChildren: () =>
          import('./paypal-completed-payments/paypal-completed-payments.module').then(m => m.QcodebasePaypalCompletedPaymentsModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class QcodebaseEntityModule {}
