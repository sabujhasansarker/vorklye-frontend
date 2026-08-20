// ==========================================
// 1. SITE CONFIG & BRANDING
// ==========================================
export const siteConfig = {
  name: "Vorklye",
  tagline: "Shopify design and development studio",
  logo: "/images/logo.png",
  shopifyPartnerLogo: "/images/shopify-patner.png",
  shopifyPartnerLink: "#",
  shopifyBadge: "/images/shopifyplus.svg",
  email: "hello@wavespace.agency",
  phone: "+1 628-265-7462",
  phoneRaw: "+16282657462",
  agencyDescription:
    "Wavespace is a global UI/UX design agency that boosts brand value with user-friendly, effective designs for web, mobile, and SaaS platforms.",
  companyDeckLabel: "Company Deck",
  companyDeckLink: "#",
  socialLinks: [
    {
      name: "Facebook",
      icon: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6966148bb93b4207a29b9dc7_wavespace-facebook.png",
      link: "#",
    },
  ],
  whatsAppIcon: "/images/whatapp-icon.png",
  whatsAppAvif:
    "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/69c2734b70719aeb95273a22_WhatsApp.avif",
};

// ==========================================
// 2. HEADER DATA
// ==========================================
export type HeaderMenu = {
  id: number;
  label: string;
  link: string;
};

export const headerMenus: HeaderMenu[] = [
  { id: 4, label: "About", link: "/about" },
  { id: 1, label: "Case Studies", link: "/case-studies" },
  { id: 2, label: "Services", link: "/services" },
  { id: 5, label: "Career", link: "/career" },
  { id: 6, label: "Contact", link: "/contact" },
];

export const headerData = {
  logo: siteConfig.logo,
  shopifyPartnerLogo: siteConfig.shopifyPartnerLogo,
  shopifyPartnerLink: siteConfig.shopifyPartnerLink,
  ctaButton: {
    label: "Get in touch",
    link: "/contact",
  },
  menus: headerMenus,
};

// ==========================================
// 3. FOOTER DATA
// ==========================================
export type FooterLink = {
  label: string;
  link: string;
};

export type FooterSection = {
  title: string;
  links: FooterLink[];
};

export type FooterContactInfo = {
  heading: string;
  email: string;
  callLabel: string;
  phone: string;
};

export const footerTopRow: FooterSection[] = [
  {
    title: "Design Services",
    links: [
      { label: "UI UX Design", link: "#" },
      { label: "Web Design", link: "#" },
      { label: "Mobile App Design", link: "#" },
      { label: "SaaS Design", link: "#" },
      { label: "Landing Page Design", link: "#" },
      { label: "Brand Identity Design", link: "#" },
    ],
  },
  {
    title: "Strategy & Research",
    links: [
      { label: "UX Research", link: "#" },
      { label: "UX Audit", link: "#" },
      { label: "UX Consultancy", link: "#" },
      { label: "Usability & User Testing", link: "#" },
      { label: "CRO Service", link: "#" },
    ],
  },
  {
    title: "Development Services",
    links: [
      { label: "MVP Development", link: "#" },
      { label: "Webflow Development", link: "#" },
      { label: "AI MVP Development", link: "#" },
      { label: "SaaS MVP Development", link: "#" },
      { label: "Web App MVP Development", link: "#" },
    ],
  },
];

export const footerBottomRow: FooterSection[] = [
  {
    title: "Agency",
    links: [
      { label: "About Us", link: "/about" },
      { label: "Pricing", link: "#" },
      { label: "Service", link: "/services" },
      { label: "Blog", link: "#" },
      { label: "FAQs", link: "#" },
      { label: "Case Studies", link: "/case-studies" },
      { label: "Locations", link: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Clutch", link: "#" },
      { label: "Behance", link: "#" },
      { label: "Dribbble", link: "#" },
      { label: "Awwwards", link: "#" },
    ],
  },
];

export const footerContactInfo: FooterContactInfo = {
  heading: "Drop us a line",
  email: siteConfig.email,
  callLabel: "Call us",
  phone: siteConfig.phone,
};

export const footerData = {
  logo: siteConfig.logo,
  description: siteConfig.agencyDescription,
  deckLabel: siteConfig.companyDeckLabel,
  deckLink: siteConfig.companyDeckLink,
  socialLinks: siteConfig.socialLinks,
  topRow: footerTopRow,
  bottomRow: footerBottomRow,
  contactInfo: footerContactInfo,
  whatsappIcon: siteConfig.whatsAppAvif,
  logoText: siteConfig.name,
};

// ==========================================
// 4. HERO SECTION DATA
// ==========================================
export type HeroBrand = {
  id: number;
  image: string;
};

export type HeroData = {
  brands: HeroBrand[];
  title?: string;
  description?: string;
  icon?: string;
  brandText?: string;
  videoBg?: string;
};

export const heroData: HeroData = {
  brandText: "Shopify partner trusted by great clients",
  brands: [
    { id: 1, image: "/images/brand/1.png" },
    { id: 2, image: "/images/brand/2.png" },
    { id: 3, image: "/images/brand/3.png" },
    { id: 4, image: "/images/brand/4.png" },
    { id: 5, image: "/images/brand/5.png" },
  ],
  title: "We design, develop and build",
  description:
    "We're a design and development agency since 2017 who craft digital masterpiece products.",
  icon: "/images/hero-icon.svg",
  videoBg: "/images/hero-video.mp4",
};

// ==========================================
// 5. ABOUT SECTION DATA
// ==========================================
export const aboutText: string =
  "<span>Welcome to Vorklye — We're a</span> Shopify design and development <span>studio, dedicated to bringing your brand's essence to life online. From custom themes to seamless user experiences, every project is a bespoke journey — we collaborate closely with you to build something that truly stands out.</span>";

export const aboutSectionData = {
  text: aboutText,
  buttonText: "More about us",
  buttonLink: "/about",
};

export type AboutCounter = {
  id: number;
  counter: number;
  prefix?: string;
  surfix?: string;
  text: string;
};

export const aboutCounter: AboutCounter[] = [
  {
    id: 1,
    counter: 50,
    prefix: "+",
    text: "Shopify Experts in our team",
  },
  {
    id: 2,
    counter: 60,
    prefix: "+",
    text: "Managed Shopify Plus Stores",
  },
  {
    id: 3,
    counter: 90,
    surfix: "%",
    text: "Customers continue to work with us",
  },
  {
    id: 4,
    counter: 200,
    prefix: "+",
    text: "Realised projects",
  },
];

export type TeamMember = {
  id: number;
  name: string;
  designation: string;
  img: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Shahid Miah",
    designation: "Founder & CEO",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/690d6e37dc1fd0b514fe70ec_Shahd%20mia-p-500.webp",
  },
  {
    id: 2,
    name: "Shahid Miah",
    designation: "Founder & CEO",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/690d6e37dc1fd0b514fe70ec_Shahd%20mia-p-500.webp",
  },
  {
    id: 3,
    name: "Shahid Miah",
    designation: "Founder & CEO",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/690d6e37dc1fd0b514fe70ec_Shahd%20mia-p-500.webp",
  },
  {
    id: 4,
    name: "Shahid Miah",
    designation: "Founder & CEO",
    img: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/690d6e37dc1fd0b514fe70ec_Shahd%20mia-p-500.webp",
  },
];

export type CaseStudyResult = {
  label: string;
  value: string;
};

