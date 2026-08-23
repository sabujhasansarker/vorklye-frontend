// ==========================================================================
// Common / shared types
// ==========================================================================

export interface MenuItem {
  label: string;
  link: string;
}

export interface ContactLinkItem {
  label: string;
  link: string;
}

export interface SocialLink {
  name: string;
  link: string;
  icon: string;
}

export interface CeoInfo {
  name: string;
  image: string;
  text: string;
}

// ==========================================================================
// siteData
// ==========================================================================

export interface SiteData {
  name: string;
  email: string;
  whatsapp: string;
  logo: string;
  ceo: CeoInfo;
  tagline: string;
  socialLinks: SocialLink[];
  contactLink: ContactLinkItem[];
  menus: MenuItem[];
}

// ==========================================================================
// header
// ==========================================================================

export interface HeaderButton {
  label: string;
  link: string;
}

export interface Header {
  menus: MenuItem[];
  button: HeaderButton;
  logo: string;
}

// ==========================================================================
// services
// ==========================================================================

export interface ServiceProcessStep {
  step?: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: number;
  title: string;
  tagLine: string;
  feature: boolean;
  shortDes: string;
  image: string;
  thumbnail?: string;
  skillImage: string;
  subServices: string[];
  process: ServiceProcessStep[];
  metrics: ServiceMetric[];
  faqs: ServiceFaq[];
  tags: string[];
}

// ==========================================================================
// industries
// ==========================================================================

export interface Industry {
  id: number;
  title: string;
  des: string;
  image: string;
  link?: string;
}

// ==========================================================================
// caseStudies
// ==========================================================================

export interface CaseStudyResult {
  label: string;
  value: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  feature?: boolean;
  description: string;
  services?: string[];
  serviceIds?: number[];
  industry: string;
  published: string;
  image: string;
  logo: string;
  websiteUrl: string;
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  galleryImages: string[];
  testimonial: CaseStudyTestimonial;
}

// ==========================================================================
// footer
// ==========================================================================

export interface FooterMenuGroup {
  title: string;
  menus: string[] | MenuItem[] | ContactLinkItem[];
}

export interface FooterContactInfo {
  heading: string;
  email: string;
  callLabel: string;
  phone: string;
}

export interface FooterButton {
  label: string;
  link: string;
}

export interface Footer {
  logo: string;
  info: string;
  button: FooterButton;
  social: SocialLink[];
  menus: FooterMenuGroup[];
  contactInfo: FooterContactInfo;
}

// ==========================================================================
// brands
// ==========================================================================

export interface Brand {
  id: number;
  image: string;
  home?: boolean;
  shortRender?: boolean;
}

// ==========================================================================
// faqs (global)
// ==========================================================================

export interface Faq {
  question: string;
  answer: string;
}

// ==========================================================================
// testimonials
// ==========================================================================

export interface Testimonial {
  id: number;
  video?: string;
  image?: string;
  videoLink: string;
  logo: string;
  quote: string;
  name: string;
  role: string;
}

// ==========================================================================
// teams
// ==========================================================================

export interface TeamMember {
  image: string;
  name: string;
  designation: string;
}

// ==========================================================================
// homePage
// ==========================================================================

export interface HomeHeroBrand {
  text: string;
  logos: Brand[];
}

export interface HomeHero {
  title: string;
  des: string;
  showShopifyPlusIcon: boolean;
  videoBg: string;
  brand: HomeHeroBrand;
}

export interface HomeAboutButton {
  text: string;
  link: string;
}

export interface HomeAbout {
  text: string;
  button: HomeAboutButton;
}

export interface HomeCaseStudieButton {
  label: string;
  link: string;
}

export interface HomeCaseStudie {
  title: string;
  subtitle: string;
  caseStudies: CaseStudy[];
  button: HomeCaseStudieButton;
}

export interface HomeBrand {
  title: string;
  logos: Brand[];
}

export interface HomeService {
  title: string;
  subtitle: string;
  services: Service[];
}

export interface WorkingProcessStep {
  title: string;
  description: string;
  tags: string[];
}

export interface WorkingProcessButton {
  label: string;
  link: string;
}

export interface HomeWorkingProcess {
  title: string;
  subtitle: string;
  button: WorkingProcessButton;
  process: WorkingProcessStep[];
}

export interface HomeFaq {
  title: string;
  faqs: Faq[];
  ceo: CeoInfo;
  whatsApp: string;
}

export interface ActivityStatItem {
  value: string;
  text: string;
}

