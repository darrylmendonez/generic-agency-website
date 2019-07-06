import { Component, OnInit } from '@angular/core';
import { SectionLayouts } from '../../models/sectionLayouts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  sectionLayouts: SectionLayouts[];

  constructor() { }

  ngOnInit() {
    this.sectionLayouts = [
      {
        id: 5,
        divId: 'contact-section',
        title: 'Contact Us'
      }
    ];
  }

}
