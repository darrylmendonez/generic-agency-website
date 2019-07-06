import { Component, OnInit } from '@angular/core';
import { SectionLayoutsData, GlobalData, ContactData } from '../../data/sectionLayout.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactSectionLayout = SectionLayoutsData[5];
  globalData = GlobalData;
  contactData = ContactData;

  constructor() { }

  ngOnInit() {
  }

}
