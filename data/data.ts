import {
  AboutPage,
  Brand,
  CareerListing,
  CareerPage,
  CaseStudiePage,
  CaseStudy,
  ContactPage,
  Faq,
  Footer,
  Header,
  HomePage,
  Industry,
  Service,
  ServicePage,
  SiteData,
  TeamMember,
  Testimonial,
} from "./type";

export const siteData: SiteData = {
  name: "Vorklye",
  email: "hello@wavespace.agency",
  whatsapp: "+1 628-265-7462",
  logo: "/images/logo.png",
  ceo: {
    name: "Ariyan",
    image:
      "https://vorklye.com/wp-content/uploads/2025/12/Mizanur-rahman-ariyan-ceo-1.jpg",
    text: "Hi, I'm Ariyan, the CEO and Founder of Vorklye. Don't hesitate to reach out to me anytime – I'm here to answer all your questions!",
  },
  tagline:
    "Wavespace is a global UI/UX design agency that boosts brand value with user-friendly, effective designs for web, mobile, and SaaS platforms.",
  socialLinks: [
    {
      name: "facebook",
      link: "https://www.facebook.com/profile.php?id=61570212765563",
      icon: "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6966148bb93b4207a29b9dc7_wavespace-facebook.png",
    },
  ],
  contactLink: [
    {
      label: "Clutch",
      link: "#",
    },
    {
      label: "Behance",
      link: "#",
    },
    {
      label: "Dribbble",
      link: "#",
    },
    {
      label: "Awwwards",
      link: "#",
    },
  ],
  menus: [
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Service",
      link: "/services",
    },
    {
      label: "Case Studies",
      link: "/case-studies",
    },
    {
      label: "Career",
      link: "/career",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ],
};

export const header: Header = {
  menus: [
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Service",
      link: "/services",
    },
    {
      label: "Case Studies",
      link: "/case-studies",
    },
    {
      label: "Career",
      link: "/career",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ],
  button: {
    label: "Book a call",
    link: "https://cal.com/vorklye-rfn0e4/30min",
  },
  logo: siteData.logo,
};

