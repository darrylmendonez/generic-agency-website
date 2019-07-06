import { Component, OnInit } from '@angular/core';
import { SectionLayoutsData } from '../../data/sectionLayout.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutSectionLayout = SectionLayoutsData[1];

  constructor() { }

  ngOnInit() {
  }

}
