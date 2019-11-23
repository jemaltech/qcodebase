import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QcodebaseSharedModule } from 'app/shared/shared.module';

import { CURRICULUM_ROUTE, CurriculumComponent } from './';

@NgModule({
  imports: [QcodebaseSharedModule, RouterModule.forRoot([CURRICULUM_ROUTE], { useHash: true })],
  declarations: [CurriculumComponent],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QcodebaseAppCurriculumModule {}
