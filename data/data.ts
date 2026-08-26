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

  email: "hello@vorklye.com",

  whatsapp: "+1 628-265-7462",

  logo: "/images/logo.png",

  ceo: {
    name: "Ariyan",
    image: "/images/team/ariyan.webp",
    text: "Hi, I'm Ariyan, CEO & Founder of Vorklye. If you have a Shopify project, growth challenge, or just want to explore what's possible, feel free to reach out. I'm always happy to talk.",
  },

  tagline:
    "Vorklye is a Shopify growth partner helping ambitious ecommerce brands build, optimize, and scale high-performing online stores.",

  socialLinks: [
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61570212765563",
      icon: "/images/social/fb.png",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/vorklye/",
      icon: "/images/social/twitter.avif",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/vorklye",
      icon: "/images/social/linkedin.png",
    },
    {
      name: "LinkedIn",
      link: "https://www.instagram.com/vorklye/",
      icon: "/images/social/twitter.avif",
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
      label: "Services",
      link: "/services",
    },
    {
      label: "Case Studies",
      link: "/case-studies",
    },
    {
      label: "Insights",
      link: "/insights",
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
    title: "Design",
    tagLine: "Make your brand impossible to overlook.",
    feature: true,
    shortDes:
      "We design distinctive, intuitive, and conversion-focused Shopify experiences that make your brand look better and help customers buy with confidence.",
    image: "/images/services/shopify-design.avif",
    skillImage: "/images/services/shopify-design-skill.avif",

    subServices: [
      "UI/UX Design",
      "Website Design",
      "UX & Usability Audit",
      "Landing Page Design",
      "Brand Identity Design",
      "Mobile-First Design",
      "Design System Development",
      "Conversion-Focused Redesign",
    ],

    process: [
      {
        step: "01",
        title: "Research & Discovery",
        description:
          "We study your brand, customers, competitors, and business goals to understand what your experience needs to achieve.",
      },
      {
        step: "02",
        title: "UX & Structure",
        description:
          "We map user journeys, information architecture, and page structures to create a clear and intuitive shopping experience.",
      },
      {
        step: "03",
        title: "Visual Design",
        description:
          "We turn your brand identity into a distinctive, responsive interface designed to build trust and drive action.",
      },
      {
        step: "04",
        title: "Prototype & Refine",
        description:
          "We create interactive prototypes, gather feedback, and refine the experience before development begins.",
      },
    ],

    metrics: [
      { value: "UX", label: "Conversion-Focused Design" },
      { value: "Figma", label: "Design System Ready" },
      { value: "100%", label: "Responsive Experiences" },
    ],

    faqs: [
      {
        question: "Can you redesign my existing Shopify store?",
        answer:
          "Absolutely. We can audit your existing store, identify UX and conversion opportunities, and redesign the experience around your brand and business goals.",
      },
      {
        question: "Do you provide Figma design files?",
        answer:
          "Yes. Our design process can include detailed Figma designs, responsive layouts, reusable components, and design systems ready for development.",
      },
    ],

    tags: [
      "UI/UX Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Figma",
    ],
  },
  {
    id: 2,
    title: "Development",
    tagLine: "Build a Shopify store that's ready to perform and scale.",
    feature: true,
    shortDes:
      "From custom themes to advanced Shopify builds, we create fast, flexible, and scalable ecommerce experiences designed around your brand and business goals.",
    image: "/images/services/shopify-development.avif",
    skillImage: "/images/services/shopify-development-skill.avif",

    subServices: [
      "Plus Development",
      "Custom Theme Development",
      "Mobile App Development",
      "AI-Powered Storefronts",
      "App Development",
      "Speed Optimization",
      "Headless Commerce",
      "No-code / Low-code Builds",
    ],

    process: [
      {
        step: "01",
        title: "Technical Discovery",
        description:
          "We understand your business requirements, technical needs, integrations, and the functionality your Shopify store needs.",
      },
      {
        step: "02",
        title: "Architecture & Development",
        description:
          "We build your Shopify experience using clean, scalable, and performance-focused development practices.",
      },
      {
        step: "03",
        title: "Features & Integrations",
        description:
          "We implement custom functionality and connect the tools your business needs to run your store efficiently.",
      },
      {
        step: "04",
        title: "QA & Launch",
        description:
          "We test the store across devices, browsers, functionality, and performance before delivering a smooth launch.",
      },
    ],

    metrics: [
      { value: "Shopify", label: "Platform Expertise" },
      { value: "95+", label: "Performance-Focused Builds" },
      { value: "100%", label: "Responsive Development" },
    ],

    faqs: [
      {
        question: "Can you build a custom Shopify theme?",
        answer:
          "Yes. We can build a fully custom Shopify theme around your brand, customer experience, and business requirements.",
      },
      {
        question: "Do you work with Shopify Plus?",
        answer:
          "Yes. We work with Shopify Plus stores and can build advanced storefront experiences, custom functionality, integrations, and scalable ecommerce solutions.",
      },
    ],

    tags: [
      "Shopify Plus",
      "Theme Development",
      "Liquid",
      "Custom Features",
      "Headless",
    ],
  },
  {
    id: 3,
    title: "Integrations",
    tagLine: "Connect your store to everything your business needs.",
    feature: true,
    shortDes:
      "We connect Shopify with the platforms, tools, and systems behind your business to create a seamless and efficient ecommerce ecosystem.",
    image: "/images/services/shopify-integrations.avif",
    skillImage: "/images/services/shopify-integrations-skill.avif",

    subServices: [
      "ERP Integration",
      "PIM Integration",
      "CRM Integration",
      "Amazon Integration",
      "Przelewy24 Payment Setup",
      "InPost Shipping Integration",
      "Shipment Tracking Integration",
    ],

    process: [
      {
        step: "01",
        title: "System Discovery",
        description:
          "We understand your existing tools, data flow, business processes, and integration requirements.",
      },
      {
        step: "02",
        title: "Integration Planning",
        description:
          "We define the right architecture, data flow, APIs, and integration approach for a reliable Shopify ecosystem.",
      },
      {
        step: "03",
        title: "Connect & Configure",
        description:
          "We connect Shopify with your required platforms and configure the workflows needed to keep your systems working together.",
      },
      {
        step: "04",
        title: "Test & Monitor",
        description:
          "We test data synchronization, workflows, and edge cases to make sure your integrations work reliably in real-world scenarios.",
      },
    ],

    metrics: [
      { value: "API", label: "Custom Integrations" },
      { value: "ERP", label: "Business System Connectivity" },
      { value: "24/7", label: "Reliable Data Flow" },
    ],

    faqs: [
      {
        question: "Can you connect Shopify with our existing ERP or CRM?",
        answer:
          "Yes. We can integrate Shopify with ERP, CRM, PIM, fulfillment, marketing, analytics, and other business systems using available integrations or custom APIs.",
      },
      {
        question: "Can you build custom Shopify integrations?",
        answer:
          "Yes. When an existing app or connector isn't enough, we can build custom API-based integrations around your specific business requirements.",
      },
    ],

    tags: ["ERP", "CRM", "PIM", "API", "Payments", "Shipping"],
  },
  {
    id: 4,
    title: "Migration",
    tagLine: "Move to Shopify without losing what you've built.",
    feature: true,
    shortDes:
      "We help brands move from other ecommerce platforms to Shopify with careful planning, clean data migration, SEO protection, and a smooth transition.",
    image: "/images/services/shopify-migration.avif",
    skillImage: "/images/services/shopify-migration-skill.avif",

    subServices: [
      "WooCommerce to Shopify",
      "Magento to Shopify",
      "BigCommerce to Shopify",
      "Shopware to Shopify",
    ],

    process: [
      {
        step: "01",
        title: "Audit & Planning",
        description:
          "We review your current platform, store structure, data, integrations, SEO setup, and business requirements before migration.",
      },
      {
        step: "02",
        title: "Data & Store Setup",
        description:
          "We prepare your Shopify environment and migrate products, customers, orders, content, and other required data.",
      },
      {
        step: "03",
        title: "Rebuild & Validate",
        description:
          "We recreate the important parts of your store, configure integrations, and carefully validate migrated data and functionality.",
      },
      {
        step: "04",
        title: "SEO-Safe Launch",
        description:
          "We handle redirects, domain configuration, final testing, and launch checks to make the transition as smooth as possible.",
      },
    ],

    metrics: [
      { value: "SEO", label: "Migration Protection" },
      { value: "100%", label: "Data-Focused Process" },
      { value: "Shopify", label: "Migration Expertise" },
    ],

    faqs: [
      {
        question: "Can you migrate our existing store to Shopify?",
        answer:
          "Yes. We can migrate stores from platforms such as WooCommerce, Magento, BigCommerce, Shopware, WordPress, and other ecommerce platforms.",
      },
      {
        question: "Will our SEO rankings be affected during migration?",
        answer:
          "We plan the migration carefully around SEO, including URL mapping, redirects, metadata, and other technical considerations to help preserve your existing search visibility.",
      },
    ],

    tags: [
      "WooCommerce",
      "Magento",
      "BigCommerce",
      "Shopware",
      "SEO Migration",
    ],
  },
  {
    id: 5,
    title: "Growth",
    tagLine: "Don't stop at launch. Turn your store into a growth engine.",
    feature: true,
    shortDes:
      "We help Shopify brands improve performance, increase conversions, and continuously evolve their store into a stronger growth channel.",
    image: "/images/services/shopify-growth.avif",
    skillImage: "/images/services/shopify-growth-skill.avif",

    subServices: [
      "Conversion Rate Optimization",
      "Plytix PIM Setup",
      "Klaviyo Email Marketing",
      "Site Maintenance",
      "SEO Optimization",
      "Consulting Services",
    ],

    process: [
      {
        step: "01",
        title: "Audit & Analyze",
        description:
          "We review your store, customer journey, analytics, performance, and business goals to identify the biggest growth opportunities.",
      },
      {
        step: "02",
        title: "Build the Growth Roadmap",
        description:
          "We prioritize opportunities and create a practical roadmap focused on the changes most likely to improve your store and business.",
      },
      {
        step: "03",
        title: "Optimize & Execute",
        description:
          "We implement improvements across UX, development, SEO, performance, analytics, and conversion to make your store work harder.",
      },
      {
        step: "04",
        title: "Measure & Scale",
        description:
          "We monitor results, learn from customer behavior, and continuously improve the experience as your brand grows.",
      },
    ],

    metrics: [
      { value: "CRO", label: "Conversion Optimization" },
      { value: "SEO", label: "Organic Growth" },
      { value: "Data", label: "Growth Decisions" },
    ],

    faqs: [
      {
        question: "Do you provide support after launch?",
        answer:
          "Yes. We can continue supporting your Shopify store with maintenance, improvements, new features, optimization, troubleshooting, and growth-focused work.",
      },
      {
        question: "Can you help increase our Shopify store conversions?",
        answer:
          "Yes. We analyze your customer journey and store performance to identify conversion opportunities and implement improvements based on data and user behavior.",
      },
    ],

    tags: ["CRO", "SEO", "Analytics", "Performance", "Growth Strategy"],
  },
];

