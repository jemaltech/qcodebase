import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-services',
  templateUrl: './services.component.html',
  styleUrls: ['services.component.scss']
})
export class ServicesComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'ServicesComponent message';
  }

  ngOnInit() {}
}