export interface HomeActivity {
  title: string;
  activityStats: {
    col1: ActivityStatItem[];
    col2: ActivityStatItem[];
  };
}

export interface HomeTestimonial {
  subtitle: string;
  title: string;
  testimonials: Testimonial[];
}

export interface HomePage {
  hero: HomeHero;
  about: HomeAbout;
  caseStudie: HomeCaseStudie;
  brand: HomeBrand;
  service: HomeService;
  workingProcess: HomeWorkingProcess;
  faq: HomeFaq;
  activity: HomeActivity;
  testimonial: HomeTestimonial;
}

// ==========================================================================
// aboutPage
// ==========================================================================

export interface AboutHeroButton {
  label: string;
  link: string;
}

export interface AboutHero {
  title: string;
  subtitle: string;
  videoUrl: string;
  button: AboutHeroButton;
}

export interface AboutBrand {
  subtitle: string;
  logos: Brand[];
}

export interface AboutCounterItem {
  text: string;
  value: string;
}

export interface VisionMissionBlock {
  subtitle: string;
  title: string;
  image: string;
}

export interface VisionMission {
  top: VisionMissionBlock;
  meddle: string[];
  bottom: VisionMissionBlock;
}

export interface AboutTeamButton {
  label: string;
  link: string;
}

export interface AboutTeam {
  title: string;
  subtitle: string;
  button: AboutTeamButton;
  teams: TeamMember[];
}

export interface AboutPage {
  hero: AboutHero;
  brand: AboutBrand;
  counter: AboutCounterItem[];
  visionMission: VisionMission;
  team: AboutTeam;
}

// ==========================================================================
// contactPage
// ==========================================================================

export interface ContactPage {
  title: string;
  supportImage: string;
  description: string;
  emailPlaceholder: string;
  namePlaceholder: string;
  budgetPlaceholder: string;
  hearAboutUsPlaceholder: string;
  messagePlaceholder: string;
  servicesLabel: string;
  submitButtonText: string;
  submittingText: string;
  preferEmailLabel: string;
  email: string;
  budgetOptions: string[];
  hearAboutUsOptions: string[];
  serviceTags: string[];
}

// ==========================================================================
// career / careerPage
// ==========================================================================

export interface CareerListing {
  open: boolean;
  title: string;
  location: string;
  type: string;
  tags: string[];
  fromLink: string;
}

export interface CareerHeroButton {
  label: string;
  link: string;
}

export interface CareerHero {
  title: string;
  subtitle: string;
  button: CareerHeroButton;
  image: string;
}

export interface CareerBenefitItem {
  title: string;
  description: string;
}

export interface CareerBenefit {
  title: string;
  subtitle: string;
  items: CareerBenefitItem[];
}

export interface CareerPosition {
  title: string;
  subtitle: string;
  careers: CareerListing[];
}

export interface CareerFaqItem {
  title: string;
  text: string;
}

export interface CareerFaq {
  title: string;
  subtitle: string;
  faqs: CareerFaqItem[];
}

export interface CareerPage {
  hero: CareerHero;
  benift: CareerBenefit;
  position: CareerPosition;
  faq: CareerFaq;
}

// ==========================================================================
// caseStudiePage
// ==========================================================================

export interface CaseStudiePageHeroButton {
  label: string;
  link: string;
}

export interface CaseStudiePageHero {
  title: string;
  subtitle: string;
  button: CaseStudiePageHeroButton;
}

export interface CaseStudiePage {
  hero: CaseStudiePageHero;
  caseStudies: CaseStudy[];
}

// ==========================================================================
// servicePage
// ==========================================================================

export interface ServicePageHeroButton {
  label: string;
  link: string;
}

export interface ServicePageHero {
  title: string;
  subtitle: string;
  button: ServicePageHeroButton;
  image: string;
}

export interface ServicePageIndustrieButton {
  label: string;
  link: string;
}

export interface ServicePageIndustrie {
  title: string;
  subtitle: string;
  button: ServicePageIndustrieButton;
  industries: Industry[];
}

export interface ServicePage {
  hero: ServicePageHero;
  industrie: ServicePageIndustrie;
}

// ==========================================================================
// data (root export)
// ==========================================================================

export interface SiteDataBundle {
  footer: Footer;
  header: Header;
  services: Service[];
  siteData: SiteData;
  homePage: HomePage;
  testimonials: Testimonial[];
  aboutPage: AboutPage;
  teams: TeamMember[];
  contactPage: ContactPage;
  careerPage: CareerPage;
  industries: Industry[];
}
