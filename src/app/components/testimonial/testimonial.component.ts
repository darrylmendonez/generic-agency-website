import { Component, OnInit } from '@angular/core';
import { SectionLayoutsData, GlobalData } from '../../data/sectionLayout.data';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  testimonialLayout = SectionLayoutsData[3];
  globalData = GlobalData;

  constructor() { }

  ngOnInit() {
  }

}
