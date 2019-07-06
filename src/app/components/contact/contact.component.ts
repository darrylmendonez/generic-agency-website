import { Component, OnInit } from '@angular/core';
import { SectionLayoutsData } from '../../data/sectionLayout.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactSectionLayout = SectionLayoutsData[4];

  constructor() { }

  ngOnInit() {
  }

}