export type CaseStudy = {
  id: number;
  slug: string;
  title: string;
  feature?: boolean;
  client: string;
  description: string;
  services: string[];
  industry: string;
  published: string;
  image: string;
  logo?: string;
  websiteUrl?: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  galleryImages: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "capital-growth-solutions",
    title: "Capital Growth Solutions",
    client: "Capital Growth Inc.",
    feature: true,
    description:
      "A complete headless digital commerce overhaul designed to accelerate client conversions and scale operational capacity across global markets.",
    services: ["Shopify Plus", "Migration"],
    industry: "Fintech & Consulting",
    published: "2024",
    image: "/images/case-studies/1.png",
    logo: "/images/brand/3.png",
    websiteUrl: "https://example.com/capital-growth",
    challenge:
      "Capital Growth needed to modernize their outdated legacy commerce architecture which was causing slow page speeds (4.8s TTFB), disjointed checkout journeys, and poor mobile conversion rates that hindered international expansion.",
    solution:
      "We engineered a custom headless Shopify storefront integrated with real-time inventory management, a modular design system, and multi-currency checkout, cutting latency by 72% and streamlining customer flows.",
    results: [
      { label: "Conversion Rate Increase", value: "+148%" },
      { label: "Page Load Acceleration", value: "3.2x Faster" },
      { label: "Annual Revenue Growth", value: "+210%" },
      { label: "Mobile Bounce Rate", value: "-42%" },
    ],
    galleryImages: [
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422ed8ffd5696dac6a4_UX%20Design-p-1080.webp",
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422a7f442bbf1487074_Web%20Design-p-1080.webp",
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c4229130cd923555f69b_Mobile%20App%20Design-p-1080.webp",
    ],
    testimonial: {
      quote:
        "The team at Vorklye transformed our entire digital ecosystem. Our store is faster, more engaging, and our conversion rate doubled within three months of launch.",
      author: "Marcus Vance",
      role: "VP of Digital @ Capital Growth",
    },
  },
  {
    id: 2,
    slug: "rovero-commerce-platform",
    title: "Rovero Commerce Platform",
    feature: true,
    client: "Rovero Lifestyle",
    description:
      "Crafting an immersive high-end fashion experience with responsive 3D lookbooks and seamless omnichannel checkout for modern luxury buyers.",
    services: ["Shopify Theme Development", "CRO Strategy"],
    industry: "Luxury Fashion & Apparel",
    published: "2023",
    image:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
    logo: "/images/brand/4.png",
    websiteUrl: "https://example.com/rovero",
    challenge:
      "Rovero was struggling to replicate the premium in-store luxury boutique feel on digital screens. Customer sessions were dropping off prematurely on product detail pages, and checkout abandonment was above 75%.",
    solution:
      "We designed an editorial-grade aesthetic with high-fidelity visual storytelling, interactive lookbooks, one-click checkout, and AI-driven sizing guidance that instilled confidence in shoppers.",
    results: [
      { label: "Average Order Value (AOV)", value: "+38%" },
      { label: "Checkout Completion Rate", value: "+86%" },
      { label: "Engagement Time On Site", value: "+2.4x" },
      { label: "Return Rate Reduction", value: "-24%" },
    ],
    galleryImages: [
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422529dc0db1881445e_Branding%20%26%20Identity-p-1080.webp",
      "/images/case-studies/1.png",
    ],
    testimonial: {
      quote:
        "Our digital flagship now feels as exclusive and refined as our Madison Avenue store. Vorklye's attention to detail is truly world-class.",
      author: "Elena Rostova",
      role: "Creative Director @ Rovero",
    },
  },
  {
    id: 3,
    slug: "lumina-skincare-experience",
    title: "Lumina Skincare Experience",
    client: "Lumina Botanicals",
    description:
      "Transforming a clean beauty DTC brand with custom skin-diagnostic quizzes, recurring subscription models, and personalized product bundles.",
    services: ["Custom App Setup", "Subscription Commerce", "Design System"],
    industry: "Beauty & Personal Care",
    published: "2023",
    image: "/images/case-studies/1.png",
    logo: "/images/brand/5.png",
    websiteUrl: "https://example.com/lumina",
    challenge:
      "Lumina needed to boost recurring customer lifetime value (LTV) and educate users on complex botanical regimens without cluttering the mobile shopping experience.",
    solution:
      "We built an interactive skincare quiz that automatically generates custom routine bundles, alongside a frictionless Recharge subscription workflow that increased subscriber retention.",
    results: [
      { label: "Subscription Revenue Share", value: "46% of Total" },
      { label: "Customer Lifetime Value (LTV)", value: "+92%" },
      { label: "Quiz Completion Rate", value: "78%" },
      { label: "Repeat Purchase Rate", value: "3.1x" },
    ],
    galleryImages: [
      "/images/case-studies/1.png",
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422ed8ffd5696dac6a4_UX%20Design-p-1080.webp",
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
    ],
    testimonial: {
      quote:
        "The routine quiz and subscription experience developed by Vorklye became our primary growth lever overnight. We couldn't be happier.",
      author: "Chloe Bennett",
      role: "Co-Founder @ Lumina Botanicals",
    },
  },
  {
    id: 4,
    slug: "apex-gear-shopify-plus",
    title: "Apex Outdoor Equipment",
    client: "Apex Gear International",
    description:
      "Enterprise multi-warehouse B2B and DTC unified commerce platform built for extreme catalog complexity and wholesale volume discounts.",
    services: ["Shopify Plus B2B", "ERP Integration", "Headless Architecture"],
    industry: "Sports & Outdoor Equipment",
    published: "2024",
    image:
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
    logo: "/images/brand/6.png",
    websiteUrl: "https://example.com/apex-gear",
    challenge:
      "Apex handled 12,000+ SKUs across 8 regional warehouses, needing tiered wholesale pricing, instant quote generation, and rapid consumer order fulfillment on a single platform.",
    solution:
      "We architected a unified Shopify Plus B2B & DTC platform connected to their NetSuite ERP with custom tier pricing logic, faceted search filters, and instant shipping calculation.",
    results: [
      { label: "Wholesale Order Efficiency", value: "+320%" },
      { label: "Catalog Search Speed", value: "45ms" },
      { label: "Enterprise Sales Velocity", value: "+175%" },
      { label: "Manual Order Processing Time", value: "-80%" },
    ],
    galleryImages: [
      "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
      "/images/case-studies/1.png",
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422a7f442bbf1487074_Web%20Design-p-1080.webp",
    ],
    testimonial: {
      quote:
        "Vorklye solved complex enterprise B2B logistics that other agencies declared impossible on Shopify. They are absolute technical wizards.",
      author: "David Sterling",
      role: "Chief Operating Officer @ Apex Gear",
    },
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find((c) => c.slug === slug);
};

// ==========================================
// 7. BRAND DATA
// ==========================================
export type BrandItem = {
  id: number;
  image: string;
};

export const brands: BrandItem[] = [
  { id: 1, image: "/images/brand/1.png" },
  { id: 2, image: "/images/brand/2.png" },
  { id: 3, image: "/images/brand/3.png" },
  { id: 4, image: "/images/brand/4.png" },
  { id: 5, image: "/images/brand/5.png" },
  { id: 6, image: "/images/brand/6.png" },
  { id: 7, image: "/images/brand/7.png" },
  { id: 8, image: "/images/brand/8.png" },
  { id: 9, image: "/images/brand/9.png" },
  { id: 10, image: "/images/brand/10.png" },
  { id: 11, image: "/images/brand/11.png" },
  { id: 12, image: "/images/brand/12.png" },
  { id: 13, image: "/images/brand/13.png" },
  { id: 14, image: "/images/brand/14.png" },
  { id: 15, image: "/images/brand/15.png" },
  { id: 16, image: "/images/brand/16.png" },
  { id: 17, image: "/images/brand/17.png" },
  { id: 18, image: "/images/brand/18.png" },
  { id: 19, image: "/images/brand/19.png" },
  { id: 20, image: "/images/brand/20.png" },
  { id: 21, image: "/images/brand/21.png" },
  { id: 22, image: "/images/brand/22.png" },
];

export const brandSectionData = {
  title:
    'We\'re a team of commerce specialists who have helped countless <span class="text-neutral-500">brands build, grow and increase.</span>',
  shortSubtitle: "/ Trusted by 550+ companies",
  showMoreLabel: "More brands",
  showLessLabel: "Show less",
  brands,
};

// ==========================================
// 8. SERVICE DATA
// ==========================================
export type ServiceItem = {
  id: string;
  title: string;
  feature?: boolean;
  subtitle: string;
  description: string;
  tags: string[];
};

