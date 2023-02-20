import { AfterViewInit, Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $(".testimonials-carousel").owlCarousel({

      autoplay: true,
  
      dots: true,
  
      loop: true,
  
      items: 1
  
    });
  }

  getAQuote()
{
  alert("hello");
  $('#exampleModal').modal('show');
}

}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/