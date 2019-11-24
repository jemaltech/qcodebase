import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'ContactUsComponent message';
  }

  ngOnInit() {}
}
