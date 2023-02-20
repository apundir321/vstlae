import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  constructor(public sanitizer: DomSanitizer) { }
  url: string = "https://booking.vstl.ae/portal-embed#/customer/smartvaluetradingllc";
  zohoUrl : string = "https://forms.zohopublic.com/smartvaluetradingllc/form/SendUsAMessage/formperma/CyfCKt-gr1FuATrwxfwSRd-C08IoKpOAoE-dq-juOPc?zf_rszfm=1";
  urlSafe: SafeResourceUrl;
  zohoUrlSafe : SafeResourceUrl;
  ngOnInit(): void {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.zohoUrlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.zohoUrl);

      } 





}