export const industries: Industry[] = [
  {
    id: 1,
    title: "Fashion & Clothing",
    des: "We build high-converting Shopify stores that showcase your collections, strengthen your brand, and turn shoppers into loyal customers.",
    image: "/images/industries/fashion.avif",
  },
  {
    id: 2,
    title: "Beauty & Cosmetics",
    des: "We create elegant Shopify stores that showcase your beauty products, build customer trust, and deliver a seamless shopping experience.",
    image: "/images/industries/cosmetics.avif",
  },
  {
    id: 3,
    title: "Home & Living",
    des: "We design conversion-focused Shopify stores that bring your home and lifestyle products to life while making every purchase effortless.",
    image: "/images/industries/home.avif",
  },
  {
    id: 4,
    title: "Jewelry & Accessories",
    des: "We craft premium Shopify stores that highlight the details of your products, elevate your brand, and create a memorable shopping experience.",
    image: "/images/industries/jewelry.avif",
  },
  {
    id: 5,
    title: "Food & Beverage",
    des: "We build engaging Shopify stores that make your products irresistible, simplify discovery, and help turn visitors into repeat customers.",
    image: "/images/industries/food.avif",
  },
  {
    id: 6,
    title: "Pet Products",
    des: "We create friendly, high-performing Shopify stores that make it easy for pet brands to showcase products and grow online sales.",
    image: "/images/industries/pet.avif",
  },
  {
    id: 7,
    title: "Fitness & Sports",
    des: "We build powerful Shopify stores for fitness and sports brands that showcase products clearly and turn active shoppers into customers.",
    image: "/images/industries/fitness.avif",
  },
  {
    id: 8,
    title: "Electronics & Gadgets",
    des: "We design modern Shopify stores that present complex products clearly, build trust, and create a smooth path from discovery to checkout.",
    image: "/images/industries/electronics.avif",
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
    image: "/images/case-studies/shwoodshop.gif",
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
      title: services[4].title,
      menus: services[4].subServices,
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
    question: "How long does it take to build a Shopify store?",
    answer:
      "Every project is different. A typical Shopify build can take around 3–4 weeks, while custom designs, advanced features, and complex integrations may take 6–8 weeks or more. After understanding your requirements, we'll provide a clear timeline for your project.",
  },
  {
    question: "Do you work with existing Shopify stores or only new builds?",
    answer:
      "Both. We work with brands launching new Shopify stores as well as existing stores that need a redesign, optimization, or new functionality. We can also help businesses migrate from platforms like WooCommerce, Wix, or other ecommerce systems.",
  },
  {
    question: "Can you customize a Shopify theme or build one from scratch?",
    answer:
      "Yes. We can customize an existing Shopify theme to fit your brand and requirements, or create a fully custom Shopify experience from the ground up using Shopify's latest development framework.",
  },
  {
    question: "What happens after my Shopify store launches?",
    answer:
      "Our relationship doesn't have to end at launch. We can provide ongoing support, maintenance, performance improvements, conversion optimization, and new feature development to help your store continue to grow.",
  },
  {
    question: "Will my Shopify store be optimized for speed and SEO?",
    answer:
      "Yes. We build with performance and search visibility in mind. Depending on your project, this can include Core Web Vitals optimization, image and code optimization, technical SEO, on-page SEO, and other improvements that help your store perform better.",
  },
  {
    question: "Can you integrate Shopify with my existing tools?",
    answer:
      "Absolutely. We can connect Shopify with the tools your business relies on, including payment and shipping solutions, subscriptions, email marketing platforms, analytics, Meta Pixel, CRMs, third-party APIs, and custom systems.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/images/clients/sek.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/3.mp4",
    logo: "/images/brand/1.png",
    quote:
      "Ariyan and barkley Absolutely fantastic in turn to creating my website ....",
    name: "Sek",
    role: "United Kingdom",
  },
  {
    id: 2,
    image: "/images/clients/denny.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/2.mp4.mp4",
    logo: "/images/brand/2.png",
    quote:
      "Hello everyone i would like to tell you about my experience found with ....",
    name: "Denny",
    role: "Napoli, Italy",
  },
  {
    id: 3,
    image: "/images/clients/alex.avif",
    videoLink:
      "https://github.com/sabujhasansarker/client-video/raw/main/1.mp4",
    logo: "/images/brand/3.png",
    quote:
      "I want to recommend Ariyan. He is supper good vary knowledgeable....",
    name: "Alex",
    role: "United Kingdom",
  },
];

