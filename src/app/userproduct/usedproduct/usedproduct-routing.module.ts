import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsedproductComponent } from './usedproduct.component';




const routes: Routes = [
  {
    path: '',
    component: UsedproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsedProductRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/