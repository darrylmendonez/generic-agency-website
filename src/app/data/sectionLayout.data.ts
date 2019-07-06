import { NavItems } from '../models/navItems';
import { SectionLayouts } from '../models/sectionLayouts';

export const NavItemsData: NavItems[] = [
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

export const SectionLayoutsData: SectionLayouts[] = [
  {
    id: 1,
    divId: 'home-section',
    title: 'Welcome',
    parallaxSrc: 'assets/img/home/home-background.jpg'
  },
  {
    id: 2,
    divId: 'about-section',
    title: 'About Us',
    parallaxSrc: 'ssets/img/about/about-background.jpg'
  },
  {
    id: 3,
    divId: 'mindset-section',
    title: 'Our Mindset',
    parallaxSrc: 'assets/img/mindset/mindset-background.jpg'
  },
  {
    id: 4,
    divId: 'testimonial-section',
    title: 'Client Testimonials',
    parallaxSrc: 'assets/img/testimonial/testimonial-background.jpg'
  },
  {
    id: 5,
    divId: 'contact-section',
    title: 'Contact Us'
  }
]