export const services: ServiceItem[] = [
  {
    id: "01",
    title: "Brand Strategy",
    feature: true,
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "02",
    title: "Marketing",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "03",
    title: "Web Design",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "04",
    title: "UI/UX Design",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: "05",
    title: "Social Media",
    subtitle: "Define who you are. Shape how the world sees you.",
    description:
      "We uncover what makes your brand meaningful and build a strategic foundation that drives long-term impact. Through deep discovery and positioning, we create clarity and purpose.",
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
];

export const serviceSectionData = {
  subtitle: "/ What we build",
  title:
    "End-to-end Shopify systems, designed to scale the brand behind the store.",
  ctaText: "Learn More",
  services,
};

export type ServiceMetric = {
  value: string;
  label: string;
};

export type ServiceDeliverable = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type DetailedSubService = {
  id: number;
  slug: string;
  title: string;
  href: string;
  tagline?: string;
  description?: string;
  deliverables?: string[];
  process?: { step: string; title: string; description: string }[];
};

export type DetailedServiceItem = {
  slug: string;
  title: string;
  heroTagline?: string;
  image: string;
  bottomImage?: string;
  des: string;
  overview?: string;
  services: DetailedSubService[];
  deliverables?: ServiceDeliverable[];
  process?: ServiceProcessStep[];
  metrics?: ServiceMetric[];
  faqs?: FAQItem[];
};

export const detailedServiceItems: DetailedServiceItem[] = [
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    heroTagline:
      "Designing intuitive, brand-defining interfaces that convert visitors into loyal customers.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422ed8ffd5696dac6a4_UX%20Design-p-1080.webp",
    bottomImage:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame%201618871790%20(5).avif",
    des: "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.",
    overview:
      "We believe that exceptional digital design sits at the intersection of aesthetic beauty, technical performance, and behavioral psychology. Our UI/UX design practice transforms complex user journeys into effortless, high-converting digital interactions tailored specifically for Shopify and modern SaaS brands.",
    services: [
      {
        id: 1,
        slug: "ux-research",
        title: "UX Research Service",
        href: "/services/ui-ux-design/ux-research",
        tagline:
          "Uncover deep user insights that drive conversion-focused design decisions.",
        description:
          "We conduct in-depth user research through interviews, surveys, behavioral analytics, and competitor audits to understand exactly what your customers need — before a single pixel is designed.",
        deliverables: [
          "User Interview Recordings & Synthesis",
          "Affinity Diagrams & Persona Maps",
          "Competitor UX Benchmark Report",
          "Jobs-to-be-Done Framework",
          "Research Insights Deck",
        ],
        process: [
          {
            step: "01",
            title: "Stakeholder Alignment",
            description:
              "Define research goals, success metrics, and target user profiles.",
          },
          {
            step: "02",
            title: "Qualitative Research",
            description:
              "1-on-1 user interviews, contextual inquiry, and usability observation sessions.",
          },
          {
            step: "03",
            title: "Quantitative Analysis",
            description:
              "Heatmaps, click-tracking, session replays, and funnel analytics.",
          },
          {
            step: "04",
            title: "Insights Synthesis",
            description:
              "Distilling raw data into actionable design opportunities and priority recommendations.",
          },
        ],
      },
      {
        id: 2,
        slug: "ux-audit",
        title: "UX Audit & Strategy",
        href: "/services/ui-ux-design/ux-audit",
        tagline:
          "Identify every friction point draining your conversion rate and fix it.",
        description:
          "A comprehensive heuristic evaluation of your existing digital product — mapping every drop-off, confusion point, and missed opportunity across the user journey with prioritized recommendations.",
        deliverables: [
          "Full Heuristic Evaluation Report",
          "Annotated UX Audit Slides",
          "Prioritized Issue Matrix (High/Medium/Low)",
          "Quick-Win Fix List",
          "6-Month UX Roadmap",
        ],
        process: [
          {
            step: "01",
            title: "Audit Scope Definition",
            description:
              "Map the key user journeys and define evaluation criteria.",
          },
          {
            step: "02",
            title: "Heuristic Review",
            description:
              "Evaluate against Nielsen's 10 heuristics + ecommerce-specific principles.",
          },
          {
            step: "03",
            title: "Data Cross-Reference",
            description:
              "Layer analytics data to validate severity of identified issues.",
          },
          {
            step: "04",
            title: "Strategic Roadmap",
            description:
              "Deliver a phased action plan with business-impact projections.",
          },
        ],
      },
      {
        id: 3,
        slug: "usability-testing",
        title: "UX Usability Testing",
        href: "/services/ui-ux-design/usability-testing",
        tagline:
          "Validate designs with real users before shipping — and eliminate guesswork.",
        description:
          "Moderated and unmoderated usability tests that reveal how real users interact with your product, where they struggle, and how to optimize for task completion and satisfaction.",
        deliverables: [
          "Test Plan & Screener",
          "Recorded Session Videos",
          "Annotated Findings Report",
          "Usability Score (SUS)",
          "Design Iteration Recommendations",
        ],
        process: [
          {
            step: "01",
            title: "Test Plan Design",
            description:
              "Define tasks, success criteria, and participant recruitment criteria.",
          },
          {
            step: "02",
            title: "Participant Recruitment",
            description:
              "Screen and schedule participants matching your real user demographics.",
          },
          {
            step: "03",
            title: "Test Facilitation",
            description:
              "Conduct moderated sessions via Maze, Lookback, or in-person.",
          },
          {
            step: "04",
            title: "Report & Iterations",
            description:
              "Synthesize findings into actionable redesign recommendations with severity ratings.",
          },
        ],
      },
      {
        id: 4,
        slug: "ux-consulting",
        title: "UI UX Consulting",
        href: "/services/ui-ux-design/ux-consulting",
        tagline:
          "Expert strategic guidance to align your product team around user-centred growth.",
        description:
          "Strategic UX consulting sessions with senior designers who bridge business objectives, user needs, and technical constraints to define a scalable digital product strategy.",
        deliverables: [
          "Product Strategy Workshop",
          "UX Maturity Assessment",
          "Design System Governance Plan",
          "Team Workflow Optimization Guide",
          "Quarterly OKR Alignment",
        ],
        process: [
          {
            step: "01",
            title: "Discovery Workshop",
            description:
              "Half-day facilitated session to map business goals, constraints, and user needs.",
          },
          {
            step: "02",
            title: "Current State Audit",
            description:
              "Assess team structure, tools, and existing design process maturity.",
          },
          {
            step: "03",
            title: "Strategy Definition",
            description:
              "Co-create a prioritized UX strategy aligned with product roadmap.",
          },
          {
            step: "04",
            title: "Ongoing Advisory",
            description:
              "Monthly check-ins, design reviews, and stakeholder presentation support.",
          },
        ],
      },
      {
        id: 5,
        slug: "ui-ux-design",
        title: "UI UX Design",
        href: "/services/ui-ux-design/ui-ux-design",
        tagline:
          "Pixel-perfect, brand-aligned interfaces that are as beautiful as they are functional.",
        description:
          "Full end-to-end interface design for web, mobile, and e-commerce platforms — from initial wireframes to pixel-perfect visual design, micro-interactions, and developer-ready handoffs.",
        deliverables: [
          "High-Fidelity Screen Designs",
          "Responsive Breakpoint Layouts",
          "Interaction Design Specs",
          "Brand-Aligned Component Library",
          "Annotated Developer Handoff",
        ],
        process: [
          {
            step: "01",
            title: "Wireframe Architecture",
            description:
              "Low-fidelity skeleton layouts focusing on content hierarchy and conversion flow.",
          },
          {
            step: "02",
            title: "Visual Design Language",
            description:
              "Typography, color, spacing, and brand token application across all screens.",
          },
          {
            step: "03",
            title: "Interaction Design",
            description:
              "Micro-animations, state transitions, and hover behavior specifications.",
          },
          {
            step: "04",
            title: "Developer Handoff",
            description:
              "Zeplin or Figma inspect-ready files with all tokens, assets, and specs exported.",
          },
        ],
      },
      {
        id: 6,
        slug: "ai-ui-ux-design",
        title: "AI UI UX Design",
        href: "/services/ui-ux-design/ai-ui-ux-design",
        tagline:
          "Intelligent interfaces powered by AI — personalized, adaptive, and conversion-optimized.",
        description:
          "Designing AI-native product experiences: conversational UI, recommendation engines, dynamic personalization layers, and predictive interface components that learn and adapt in real time.",
        deliverables: [
          "AI Component Design Patterns",
          "Conversational UI Flows",
          "Personalization Architecture",
          "Error State & Fallback Designs",
          "AI Transparency Guidelines",
        ],
        process: [
          {
            step: "01",
            title: "AI Use Case Mapping",
            description:
              "Identify high-value AI integration points across the customer journey.",
          },
          {
            step: "02",
            title: "Data-Flow Design",
            description:
              "Design how AI outputs surface in the interface without overwhelming users.",
          },
          {
            step: "03",
            title: "Adaptive UI Patterns",
            description:
              "Build component libraries that respond dynamically to AI-generated content.",
          },
          {
            step: "04",
            title: "Trust & Transparency",
            description:
              "Ensure AI explanations, confidence levels, and opt-outs are clearly surfaced.",
          },
        ],
      },
      {
        id: 7,
        slug: "design-system",
        title: "Design System",
        href: "/services/ui-ux-design/design-system",
        tagline:
          "A scalable, tokenized design system that accelerates your entire product team.",
        description:
          "We architect and build production-ready design systems in Figma — including component libraries, design tokens, documentation sites, and governance workflows for cross-functional teams.",
        deliverables: [
          "Figma Token Architecture",
          "Core Component Library (50–300+ Components)",
          "Documentation & Usage Guidelines",
          "Dark/Light Mode Variants",
          "Storybook Integration Support",
        ],
        process: [
          {
            step: "01",
            title: "Design Token Definition",
            description:
              "Establish semantic token layers for color, typography, spacing, and elevation.",
          },
          {
            step: "02",
            title: "Component Architecture",
            description:
              "Build atomic, molecule, and organism components with full variant coverage.",
          },
          {
            step: "03",
            title: "Documentation",
            description:
              "Write usage guidelines, do/don't examples, and accessibility notes for every component.",
          },
          {
            step: "04",
            title: "Governance Setup",
            description:
              "Establish contribution workflows, versioning, and sync with engineering tokens.",
          },
        ],
      },
      {
        id: 8,
        slug: "wireframing-prototyping",
        title: "Wireframing and Prototyping",
        href: "/services/ui-ux-design/wireframing-prototyping",
        tagline:
          "Rapid structural blueprints and interactive prototypes to validate before you build.",
        description:
          "From low-fidelity wireframes to high-fidelity interactive prototypes, we rapidly visualize and validate your product concepts — saving development time and de-risking major decisions early.",
        deliverables: [
          "Lo-Fi Wireframe Sketches",
          "Mid-Fi Clickable Wireframes",
          "Hi-Fi Interactive Prototype",
          "User Flow Diagrams",
          "Prototype Test Report",
        ],
        process: [
          {
            step: "01",
            title: "Content Mapping",
            description:
              "Define content priority, page hierarchy, and navigation architecture.",
          },
          {
            step: "02",
            title: "Lo-Fi Exploration",
            description:
              "Rapid sketch-level wireframes exploring multiple layout directions.",
          },
          {
            step: "03",
            title: "Hi-Fi Prototype",
            description:
              "Figma prototype with realistic interactions and transition animations.",
          },
          {
            step: "04",
            title: "Validation & Iteration",
            description:
              "User test the prototype and iterate until task completion rates meet targets.",
          },
        ],
      },
      {
        id: 9,
        slug: "ui-ux-redesign",
        title: "UI UX Redesign",
        href: "/services/ui-ux-design/ui-ux-redesign",
        tagline:
          "Transform an outdated product into a modern, high-converting digital experience.",
        description:
          "Full product redesigns that modernize visual aesthetics, simplify navigation, eliminate friction, and align every touchpoint with your updated brand identity and conversion goals.",
        deliverables: [
          "Before/After Design Comparison",
          "Redesigned Full Page Layouts",
          "Component Migration Plan",
          "Brand Refresh Integration",
          "Launch-Ready Figma Files",
        ],
        process: [
          {
            step: "01",
            title: "Legacy Audit",
            description:
              "Document all existing screens, flows, and components needing redesign.",
          },
          {
            step: "02",
            title: "New Design Direction",
            description:
              "Establish updated visual language, typography, and layout principles.",
          },
          {
            step: "03",
            title: "Phased Redesign",
            description:
              "Redesign screens in prioritized sprints — highest-impact pages first.",
          },
          {
            step: "04",
            title: "Handoff & Migration",
            description:
              "Deliver final files with a migration plan to transition without disruption.",
          },
        ],
      },
    ],
    deliverables: [
      {
        title: "Full Figma Design System",
        description:
          "Comprehensive tokenized component libraries, typography scale, color tokens, and responsive layout grids.",
      },
      {
        title: "Interactive Prototypes",
        description:
          "High-fidelity micro-interaction prototypes ready for usability testing and stakeholder validation.",
      },
      {
        title: "User Journey & Wireframes",
        description:
          "Low and mid-fidelity architecture mappings focusing on conversion friction removal.",
      },
      {
        title: "Developer Hand-off Documentation",
        description:
          "Pixel-perfect asset exports, motion specs, and responsive breakpoint guides for engineering teams.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Empathize & Research",
        description:
          "Deep-dive stakeholder interviews, competitor benchmarking, and heat-map analytics audit.",
      },
      {
        step: "02",
        title: "Information Architecture",
        description:
          "Structuring intuitive sitemaps, user task flows, and mobile-first wireframe skeletons.",
      },
      {
        step: "03",
        title: "Visual UI Design",
        description:
          "Applying brand identities into immersive, accessible, and high-impact visual design layouts.",
      },
      {
        step: "04",
        title: "Prototype & User Test",
        description:
          "Interactive validation with real users to measure task completion speed and satisfaction.",
      },
    ],
    metrics: [
      { value: "+64%", label: "Average Mobile Conversion Uplift" },
      { value: "4.9/5", label: "Client Usability Score" },
      { value: "350+", label: "Figma Components Engineered" },
    ],
    faqs: [
      {
        question: "How long does a full UI/UX design project take?",
        answer:
          "A standard brand redesign typically takes 3 to 6 weeks, depending on the scope of pages, device requirements, and interactive prototype complexity.",
      },
      {
        question: "Do you deliver design systems in Figma?",
        answer:
          "Yes, 100% of our UI/UX deliverables are built in Figma using modern auto-layout, variables, component properties, and tokenized design systems.",
      },
    ],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    heroTagline:
      "Building lightning-fast, high-converting custom Shopify and Shopify Plus storefronts.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422a7f442bbf1487074_Web%20Design-p-1080.webp",
    bottomImage:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame%201618871790%20(5).avif",
    des: "Build high-converting e-commerce storefronts. Our Shopify development services focus on speed, responsiveness, and scalable architectures tailored to your brand.",
    overview:
      "As accredited Shopify Partners, we develop custom Liquid themes, headless storefronts (Next.js + Hydrogen), and private application integrations engineered for ultra-fast performance, sub-second TTFB, and peak holiday traffic surges.",
    services: [
      {
        id: 1,
        slug: "custom-theme-development",
        title: "Custom Theme Development",
        href: "/services/shopify-development/custom-theme-development",
        tagline:
          "Zero-bloat, bespoke Shopify themes engineered to convert at every scroll.",
        description:
          "We build fully custom Shopify OS 2.0 Liquid themes from scratch — no template shortcuts, no bloat. Every section is modular, editable in the theme editor, and optimized for sub-1-second load times.",
        deliverables: [
          "Custom Shopify OS 2.0 Liquid Theme",
          "Merchant-Editable Dynamic Sections",
          "Mobile-First Responsive Layouts",
          "Schema Markup & SEO Meta Integration",
          "Performance Audit Report",
        ],
        process: [
          {
            step: "01",
            title: "Design-to-Dev Handoff",
            description:
              "Convert Figma designs into precise technical specifications and component breakdowns.",
          },
          {
            step: "02",
            title: "Section Architecture",
            description:
              "Build modular Liquid sections with full Schema editor customization.",
          },
          {
            step: "03",
            title: "Performance Build",
            description:
              "Implement lazy loading, critical CSS, and asset optimization throughout.",
          },
          {
            step: "04",
            title: "QA & Merchant Review",
            description:
              "Cross-browser testing and merchant walkthrough before go-live.",
          },
        ],
      },
      {
        id: 2,
        slug: "app-integration",
        title: "App Integration & Setup",
        href: "/services/shopify-development/app-integration",
        tagline:
          "Seamlessly connect your tech stack — CRM, ERP, loyalty, and fulfillment — with Shopify.",
        description:
          "We configure and deeply customize Shopify apps and build private API integrations to connect your store with Klaviyo, Recharge, Gorgias, NetSuite, 3PLs, and any custom internal tools.",
        deliverables: [
          "Custom App Configuration",
          "API Integration Documentation",
          "Webhook Setup & Error Monitoring",
          "Data Sync Validation Report",
          "Post-Launch App Support",
        ],
        process: [
          {
            step: "01",
            title: "Tech Stack Audit",
            description:
              "Map all existing tools and define integration data flows and API requirements.",
          },
          {
            step: "02",
            title: "Integration Build",
            description:
              "Develop and test API connectors, webhooks, and data sync pipelines.",
          },
          {
            step: "03",
            title: "Staging Validation",
            description:
              "Full end-to-end data flow testing in a Shopify development store.",
          },
          {
            step: "04",
            title: "Production Deploy",
            description:
              "Monitored rollout with error alerting and integration health checks.",
          },
        ],
      },
      {
        id: 3,
        slug: "store-setup",
        title: "Store Setup & Configuration",
        href: "/services/shopify-development/store-setup",
        tagline:
          "A perfectly configured Shopify store ready to sell from day one.",
        description:
          "Complete Shopify store setup including product catalog configuration, payment gateways, shipping zones, taxes, legal pages, and all merchant settings — ready to launch on schedule.",
        deliverables: [
          "Configured Shopify Store",
          "Payment Gateway Setup",
          "Shipping Zone & Tax Configuration",
          "Legal Pages (Privacy, T&Cs, Returns)",
          "Merchant Training Session",
        ],
        process: [
          {
            step: "01",
            title: "Scope & Requirements",
            description:
              "Define product catalog size, markets, payment methods, and business rules.",
          },
          {
            step: "02",
            title: "Store Configuration",
            description:
              "Set up all Shopify settings, shipping zones, tax rules, and payment gateways.",
          },
          {
            step: "03",
            title: "Catalog Import",
            description:
              "Bulk-import products, collections, metafields, and media assets.",
          },
          {
            step: "04",
            title: "Pre-Launch Checklist",
            description:
              "Complete a 50-point launch checklist and train the merchant team.",
          },
        ],
      },
      {
        id: 4,
        slug: "headless-shopify",
        title: "Headless Shopify Commerce",
        href: "/services/shopify-development/headless-shopify",
        tagline:
          "Blazing-fast storefronts decoupled from Shopify's backend — ultimate frontend freedom.",
        description:
          "We architect headless Shopify storefronts using Next.js and the Shopify Storefront API — delivering instantaneous page loads, fully custom UX, and unlimited frontend flexibility.",
        deliverables: [
          "Next.js Headless Storefront",
          "Shopify Storefront API Integration",
          "Custom Cart & Checkout Flow",
          "ISR/SSG Performance Architecture",
          "Deployment & CDN Configuration",
        ],
        process: [
          {
            step: "01",
            title: "Architecture Design",
            description:
              "Define data fetching strategy (SSG/ISR/SSR), caching layers, and API schema.",
          },
          {
            step: "02",
            title: "Frontend Build",
            description:
              "Develop Next.js storefront with custom components, cart logic, and search.",
          },
          {
            step: "03",
            title: "Shopify Integration",
            description:
              "Connect Storefront API, handle variants, metafields, and customer accounts.",
          },
          {
            step: "04",
            title: "Performance & Deploy",
            description:
              "Optimize Core Web Vitals and deploy to Vercel or custom infrastructure.",
          },
        ],
      },
    ],
    deliverables: [
      {
        title: "Bespoke Custom Liquid Theme",
        description:
          "Zero-bloat, custom Shopify OS 2.0 theme built from scratch with modular dynamic sections.",
      },
      {
        title: "90+ PageSpeed Optimization",
        description:
          "Asset prefetching, script minimization, and modern image formats to maximize Core Web Vitals.",
      },
      {
        title: "App & ERP Custom Integrations",
        description:
          "Custom connectors for Klaviyo, Recharge, Gorgias, NetSuite, and 3PL fulfillment platforms.",
      },
      {
        title: "Internationalization & Multi-Currency",
        description:
          "Shopify Markets setup with localized currencies, languages, and geo-targeted pricing.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Technical Blueprint",
        description:
          "Architecture mapping, app stack audit, and data schema design for Shopify OS 2.0.",
      },
      {
        step: "02",
        title: "Sprint-Based Development",
        description:
          "Clean, componentized Liquid or Headless development in Git-versioned staging stores.",
      },
      {
        step: "03",
        title: "QA & Performance Testing",
        description:
          "Cross-browser testing, accessibility audit, payment gateway testing, and load speed optimization.",
      },
      {
        step: "04",
        title: "Zero-Downtime Launch",
        description:
          "DNS switch, domain verification, 301 redirect validation, and real-time order monitoring.",
      },
    ],
    metrics: [
      { value: "95+", label: "Google Lighthouse Mobile Score" },
      { value: "< 1.2s", label: "Average Page Load Time" },
      { value: "100%", label: "Zero Downtime Launch Record" },
    ],
    faqs: [
      {
        question: "Can you build headless Shopify stores with Next.js?",
        answer:
          "Yes, we specialize in Headless Shopify architectures combining Shopify Storefront API with Next.js for instant page loads and total frontend flexibility.",
      },
      {
        question: "Do you handle custom app integrations?",
        answer:
          "Yes, we build and configure custom Shopify apps and private webhooks to connect your ERP, CRM, and fulfillment tools.",
      },
    ],
  },
  {
    slug: "platform-migration",
    title: "Platform Migration",
    heroTagline:
      "Flawless zero-downtime store migrations with 100% SEO ranking and data preservation.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c4229130cd923555f69b_Mobile%20App%20Design-p-1080.webp",
    bottomImage:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame%201618871790%20(5).avif",
    des: "Seamlessly transition your business infrastructure. We migrate data, logic, and designs securely without downtime, preserving your SEO rankings.",
    overview:
      "Migrating to Shopify Plus from Magento, WooCommerce, BigCommerce, or custom legacy CMS platforms requires precision engineering. We migrate your product catalogs, order history, customer accounts, and 301 redirect trees with zero traffic loss.",
    services: [
      {
        id: 1,
        slug: "woocommerce-to-shopify",
        title: "WooCommerce to Shopify",
        href: "/services/platform-migration/woocommerce-to-shopify",
        tagline:
          "Migrate from WooCommerce to Shopify Plus with zero data loss and zero downtime.",
        description:
          "We handle the complete WooCommerce to Shopify migration — products, customers, orders, SEO redirects, and all metafields — with automated validation scripts to guarantee 100% data integrity.",
        deliverables: [
          "Product & Variant Migration",
          "Customer & Order History Transfer",
          "301 SEO Redirect Map",
          "Metafield Migration",
          "Post-Migration QA Report",
        ],
        process: [
          {
            step: "01",
            title: "Data Audit",
            description:
              "Catalogue all WooCommerce data structures, custom fields, and plugin dependencies.",
          },
          {
            step: "02",
            title: "Staging Migration",
            description:
              "Run full migration on a Shopify development store and verify all records.",
          },
          {
            step: "03",
            title: "Delta Sync",
            description:
              "Capture and sync orders and customers created during the migration window.",
          },
          {
            step: "04",
            title: "Go-Live & Monitor",
            description:
              "Switch DNS and monitor for 48 hours with rollback plan ready.",
          },
        ],
      },
      {
        id: 2,
        slug: "custom-cms-migration",
        title: "Custom CMS Migration",
        href: "/services/platform-migration/custom-cms-migration",
        tagline:
          "Migrate from any legacy CMS or custom platform to Shopify — cleanly and completely.",
        description:
          "We migrate stores from Magento, BigCommerce, Squarespace, custom PHP/Laravel platforms, and any bespoke ecommerce system to Shopify Plus with custom ETL pipelines built specifically for your data structure.",
        deliverables: [
          "Custom ETL Migration Scripts",
          "Data Mapping Documentation",
          "Media Asset Migration",
          "Content & Blog Migration",
          "Validation & QA Report",
        ],
        process: [
          {
            step: "01",
            title: "Source Audit",
            description:
              "Analyze the legacy platform's database schema, file structure, and API availability.",
          },
          {
            step: "02",
            title: "ETL Pipeline Build",
            description:
              "Develop custom extraction, transformation, and loading scripts for the specific platform.",
          },
          {
            step: "03",
            title: "Test Migration",
            description:
              "Execute staging migration and validate all data counts and content integrity.",
          },
          {
            step: "04",
            title: "Production Cutover",
            description:
              "Execute production migration with delta sync and 24-hour monitoring.",
          },
        ],
      },
      {
        id: 3,
        slug: "seo-preservation",
        title: "Database & SEO Preservation",
        href: "/services/platform-migration/seo-preservation",
        tagline:
          "Protect every organic ranking point during your platform migration.",
        description:
          "Our SEO-first migration approach ensures every URL, meta tag, canonical, structured data schema, and internal link is mapped and preserved — so your Google rankings improve, not drop, after launch.",
        deliverables: [
          "Complete 301 Redirect Map",
          "Meta Title & Description Migration",
          "Structured Data Schema Setup",
          "Internal Link Audit",
          "Post-Launch SEO Health Check",
        ],
        process: [
          {
            step: "01",
            title: "URL Inventory",
            description:
              "Crawl and document every indexed URL on the existing platform.",
          },
          {
            step: "02",
            title: "Redirect Architecture",
            description:
              "Build a comprehensive 1-to-1 redirect map for every old URL to its new destination.",
          },
          {
            step: "03",
            title: "On-Page Migration",
            description:
              "Transfer all meta titles, descriptions, alt tags, and schema markup.",
          },
          {
            step: "04",
            title: "Post-Launch Audit",
            description:
              "Monitor Search Console for crawl errors, ranking changes, and fix any issues within 48 hours.",
          },
        ],
      },
    ],
    deliverables: [
      {
        title: "Full Data Migration & Validation",
        description:
          "Automated ETL migration of products, variants, metadata, customer lists, and past order history.",
      },
      {
        title: "Comprehensive 301 Redirect Mapping",
        description:
          "1-to-1 URL redirect architecture to guarantee zero loss of organic search traffic and search rankings.",
      },
      {
        title: "Payment & Gateway Reconnection",
        description:
          "Setting up Stripe, PayPal, Apple Pay, Klarna, and tokenized customer checkout credentials.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Data Audit & Mapping",
        description:
          "Catalog structure analysis, custom field taxonomy, and database cleanup strategy.",
      },
      {
        step: "02",
        title: "Staging Migration Run",
        description:
          "Dry-run migration in private environment with automated verification scripts.",
      },
      {
        step: "03",
        title: "Delta Sync",
        description:
          "Syncing newly created orders and customers right before the go-live transition.",
      },
      {
        step: "04",
        title: "Go-Live & Post-Migration Watch",
        description:
          "DNS changeover with 24/7 technical monitoring and error logging.",
      },
    ],
    metrics: [
      { value: "0", label: "Downtime Minutes During Migration" },
      { value: "100%", label: "SEO Equity & Traffic Maintained" },
      { value: "1M+", label: "Records Migrated Successfully" },
    ],
    faqs: [
      {
        question:
          "Will our customers lose their purchase history or passwords?",
        answer:
          "We migrate complete customer order history. For password security, we implement automated account activation invites so customers can seamlessly resume shopping.",
      },
      {
        question: "Will our Google search rankings drop after migrating?",
        answer:
          "No. By meticulously mapping 301 redirects and preserving meta titles, schema markup, and canonical URLs, we protect and often improve organic SEO performance.",
      },
    ],
  },
  {
    slug: "growth-optimization",
    title: "Growth & Optimization",
    heroTagline:
      "Data-driven conversion rate optimization and performance tuning that multiplies revenue.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422529dc0db1881445e_Branding%20%26%20Identity-p-1080.webp",
    bottomImage:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame%201618871790%20(5).avif",
    des: "Scale your revenue and digital footprints. We analyze user journeys and execute optimization strategies to turn current traffic into customer loops.",
    overview:
      "Traffic is only half the battle. Our conversion rate optimization (CRO) methodology combines deep behavioral analytics, session heatmaps, user interviews, and iterative A/B testing to turn existing website visitors into high-value repeat purchasers.",
    services: [
      {
        id: 1,
        slug: "cro",
        title: "Conversion Rate Optimization (CRO)",
        href: "/services/growth-optimization/cro",
        tagline:
          "Turn existing traffic into exponential revenue — without increasing ad spend.",
        description:
          "We run data-driven CRO programs that systematically identify friction across your funnel and eliminate it — using heatmaps, session replays, user interviews, and iterative A/B testing.",
        deliverables: [
          "Full Funnel CRO Audit",
          "Prioritized Test Backlog",
          "A/B Test Results Report",
          "Winning Variant Implementation",
          "CRO Performance Dashboard",
        ],
        process: [
          {
            step: "01",
            title: "Baseline Audit",
            description:
              "Analyse GA4, heatmaps, and session recordings to identify highest-priority drop-off points.",
          },
          {
            step: "02",
            title: "Hypothesis Design",
            description:
              "Formulate ICE-scored test hypotheses with clear success metrics.",
          },
          {
            step: "03",
            title: "A/B Test Execution",
            description:
              "Deploy split tests via VWO or Optimizely and monitor for statistical significance.",
          },
          {
            step: "04",
            title: "Scale & Iterate",
            description:
              "Implement winning variants and feed insights into the next test cycle.",
          },
        ],
      },
      {
        id: 2,
        slug: "seo-strategy",
        title: "SEO Strategy & Marketing",
        href: "/services/growth-optimization/seo-strategy",
        tagline: "Build organic authority that compounds month after month.",
        description:
          "Technical SEO audits, content strategy, backlink acquisition, and ongoing keyword optimization to drive qualified organic traffic that converts to revenue — not just impressions.",
        deliverables: [
          "Technical SEO Audit",
          "Keyword Research & Content Map",
          "On-Page Optimization",
          "Monthly Backlink Report",
          "Organic Revenue Attribution",
        ],
        process: [
          {
            step: "01",
            title: "Technical Audit",
            description:
              "Crawl-based analysis of site speed, indexability, structured data, and Core Web Vitals.",
          },
          {
            step: "02",
            title: "Keyword Strategy",
            description:
              "Intent-mapped keyword research aligned to your product categories and buyer stages.",
          },
          {
            step: "03",
            title: "Content & On-Page",
            description:
              "Optimize existing pages and create new high-intent content targeting commercial keywords.",
          },
          {
            step: "04",
            title: "Link Acquisition",
            description:
              "Earned backlink campaigns through digital PR, partnerships, and resource link building.",
          },
        ],
      },
      {
        id: 3,
        slug: "ab-testing",
        title: "A/B Testing & Analytics",
        href: "/services/growth-optimization/ab-testing",
        tagline:
          "Let data choose your winners — scientifically validated experiments at scale.",
        description:
          "End-to-end A/B and multivariate testing programs backed by statistical rigor — from hypothesis design and variant creation to analysis and winning-variant deployment.",
        deliverables: [
          "Testing Roadmap & Calendar",
          "Variant Design & Development",
          "Statistical Analysis Report",
          "GA4 & Shopify Analytics Setup",
          "Experiment Documentation",
        ],
        process: [
          {
            step: "01",
            title: "Analytics Setup",
            description:
              "Configure GA4 event tracking, Shopify analytics, and heatmap tools for accurate data collection.",
          },
          {
            step: "02",
            title: "Experiment Design",
            description:
              "Define hypothesis, control vs variant, success metrics, and minimum detectable effect.",
          },
          {
            step: "03",
            title: "Test Execution",
            description:
              "Develop variant experiences and run tests to statistical significance (95%+ confidence).",
          },
          {
            step: "04",
            title: "Analysis & Action",
            description:
              "Report findings, implement winners, and archive insights for future test planning.",
          },
        ],
      },
    ],
    deliverables: [
      {
        title: "Full Funnel CRO Audit",
        description:
          "Identifying high-friction drop-off points across home, category, product, cart, and checkout pages.",
      },
      {
        title: "Hypothesis-Driven A/B Testing",
        description:
          "Deploying high-confidence statistically significant split tests to validate design changes.",
      },
      {
        title: "Average Order Value (AOV) Boosters",
        description:
          "In-cart upsells, dynamic bundle builders, and free shipping tier progress bars.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Quantitative Analytics",
        description:
          "Google Analytics 4, heatmaps, scroll depth, and micro-conversion funnel analysis.",
      },
      {
        step: "02",
        title: "Hypothesis Formation",
        description:
          "Formulating prioritized test roadmaps using the ICE (Impact, Confidence, Ease) framework.",
      },
      {
        step: "03",
        title: "Experimentation Sprint",
        description:
          "Designing and coding variant experiences with statistical significance monitoring.",
      },
      {
        step: "04",
        title: "Implementation & Scaling",
        description:
          "Hardcoding winning variations and launching next-tier optimization loops.",
      },
    ],
    metrics: [
      { value: "+32%", label: "Average AOV Increase" },
      { value: "4.2x", label: "Average ROI on CRO Engagements" },
      { value: "85%", label: "Test Hypothesis Success Rate" },
    ],
    faqs: [
      {
        question: "What minimum traffic do we need for A/B testing?",
        answer:
          "We recommend at least 25,000 monthly visitors or 500+ monthly orders to achieve statistical confidence within 2 to 4 weeks.",
      },
      {
        question: "How do you measure success in CRO?",
        answer:
          "We measure success directly through revenue per visitor (RPV), conversion rate (CR), and average order value (AOV) tracked in GA4 and Shopify analytics.",
      },
    ],
  },
];

