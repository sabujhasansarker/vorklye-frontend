import { career, caseStudies, header, services, siteData, teams } from "@/data";

export interface ActionLink {
  label: string;
  url: string;
}

export interface KnowledgeMatchResult {
  found: boolean;
  response: string;
  actionLinks?: ActionLink[];
  suggestWhatsApp?: boolean;
  topic?: string;
}

export interface IndexedDoc {
  id: string;
  category: string;
  title: string;
  keywords: string[];
  content: string;
  actionLinks?: ActionLink[];
}

// Stop words filter
const STOP_WORDS = new Set([
  "the",
  "is",
  "a",
  "an",
  "and",
  "or",
  "to",
  "in",
  "of",
  "for",
  "with",
  "what",
  "how",
  "who",
  "tell",
  "me",
  "about",
  "can",
  "you",
  "do",
  "we",
  "are",
  "er",
  "kno",
  "na",
  "ja",
  "korte",
  "hobe",
  "ami",
  "tumi",
  "doro",
  "bhai",
  "give",
]);

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function getCleanWhatsAppNumber(
  rawNumber: string = siteData.whatsapp,
): string {
  return rawNumber.replace(/[^0-9]/g, "");
}

export function generateWhatsAppUrl(
  userQuery?: string,
  rawPhone: string = siteData.whatsapp,
): string {
  const cleanPhone = getCleanWhatsAppNumber(rawPhone);
  const defaultText = userQuery
    ? `Hi Vorklye Support Team, I have a question regarding: "${userQuery}". Could you please assist me?`
    : `Hi Ariyan & Vorklye Support Team, I'd like to talk to a support manager about my project.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultText)}`;
}

// ============================================================================
// 100 INTENT TARGETS & KNOWLEDGE BASE BUILDER
// ============================================================================
function buildKnowledgeIndex(): IndexedDoc[] {
  const docs: IndexedDoc[] = [];

  // 1. Full Team Overview Doc
  const fullTeamOverview = teams
    .map((t) => `• **${t.name}** — ${t.designation}`)
    .join("\n");
  docs.push({
    id: "full-team-overview",
    category: "Team",
    title: `Our Team at ${siteData.name}`,
    keywords: [
      "team",
      "full team",
      "entire team",
      "our team",
      "members",
      "staff",
      "crew",
      "employees",
      "people",
      "who works here",
      "experts",
      "developers",
    ],
    content: `### Meet the **${siteData.name}** Core Team\n\n- **CEO & Founder**: ${siteData.ceo.name}\n${fullTeamOverview}`,
    actionLinks: [{ label: "About Our Team", url: "/about" }],
  });

  // 2. Social Links & Profiles (With Dynamic Unique URL Deduplication)
  const uniqueSocialsMap = new Map();
  siteData.socialLinks.forEach((s) => {
    if (!uniqueSocialsMap.has(s.link)) {
      uniqueSocialsMap.set(s.link, s);
    }
  });
  const uniqueSocials = Array.from(uniqueSocialsMap.values());

  docs.push({
    id: "social-links",
    category: "Social",
    title: "Social Media Profiles & Portfolio Platforms",
    keywords: [
      "facebook",
      "instagram",
      "linkedin",
      "social",
      "clutch",
      "behance",
      "dribbble",
      "awwwards",
      "links",
      "social media",
      "profiles",
    ],
    content: `### **${siteData.name}** Official Social Profiles:\n\n${uniqueSocials.map((s) => `• **[${s.name}](${s.link})**`).join("\n")}\n\n**Portfolio Profiles:**\n${siteData.contactLink.map((c) => `• [${c.label}](${c.link || "/contact"})`).join("\n")}`,
    actionLinks: [{ label: "Contact Us Page", url: "/contact" }],
  });

  // 3. Site Overview & Contact
  docs.push({
    id: "site-overview",
    category: "About",
    title: `${siteData.name} Overview`,
    keywords: [
      "vorklye",
      "overview",
      "tagline",
      "about",
      "company",
      "partner",
      "shopify",
      "agency",
    ],
    content: `${siteData.name} is a Shopify growth partner helping ambitious ecommerce brands build, optimize, and scale online stores.\n\n- **Email**: ${siteData.email}\n- **WhatsApp**: ${siteData.whatsapp}\n- **CEO**: ${siteData.ceo.name}`,
    actionLinks: [
      { label: "Book Strategy Call", url: header.button.link },
      { label: "Explore Services", url: "/services" },
    ],
  });

  // 4. Services Loop
  services.forEach((s) => {
    docs.push({
      id: `service-${s.id}`,
      category: "Service",
      title: `Service: ${s.title}`,
      keywords: [
        s.title.toLowerCase(),
        ...s.subServices.map((sub) => sub.toLowerCase()),
        "service",
        "shopify",
      ],
      content: `### ${s.title}\n*${s.tagLine}*\n\n${s.shortDes}\n\n**Capabilities:**\n${s.subServices.map((sub) => `• ${sub}`).join("\n")}`,
      actionLinks: [
        { label: `View ${s.title}`, url: "/services" },
        { label: "Book Consultation", url: header.button.link },
      ],
    });
  });

  // 5. Case Studies
  caseStudies.forEach((c) => {
    docs.push({
      id: `casestudy-${c.id}`,
      category: "Case Study",
      title: `Case Study: ${c.title}`,
      keywords: [
        c.title.toLowerCase(),
        c.client.toLowerCase(),
        "case study",
        "portfolio",
        "project",
      ],
      content: `### ${c.title} (${c.client})\n**Industry**: ${c.industry}\n\n**Description**: ${c.description}`,
      actionLinks: [{ label: "View Case Studies", url: "/case-studies" }],
    });
  });

  // 6. Careers
  career.forEach((job, idx) => {
    docs.push({
      id: `career-${idx}`,
      category: "Career",
      title: `Job: ${job.title}`,
      keywords: [job.title.toLowerCase(), "job", "career", "hiring", "apply"],
      content: `### ${job.title}\n- **Type**: ${job.type}\n- **Location**: ${job.location}`,
      actionLinks: [{ label: "Career Page", url: "/career" }],
    });
  });

  return docs;
}

