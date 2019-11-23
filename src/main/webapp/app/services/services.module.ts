import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QcodebaseSharedModule } from 'app/shared/shared.module';

import { SERVICES_ROUTE, ServicesComponent } from './';

@NgModule({
  imports: [QcodebaseSharedModule, RouterModule.forRoot([SERVICES_ROUTE], { useHash: true })],
  declarations: [ServicesComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QcodebaseAppServicesModule {}
