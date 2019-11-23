import { Route } from '@angular/router';

import { TrainingOptionsComponent } from './training-options.component';

export const TRAINING_OPTIONS_ROUTE: Route = {
  path: 'training-options',
  component: TrainingOptionsComponent,
  data: {
    authorities: [],
    pageTitle: 'training-options.title'
  }
};