export const getServiceBySlug = (
  slug: string,
): DetailedServiceItem | undefined => {
  return detailedServiceItems.find((s) => s.slug === slug);
};

export const getSubServiceBySlug = (
  serviceSlug: string,
  subSlug: string,
): DetailedSubService | undefined => {
  const service = getServiceBySlug(serviceSlug);
  return service?.services.find((sub) => sub.slug === subSlug);
};

export const getAllSubServiceParams = () => {
  return detailedServiceItems.flatMap((service) =>
    service.services.map((sub) => ({
      slug: service.slug,
      subSlug: sub.slug,
    })),
  );
};

// ==========================================
// 9. WORKING PROCESS DATA
// ==========================================
export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We start by understanding your business, goals, target audience, and competitors to build a clear project foundation.",
    tags: ["Video meeting", "Discovery"],
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Crafting bespoke wireframes, interactive UI prototypes, and design systems tailored specifically for your brand identity.",
    tags: ["Video meeting"],
  },
  {
    number: "03",
    title: "Development & Build",
    description:
      "Converting designs into high-performance, pixel-perfect Shopify or WordPress stores with seamless integrations.",
    tags: ["Video meeting"],
  },
  {
    number: "04",
    title: "Scale & Optimization",
    description:
      "Rigorous testing, SEO optimization, speed enhancement, and ongoing support to ensure your store continues to grow.",
    tags: ["Video meeting"],
  },
];

