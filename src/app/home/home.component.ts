import { fadeInUp, slide } from './../animations';

import { Component, OnInit } from '@angular/core';
import { pulse } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    pulse,
    fadeInUp,
    slide
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
