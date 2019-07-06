import { Component, OnInit } from '@angular/core';
// import {AppSettings} from '../../settings/settings';
// import {Settings, MenuLink} from '../../settings/setting.model';
import { NavItemsData } from '../../data/sectionLayout.data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    navItems = NavItemsData;

  // appSettings: Settings;
  brandLogoPath = 'assets/img/global/logo-small.png';

  constructor() {
    // this.navSettings = AppSettings.menu;
  }

  ngOnInit() {
  }

}
