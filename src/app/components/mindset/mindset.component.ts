import { Component, OnInit } from '@angular/core';
import { SectionLayouts } from '../../models/sectionLayouts';

@Component({
  selector: 'app-mindset',
  templateUrl: './mindset.component.html',
  styleUrls: ['./mindset.component.scss']
})
export class MindsetComponent implements OnInit {
  sectionLayouts: SectionLayouts[];

  constructor() { }

  ngOnInit() {
    this.sectionLayouts = [
      {
        id: 3,
        divId: 'mindset-section',
        title: 'Our Mindset',
        parallaxSrc: 'assets/img/mindset/mindset-background.jpg'
      }
    ];
  }

}
