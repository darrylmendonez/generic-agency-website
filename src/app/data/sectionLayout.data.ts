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
];

export const GlobalData = {
  logoSrc: 'assets/img/global/logo.png',
  alt: 'Agency Name'
};

export const HomeData = {
  // tslint:disable-next-line:max-line-length
  description: '<br /> We are part of <a href="http://www.nucleus-global.com/" target="_blank">Nucleus Global</a>,<br /> a full-service medical communications group with offices around the globe.',
  button: {
    href: '#contact-section',
    label: 'Contact Us <i class="material-icons right">send</i>'
  },
  aboutList: {
    title: 'About Us',
    listItems: [
      'A medical communications agency with offices in New Jersey, USA and London, UK',
      'Part of an independent organization that lives by its core values of respect, integrity, partnership, innovation, and fun'
    ]
  },
  offerLists: {
    title: 'We offer the following core services to our clients:',
    firstList: [
      'Strategic planning and support',
      'Medical communications and marketing support',
      'Scientific platform and core content development',
      'External expert identification and engagement planning',
      'Internal/corporate communications and alignment',
      'Comprehensive sales and MSL training support',
      'Scientific event management, including travel services'
    ],
    secondList: [
      'Publication planning and execution',
      'Congress planning and exhibit booth support',
      'Clinical trial support and investigator communications',
      'Creative concepting and design',
      'Video production',
      'Digital applications, interactive displays, learning management systems, and website development'
    ]
  }
};

// export const AboutData = {
  
// };

export const MindsetData = {
  columnOne: {
    title: 'Our Name',
    process: [
      '<strong>At the cellular level, scientific or signaling transduction</strong> pathways start with ',
      '<strong>ACTIVATION</strong>: A signal sets off a cascade of events that',
      '<strong>PROCESS</strong> critical information, culminating in a desired',
      '<strong>RESPONSE</strong>.'
    ]
  },
  columnTwo: {
    title: 'Our Approach',
    description: '<strong>We apply this response-driven, scientific pathways mindset to how we approach medical communications:</strong>',
    list: [
      'We deliver relevant, credible, and engaging medical communications that <strong>ACTIVATE</strong> target audiences',
      // tslint:disable-next-line:max-line-length
      'We build compelling strategies and <strong>PROCESS</strong> these into impactful multichannel communication plans that focus on desired outcomes',
      // tslint:disable-next-line:max-line-length
      'And because we are independently owned, we\'re able to <strong>RESPOND</strong> quickly to our clients\' evolving needs to grow their businesses',
    ],
    clincher: 'Now that\'s signaling change in healthcare communications.'
  }
};
