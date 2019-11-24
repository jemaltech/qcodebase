import { Route } from '@angular/router';

import { ContactUsComponent } from './contact-us.component';

export const CONTACT_US_ROUTE: Route = {
  path: 'contact-us',
  component: ContactUsComponent,
  data: {
    authorities: [],
    pageTitle: 'contact-us.title'
  }
};