let cachedKnowledgeIndex: IndexedDoc[] | null = null;
function getKnowledgeIndex(): IndexedDoc[] {
  if (!cachedKnowledgeIndex) {
    cachedKnowledgeIndex = buildKnowledgeIndex();
  }
  return cachedKnowledgeIndex;
}

// ============================================================================
// MULTI-INTENT SEARCH ENGINE (FIXES CONFLICTS & DUPLICATES)
// ============================================================================
export function queryWebsiteKnowledge(userQuery: string): KnowledgeMatchResult {
  const query = userQuery.trim().toLowerCase();

  if (!query) {
    return {
      found: true,
      response: `Hello! 👋 How can I help you today? Ask me about **${siteData.name}** services, team, case studies, or booking a call.`,
      actionLinks: [{ label: "View Services", url: "/services" }],
    };
  }

  // 1. Human / WhatsApp Escalation
  const escalationKeywords = [
    "human",
    "manager",
    "whatsapp",
    "talk to person",
    "agent",
  ];
  if (escalationKeywords.some((term) => query.includes(term))) {
    return {
      found: false,
      suggestWhatsApp: true,
      response: `I've assigned our Support Lead (**${siteData.ceo.name}**, CEO) to assist you! You can connect with him on WhatsApp directly.`,
      actionLinks: [
        { label: "Chat on WhatsApp", url: generateWhatsAppUrl(userQuery) },
      ],
    };
  }

  // 2. Greetings
  if (/^(hi|hello|hey|salam|assalamu|greetings)(\s+|$)/.test(query)) {
    return {
      found: true,
      response: `Hello! 👋 Welcome to **${siteData.name}**. How can I assist you today?`,
      actionLinks: [
        { label: "Book Call", url: header.button.link },
        { label: "Services", url: "/services" },
      ],
    };
  }

  const tokens = query
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !STOP_WORDS.has(t));

  const allDocs = getKnowledgeIndex();

  // Score each document
  const scoredDocs = allDocs
    .map((doc) => {
      let score = 0;
      const lowerTitle = doc.title.toLowerCase();
      const lowerContent = doc.content.toLowerCase();

      // Priority Category Match
      const isTeamQuery =
        query.includes("team") ||
        query.includes("member") ||
        query.includes("staff");
      if (isTeamQuery && doc.category === "Team") score += 150;

      const isSocialQuery =
        query.includes("social") ||
        query.includes("link") ||
        query.includes("facebook") ||
        query.includes("instagram") ||
        query.includes("linkedin");
      if (isSocialQuery && doc.category === "Social") score += 150;

      // Token Scoring
      tokens.forEach((token) => {
        const regex = new RegExp(`\\b${escapeRegExp(token)}\\b`, "i");
        if (regex.test(lowerTitle)) score += 40;
        if (doc.keywords.some((k) => regex.test(k.toLowerCase()))) score += 30;
        if (regex.test(lowerContent)) score += 15;
      });

      return { doc, score };
    })
    .filter((item) => item.score >= 40)
    .sort((a, b) => b.score - a.score);

  if (scoredDocs.length > 0) {
    // Multi-Intent Support: Extract unique categories (e.g., Team + Social)
    const selectedCategories = new Set<string>();
    const docsToRender: IndexedDoc[] = [];

    for (const item of scoredDocs) {
      if (!selectedCategories.has(item.doc.category)) {
        selectedCategories.add(item.doc.category);
        docsToRender.push(item.doc);
      }
      // Maximum 2 top categories combining response
      if (docsToRender.length >= 2) break;
    }

    // Combine responses cleanly with Markdown Dividers
    const combinedResponse = docsToRender
      .map((d) => d.content)
      .join("\n\n---\n\n");

    // Collect all action links without duplicate URLs
    const actionLinksMap = new Map<string, ActionLink>();
    docsToRender.forEach((d) => {
      d.actionLinks?.forEach((link) => {
        if (!actionLinksMap.has(link.url)) {
          actionLinksMap.set(link.url, link);
        }
      });
    });

    return {
      found: true,
      topic: docsToRender.map((d) => d.title).join(" & "),
      response: combinedResponse,
      actionLinks: Array.from(actionLinksMap.values()),
    };
  }

  // Fallback
  return {
    found: false,
    suggestWhatsApp: true,
    response: `I searched our database, but I couldn't find precise details regarding **"${userQuery}"**.\n\nFeel free to connect directly with our Support Lead on WhatsApp!`,
    actionLinks: [
      { label: "Chat on WhatsApp", url: generateWhatsAppUrl(userQuery) },
    ],
  };
}