export const workingProcessSectionData = {
  subtitle: "/ Working process",
  title: "How it works",
  ctaText: "Get in touch",
};

export const caseStudiesSectionData = {
  subtitle: "/Case Studies",
  title: "Real stories, real results – see what we've made possible.",
  servicesLabel: "Services",
  industryLabel: "Industry",
  publishedLabel: "Published",
  viewMoreText: "More about us",
  ctaText: "More works",
};

export const testimonialSectionData = {
  subtitle: "/ Client Stories",
  title:
    '<span class="text-neutral-500">Success </span>Stories<br />That Inspire Us',
};

export const activitySectionData = {
  title: "Perfect <br /> — activity",
};

// ==========================================
// 10. FAQ DATA & CEO CARD
// ==========================================
export type FAQItem = {
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    question: "What are your focus areas as a UI/UX design agency?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
  },
  {
    question: "Do you offer support after the project is delivered?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
  },
  {
    question: "What industries do you usually work with?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
  },
  {
    question: "How much does it cost to work with your agency?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
  },
];

export const faqCeoCard = {
  avatar: "https://placehold.co/62x62",
  name: "Ariyan",
  title: "CEO and Founder of Vorklye",
  message:
    "Hi, I'm Ariyan, the CEO and Founder of Vorklye. Don't hesitate to reach out to me anytime – I'm here to answer all your questions!",
  buttonLabel: "Ask Questions",
  whatsappIcon: siteConfig.whatsAppIcon,
  whatsappLink: "#",
};

