import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QcodebaseSharedModule } from 'app/shared/shared.module';

import { TRAINING_OPTIONS_ROUTE, TrainingOptionsComponent } from './';

@NgModule({
  imports: [QcodebaseSharedModule, RouterModule.forRoot([TRAINING_OPTIONS_ROUTE], { useHash: true })],
  declarations: [TrainingOptionsComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QcodebaseAppTrainingOptionsModule {}
