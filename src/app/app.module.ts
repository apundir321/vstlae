import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about/about.component';
import { StoreComponent } from './store/store/store.component';
import { ContactComponent } from './contact/contact/contact.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { UsedproductComponent } from './userproduct/usedproduct/usedproduct.component';
import { NewproductComponent } from './newproduct/newproduct/newproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    PrivacyComponent,
    TermsComponent,
    OrdersComponent,
    AboutComponent,
    StoreComponent,
    ContactComponent,
    BlogComponent,
    UsedproductComponent,
    NewproductComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: './'}],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/