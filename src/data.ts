export const site = {
  name: 'Brett Ede',
  title: 'Brett Ede — Product leader and designer',
  description:
    'Product leader and designer in British Columbia. Currently building product at 7shifts. Previously Clio, Vividly, TextNow, Eventbrite, and Picatic.',
  location: 'British Columbia, Canada',
  email: 'brettede@gmail.com',
  url: 'https://brettt.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/brettede/',
    dribbble: 'https://dribbble.com/brettede',
    github: 'https://github.com/brettede',
  },
}

export const expertise = [
  'Product Leadership',
  'Product Strategy',
  'Product Growth',
  'Product Management',
  'Product Design',
  'Customer Research',
  'User Testing',
  'Experimentation',
  'Prototyping',
  'Data Analysis',
  'Go-to-Market',
]

export const experience = [
  {
    role: 'Staff Product Manager',
    company: '7shifts',
    dates: '2025 – current',
    note: 'Restaurant operations software',
  },
  {
    role: 'Product Lead',
    company: 'Clio',
    dates: '2024 – 2025',
    note: 'Legal technology',
  },
  {
    role: 'Product Lead',
    company: 'Vividly',
    dates: '2023 – 2024',
    note: 'Trade promotion for CPG brands',
  },
  {
    role: 'Product Lead, Growth',
    company: 'TextNow',
    dates: '2020 – 2022',
    note: 'Free phone service, 15M+ MAU',
  },
  {
    role: 'Group Product Manager',
    company: 'Eventbrite',
    dates: '2018 – 2020',
    note: 'App Marketplace & Developer Platform',
  },
  {
    role: 'CPO, Co-founder',
    company: 'Picatic',
    dates: '2012 – 2018',
    note: 'Acquired by Eventbrite, 2018',
  },
  {
    role: 'Co-founder, UX Designer',
    company: 'Island',
    dates: '2011 – 2013',
    note: 'UX design studio',
  },
  {
    role: 'Lead Designer',
    company: 'zu',
    dates: '2007 – 2011',
    note: 'FedEx, Intel, Nissan, Infiniti, CN',
  },
]

export type WorkSlug =
  | 'eventbrite-app-marketplace'
  | 'eventbrite-developer-platform'
  | 'picatic'

export type WorkProject = {
  slug: WorkSlug
  title: string
  dates: string
  href: string
  website?: string
  websiteLabel?: string
  summary: string
  body: string[]
  result: string
  cover: string
  images: { src: string; alt: string }[]
}

export const work: WorkProject[] = [
  {
    slug: 'eventbrite-app-marketplace',
    title: 'Eventbrite App Marketplace',
    dates: '2019 – 2020',
    href: '/work/eventbrite-app-marketplace',
    website: 'https://www.eventbrite.com/apps',
    websiteLabel: 'Visit the marketplace',
    summary:
      'A relaunch of how event creators discover, install, configure, and review partner apps.',
    body: [
      'Eventbrite is a ticketing and event technology platform trusted by independent event creators around the world. Its App Marketplace offers more than 100 partner integrations that save creators time and extend what Eventbrite can do.',
      'We set out to simplify how event creators discover, install, configure, and review apps. The result was a full relaunch of the experience — clearer discovery, a cleaner install and configuration flow, and a review system that helped surface quality.',
    ],
    result:
      'The relaunch increased overall app adoption, quality, and engagement across the marketplace.',
    cover: '/images/marketplace-thumb.png',
    images: [
      {
        src: '/images/marketplace-cover.png',
        alt: 'Eventbrite App Marketplace product art',
      },
      {
        src: '/images/marketplace-home.png',
        alt: 'Eventbrite App Marketplace homepage',
      },
      {
        src: '/images/marketplace-apps.png',
        alt: 'Browsing apps in the Eventbrite marketplace',
      },
      {
        src: '/images/marketplace-config.png',
        alt: 'Configuring an Eventbrite marketplace app',
      },
    ],
  },
  {
    slug: 'eventbrite-developer-platform',
    title: 'Eventbrite Developer Platform',
    dates: '2018 – 2020',
    href: '/work/eventbrite-developer-platform',
    website: 'https://www.eventbrite.com/platform',
    websiteLabel: 'Visit the platform',
    summary:
      'A clearer path from problem to API key, with documentation rewritten in Eventbrite’s voice.',
    body: [
      'Eventbrite’s Developer Platform lets creators and partners build on a set of robust APIs. The product problem was not the APIs themselves — it was getting started, and understanding how the platform solved real business problems.',
      'We made it much easier to create an API key and begin with documented examples. The API documentation was reorganized and rewritten with a more human, helpful tone that matches Eventbrite’s approachable brand.',
    ],
    result: 'Active API users and usage both increased after the relaunch.',
    cover: '/images/platform-thumb.png',
    images: [
      {
        src: '/images/platform-cover.png',
        alt: 'Eventbrite Developer Platform product art',
      },
      {
        src: '/images/platform-home.png',
        alt: 'Eventbrite Developer Platform homepage',
      },
      {
        src: '/images/platform-key.png',
        alt: 'Creating an Eventbrite API key',
      },
    ],
  },
  {
    slug: 'picatic',
    title: 'Picatic',
    dates: '2012 – 2018',
    href: '/work/picatic',
    summary:
      'An event ticketing platform built to be 10x better than the incumbents — then acquired by Eventbrite.',
    body: [
      'Picatic was an event ticketing platform with tools to help hosts create, manage, promote, and sell events online. I co-founded the company and led product through every stage, from first customers to acquisition.',
      'Competing with traditional ticketing giants meant product, design, and customer focus had to be better. Anything we launched had to pass a 10x test: is this 10x better than what others are offering? We used design sprints to ideate and test with customers and to answer hard questions about the direction of the business.',
    ],
    result:
      'High customer NPS, revenue and user growth that doubled annually, and an acquisition by Eventbrite in 2018.',
    cover: '/images/picatic-thumb.png',
    images: [
      {
        src: '/images/picatic-cover.png',
        alt: 'Picatic product art',
      },
      {
        src: '/images/picatic-conferences.png',
        alt: 'Picatic conference and event tools',
      },
      {
        src: '/images/picatic-tee.png',
        alt: 'Picatic event page',
      },
      {
        src: '/images/picatic-emails.png',
        alt: 'Picatic email and attendee communications',
      },
    ],
  },
]

export function getWork(slug: string) {
  return work.find((project) => project.slug === slug)
}
