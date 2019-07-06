import { Component, OnInit } from '@angular/core';
import {AppSettings} from '../../settings/settings';
import {Settings, MenuLink} from '../../settings/setting.model';
import { NavItems } from '../../models/navItems';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navItems: NavItems[];

  appSettings: Settings;
  brandLogoPath = 'assets/img/global/logo-small.png';

  constructor() {
    // this.navSettings = AppSettings.menu;
  }

  ngOnInit() {
    this.navItems = [
      {
        id: 1,
        title: 'Home',
        link: '#home-section'
      },
      {
        id: 2,
        title: 'About Us',
        link: '#about-section'
      },
      {
        id: 3,
        title: 'Our Mindset',
        link: '#mindset-section'
      },
      {
        id: 4,
        title: 'Client Testimonials',
        link: '#testimonial-section'
      },
      {
        id: 5,
        title: 'Contact Us',
        link: '#contact-section'
      },
    ];
  }

}
