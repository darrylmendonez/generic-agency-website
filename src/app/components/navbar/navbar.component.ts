import { Component, OnInit } from '@angular/core';
import {AppSettings} from '../../settings/settings';
import {Settings, MenuLink} from '../../settings/setting.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appSettings: Settings;
  navSettings: MenuLink[];
  brandName = 'Brand Name';
  navTitle = 'Navbar Title';
  links = [
    {
      title: 'Home',
      link: ''
    },
    {
      title: 'About Us',
      link: 'about'
    },
    {
      title: 'How We Work',
      link: 'work'
    },
    {
      title: 'Expertise',
      link: 'expertise'
    },
    {
      title: 'Contact Us',
      link: 'contact'
    },
  ];

  constructor() {
    this.navSettings = AppSettings.menu;
  }

  ngOnInit() {
  }

}
