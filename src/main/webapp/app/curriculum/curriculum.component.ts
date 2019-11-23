import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'CurriculumComponent message';
  }

  ngOnInit() {}
}