export const faqSectionData = {
  title:
    'Frequently <span class="text-neutral-500">asked<br />questions</span>',
  ceoCard: faqCeoCard,
  items: faqItems,
};

// ==========================================
// 11. ACTIVITY STATS DATA
// ==========================================
export type StatItem = {
  value: string;
  text: string;
};

export type ActivityStats = {
  col1: StatItem[];
  col2: StatItem[];
};

export const activityStats: ActivityStats = {
  col1: [
    { value: "1.8M", text: "We helped to get companies with $200M+ funding." },
    {
      value: "12+",
      text: "We have had quite a run in our 12+ years of working.",
    },
    { value: "99%", text: "Average 99% clients satisfaction with expertise." },
  ],
  col2: [
    { value: "260+", text: "Crafted responsive, user-centered website & app." },
    { value: "80+", text: "Professional skilled designers and developers." },
  ],
};

// ==========================================
// 12. TESTIMONIAL DATA
// ==========================================
export type TestimonialItem = {
  id: number;
  video: string;
  videoLink?: string;
  logo: string;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink: "#",
    logo: "/images/brand/3.png",
    quote:
      "Design Monks did an amazing job bringing my brand to life. From the",
    name: "Tommy Lu",
    role: "Founder @ GoodGenes",
  },
  {
    id: 2,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink: "#",
    logo: "/images/brand/4.png",
    quote:
      "The team really understood our vision and delivered beyond what we expected.",
    name: "Sarah Kim",
    role: "CEO @ Nova Studio",
  },
  {
    id: 3,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink: "#",
    logo: "/images/brand/5.png",
    quote:
      "Communication was smooth throughout the project and the results speak for themselves.",
    name: "James Carter",
    role: "Founder @ Blume",
  },
  {
    id: 4,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink: "#",
    logo: "/images/brand/6.png",
    quote:
      "Professional, fast, and genuinely invested in our success. Highly recommend.",
    name: "Elena Marsh",
    role: "CMO @ Fenix",
  },
  {
    id: 5,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink: "#",
    logo: "/images/brand/3.png",
    quote:
      "Design Monks did an amazing job bringing my brand to life. From the",
    name: "Tommy Lu",
    role: "Founder @ GoodGenes",
  },
  {
    id: 6,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink: "#",
    logo: "/images/brand/4.png",
    quote:
      "The team really understood our vision and delivered beyond what we expected.",
    name: "Sarah Kim",
    role: "CEO @ Nova Studio",
  },
  {
    id: 7,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink: "#",
    logo: "/images/brand/5.png",
    quote:
      "Communication was smooth throughout the project and the results speak for themselves.",
    name: "James Carter",
    role: "Founder @ Blume",
  },
  {
    id: 8,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink: "#",
    logo: "/images/brand/6.png",
    quote:
      "Professional, fast, and genuinely invested in our success. Highly recommend.",
    name: "Elena Marsh",
    role: "CMO @ Fenix",
  },
];

