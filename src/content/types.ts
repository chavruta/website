export interface PillarData {
  title: string;
  body: string;
}

export interface TimelineItem {
  day: string;
  description: string;
}

export interface LangContent {
  meta: {
    lang: string;
    dir: 'ltr' | 'rtl';
    title: string;
  };
  hero: {
    label: string;
    heading: string;
    subtitle: string;
  };
  problem: {
    heading: string;
    paragraphs: string[];
  };
  highlight: string;
  whyChavruta: {
    heading: string;
    paragraphs: string[];
  };
  whyNow: {
    heading: string;
    paragraphs: string[];
  };
  midCta: {
    text: string;
    buttonLabel: string;
  };
  pillarsHeading: string;
  pillars: PillarData[];
  whyBetter: {
    heading: string;
    paragraphs: string[];
  };
  curriculum: {
    heading: string;
    paragraph: string;
  };
  deviceAccess: {
    heading: string;
    paragraph: string;
  };
  pilot: {
    heading: string;
    paragraph: string;
  };
  timeline: TimelineItem[];
  beyondWar: {
    heading: string;
    paragraph: string;
  };
  ctaBox: {
    heading: string;
    description: string;
    items: string[];
    closing: string;
    buttonLabel: string;
  };
  footer: {
    date: string;
    name: string;
    email: string;
    phone: string;
  };
}
