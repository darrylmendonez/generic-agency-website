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
    title: 'Data',
    link: '#data-section'
  },
  {
    id: 6,
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
    divId: 'data-section',
    title: 'Data',
    parallaxSrc: 'assets/img/data/data-background.jpg'
  },
  {
    id: 6,
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

export const AboutData = {
  columnOne: {
    title: 'Our Leadership',
    profileImgSrc: 'assets/img/about/profiles/profile1.png',
    agencyName: 'Agency Name US'
  },
  columnTwo: {
    title: 'Our Team',
    subTitle: 'Our team of experienced professionals:',
    clientServices: {
      title: 'Client Services',
      // tslint:disable-next-line:max-line-length
      subList: 'Specializing in business planning and strategic consultation, client communications, general account management, and overall program&nbsp;oversight'
    },
    scientificServices: {
      title: 'Scientific Services',
      // tslint:disable-next-line:max-line-length
      subList: 'Individuals with expertise in scientific research,   strategic communication planning (landscape assessments, gap analyses), scientific direction, and content development'
    }
  }
};

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

export const TestimonialData = [
  {
    quote: 'You guys are absolutely the very best! Thank you!',
    author: 'Global Indication Lead, speaker training event'
  },
  {
    quote: 'Might be one of the first times for me that I have no comments and changes. Great work.',
    author: 'Brand Training Manager, sales training materials'
  },
  {
    quote: 'We were all so impressed by how these look! Please let your team know we appreciate their work on this.',
    author: 'Senior Medical Communications Specialist, congress booth asset support'
  },
  {
    quote: 'Everything was very well planned and executed really well with very good attention to detail.... Kudos to your team.',
    author: 'Senior Medical Director, advisory board series'
  }
];

export const DataData = {
  details: 'Hover over any data graph to see more details'
};

export const ContactData = {
  description: 'Would you like to learn more about our core capabilities and/or open positions?',
  locations: [
    {
      title: 'Main Location',
      address: '25 Independence Boulevard ',
      address2: 'Suite 402',
      address3: 'Warren, NJ 07059',
      phone: '908-360-4360 '
    },
    {
      title: 'London location:',
      address: 'Admiral House, 76-78 Old Street, London,',
      address2: 'EC1V ',
      address3: '9AZ, United Kingdom',
      phone: '+44 207 398 0500'
    }
  ],
  mailInfo: {
    href: 'mailto:info@agencyname.com',
    emailAddress: 'info@agencyname.com'
  },
  careerOpps: {
    description: 'Learn about career opportunities<br> at Agency and<br> across Nucleus Global:',
    href: 'https://chp.tbe.taleo.net/chp01/ats/careers/v2/jobSearch?act=redirectCwsV2&cws=52&org=NUCLEUSHOLDINGS',
    buttonLabel: 'Explore Career Opportunities'
  }
}