// ==========================================
// 13. INDUSTRIES DATA
// ==========================================
export type IndustryItem = {
  id: number;
  title: string;
  des: string;
  image: string;
  link?: string;
};

export const industries: IndustryItem[] = [
  {
    id: 1,
    title: "Finance & Fintech",
    des: "We create digital products that are both secure and easy to trust, with tidy dashboards and simple steps.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc8700162359f97782eb_Frame%202147203191.webp",
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce & DTC",
    des: "Our approach of making things simpler and more effective helps users go from browsing to checkout in a few simple steps.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc8663ee6ba76a5af586_Frame%202147203193.webp",
  },
  {
    id: 3,
    title: "SaaS & B2B Platforms",
    des: "We build smooth interfaces that make it easy for teams to work, so they can manage tasks quickly and effectively.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc88ff1994c95ae66383_Frame%202147203194.webp",
  },
  {
    id: 6,
    title: "Finance & Fintech",
    des: "We create digital products that are both secure and easy to trust, with tidy dashboards and simple steps.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc8700162359f97782eb_Frame%202147203191.webp",
  },
  {
    id: 4,
    title: "E-Commerce & DTC",
    des: "Our approach of making things simpler and more effective helps users go from browsing to checkout in a few simple steps.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc8663ee6ba76a5af586_Frame%202147203193.webp",
  },
  {
    id: 5,
    title: "SaaS & B2B Platforms",
    des: "We build smooth interfaces that make it easy for teams to work, so they can manage tasks quickly and effectively.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835cc88ff1994c95ae66383_Frame%202147203194.webp",
  },
];

// ==========================================
// 14. CAREER & BENEFITS DATA
// ==========================================
export type WhyWorkItem = {
  id: number;
  title: string;
  description: string;
};

export const whyWorks: WhyWorkItem[] = [
  {
    id: 1,
    title: "Remote Work = Freedom",
    description:
      "Skip the daily commute—we’ve embraced a remote-first culture from day one",
  },
  {
    id: 2,
    title: "Two Festival Bonuses",
    description:
      "Double the celebrations, double the rewards — enjoy two annual bonuses, each equal to 50% of your gross salary.",
  },
  {
    id: 3,
    title: "Generous Leave Benefits",
    description:
      "Our comprehensive leave benefits—including annual, sick, and marriage leave—ensure you can maintain a healthy work–life balance.",
  },
  {
    id: 4,
    title: "Mentorship & Personal Growth",
    description:
      "Not just a boss, but a mentor—helping you achieve your fullest potential.",
  },
  {
    id: 5,
    title: "Device & Internet Allowance",
    description:
      "At Vorklye, we help our team work at their best by supporting device purchases and internet costs.",
  },
  {
    id: 6,
    title: "Health & Wellness Allowance",
    description:
      "Your health—and your family’s—comes first. Our medical allowance stands by you during life’s toughest moments, offering emergency loans with simple and flexible EMI plans.",
  },
  {
    id: 7,
    title: "Generous Leave Benefits",
    description:
      "Our comprehensive leave benefits—including annual, sick, and marriage leave—ensure you can maintain a healthy work–life balance.",
  },
  {
    id: 8,
    title: "Performance Bonuses",
    description:
      "Your effort matters at Vorklye. Go the extra mile and earn bonuses for exceptional contributions.",
  },
  {
    id: 9,
    title: "Emergency Loan Facilities",
    description:
      "We support our team during unexpected moments by offering emergency loans with simple and flexible EMI plans.",
  },
  {
    id: 10,
    title: "Generous Leave Benefits",
    description:
      "Our comprehensive leave benefits—including annual, sick, and marriage leave—ensure you can maintain a healthy work–life balance.",
  },
];

export type JobItem = {
  id: number;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  deadline: string;
  status: "open" | "closed";
  googleFormUrl?: string;
  link: string;
  tags: string[];
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  benefits?: string[];
};

export const jobs: JobItem[] = [
  {
    id: 1,
    slug: "senior-growth-executive",
    title: "Executive / Senior Executive, Growth",
    department: "Growth & Marketing",
    location: "Uttara, Dhaka (Hybrid)",
    type: "Full-Time",
    experience: "3+ Years",
    salary: "Competitive / Negotiable",
    deadline: "Rolling Application",
    status: "open",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSc-example/viewform",
    link: "/career/senior-growth-executive",
    tags: ["Uttara, Dhaka", "Full-Time", "Growth & CRO"],
    overview:
      "We are looking for an ambitious and data-driven Growth Executive / Senior Executive to lead digital growth campaigns, client acquisition funnels, and performance optimization across our global ecommerce and tech clients.",
    responsibilities: [
      "Develop and execute end-to-end inbound & outbound growth strategies for global B2B clients.",
      "Analyze full-funnel performance metrics, identifying leakages and executing high-impact conversion experiments.",
      "Collaborate closely with UI/UX design and development teams to implement high-converting landing pages.",
      "Manage multi-channel outreach, content syndication, and performance marketing campaigns.",
      "Prepare data-backed weekly performance reports and client growth roadmaps.",
    ],
    requirements: [
      "Minimum 3+ years of experience in digital growth, performance marketing, or agency account scaling.",
      "Strong analytical skills with hands-on proficiency in GA4, Looker Studio, HubSpot, or similar tools.",
      "Demonstrated track record of scaling pipeline revenue and improving conversion rates.",
      "Exceptional English written and verbal communication skills for interacting with international clients.",
      "Proactive self-starter mindset with strong project management capabilities.",
    ],
    niceToHave: [
      "Experience with Shopify ecosystem, B2B SaaS marketing, or eCommerce CRO.",
      "Familiarity with marketing automation tools like Klaviyo, ActiveCampaign, or Apollo.",
    ],
    benefits: [
      "Competitive salary reviewed biannually based on merit and impact.",
      "Two festival bonuses and performance-driven annual incentives.",
      "Flexible hybrid working schedule with state-of-the-art office workspace in Uttara.",
      "Comprehensive paid leaves including annual, medical, and paternity/maternity leaves.",
      "Continuous learning budget for courses, books, and international certifications.",
    ],
  },
  {
    id: 2,
    slug: "lead-ui-ux-designer",
    title: "Lead UI / UX Designer",
    department: "Design & Creative",
    location: "Uttara, Dhaka (Hybrid / Remote)",
    type: "Full-Time",
    experience: "4+ Years",
    salary: "Competitive",
    deadline: "Rolling Application",
    status: "open",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSc-example/viewform",
    link: "/career/lead-ui-ux-designer",
    tags: ["Uttara, Dhaka", "Full-Time", "Figma Expert"],
    overview:
      "Join our award-winning design studio to craft world-class ecommerce storefronts, complex web applications, and scalable design systems for top-tier global brands.",
    responsibilities: [
      "Lead end-to-end product design from user research and wireframing to high-fidelity Figma design systems.",
      "Design responsive, accessible, and high-converting interfaces optimized for Shopify OS 2.0 and modern web apps.",
      "Conduct heuristic evaluations, user testing sessions, and interactive prototyping.",
      "Mentor junior and mid-level designers, fostering a culture of design excellence and attention to detail.",
      "Present design rationale clearly to founders, product managers, and executive stakeholders.",
    ],
    requirements: [
      "4+ years of professional experience in product design, UI/UX, or digital agency environments.",
      "Mastery of Figma (auto-layout, components, variables, interactive prototyping, and tokens).",
      "A strong, clean portfolio showcasing modern aesthetics, typography mastery, and conversion thinking.",
      "Solid understanding of frontend feasibility (HTML/CSS, responsive breakpoints, design handoff).",
      "Fluent English communication skills for collaborating with global design teams.",
    ],
    niceToHave: [
      "Experience designing for eCommerce brands, luxury aesthetics, or SaaS dashboards.",
      "Working knowledge of motion design (Framer, After Effects, or Lottie).",
    ],
    benefits: [
      "Top-tier compensation package with performance bonuses.",
      "Latest Apple M-series hardware provided.",
      "Hybrid/flexible remote working options.",
      "Two festival bonuses and full paid leave coverage.",
      "Collaborative, ego-free team environment with global exposure.",
    ],
  },
  {
    id: 3,
    slug: "senior-shopify-developer",
    title: "Senior Shopify & Full-Stack Developer",
    department: "Engineering",
    location: "Uttara, Dhaka (Hybrid)",
    type: "Full-Time",
    experience: "3+ Years",
    salary: "Competitive / Negotiable",
    deadline: "Rolling Application",
    status: "open",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSc-example/viewform",
    link: "/career/senior-shopify-developer",
    tags: ["Uttara, Dhaka", "Full-Time", "Liquid & React"],
    overview:
      "We are seeking a seasoned Shopify Developer who takes pride in pixel-perfect implementation, blazing-fast speed scores, and modular Shopify OS 2.0 architecture.",
    responsibilities: [
      "Build custom, zero-bloat Shopify OS 2.0 themes from Figma designs using Liquid, TailwindCSS, and JavaScript.",
      "Develop headless commerce frontends with Next.js, TypeScript, and Shopify Storefront GraphQL API.",
      "Optimize web performance to achieve 90+ mobile Google PageSpeed scores.",
      "Integrate complex third-party apps, custom webhooks, ERP connectors, and payment gateways.",
      "Conduct code reviews and ensure engineering best practices across Git repositories.",
    ],
    requirements: [
      "3+ years of hands-on experience building custom Shopify themes and apps.",
      "Deep expertise in Liquid, HTML5, CSS3/Tailwind, JavaScript (ES6+), and React/Next.js.",
      "Proven track record of optimizing Core Web Vitals and performance benchmarks.",
      "Strong understanding of Shopify APIs, Metafields, Storefront API, and checkout extensions.",
      "Good communication skills and experience with Git workflows.",
    ],
    niceToHave: [
      "Experience with Hydrogen/Remix or headless commerce setups.",
      "Experience building custom Shopify Public or Custom Apps using Node.js / Python.",
    ],
    benefits: [
      "Industry-leading salary package with biannual reviews.",
      "Two festival bonuses and project milestone bonuses.",
      "High-end development machine (Apple Silicon).",
      "Festival bonuses, sick leaves, and annual paid time off.",
      "Paid certifications and technical conference sponsorships.",
    ],
  },
  {
    id: 4,
    slug: "senior-motion-graphics-designer",
    title: "Senior Motion Graphics Designer",
    department: "Design & Creative",
    location: "Uttara, Dhaka (On-Site)",
    type: "Full-Time",
    experience: "3+ Years",
    salary: "BDT 70,000 – 90,000",
    deadline: "Position Filled",
    status: "closed",
    link: "/career/senior-motion-graphics-designer",
    tags: ["Uttara, Dhaka", "Full-Time", "Closed"],
    overview:
      "This role focused on creating 3D product animations, micro-interaction showreels, and dynamic marketing video assets for our international commerce clients.",
    responsibilities: [
      "Create high-end 3D product renders and animations using Blender / Cinema 4D and After Effects.",
      "Collaborate with brand designers to bring static vector brand identities to life with fluid motion.",
      "Produce engaging social media reels, website hero video loops, and case study animations.",
    ],
    requirements: [
      "3+ years of motion graphics experience in agency or production house environments.",
      "Proficiency in Adobe After Effects, Premiere Pro, and 3D software (Blender/C4D).",
      "Strong understanding of timing, easing, typography animation, and sound design.",
    ],
    benefits: [
      "Competitive salary with performance bonuses.",
      "High-performance workstation with dual 4K monitors.",
      "Comprehensive medical coverage and paid leaves.",
    ],
  },
  {
    id: 5,
    slug: "junior-frontend-developer",
    title: "Junior Frontend Engineer (React/Next.js)",
    department: "Engineering",
    location: "Uttara, Dhaka (Hybrid)",
    type: "Full-Time",
    experience: "1+ Year",
    salary: "BDT 35,000 – 50,000",
    deadline: "Position Filled",
    status: "closed",
    link: "/career/junior-frontend-developer",
    tags: ["Uttara, Dhaka", "Full-Time", "Closed"],
    overview:
      "This position focused on developing interactive React components, responsive layouts, and animations under the mentorship of senior engineers.",
    responsibilities: [
      "Implement responsive UI components from Figma using TailwindCSS, React, and Next.js.",
      "Ensure cross-browser compatibility and smooth 60fps micro-animations.",
      "Work with REST and GraphQL APIs to fetch and render dynamic catalog data.",
    ],
    requirements: [
      "1+ year of experience with React, TypeScript, and TailwindCSS.",
      "Solid understanding of semantic HTML, CSS flex/grid, and JavaScript basics.",
      "Eagerness to learn Shopify ecosystem and headless commerce.",
    ],
    benefits: [
      "Dedicated senior mentorship and accelerated career progression.",
      "Subsidized team lunches and snacks.",
      "Flexible hybrid working schedule.",
    ],
  },
];

