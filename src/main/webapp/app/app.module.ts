import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { QcodebaseSharedModule } from 'app/shared/shared.module';
import { QcodebaseCoreModule } from 'app/core/core.module';
import { QcodebaseAppRoutingModule } from './app-routing.module';
import { QcodebaseHomeModule } from './home/home.module';
import { QcodebaseEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    QcodebaseSharedModule,
    QcodebaseCoreModule,
    QcodebaseHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    QcodebaseEntityModule,
    QcodebaseAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class QcodebaseAppModule {}
