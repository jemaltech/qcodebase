import { Route } from '@angular/router';

import { CurriculumComponent } from './curriculum.component';

export const CURRICULUM_ROUTE: Route = {
  path: 'curriculum',
  component: CurriculumComponent,
  data: {
    authorities: [],
    pageTitle: 'curriculum.title'
  }
};