export const services: Service[] = [
  {
    id: 1,
    title: "UI/UX Design",
    tagLine: "Define who you are. Shape how the world sees you.",
    feature: true,
    thumbnail: "/images/service-banner.png",
    shortDes:
      "Your users will find the app easy to use. Our UI and UX services ensure your product is user-friendly so that it appeals to and catches the hearts of users on any device.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422ed8ffd5696dac6a4_UX%20Design-p-1080.webp",

    skillImage:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame%201618871790%20(5).avif",

    subServices: [
      "UX Research Service",
      "UX Audit & Strategy",
      "UX Usability Testing",
      "UI UX Consulting",
      "UI UX Design",
      "AI UI UX Design",
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
        title: "Empathize & Research",
        description:
          "Deep-dive stakeholder interviews, competitor benchmarking, and heat-map analytics audit.",
      },
      {
        title: "Information Architecture",
        description:
          "Structuring intuitive sitemaps, user task flows, and mobile-first wireframe skeletons.",
      },
      {
        title: "Visual UI Design",
        description:
          "Applying brand identities into immersive, accessible, and high-impact visual design layouts.",
      },
      {
        title: "Prototype & User Test",
        description:
          "Interactive validation with real users to measure task completion speed and satisfaction.",
      },
    ],
    metrics: [
      {
        value: "+64%",
        label: "Average Mobile Conversion Uplift",
      },
      {
        value: "4.9/5",
        label: "Client Usability Score",
      },
      {
        value: "350+",
        label: "Figma Components Engineered",
      },
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
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: 2,
    title: "Shopify Development",
    tagLine: "Define who you are. Shape how the world sees you.",
    feature: true,
    shortDes:
      "Building lightning-fast, high-converting custom Shopify and Shopify Plus storefronts.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422a7f442bbf1487074_Web%20Design-p-1080.webp",
    skillImage:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame%201618871790%20(5).avif",
    subServices: [
      "Custom Theme Development",
      "App Integration & Setup",
      "Store Setup & Configuration",
      "Headless Shopify Commerce",
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
        tags: ["analytics"],
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
      {
        value: "95+",
        label: "Google Lighthouse Mobile Score",
      },
      {
        value: "< 1.2s",
        label: "Average Page Load Time",
      },
      {
        value: "100%",
        label: "Zero Downtime Launch Record",
      },
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
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    id: 3,
    title: "Shopify Development 2",
    tagLine: "Define who you are. Shape how the world sees you.",
    feature: true,
    shortDes:
      "Building lightning-fast, high-converting custom Shopify and Shopify Plus storefronts.",
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/6835c422a7f442bbf1487074_Web%20Design-p-1080.webp",
    skillImage:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/67a0fbbe15bf58f5b51affcf_Frame%201618871790%20(5).avif",
    subServices: [
      "Custom Theme Development",
      "App Integration & Setup",
      "Store Setup & Configuration",
      "Headless Shopify Commerce",
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
      {
        value: "95+",
        label: "Google Lighthouse Mobile Score",
      },
      {
        value: "< 1.2s",
        label: "Average Page Load Time",
      },
      {
        value: "100%",
        label: "Zero Downtime Launch Record",
      },
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
    tags: [
      "Brand Discovery",
      "Research",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
];

export const industries: Industry[] = [
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

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Capital Growth Solutions",
    client: "Capital Growth Inc.",
    feature: true,
    description:
      "A complete headless digital commerce overhaul designed to accelerate client conversions and scale operational capacity across global markets.",
    services: ["Shopify Plus", "Migration"],
    serviceIds: [1, 2],
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
    title: "Rovero Commerce Platform",
    feature: true,
    client: "Rovero Lifestyle",
    description:
      "Crafting an immersive high-end fashion experience with responsive 3D lookbooks and seamless omnichannel checkout for modern luxury buyers.",
    services: ["Shopify Theme Development", "CRO Strategy"],
    serviceIds: [1, 2],
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
    title: "Lumina Skincare Experience",
    client: "Lumina Botanicals",
    description:
      "Transforming a clean beauty DTC brand with custom skin-diagnostic quizzes, recurring subscription models, and personalized product bundles.",
    services: ["Custom App Setup", "Subscription Commerce", "Design System"],
    serviceIds: [1, 2],
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
    title: "Apex Outdoor Equipment",
    client: "Apex Gear International",
    description:
      "Enterprise multi-warehouse B2B and DTC unified commerce platform built for extreme catalog complexity and wholesale volume discounts.",
    services: ["Shopify Plus B2B", "ERP Integration", "Headless Architecture"],
    serviceIds: [1, 2],
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
  {
    id: 5,
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

export const footer: Footer = {
  logo: siteData.logo,
  info: siteData.tagline,
  button: {
    label: "Company Deck",
    link: "#",
  },
  social: siteData.socialLinks,
  menus: [
    {
      title: services[0].title,
      menus: services[0].subServices,
    },
    {
      title: services[1].title,
      menus: services[1].subServices,
    },
    {
      title: services[2].title,
      menus: services[2].subServices,
    },
    {
      title: "Agency",
      menus: siteData.menus,
    },
    {
      title: "Contact",
      menus: siteData.contactLink,
    },
  ],

  contactInfo: {
    heading: "Drop us a line",
    email: siteData.email,
    callLabel: "Call us",
    phone: siteData.whatsapp,
  },
};

export const brands: Brand[] = [
  { id: 1, image: "/images/brand/1.png", home: true, shortRender: true },
  { id: 2, image: "/images/brand/2.png", home: true, shortRender: true },
  { id: 3, image: "/images/brand/3.png", home: true, shortRender: true },
  { id: 4, image: "/images/brand/4.png", home: true, shortRender: true },
  { id: 5, image: "/images/brand/5.png", home: true, shortRender: true },
  { id: 6, image: "/images/brand/6.png", home: true, shortRender: true },
  { id: 7, image: "/images/brand/7.png", shortRender: true },
  { id: 8, image: "/images/brand/8.png", shortRender: true },
  { id: 9, image: "/images/brand/9.png", shortRender: true },
  { id: 10, image: "/images/brand/10.png", shortRender: true },
  { id: 11, image: "/images/brand/11.png", shortRender: true },
  { id: 12, image: "/images/brand/12.png", shortRender: true },
  { id: 13, image: "/images/brand/13.png", shortRender: true },
  { id: 14, image: "/images/brand/14.png", shortRender: true },
  { id: 15, image: "/images/brand/15.png", shortRender: true },
  { id: 16, image: "/images/brand/16.png", shortRender: true },
  { id: 17, image: "/images/brand/17.png", shortRender: true },
  { id: 18, image: "/images/brand/18.png", shortRender: true },
  { id: 19, image: "/images/brand/19.png", shortRender: true },
  { id: 20, image: "/images/brand/20.png", shortRender: true },
  { id: 21, image: "/images/brand/21.png", shortRender: true },
  { id: 22, image: "/images/brand/22.png" },
];

export const faqs: Faq[] = [
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

export const testimonials: Testimonial[] = [
  {
    id: 1,
    video:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/2.mp4.mp4",
    logo: "/images/brand/3.png",
    quote:
      "Design Monks did an amazing job bringing my brand to life. From the",
    name: "Tommy Lu",
    role: "Founder @ GoodGenes",
  },
  {
    id: 2,
    image:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/2.mp4.mp4",
    logo: "/images/brand/4.png",
    quote:
      "The team really understood our vision and delivered beyond what we expected.",
    name: "Sarah Kim",
    role: "CEO @ Nova Studio",
  },
  {
    id: 3,
    image:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/2.mp4.mp4",
    logo: "/images/brand/5.png",
    quote:
      "Communication was smooth throughout the project and the results speak for themselves.",
    name: "James Carter",
    role: "Founder @ Blume",
  },
  {
    id: 4,
    image:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/2.mp4.mp4",
    logo: "/images/brand/6.png",
    quote:
      "Professional, fast, and genuinely invested in our success. Highly recommend.",
    name: "Elena Marsh",
    role: "CMO @ Fenix",
  },
  {
    id: 5,
    image:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/2.mp4.mp4",
    logo: "/images/brand/3.png",
    quote:
      "Design Monks did an amazing job bringing my brand to life. From the",
    name: "Tommy Lu",
    role: "Founder @ GoodGenes",
  },
  {
    id: 6,
    image:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/2.mp4.mp4",
    logo: "/images/brand/4.png",
    quote:
      "The team really understood our vision and delivered beyond what we expected.",
    name: "Sarah Kim",
    role: "CEO @ Nova Studio",
  },
  {
    id: 7,
    image:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/2.mp4.mp4",
    logo: "/images/brand/5.png",
    quote:
      "Communication was smooth throughout the project and the results speak for themselves.",
    name: "James Carter",
    role: "Founder @ Blume",
  },
  {
    id: 8,
    image:
      "https://cdn.prod.website-files.com/674703d2af36853f65da67e0/6972023ccec47fa8734cf934_Client_Armen%20Avagyan%20_916.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/2.mp4.mp4",
    logo: "/images/brand/6.png",
    quote:
      "Professional, fast, and genuinely invested in our success. Highly recommend.",
    name: "Elena Marsh",
    role: "CMO @ Fenix",
  },
];

export const teams: TeamMember[] = [
  {
    image:
      "https://cdn.prod.website-files.com/6655d16113e6966ef4eb1041/690d6e37dc1fd0b514fe70ec_Shahd%20mia-p-500.webp",
    name: "Shahid Miah",
    designation: "Founder & CEO",
  },
];

export const homePage: HomePage = {
  hero: {
    title: "We design, develop and build",
    des: "We're a design and development agency since 2017 who craft digital masterpiece products.",
    showShopifyPlusIcon: true,
    videoBg: "/images/hero-video.mp4",
    brand: {
      text: "Shopify partner trusted by great clients",
      logos: brands,
    },
  },
  about: {
    text: "<span>Welcome to Vorklye — We're a </span>Shopify design and development <span>studio, dedicated to bringing your brand's essence to life online. From custom themes to seamless user experiences, every project is a bespoke journey — we collaborate closely with you to build something that truly stands out.</span>",
    button: {
      text: "More about us",
      link: "/about",
    },
  },
  caseStudie: {
    title: "Real stories, real results – see what we've made possible.",
    subtitle: "/Case Studies",
    caseStudies: caseStudies,
    button: {
      label: "More works",
      link: "/case-studies",
    },
  },
  brand: {
    title:
      "We're a team of commerce specialists who have helped countless <span>brands build, grow and increase.</span>",
    logos: brands,
  },
  service: {
    title:
      "End-to-end Shopify systems, designed to scale the brand behind the store.",
    subtitle: "/ What we build",
    services: services,
  },
  workingProcess: {
    title: "How it works",
    subtitle: "/ Working process",
    button: {
      label: "Get in touch",
      link: "#",
    },
    process: [
      {
        title: "Discovery & Research",
        description:
          "We start by understanding your business, goals, target audience, and competitors to build a clear project foundation.",
        tags: ["Video meeting", "Discovery"],
      },
      {
        title: "Strategy & Design",
        description:
          "Crafting bespoke wireframes, interactive UI prototypes, and design systems tailored specifically for your brand identity.",
        tags: ["Video meeting"],
      },
      {
        title: "Development & Build",
        description:
          "Converting designs into high-performance, pixel-perfect Shopify or WordPress stores with seamless integrations.",
        tags: ["Video meeting"],
      },
      {
        title: "Scale & Optimization",
        description:
          "Rigorous testing, SEO optimization, speed enhancement, and ongoing support to ensure your store continues to grow.",
        tags: ["Video meeting"],
      },
    ],
  },
  faq: {
    title: "Frequently <span>asked questions</span>",
    faqs: faqs,
    ceo: siteData.ceo,
    whatsApp: siteData.whatsapp,
  },
  activity: {
    title: "Perfect <br /> — activity",
    activityStats: {
      col1: [
        {
          value: "1.8M",
          text: "We helped to get companies with $200M+ funding.",
        },
        {
          value: "12+",
          text: "We have had quite a run in our 12+ years of working.",
        },
        {
          value: "99%",
          text: "Average 99% clients satisfaction with expertise.",
        },
      ],
      col2: [
        {
          value: "260+",
          text: "Crafted responsive, user-centered website & app.",
        },
        {
          value: "80+",
          text: "Professional skilled designers and developers.",
        },
      ],
    },
  },
  testimonial: {
    subtitle: "/ Client Stories",
    title: "<span>Success</span> Stories That Inspire Us",
    testimonials: testimonials,
  },
};

export const aboutPage: AboutPage = {
  hero: {
    title: "Bringing Vision To Life, One Line Of Code At A Time",
    subtitle:
      "We’re more than a software company. We’re your strategic partner in building purposeful, high-impact digital products that grow with your business.",
    videoUrl: "",
    button: {
      label: "Book a Free Strategy Call",
      link: "#",
    },
  },
  brand: {
    subtitle: "/ Trusted by 550+ companies",
    logos: brands,
  },
  counter: [
    {
      text: "Shopify Experts in our team",
      value: "+50",
    },
    {
      text: "Managed Shopify Plus Stores",
      value: "+60",
    },
    {
      text: "Customers continue to work with us",
      value: "90%",
    },
    {
      text: "Realised projects",
      value: "+200",
    },
  ],
  visionMission: {
    top: {
      subtitle: "/ Mission",
      title:
        "Bridging the gap between business vision and digital execution with tailored, expert-driven solutions.",
      image: "https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp",
    },
    meddle: [
      "https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp",
      "https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp",
      "https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp",
    ],
    bottom: {
      subtitle: "/ Vision",
      title:
        "To shape a future where digital solutions are intuitive, impactful, and universally available.",
      image: "https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp",
    },
  },
  team: {
    title:
      "We are your product geek, UX mind, UI lovers, & Webflow builders. Your creative team, just a Slack away.",
    subtitle: "/ Meet our creatives",
    button: {
      label: "Join our team",
      link: "#",
    },
    teams: teams,
  },
};

export const contactPage: ContactPage = {
  title: "Talk Directly with Our Experts",
  supportImage:
    "https://notionhive.com/_next/image?url=https%3A%2F%2Fcms.notionhive.com%2Fwp-content%2Fuploads%2F2026%2F05%2FFrame-2147223905-1.png&w=1080&q=75",
  description:
    "You’ve scrolled this far, so we clearly have your attention. Now, let’s help you grab your customers' attention with something they can't ignore.",
  emailPlaceholder: "Email",
  namePlaceholder: "Full name",
  budgetPlaceholder: "Project budget",
  hearAboutUsPlaceholder: "How did you hear about us?",
  messagePlaceholder: "Tell us about your product and goals.",
  servicesLabel: "How can we help you?",
  submitButtonText: "Send message",
  submittingText: "Sending...",
  preferEmailLabel: "Prefer email?",
  email: siteData.email,
  budgetOptions: [
    "Under $5,000",
    "$5,000 – $10,000",
    "$10,000 – $25,000",
    "$25,000 – $50,000",
    "$50,000+",
  ],
  hearAboutUsOptions: [
    "Google Search",
    "Instagram",
    "LinkedIn",
    "Referral",
    "Twitter / X",
    "Other",
  ],
  serviceTags: [
    "UI/UX Design",
    "SaaS Design",
    "Branding",
    "CRO",
    "Mobile app",
    "Development",
    "MVP Development",
    "Web Design",
  ],
};

export const career: CareerListing[] = [
  {
    open: true,
    title: "Lead UI / UX Designer",
    location: "Uttara, Dhaka",
    type: "Full-time",
    tags: ["Growth & CRO"],
    fromLink: "#",
  },
  {
    open: false,
    title: "Senior Shopify & Full-Stack Developer",
    location: "Uttara, Dhaka",
    type: "Full-time",
    tags: ["Growth & CRO"],
    fromLink: "#",
  },
];

export const careerPage: CareerPage = {
  hero: {
    title: "Collaborate, Create, and Grow Your Career",
    subtitle:
      "We’re a team of thinkers, makers, and doers — passionate about creating meaningful experiences and solving real problems. If you’re driven by creativity, collaboration, and constant growth, you’ll feel right at home here.",
    button: {
      label: "Explore open roles",
      link: "#open",
    },
    image:
      "https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp",
  },
  benift: {
    title: "Why Work With Us?",
    subtitle: "/ Design Agency",
    items: [
      {
        title: "Remote Work = Freedom",
        description:
          "Skip the daily commute—we’ve embraced a remote-first culture from day one",
      },
      {
        title: "Two Festival Bonuses",
        description:
          "Double the celebrations, double the rewards — enjoy two annual bonuses, each equal to 50% of your gross salary.",
      },
      {
        title: "Generous Leave Benefits",
        description:
          "Our comprehensive leave benefits—including annual, sick, and marriage leave—ensure you can maintain a healthy work–life balance.",
      },
      {
        title: "Mentorship & Personal Growth",
        description:
          "Not just a boss, but a mentor—helping you achieve your fullest potential.",
      },
      {
        title: "Device & Internet Allowance",
        description:
          "At Vorklye, we help our team work at their best by supporting device purchases and internet costs.",
      },
      {
        title: "Health & Wellness Allowance",
        description:
          "Your health—and your family’s—comes first. Our medical allowance stands by you during life’s toughest moments, offering emergency loans with simple and flexible EMI plans.",
      },
      {
        title: "Generous Leave Benefits",
        description:
          "Our comprehensive leave benefits—including annual, sick, and marriage leave—ensure you can maintain a healthy work–life balance.",
      },
      {
        title: "Performance Bonuses",
        description:
          "Your effort matters at Vorklye. Go the extra mile and earn bonuses for exceptional contributions.",
      },
      {
        title: "Emergency Loan Facilities",
        description:
          "We support our team during unexpected moments by offering emergency loans with simple and flexible EMI plans.",
      },
      {
        title: "Generous Leave Benefits",
        description:
          "Our comprehensive leave benefits—including annual, sick, and marriage leave—ensure you can maintain a healthy work–life balance.",
      },
    ],
  },
  position: {
    title: "Our Open <span>Position</span>",
    subtitle: "/Position",
    careers: career,
  },
  faq: {
    title: "Questions? We’re <span>Here to Help</span>",
    subtitle: "/FAQ",
    faqs: [
      {
        title: "What are your focus areas as a UI/UX design agency?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
      },
      {
        title: "How long does a typical project take to complete?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
      },
      {
        title: "Do you offer support after the project is delivered?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
      },
      {
        title: "What industries do you usually work with?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
      },
      {
        title: "How much does it cost to work with your agency?",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eius iure dignissimos? Maxime necessitatibus magnam quam consectetur inventore placeat, delectus enim officiis reprehenderit itaque voluptate consequatur nobis libero totam ipsum.",
      },
    ],
  },
};

export const caseStudiePage: CaseStudiePage = {
  hero: {
    title: "Case Studies",
    subtitle:
      "We’re more than a software company. We’re your strategic partner in building purposeful, high-impact digital products that grow with your business.",
    button: {
      label: "Let’s Discuss Your Project",
      link: "#",
    },
  },
  caseStudies: caseStudies,
};

export const servicePage: ServicePage = {
  hero: {
    title: "Everything Your Brand Needs to Build, Grow and Scale",
    subtitle:
      "From the first brand strategy session to the final line of code, we handle every dimension of your growth under one roof.",
    button: {
      label: "Let’s Discuss Your Project",
      link: "#",
    },
    image:
      "https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp",
  },
  industrie: {
    title: "Industry expertise <span>‍across globally</span>",
    subtitle: "/ Industries",
    button: {
      label: "Consult an expert",
      link: "#",
    },
    industries: industries,
  },
};

export const data = {
  footer,
  header,
  services,
  siteData,
  homePage,
  testimonials,
  aboutPage,
  teams,
  contactPage,
  careerPage,
  industries,
};

export default data;
