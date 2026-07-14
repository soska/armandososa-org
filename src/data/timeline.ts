export interface TimelineLink {
  label: string;
  url: string;
}

export interface TimelineScreenshot {
  src: string;
  alt: string;
}

export interface TimelineSubRole {
  title: string;
  startDate: string;
  endDate: string;
  description?: string;
  links?: TimelineLink[];
  screenshots?: TimelineScreenshot[];
}

export interface TimelineEntry {
  type: 'education' | 'work';
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  description?: string;
  links?: TimelineLink[];
  screenshots?: TimelineScreenshot[];
  subRoles?: TimelineSubRole[];
}

export const timeline: TimelineEntry[] = [
  {
    type: 'work',
    title: 'Designer',
    organization: 'Cake Software Foundation',
    // location: 'Guadalajara, Jalisco, Mexico',
    startDate: '2006-04',
    endDate: '2010-08',
    description:
      "Designed and developed the second and third generations of cakephp.org, combining UI design with frontend engineering for one of the web's most influential PHP frameworks.",
    links: [
      { label: 'Archived cakephp.org (2008)', url: 'https://web.archive.org/web/2008/http://cakephp.org/' },
      { label: 'Redesign retrospective', url: 'http://mark-story.com/posts/view/re-designing-cakephp' },
    ],
    screenshots: [
      { src: 'https://placehold.co/600x400', alt: 'CakePHP website placeholder screenshot' },
      { src: 'https://placehold.co/600x400', alt: 'CakePHP detail placeholder screenshot' },
    ],
  },

  {
    type: 'work',
    title: 'Design Consultant',
    organization: 'Crowdvine',
    location: 'Guadalajara, Jalisco, Mexico',
    startDate: '2010-02',
    endDate: '2010-12',
    description:
      'Designed branding, frontend architecture, and reusable templates for a social event platform.',
    links: [
      {
        label: 'TechCrunch coverage',
        url: 'https://techcrunch.com/2007/11/15/social-networking-platform-crowdvine-targets-conference-organizers/',
      },
      { label: "Founder's writeup", url: 'https://coachtony.medium.com/crowdvine-beta-8bb22421b18a' },
    ],
    // screenshots: [
    //   { src: 'https://placehold.co/600x400', alt: 'Crowdvine placeholder screenshot' },
    //   { src: 'https://placehold.co/600x400', alt: 'Crowdvine templates placeholder screenshot' },
    // ],
  },
  {
    type: 'work',
    title: 'Lead Developer',
    organization: 'PadPressed',
    location: 'Guadalajara, Jalisco, Mexico',
    startDate: '2010-07',
    endDate: '2010-12',
    description:
      'Led development of a WordPress plugin that transformed websites into native-feeling iPad experiences, laying the technical foundation for what became Onswipe.',
    links: [
      {
        label: 'TechCrunch launch',
        url: 'https://techcrunch.com/2010/07/27/turn-your-blog-into-an-ipad-native-with-padpressed/',
      },
      {
        label: 'CoverPad feature',
        url: 'https://techcrunch.com/2010/10/22/coverpad-padpressed-flipboard/',
      },
    ],
    // screenshots: [
    //   { src: 'https://placehold.co/600x400', alt: 'PadPressed placeholder screenshot' },
    //   { src: 'https://placehold.co/600x400', alt: 'PadPressed iPad placeholder screenshot' },
    // ],
  },
  {
    type: 'work',
    title: 'Engineer',
    organization: 'Onswipe',
    startDate: '2010-08',
    endDate: '2014-06',
    description:
      'Joined as an early engineer to help transform the original WordPress plugin into a venture-backed publishing platform, later building core advertising products and interactive creative tools used by major publishers.',
    links: [
      { label: 'The future of publishing', url: 'https://thenextweb.com/news/forget-apps-onswipe-is-the-future-of-publishing' },
      { label: 'Seed round & rebrand', url: 'https://techcrunch.com/2011/01/12/onswipe/' },
      {
        label: 'Platform launch',
        url: 'https://techcrunch.com/2011/06/20/onswipe-wants-to-make-slate-forbes-and-your-website-feel-like-a-native-tablet-app/',
      },
    ],
    // screenshots: [
    //   {
    //     src: 'https://placehold.co/600x400',
    //     alt: 'Onswipe publishing platform placeholder screenshot',
    //   },
    //   { src: 'https://placehold.co/600x400', alt: 'Onswipe ad product placeholder screenshot' },
    // ],
  },
  {
    type: 'work',
    title: 'Hacker In Residence',
    organization: 'Socialatom Ventures',
    startDate: '2014-08',
    endDate: '2015-08',
    description:
      'Mentored portfolio startups on frontend architecture, product development, and engineering strategy while helping teams adopt React during its earliest years.',
    links: [
      {
        label: 'The Next Web feature',
        url: 'https://thenextweb.com/news/colombia-gets-a-new-startup-accelerator-socialatom-ventures-backed-by-nxtp-labs',
      },
      { label: 'Crunchbase profile', url: 'https://www.crunchbase.com/organization/socialatom-ventures' },
    ],
    // screenshots: [
    //   { src: 'https://placehold.co/600x400', alt: 'Socialatom Ventures placeholder screenshot' },
    //   { src: 'https://placehold.co/600x400', alt: 'React workshop placeholder screenshot' },
    // ],
  },
  {
    type: 'work',
    title: 'Front End Software Engineer',
    organization: 'Paid',
    location: 'San Francisco Bay Area',
    startDate: '2015-08',
    endDate: '2018-07',
    description:
      'Owned both frontend engineering and product design, architecting the customer dashboard, internal tools, component systems, and deployment infrastructure for a fast-moving startup.',
    links: [
      { label: 'Show HN launch', url: 'https://news.ycombinator.com/item?id=9187245' },
      {
        label: 'Acquisition news',
        url: 'https://www.einpresswire.com/article/474605284/auction-mobility-acquires-paid-labs-expanding-its-back-office-and-invoicing-solution',
      },
    ],
    // screenshots: [
    //   { src: 'https://placehold.co/600x400', alt: 'Paid dashboard placeholder screenshot' },
    //   { src: 'https://placehold.co/600x400', alt: 'Paid component system placeholder screenshot' },
    // ],
  },
  {
    type: 'work',
    title: 'Tech Lead',
    organization: 'Jiveworld',
    location: 'San Francisco Bay Area',
    startDate: '2018-08',
    endDate: 'present',
    description:
      "Architected the company's frontend platform from the ground up, leading engineering for a production system that has evolved for over eight years while building custom rendering technology, AI-powered localization tooling, and a modern design system.",
    links: [
      {
        label: 'Lupa launch announcement',
        url: 'https://www.prweb.com/releases/radio_ambulante_ed_tech_lupa_innovative_language_app_for_people_who_want_to_truly_understand_real_world_spanish/prweb16958635.htm',
      },
      { label: 'Lupa app review', url: 'https://www.alllanguageresources.com/lupa/' },
    ],
    // screenshots: [
    //   { src: 'https://placehold.co/600x400', alt: 'Jiveworld platform placeholder screenshot' },
    //   {
    //     src: 'https://placehold.co/600x400',
    //     alt: 'Jiveworld design system placeholder screenshot',
    //   },
    // ],
  },
];
