import {BaseLink, MenuLink, Settings} from './setting.model';

export const AppSettings: Settings = {
  parallax: true,
  menu: [
    {
      label: 'Home',
      url: './',
      isTargetScroll: true,
      targetFragment: 'home'
    },
    {
      label: 'About Us',
      url: './',
      isTargetScroll: true,
      targetFragment: 'section-1'
    },
    {
      label: 'Our Mindset',
      url: './',
      isTargetScroll: true,
      targetFragment: 'section-2'
    },
    {
      label: 'Client Testimonials',
      url: './',
      isTargetScroll: true,
      targetFragment: 'section-3'
    },
    {
      label: 'Contact Us',
      url: './',
      isTargetScroll: true,
      targetFragment: 'section-4'
    }
  ],
  socialLinks: []
};