export const teams: TeamMember[] = [
  {
    image: "/images/team/ariyan.avif",
    name: "Mizanur Rahman Ariyan",
    designation: "Founder & CEO",
  },
  {
    image: "/images/team/sabuj.avif",
    name: "Md Sabuj Sarker",
    designation: "Co-Founder & COO",
  },
  {
    image: "/images/team/mohin.avif",
    name: "Mohin Uddin",
    designation: "Shopify Developer",
  },
  {
    image: "/images/team/hasibul.avif",
    name: "Hasibul Hasan",
    designation: "Shopify Developer",
  },
  {
    image: "/images/team/imtiaz.avif",
    name: "MH Imtiaz Omar",
    designation: "UI/UX Designer",
  },
  {
    image: "/images/team/noman.avif",
    name: "Abdullah Al Noman",
    designation: "Marketer",
  },
  {
    image: "/images/team/tohidul.avif",
    name: "Tohidul Islam",
    designation: "Adviser",
  },
];

export const homePage: HomePage = {
  hero: {
    title: "<span>Vorklye</span> — Your Shopify Growth Partner",
    des: "We design, build, optimize, and scale high-converting Shopify stores that turn more visitors into customers—and more customers into long-term growth.",
    showShopifyPlusIcon: true,
    videoBg: "/images/hero-video.mp4",
    brand: {
      text: "Shopify partner trusted by great clients",
      logos: brands,
    },
  },
  about: {
    text: "Vorklye is a <span>Shopify growth partner</span> for ambitious ecommerce brands. We combine strategy, design, development, and conversion optimization to build Shopify experiences that look exceptional, convert better, and drive sustainable growth.",
    button: {
      text: "More About Vorklye",
      link: "/about",
    },
  },
  caseStudie: {
    title:
      "<span>Real stories, real results.</span> See how we’ve helped ambitious brands build better, convert more, and grow faster.",
    subtitle: "/ Work That Drives Growth",
    caseStudies: caseStudies,
    button: {
      label: "More works",
      link: "/case-studies",
    },
  },
  brand: {
    title:
      "We're a team of commerce specialists who help ambitious brands <span>build, grow, and scale.</span>",
    logos: brands,
  },
  service: {
    title:
      "Strategy, design, and technology working together to <span>build brands that scale.</span>",
    subtitle: "/ What we build",
    services: services,
  },
  workingProcess: {
    title: "From your first idea to <span>long-term growth.</span>",
    subtitle: "/ Working process",
    button: {
      label: "Start a project",
      link: "#",
    },
    process: [
      {
        title: "Discover & Understand",
        description:
          "We learn about your brand, business goals, customers, challenges, and exactly what your store needs to grow.",
        tags: ["Strategy", "UX Audit", "Market Research"],
      },
      {
        title: "Plan & Build",
        description:
          "We turn the strategy into a high-performing Shopify experience with thoughtful design, powerful functionality, and seamless integrations.",
        tags: ["UI/UX Design", "Shopify Development", "Custom Features"],
      },
      {
        title: "Launch & Deliver",
        description:
          "We test every detail, optimize performance, and make sure your store is ready to deliver a smooth experience from day one.",
        tags: ["QA & Testing", "Speed Optimization", "SEO"],
      },
      {
        title: "Support & Grow",
        description:
          "We continue working with you after launch to optimize your store, improve conversions, and unlock new opportunities for growth.",
        tags: ["CRO", "Analytics", "Ongoing Support"],
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
    title: "Built to <br /> — <span>grow</span>",
    activityStats: {
      col1: [
        {
          value: "150+",
          text: "Shopify stores, experiences, and growth projects delivered for ambitious brands.",
        },
        {
          value: "06+",
          text: "Years of turning Shopify expertise into better experiences and stronger ecommerce growth.",
        },
        {
          value: "95%",
          text: "Client satisfaction built through clear communication, quality work, and long-term partnerships.",
        },
      ],
      col2: [
        {
          value: "100%",
          text: "Focused on Shopify, from strategy and UI/UX to development and optimization.",
        },
        {
          value: "24/7",
          text: "Our mindset stays focused on solving problems, improving performance, and helping brands grow.",
        },
      ],
    },
  },
  testimonial: {
    subtitle: "/ Client Stories",
    title: "What happens when <span>great brands grow.</span>",
    testimonials: testimonials,
  },
};

export const aboutPage: AboutPage = {
  hero: {
    title:
      "Building Better Shopify Experiences, <span>Growing Better Brands.</span>",
    subtitle:
      "We partner with ambitious ecommerce brands to turn ideas into high-performing Shopify experiences—from strategy and design to development, optimization, and long-term growth.",
    videoUrl: "",
    button: {
      label: "Start a Project",
      link: "/contact",
    },
  },
  brand: {
    subtitle: "/ Trusted by 550+ companies",
    logos: brands,
  },
  counter: [
    {
      text: "Shopify specialists on our team",
      value: "+10",
    },
    {
      text: "Shopify stores built & optimized",
      value: "+50",
    },
    {
      text: "Clients who continue to work with us",
      value: "90%",
    },
    {
      text: "Projects successfully delivered",
      value: "+100",
    },
  ],
  visionMission: {
    top: {
      subtitle: "/ Mission",
      title:
        "To help ambitious ecommerce brands turn Shopify into a powerful engine for better experiences, stronger conversions, and sustainable growth.",
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
        "To become the trusted Shopify growth partner behind the next generation of ambitious ecommerce brands.",
      image: "https://boomdevs.com/wp-content/uploads/2026/07/Image-3.webp",
    },
  },
  team: {
    title:
      "A team of Shopify strategists, designers, and developers <span>working together to grow your brand.</span>",

    subtitle: "/ Meet the team",

    button: {
      label: "Join our team",
      link: "/career",
    },

    teams: teams,
  },
};

export const contactPage: ContactPage = {
  title: "<span>Let’s Build Something That Grows.</span>",

  supportImage:
    "https://notionhive.com/_next/image?url=https%3A%2F%2Fcms.notionhive.com%2Fwp-content%2Fuploads%2F2026%2F05%2FFrame-2147223905-1.png&w=1080&q=75",

  description:
    "Have a Shopify store to build, improve, or scale? Tell us what you're working on, and our team will help you find the right strategy, solution, and next step for your brand.",

  emailPlaceholder: "Email address",

  namePlaceholder: "Full name",

  budgetPlaceholder: "Project budget",

  hearAboutUsPlaceholder: "How did you hear about us?",

  messagePlaceholder:
    "Tell us about your brand, Shopify store, goals, and what you'd like to achieve.",

  servicesLabel: "What can we help you with?",

  submitButtonText: "Start a conversation",

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
    "LinkedIn",
    "Instagram",
    "Referral",
    "Clutch",
    "Other",
  ],

  serviceTags: [
    "Shopify Development",
    "Shopify Design",
    "Shopify Plus",
    "Shopify Integrations",
    "Shopify Migration",
    "Conversion Optimization",
    "Shopify SEO",
    "Ongoing Growth",
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
    title: "Build Your Career <span>Where Ecommerce Grows.</span>",
    subtitle:
      "We’re a team of strategists, designers, developers, and problem-solvers building Shopify experiences for ambitious brands. If you love great work, continuous learning, and solving meaningful challenges, there’s a place for you at Vorklye.",
    button: {
      label: "Explore Open Roles",
      link: "#open",
    },
    image:
      "https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp",
  },
  benift: {
    title: "Why Work <span>With Us?</span>",
    subtitle: "/ Life at Vorklye",

    items: [
      {
        title: "Remote-First Culture",
        description:
          "Work from where you do your best work. We believe great ideas don't require a daily commute.",
      },
      {
        title: "Learning & Growth",
        description:
          "Keep learning, experiment with new ideas, and grow your skills while working on real ecommerce challenges.",
      },
      {
        title: "Mentorship & Support",
        description:
          "Work alongside experienced teammates who share knowledge, give honest feedback, and help you reach your potential.",
      },
      {
        title: "Performance Bonuses",
        description:
          "Great work deserves recognition. We reward meaningful contributions and exceptional performance.",
      },
      {
        title: "Flexible Work Environment",
        description:
          "We value outcomes over hours. Manage your work with the flexibility you need while staying connected with the team.",
      },
      {
        title: "Device & Internet Support",
        description:
          "We help you stay productive by supporting the tools, devices, and internet resources you need to do your best work.",
      },
      {
        title: "Paid Leave",
        description:
          "Take time to rest, recharge, and take care of the things that matter outside of work.",
      },
      {
        title: "Team Collaboration",
        description:
          "Collaborate with strategists, designers, developers, and growth specialists to create work that makes a real impact.",
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
    subtitle: "/ FAQ",

    faqs: [
      {
        title: "What kind of people are you looking for?",
        text: "We’re looking for curious, responsible, and growth-minded people who care about doing great work. Whether you’re a designer, developer, strategist, or specialist, we value strong skills, clear communication, and a willingness to learn.",
      },
      {
        title: "Is Vorklye a remote-first company?",
        text: "Yes. We work with a remote-first approach, giving our team the flexibility to work from where they’re most productive while staying connected through regular communication and collaboration.",
      },
      {
        title: "What is your hiring process?",
        text: "Our process typically starts with an application review, followed by an introductory conversation and a role-specific assessment or interview. We keep the process focused and transparent so both sides can decide if we’re a good fit.",
      },
      {
        title: "Do you hire for junior and entry-level positions?",
        text: "Yes, depending on our current hiring needs. We’re always interested in meeting talented people who are eager to learn, take ownership, and grow their skills through real-world projects.",
      },
      {
        title: "What benefits does Vorklye offer?",
        text: "Our benefits may include remote work flexibility, paid leave, performance bonuses, learning and mentorship opportunities, device and internet support, and other team-focused benefits depending on the role and company policy.",
      },
      {
        title: "Can I apply if there isn't an open position for my role?",
        text: "Absolutely. If you believe you’d be a great addition to Vorklye, you can still reach out and share your portfolio, experience, and what you’d like to contribute. We’ll keep strong candidates in mind for future opportunities.",
      },
      {
        title: "What is the work culture like at Vorklye?",
        text: "We believe in ownership, honest communication, continuous learning, and collaborative problem-solving. You’ll work with a multidisciplinary team where everyone is encouraged to share ideas and take responsibility for their work.",
      },
    ],
  },
};

export const caseStudiePage: CaseStudiePage = {
  hero: {
    title: "Work That <span>Drives Growth.</span>",
    subtitle:
      "Explore the Shopify stores, strategies, and experiences we’ve built to help ambitious ecommerce brands perform better, convert more, and grow with confidence.",
    button: {
      label: "Start Your Project",
      link: "/contact",
    },
  },
  caseStudies: caseStudies,
};

export const servicePage: ServicePage = {
  hero: {
    title: "Everything Your Shopify Brand Needs to <span>Grow & Scale.</span>",
    subtitle:
      "From strategy and design to development, integrations, migration, and ongoing optimization—we bring everything together to build a Shopify experience designed for growth.",
    button: {
      label: "Let’s Build Your Store",
      link: "/contact",
    },
    image:
      "https://boomdevs.com/wp-content/uploads/2026/07/Rectangle-39919.webp",
  },
  industrie: {
    title: "Built for your industry. <span>Designed to grow.</span>",
    subtitle: "/ Industries",
    button: {
      label: "Talk to an expert",
      link: "/contact",
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
