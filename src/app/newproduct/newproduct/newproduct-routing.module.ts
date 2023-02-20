import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewproductComponent } from './newproduct.component';



const routes: Routes = [
  {
    path: '',
    component: NewproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewproductRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/