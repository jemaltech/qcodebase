import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-training-options',
  templateUrl: './training-options.component.html',
  styleUrls: ['training-options.component.scss']
})
export class TrainingOptionsComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'TrainingOptionsComponent message';
  }

  ngOnInit() {}
}
