import { Component, OnInit } from '@angular/core';
import { SectionLayouts } from '../../models/sectionLayouts';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  sectionLayouts: SectionLayouts[];

  constructor() { }

  ngOnInit() {
    this.sectionLayouts = [
      {
        id: 4,
        divId: 'testimonial-section',
        title: 'Client Testimonials',
        parallaxSrc: 'assets/img/testimonial/testimonial-background.jpg'
      }
    ];
  }

}