export const getJobBySlug = (slug: string): JobItem | undefined => {
  return jobs.find((job) => job.slug === slug);
};

export const getOpenJobs = (): JobItem[] => {
  return jobs.filter((job) => job.status === "open");
};

export const getClosedJobs = (): JobItem[] => {
  return jobs.filter((job) => job.status === "closed");
};

export const getAllJobParams = () => {
  return jobs.map((job) => ({ slug: job.slug }));
};

// ==========================================
// 15. CONTACT FORM OPTIONS & PAGE DATA
// ==========================================
export const budgetOptions: string[] = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+",
];

export const hearAboutUsOptions: string[] = [
  "Google Search",
  "Instagram",
  "LinkedIn",
  "Referral",
  "Twitter / X",
  "Other",
];

export const serviceTags: string[] = [
  "UI/UX Design",
  "SaaS Design",
  "Branding",
  "CRO",
  "Mobile app",
  "Development",
  "MVP Development",
  "Web Design",
];

export const contactPageData = {
  title: "Talk Directly with Our Experts",
  bannerImage:
    "https://notionhive.com/_next/image?url=https%3A%2F%2Fcms.notionhive.com%2Fwp-content%2Fuploads%2F2026%2F05%2FFrame-2147223905-1.png&w=1080&q=75",
  description:
    "You’ve scrolled this far, so we clearly have your attention. Now, let’s help you grab your customers' attention with something they can't ignore.",
  // Form labels & placeholders
  emailPlaceholder: "Email",
  namePlaceholder: "Full name",
  budgetPlaceholder: "Project budget",
  hearAboutUsPlaceholder: "How did you hear about us?",
  messagePlaceholder: "Tell us about your product and goals.",
  servicesLabel: "How can we help you?",
  submitButtonText: "Send message",
  submittingText: "Sending...",
  // Contact info
  preferEmailLabel: "Prefer email?",
  email: "hello@wavespace.agency",
  emailHref: "mailto:hello@wavespace.agency",
  // Options
  budgetOptions,
  hearAboutUsOptions,
  serviceTags,
};

// ==========================================
// 16. PAGE SPECIFIC DATA (ABOUT, CAREER, SERVICES, CASE STUDIES)
// ==========================================
export const aboutPageData = {
  heroTitle: "Bringing Vision To Life, One Line Of Code At A Time",
  heroSubtitle:
    "We’re more than a software company. We’re your strategic partner in building purposeful, high-impact digital products that grow with your business.",
  heroCtaText: "Book a Free Strategy Call",
  bannerImage:
    "https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp",
  counter: aboutCounter,
  missionSubtitle: "/ Mission",
  missionTitle:
    "Bridging the gap between business vision and digital execution with tailored, expert-driven solutions.",
  missionImages: [
    "https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp",
    "https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp",
    "https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp",
    "https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp",
  ],
  visionSubtitle: "/ Vision",
  visionTitle:
    "To shape a future where digital solutions are intuitive, impactful, and universally available.",
  creativesSubtitle: "/ Meet our creatives",
  creativesTitle:
    "We are your product geek, UX mind, UI lovers, & Webflow builders. Your creative team, just a Slack away.",
  joinTeamButtonText: "Join our team",
  teams: teamMembers,
};

export const careerPageData = {
  heroTitle: "Collaborate, Create, and Grow Your Career",
  heroSubtitle:
    "We’re a team of thinkers, makers, and doers — passionate about creating meaningful experiences and solving real problems. If you’re driven by creativity, collaboration, and constant growth, you’ll feel right at home here.",
  heroCtaText: "Explore open roles",
  bannerImage:
    "https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp",
  whyWorkSubtitle: "/ Design Agency",
  whyWorkTitle: "Why Work With Us?",
  positionsSubtitle: "/Position",
  positionsTitle: "Our Open <span>Position</span>",
  applyButtonText: "Apply now",
  faqSubtitle: "/FAQ",
  faqTitle: "Questions? We’re <span>Here to Help</span>",
  whyWorks,
  jobs,
};

export const servicesPageData = {
  heroTitle: "Everything Your Brand Needs to Build, Grow and Scale",
  heroSubtitle:
    "From the first brand strategy session to the final line of code, we handle every dimension of your growth under one roof.",
  heroCtaText: "Let’s Discuss Your Project",
  bannerImage:
    "https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp",
  industriesSubtitle: "/ Industries",
  industriesTitle: "Industry expertise <span>across globally</span>",
  consultButtonText: "Consult an expert",
  industries,
};

export const caseStudiesPageData = {
  heroTitle: "Case Studies",
  heroSubtitle:
    "We’re more than a software company. We’re your strategic partner in building purposeful, high-impact digital products that grow with your business.",
  heroCtaText: "Let’s Discuss Your Project",
  // Filter categories
  filterCategories: [
    { label: "All projects", href: "#" },
    { label: "Home & Decor", href: "#" },
    { label: "Fashion & Apparel", href: "#" },
    { label: "Beauty & Cosmetics", href: "#" },
  ],
  caseStudies,
};

// ==========================================
// 17. ALL-IN-ONE AGGREGATED EXPORT
// ==========================================
export const siteData = {
  siteConfig,
  headerData,
  footerData,
  heroData,
  aboutSectionData,
  brandSectionData,
  serviceSectionData,
  detailedServiceItems,
  processSteps,
  faqItems,
  faqCeoCard,
  activityStats,
  testimonials,
  industries,
  whyWorks,
  jobs,
  budgetOptions,
  hearAboutUsOptions,
  serviceTags,
  contactPageData,
  aboutPageData,
  careerPageData,
  servicesPageData,
  caseStudiesPageData,
};

export default siteData;
