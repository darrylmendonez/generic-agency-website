import { Component, OnInit } from '@angular/core';
import { SectionLayoutsData, GlobalData, MindsetData } from '../../data/sectionLayout.data';

@Component({
  selector: 'app-mindset',
  templateUrl: './mindset.component.html',
  styleUrls: ['./mindset.component.scss']
})
export class MindsetComponent implements OnInit {
  mindsetLayout = SectionLayoutsData[2];
  globalData = GlobalData;
  mindsetData = MindsetData;

  constructor() { }

  ngOnInit() {
  }

}
