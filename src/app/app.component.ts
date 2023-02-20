import { AfterViewInit, Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import AOS from 'aos'; //AOS - 1

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare let $: any;
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  url: string = "https://booking.vstl.ae/portal-embed#/customer/smartvaluetradingllc";
  urlSafe: SafeResourceUrl;


  title = '';
  name = 'Angular 7 AOS Animations';
  signupForm: FormGroup;
  error: boolean = false;

  message: any = '';
  loading: boolean = false;
  phone:string = '';
  email:any;
  password:any;
  confirmPass:any;
  mobile:any;
  firstname:any;
  lastname:any;
  constructor(private router: Router,public sanitizer: DomSanitizer) {

    this.signupForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPass: new FormControl(''),
      mobile: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    });
  }


  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    AOS.init({disable: 'mobile'});//AOS - 2
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
  }

    //------------------test-------------------

    separateDialCode = false;
    SearchCountryField = SearchCountryField;
    CountryISO = CountryISO;
    PhoneNumberFormat = PhoneNumberFormat;
    preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  
    changePreferredCountries() {
      this.preferredCountries = [CountryISO.India, CountryISO.Canada];
    }

    Quite_Form() {
      // debugger
      
      const name = (<HTMLInputElement>document.getElementById("nameq")).value;
      let phone = (<HTMLInputElement>document.getElementById("phone")).value;
      const email = (<HTMLInputElement>document.getElementById("emailq")).value;
      const company = (<HTMLInputElement>document.getElementById("company")).value;
      const items = (<HTMLInputElement>document.getElementById("items")).value;
      const quantity = (<HTMLInputElement>document.getElementById("quantity")).value;
      console.log(this.phone);
      phone = this.phone['e164Number'];
  
  
      function emailMatch(email) {
  
          return email.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")
  
          // console.log("email is valid")
      }
  
      function nameMatch(name) {
          if (name.match("^[a-zA-Z ]{3,}$")) {
              return true
          }
          else {
              return false
          }
      }
      function phonematch(phone) {
          if (phone.match("^((\\+91-?)|0)?[0-9]{10}$")) {
              return true
          } else {
              return false
          }
      }
      // console.log("phone match", phonematch(phone))
  
      function errorText(id, message) {
          document.getElementById(id).innerHTML = message
          setTimeout(() => {
              document.getElementById(id).innerHTML = "";
          }, 3000)
          return false
      }
  
  
      if (name == "" || name == null) {
          errorText("NameError", "please enter Your name")
      } else if (!nameMatch(name)) {
          errorText("NameError", "please enter Your name")
      }
  
      else if (phone == "" || phone == null) {
  
          errorText("PhoneError", "please enter  phone number")
      }
      else if (!phonematch(phone)) {
  
          errorText("PhoneError", "please enter valid phone number")
      }
  
      else if (email == "" || email == null) {
  
          errorText("EmailError", "please enter Your email")
      }
      else if (!emailMatch(email)) {
  
          errorText("EmailError", "please enter  valid email")
      }
  
      else if (company == "" || company == null) {
  
          errorText("CompanyError", "please enter company name")
      } 
  
      else if (items == "" || items == null) {
  
          errorText("ItemsError", "please select item")
      }
       
      else if (quantity == "" || quantity == null) {
  
          errorText("QuantityError", "please enter quantity")
      } 
  
      else {
  
          // console.log("your data ->", name, phone, email, company, items, quantity)
  
          var data = {
              service_id: 'service_8zp4yhp',
              template_id: 'template_4a4f1rp',
              user_id: 'user_mTjMBBP092bpZsnZTyLfp',
              template_params: {
                  'from_name': name,
                  'from_phone': this.phone,
                  'from_email': email,
                  'from_company': company,
                  'from_item': items,
                  'from_quantity': quantity,
                  'to_mail': 'contact@vstl.ae',
                  // 'to_mail': 'davidstark0741@gmail.com',
                  'to_sender': email
  
              }
          };
  
          $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
              type: 'POST',
              data: JSON.stringify(data),
              contentType: 'application/json'
          }).done(function () {
              alert("Submited Successfully");
              window.location.href="index.html";
  
              $('#myModal2').modal('show');
              (<HTMLInputElement>document.getElementById("name")).value = "";
              (<HTMLInputElement>document.getElementById("phone")).value = "";
              (<HTMLInputElement>document.getElementById("email")).value = "";
              (<HTMLInputElement>document.getElementById("company")).value = "";
              (<HTMLInputElement>document.getElementById("items")).value = "";
              (<HTMLInputElement>document.getElementById("quantity")).value = "";
  
          }).fail(function (error) {
              alert('Oops... ' + JSON.stringify(error));
          });
      }
  
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/