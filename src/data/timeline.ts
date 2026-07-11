export interface TimelineSubRole {
  title: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface TimelineEntry {
  type: 'education' | 'work';
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string;
  description?: string;
  subRoles?: TimelineSubRole[];
}

export const timeline: TimelineEntry[] = [
  // {
  //   type: 'education',
  //   title: 'Computer Technician, Software',
  //   organization: 'CBTis 246',
  //   startDate: '1997',
  //   endDate: '2000',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Manager',
  //   organization: 'Isi-Graphic',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2000-07',
  //   endDate: '2007-07',
  //   description:
  //     "Led the company's design department, overseeing branding, print production, illustration, and visual identity projects for a wide range of commercial clients.",
  // },
  // {
  //   type: 'education',
  //   title: 'Lic en Diseño Gráfico, Graphic Design',
  //   organization: 'Universidad Univer',
  //   startDate: '2002',
  //   endDate: '2005',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Don Menus',
  //   startDate: '2004-09',
  //   endDate: '2005-12',
  //   description:
  //     "Created the company's first visual identity and website, helping establish its initial online presence.",
  // },
  {
    type: 'work',
    title: 'Designer',
    organization: 'Cake Software Foundation',
    // location: 'Guadalajara, Jalisco, Mexico',
    startDate: '2006-04',
    endDate: '2010-08',
    description:
      "Designed and developed the second and third generations of cakephp.org, combining UI design with frontend engineering for one of the web's most influential PHP frameworks.",
  },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Zenji Web Development',
  //   location: 'Guadalupe, Nuevo León, Mexico',
  //   startDate: '2007-06',
  //   endDate: '2007-09',
  //   description:
  //     "Designed brand identities, information architecture, and web experiences for client projects during the agency's early growth.",
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Astrata Software',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2007-03',
  //   endDate: '2011-01',
  //   description:
  //     'Served as a long-term design and frontend consultant across multiple products, helping shape user interfaces, branding, and web applications for diverse clients.',
  // },
  // {
  //   type: 'work',
  //   title: 'Web Development Consultant',
  //   organization: 'Maria Maria',
  //   startDate: '2007-08',
  //   endDate: '2008-04',
  //   description:
  //     "Designed the brand, illustrated marketing assets, and developed a custom WordPress theme for the company's online presence.",
  // },
  // {
  //   type: 'work',
  //   title: 'Web Development Consultant',
  //   organization: 'LeadsCon',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2008-03',
  //   endDate: '2008-04',
  //   description:
  //     'Designed and implemented website templates supporting one of the leading conferences in the lead-generation industry.',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant, Speaker',
  //   organization: 'Mexico Web 2.0',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2008-05',
  //   endDate: '2009-08',
  //   description:
  //     'Designed the conference website, developed its frontend, and delivered workshops on modern web design and frontend development.',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'PSDGator',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2008-06',
  //   endDate: '2008-09',
  //   description:
  //     'Created the visual identity, illustrations, and website experience for an online design resource.',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'ResumeBucket.com',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2008-08',
  //   endDate: '2008-09',
  //   description:
  //     'Designed the visual experience for an online résumé platform focused on helping professionals present their work.',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Gelato CMS',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2008-08',
  //   endDate: '2008-09',
  //   description:
  //     'Designed the user interface for an open-source content management system focused on simplicity.',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Absolute Video',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2008-09',
  //   endDate: '2010-11',
  //   description:
  //     'Collaborated on multiple client websites, contributing UI design, visual direction, and interaction design.',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Michigan Film Corps',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2009-06',
  //   endDate: '2009-08',
  //   description:
  //     "Developed the organization's visual identity and website, establishing a cohesive public-facing brand.",
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Boston Single Life',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2009-06',
  //   endDate: '2010-02',
  //   description: 'Designed multiple web experiences for a large online community platform.',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Panabee',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2009-10',
  //   endDate: '2010-03',
  //   description:
  //     'Created the product’s visual identity, illustrations, and website, helping define the brand during its launch.',
  // },
  // // {
  //   type: 'work',
  //   title: 'Web Development Consultant',
  //   organization: 'Social Atom',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2009-01',
  //   endDate: '2010-07',
  //   description:
  //     'Designed and built CMS-driven websites while contributing UX architecture, frontend engineering, and custom plugin development across multiple startup products.',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Cristalab',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2008-12',
  //   endDate: '2009-03',
  //   description:
  //     'Designed web experiences for one of the largest Spanish-speaking web development communities of its time.',
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Smith, Conley & Associates',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2009-01',
  //   endDate: '2009-02',
  //   description:
  //     "Designed the firm's website with an emphasis on clarity, professionalism, and usability.",
  // },
  // {
  //   type: 'work',
  //   title: 'Design Consultant',
  //   organization: 'Nexcess',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2008-12',
  //   endDate: '2009-01',
  //   description: 'Designed user interfaces and web experiences for a leading managed hosting provider.',
  // },
  // {
  //   type: 'work',
  //   title: 'Web Development Consultant',
  //   organization: 'TrendGal',
  //   location: 'Guadalajara, Jalisco, Mexico',
  //   startDate: '2007-12',
  //   endDate: '2010-04',
  //   description:
  //     'Led branding, frontend engineering, and backend PHP development for a fashion platform, owning the product from identity through implementation.',
  // },
  // {
  //   type: 'work',
  //   title: 'Web Development Consultant',
  //   organization: 'Maestros del Web',
  //   startDate: '2010-02',
  //   endDate: '2010-04',
  //   description:
  //     'Redesigned the platform and developed a new CMS plugin framework to support its future expansion.',
  // },
  {
    type: 'work',
    title: 'Design Consultant',
    organization: 'Crowdvine',
    location: 'Guadalajara, Jalisco, Mexico',
    startDate: '2010-02',
    endDate: '2010-12',
    description:
      'Designed branding, frontend architecture, and reusable templates for a social event platform.',
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
  },
  {
    type: 'work',
    title: 'Engineer',
    organization: 'Onswipe',
    startDate: '2010-08',
    endDate: '2014-06',
    description:
      'Joined as an early engineer to help transform the original WordPress plugin into a venture-backed publishing platform, later building core advertising products and interactive creative tools used by major publishers.',
  },
  {
    type: 'work',
    title: 'Hacker In Residence',
    organization: 'Socialatom Ventures',
    startDate: '2014-08',
    endDate: '2015-08',
    description:
      'Mentored portfolio startups on frontend architecture, product development, and engineering strategy while helping teams adopt React during its earliest years.',
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
  },
];
