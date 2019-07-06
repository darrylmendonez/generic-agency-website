import { Component, OnInit } from '@angular/core';
import { SectionLayouts } from '../../models/sectionLayouts';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  sectionLayouts: SectionLayouts[];

  constructor() { }

  ngOnInit() {
    this.sectionLayouts = [
      {
        id: 2,
        divId: 'about-section',
        title: 'About',
        parallaxSrc: 'ssets/img/about/about-background.jpg'
      }
    ];
  }

}
