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
  // navSettings: MenuLink[];
  brandLogoPath = 'assets/img/global/logo-small.png';
  navItems = [
    {
      title: 'Home',
      link: '#home-section'
    },
    {
      title: 'About Us',
      link: '#about-section'
    },
    {
      title: 'Our Mindset',
      link: '#mindset-section'
    },
    {
      title: 'Client Testimonials',
      link: '#testimonial-section'
    },
    {
      title: 'Contact Us',
      link: '#contact-section'
    },
  ];

  constructor() {
    // this.navSettings = AppSettings.menu;
  }

  ngOnInit() {
  }

}
