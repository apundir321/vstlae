import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about/about.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { ContactComponent } from './contact/contact/contact.component';
import { NewproductComponent } from './newproduct/newproduct/newproduct.component';
import { OrdersComponent } from './orders/orders.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { StoreComponent } from './store/store/store.component';
import { TermsComponent } from './terms/terms.component';
import { UsedproductComponent } from './userproduct/usedproduct/usedproduct.component';


const routes: Routes = [
  
  {
    path: '',
    // loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
    component:OrdersComponent
  },
  {
    path: 'about.html',
    // loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    component:AboutComponent
  },
  {
    path: 'store.html',
    // loadChildren: () => import('./store/store.module').then(m => m.StoreModule)
    component:StoreComponent
  }
  ,
  {
    path: 'contact.html',
    // loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    component:ContactComponent
  },
  {
    path: 'blogs.html',
    // loadChildren: () => import('./blogs/blogs.module').then(m => m.BlogsModule)
    component:BlogComponent
  },
  {
    path: 'terms&condition.html',
    component: TermsComponent
  },
  {
    path: 'privacypolicy.html',
    component: PrivacyComponent
  }
  ,
  
  {
    path: 'usedProduct',
    // loadChildren: () => import('./userproduct/userproduct.module').then(m => m.UserproductModule)
    component:UsedproductComponent
  },{
    path: 'newProduct.html',
    // loadChildren: () => import('./newproduct/newproduct.module').then(m => m.NewproductModule)
    component:NewproductComponent
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/