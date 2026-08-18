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
    description:
      "A complete headless digital commerce overhaul designed to accelerate client conversions and scale operational capacity across global markets.",
    services: ["Shopify Plus", "Migration", "UI/UX Design", "Custom Integrations"],
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
    client: "Rovero Lifestyle",
    description:
      "Crafting an immersive high-end fashion experience with responsive 3D lookbooks and seamless omnichannel checkout for modern luxury buyers.",
    services: ["UI/UX Redesign", "Shopify Theme Development", "CRO Strategy"],
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
    "We're a team of commerce specialists who have helped countless <span class=\"text-neutral-500\">brands build, grow and increase.</span>",
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
  subtitle: string;
  description: string;
  tags: string[];
};

export const services: ServiceItem[] = [
  {
    id: "01",
    title: "Brand Strategy",
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
  title: string;
  href: string;
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
    heroTagline: "Designing intuitive, brand-defining interfaces that convert visitors into loyal customers.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422ed8ffd5696dac6a4_UX%20Design-p-1080.webp",
    bottomImage:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame%201618871790%20(5).avif",
    des: "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.",
    overview:
      "We believe that exceptional digital design sits at the intersection of aesthetic beauty, technical performance, and behavioral psychology. Our UI/UX design practice transforms complex user journeys into effortless, high-converting digital interactions tailored specifically for Shopify and modern SaaS brands.",
    services: [
      { id: 1, title: "UX Research Service", href: "#ux-research-service" },
      { id: 2, title: "UX Audit & Strategy", href: "#ux-audit-strategy" },
      { id: 3, title: "UX Usability Testing", href: "#ux-usability-testing" },
      { id: 4, title: "UI UX Consulting", href: "#ui-ux-consulting" },
      { id: 5, title: "UI UX Design", href: "#ui-ux-design" },
      { id: 6, title: "AI UI UX Design", href: "#ai-ui-ux-design" },
      { id: 7, title: "Design System", href: "#design-system" },
      {
        id: 8,
        title: "Wireframing and Prototyping",
        href: "#wireframing-prototyping",
      },
      { id: 9, title: "UI UX Redesign", href: "#ui-ux-redesign" },
    ],
    deliverables: [
      {
        title: "Full Figma Design System",
        description: "Comprehensive tokenized component libraries, typography scale, color tokens, and responsive layout grids.",
      },
      {
        title: "Interactive Prototypes",
        description: "High-fidelity micro-interaction prototypes ready for usability testing and stakeholder validation.",
      },
      {
        title: "User Journey & Wireframes",
        description: "Low and mid-fidelity architecture mappings focusing on conversion friction removal.",
      },
      {
        title: "Developer Hand-off Documentation",
        description: "Pixel-perfect asset exports, motion specs, and responsive breakpoint guides for engineering teams.",
      },
    ],
    process: [
      { step: "01", title: "Empathize & Research", description: "Deep-dive stakeholder interviews, competitor benchmarking, and heat-map analytics audit." },
      { step: "02", title: "Information Architecture", description: "Structuring intuitive sitemaps, user task flows, and mobile-first wireframe skeletons." },
      { step: "03", title: "Visual UI Design", description: "Applying brand identities into immersive, accessible, and high-impact visual design layouts." },
      { step: "04", title: "Prototype & User Test", description: "Interactive validation with real users to measure task completion speed and satisfaction." },
    ],
    metrics: [
      { value: "+64%", label: "Average Mobile Conversion Uplift" },
      { value: "4.9/5", label: "Client Usability Score" },
      { value: "350+", label: "Figma Components Engineered" },
    ],
    faqs: [
      {
        question: "How long does a full UI/UX design project take?",
        answer: "A standard brand redesign typically takes 3 to 6 weeks, depending on the scope of pages, device requirements, and interactive prototype complexity.",
      },
      {
        question: "Do you deliver design systems in Figma?",
        answer: "Yes, 100% of our UI/UX deliverables are built in Figma using modern auto-layout, variables, component properties, and tokenized design systems.",
      },
    ],
  },
  {
    slug: "shopify-development",
    title: "Shopify Development",
    heroTagline: "Building lightning-fast, high-converting custom Shopify and Shopify Plus storefronts.",
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
        title: "Custom Theme Development",
        href: "#shopify-custom-theme",
      },
      {
        id: 2,
        title: "App Integration & Setup",
        href: "#shopify-app-integration",
      },
      {
        id: 3,
        title: "Store Setup & Configuration",
        href: "#shopify-store-setup",
      },
      { id: 4, title: "Headless Shopify Commerce", href: "#shopify-headless" },
    ],
    deliverables: [
      {
        title: "Bespoke Custom Liquid Theme",
        description: "Zero-bloat, custom Shopify OS 2.0 theme built from scratch with modular dynamic sections.",
      },
      {
        title: "90+ PageSpeed Optimization",
        description: "Asset prefetching, script minimization, and modern image formats to maximize Core Web Vitals.",
      },
      {
        title: "App & ERP Custom Integrations",
        description: "Custom connectors for Klaviyo, Recharge, Gorgias, NetSuite, and 3PL fulfillment platforms.",
      },
      {
        title: "Internationalization & Multi-Currency",
        description: "Shopify Markets setup with localized currencies, languages, and geo-targeted pricing.",
      },
    ],
    process: [
      { step: "01", title: "Technical Blueprint", description: "Architecture mapping, app stack audit, and data schema design for Shopify OS 2.0." },
      { step: "02", title: "Sprint-Based Development", description: "Clean, componentized Liquid or Headless development in Git-versioned staging stores." },
      { step: "03", title: "QA & Performance Testing", description: "Cross-browser testing, accessibility audit, payment gateway testing, and load speed optimization." },
      { step: "04", title: "Zero-Downtime Launch", description: "DNS switch, domain verification, 301 redirect validation, and real-time order monitoring." },
    ],
    metrics: [
      { value: "95+", label: "Google Lighthouse Mobile Score" },
      { value: "< 1.2s", label: "Average Page Load Time" },
      { value: "100%", label: "Zero Downtime Launch Record" },
    ],
    faqs: [
      {
        question: "Can you build headless Shopify stores with Next.js?",
        answer: "Yes, we specialize in Headless Shopify architectures combining Shopify Storefront API with Next.js for instant page loads and total frontend flexibility.",
      },
      {
        question: "Do you handle custom app integrations?",
        answer: "Yes, we build and configure custom Shopify apps and private webhooks to connect your ERP, CRM, and fulfillment tools.",
      },
    ],
  },
  {
    slug: "platform-migration",
    title: "Platform Migration",
    heroTagline: "Flawless zero-downtime store migrations with 100% SEO ranking and data preservation.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c4229130cd923555f69b_Mobile%20App%20Design-p-1080.webp",
    bottomImage:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame%201618871790%20(5).avif",
    des: "Seamlessly transition your business infrastructure. We migrate data, logic, and designs securely without downtime, preserving your SEO rankings.",
    overview:
      "Migrating to Shopify Plus from Magento, WooCommerce, BigCommerce, or custom legacy CMS platforms requires precision engineering. We migrate your product catalogs, order history, customer accounts, and 301 redirect trees with zero traffic loss.",
    services: [
      { id: 1, title: "WooCommerce to Shopify", href: "#woo-to-shopify" },
      { id: 2, title: "Custom CMS Migration", href: "#custom-cms-migration" },
      {
        id: 3,
        title: "Database & SEO Preservation",
        href: "#seo-preservation",
      },
    ],
    deliverables: [
      {
        title: "Full Data Migration & Validation",
        description: "Automated ETL migration of products, variants, metadata, customer lists, and past order history.",
      },
      {
        title: "Comprehensive 301 Redirect Mapping",
        description: "1-to-1 URL redirect architecture to guarantee zero loss of organic search traffic and search rankings.",
      },
      {
        title: "Payment & Gateway Reconnection",
        description: "Setting up Stripe, PayPal, Apple Pay, Klarna, and tokenized customer checkout credentials.",
      },
    ],
    process: [
      { step: "01", title: "Data Audit & Mapping", description: "Catalog structure analysis, custom field taxonomy, and database cleanup strategy." },
      { step: "02", title: "Staging Migration Run", description: "Dry-run migration in private environment with automated verification scripts." },
      { step: "03", title: "Delta Sync", description: "Syncing newly created orders and customers right before the go-live transition." },
      { step: "04", title: "Go-Live & Post-Migration Watch", description: "DNS changeover with 24/7 technical monitoring and error logging." },
    ],
    metrics: [
      { value: "0", label: "Downtime Minutes During Migration" },
      { value: "100%", label: "SEO Equity & Traffic Maintained" },
      { value: "1M+", label: "Records Migrated Successfully" },
    ],
    faqs: [
      {
        question: "Will our customers lose their purchase history or passwords?",
        answer: "We migrate complete customer order history. For password security, we implement automated account activation invites so customers can seamlessly resume shopping.",
      },
      {
        question: "Will our Google search rankings drop after migrating?",
        answer: "No. By meticulously mapping 301 redirects and preserving meta titles, schema markup, and canonical URLs, we protect and often improve organic SEO performance.",
      },
    ],
  },
  {
    slug: "growth-optimization",
    title: "Growth & Optimization",
    heroTagline: "Data-driven conversion rate optimization and performance tuning that multiplies revenue.",
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
        title: "Conversion Rate Optimization (CRO)",
        href: "#cro-optimization",
      },
      {
        id: 2,
        title: "SEO Strategy & Marketing",
        href: "#seo-marketing-strategy",
      },
      {
        id: 3,
        title: "A/B Testing & Analytics",
        href: "#ab-testing-analytics",
      },
    ],
    deliverables: [
      {
        title: "Full Funnel CRO Audit",
        description: "Identifying high-friction drop-off points across home, category, product, cart, and checkout pages.",
      },
      {
        title: "Hypothesis-Driven A/B Testing",
        description: "Deploying high-confidence statistically significant split tests to validate design changes.",
      },
      {
        title: "Average Order Value (AOV) Boosters",
        description: "In-cart upsells, dynamic bundle builders, and free shipping tier progress bars.",
      },
    ],
    process: [
      { step: "01", title: "Quantitative Analytics", description: "Google Analytics 4, heatmaps, scroll depth, and micro-conversion funnel analysis." },
      { step: "02", title: "Hypothesis Formation", description: "Formulating prioritized test roadmaps using the ICE (Impact, Confidence, Ease) framework." },
      { step: "03", title: "Experimentation Sprint", description: "Designing and coding variant experiences with statistical significance monitoring." },
      { step: "04", title: "Implementation & Scaling", description: "Hardcoding winning variations and launching next-tier optimization loops." },
    ],
    metrics: [
      { value: "+32%", label: "Average AOV Increase" },
      { value: "4.2x", label: "Average ROI on CRO Engagements" },
      { value: "85%", label: "Test Hypothesis Success Rate" },
    ],
    faqs: [
      {
        question: "What minimum traffic do we need for A/B testing?",
        answer: "We recommend at least 25,000 monthly visitors or 500+ monthly orders to achieve statistical confidence within 2 to 4 weeks.",
      },
      {
        question: "How do you measure success in CRO?",
        answer: "We measure success directly through revenue per visitor (RPV), conversion rate (CR), and average order value (AOV) tracked in GA4 and Shopify analytics.",
      },
    ],
  },
];

export const getServiceBySlug = (
  slug: string,
): DetailedServiceItem | undefined => {
  return detailedServiceItems.find((s) => s.slug === slug);
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
    "<span class=\"text-neutral-500\">Success </span>Stories<br />That Inspire Us",
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
    "Frequently <span class=\"text-neutral-500\">asked<br />questions</span>",
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
  title: string;
  link: string;
  tags: string[];
};

export const jobs: JobItem[] = [
  {
    id: 1,
    title: "Executive / Senior Executive, Growth",
    link: "#",
    tags: ["Uttara, Dhaka", "Full-Time"],
  },
  {
    id: 2,
    title: "Executive / Senior Executive, Growth",
    link: "#",
    tags: ["Uttara, Dhaka", "Full-Time"],
  },
];

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
