import { Route } from '@angular/router';

import { ServicesComponent } from './services.component';

export const SERVICES_ROUTE: Route = {
  path: 'services',
  component: ServicesComponent,
  data: {
    authorities: [],
    pageTitle: 'services.title'
  }
};
