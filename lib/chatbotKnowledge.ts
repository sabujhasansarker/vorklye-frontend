import {
  siteData,
  services,
  faqs,
  caseStudies,
  teams,
  aboutPage,
  contactPage,
  career,
  header,
  footer,
  industries,
  testimonials,
  homePage,
} from "@/data";

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

// Clean phone number for WhatsApp URL (e.g., "+1 628-265-7462" -> "16282657462")
export function getCleanWhatsAppNumber(rawNumber: string = siteData.whatsapp): string {
  return rawNumber.replace(/[^0-9]/g, "");
}

// Generate direct WhatsApp chat URL with prefilled text
export function generateWhatsAppUrl(
  userQuery?: string,
  rawPhone: string = siteData.whatsapp
): string {
  const cleanPhone = getCleanWhatsAppNumber(rawPhone);
  const defaultText = userQuery
    ? `Hi Vorklye Support Team, I have a question regarding: "${userQuery}". Could you please assist me?`
    : `Hi Ariyan & Vorklye Support Team, I'd like to talk to a support manager about my project.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultText)}`;
}

// ============================================================================
// DYNAMIC KNOWLEDGE INDEX BUILDER
// ============================================================================
function buildKnowledgeIndex(): IndexedDoc[] {
  const docs: IndexedDoc[] = [];

  // 1. Site Overview & Tagline
  docs.push({
    id: "site-overview",
    category: "About",
    title: `${siteData.name} Overview & Tagline`,
    keywords: ["vorklye", "overview", "tagline", "about", "company", "partner", "shopify", "agency", "growth", "ecommerce"],
    content: `${siteData.name} is a Shopify growth partner helping ambitious ecommerce brands build, optimize, and scale high-performing online stores.\n\n- **Email**: ${siteData.email}\n- **WhatsApp**: ${siteData.whatsapp}\n- **CEO**: ${siteData.ceo.name}`,
    actionLinks: [
      { label: "Book Strategy Call", url: header.button.link },
      { label: "Explore Services", url: "/services" },
    ],
  });

  // 2. CEO & Founder Info
  docs.push({
    id: "ceo-info",
    category: "Leadership",
    title: `CEO & Founder: ${siteData.ceo.name}`,
    keywords: ["ariyan", "ceo", "founder", "owner", "leader", "leadership", "head", "quote", "text", "who is ariyan"],
    content: `**${siteData.ceo.name}** is the CEO & Founder of ${siteData.name}.\n\n> "${siteData.ceo.text}"\n\nHe oversees client strategy, brand growth, and support management.`,
    actionLinks: [
      { label: "About Us", url: "/about" },
      { label: "Connect with Ariyan on WhatsApp", url: generateWhatsAppUrl("Hi Ariyan, I saw your profile on Vorklye") },
    ],
  });

  // 3. Contact & Booking Info
  docs.push({
    id: "contact-info",
    category: "Contact",
    title: "Contact Information & Booking Call",
    keywords: ["contact", "email", "phone", "whatsapp", "number", "call", "book", "booking", "meeting", "cal.com", "schedule", "reach", "location", "address", "clutch", "behance", "dribbble", "awwwards"],
    content: `You can reach **${siteData.name}** via:\n\n- **Email**: [${siteData.email}](mailto:${siteData.email})\n- **WhatsApp/Phone**: ${siteData.whatsapp}\n- **Book a 30-min strategy call**: [Schedule on Cal.com](${header.button.link})\n- **Platforms**: ${siteData.contactLink.map(c => c.label).join(", ")}\n- **Contact Page**: ${contactPage.description}`,
    actionLinks: [
      { label: "Book 30-Min Call", url: header.button.link },
      { label: "Go to Contact Page", url: "/contact" },
      { label: "Chat on WhatsApp", url: generateWhatsAppUrl("Contact Inquiry") },
    ],
  });

  // 4. Social Links & Badges
  docs.push({
    id: "social-links",
    category: "Social",
    title: "Social Media Profiles & Portfolio Platforms",
    keywords: ["facebook", "instagram", "linkedin", "social", "clutch", "behance", "dribbble", "awwwards", "links"],
    content: `Connect with **${siteData.name}** across platforms:\n\n- **Social**: ${siteData.socialLinks.map(s => `[${s.name}](${s.link})`).join(" · ")}\n- **Portfolios**: ${siteData.contactLink.map(c => c.label).join(", ")}`,
    actionLinks: [
      { label: "Contact Us", url: "/contact" },
    ],
  });

  // 5. All Services
  services.forEach((s) => {
    const processStr = s.process ? s.process.map(p => `1. **${p.title}**: ${p.description}`).join("\n") : "";
    const subStr = s.subServices ? s.subServices.join(", ") : "";

    docs.push({
      id: `service-${s.id}`,
      category: "Service",
      title: `Service: ${s.title}`,
      keywords: [
        s.title.toLowerCase(),
        ...s.subServices.map(sub => sub.toLowerCase()),
        "service",
        "solution",
        "shopify",
        "capabilities",
        "process",
      ],
      content: `### ${s.title}\n*${s.tagLine}*\n\n${s.shortDes}\n\n**Sub-Services & Capabilities:**\n${s.subServices.map(sub => `• ${sub}`).join("\n")}\n\n**Process:**\n${processStr}`,
      actionLinks: [
        { label: `View ${s.title} Service`, url: "/services" },
        { label: "Book a Consultation", url: header.button.link },
      ],
    });
  });

  // 6. Global FAQs & Service FAQs
  faqs.forEach((f, idx) => {
    docs.push({
      id: `faq-global-${idx}`,
      category: "FAQ",
      title: `FAQ: ${f.question}`,
      keywords: ["faq", "question", "answer", ...f.question.toLowerCase().split(" ")],
      content: `**Q: ${f.question}**\n\n${f.answer}`,
      actionLinks: [
        { label: "Book a Call", url: header.button.link },
      ],
    });
  });

  services.forEach((s) => {
    if (s.faqs) {
      s.faqs.forEach((f, idx) => {
        docs.push({
          id: `faq-service-${s.id}-${idx}`,
          category: "FAQ",
          title: `FAQ (${s.title}): ${f.question}`,
          keywords: ["faq", s.title.toLowerCase(), ...f.question.toLowerCase().split(" ")],
          content: `**Q: ${f.question}**\n\n${f.answer}`,
          actionLinks: [
            { label: `Explore ${s.title}`, url: "/services" },
          ],
        });
      });
    }
  });

  // 7. Case Studies
  caseStudies.forEach((c) => {
    const resStr = c.results && c.results.length > 0 ? c.results.map(r => `• **${r.label}**: ${r.value}`).join("\n") : "";
    docs.push({
      id: `casestudy-${c.id}`,
      category: "Case Study",
      title: `Case Study: ${c.title} (${c.client})`,
      keywords: [c.title.toLowerCase(), c.client.toLowerCase(), c.industry.toLowerCase(), "case study", "portfolio", "project", "result", "client", "work"],
      content: `### ${c.title} (${c.client})\n**Industry**: ${c.industry}\n\n**Description**: ${c.description}\n\n**Challenge**: ${c.challenge}\n**Solution**: ${c.solution}\n\n**Results:**\n${resStr}`,
      actionLinks: [
        { label: "View All Case Studies", url: "/case-studies" },
        { label: "Book Strategy Call", url: header.button.link },
      ],
    });
  });

  // 8. Team Members
  teams.forEach((t, idx) => {
    docs.push({
      id: `team-${idx}`,
      category: "Team",
      title: `Team Member: ${t.name}`,
      keywords: [t.name.toLowerCase(), t.designation.toLowerCase(), "team", "staff", "expert", "member", "who is"],
      content: `**${t.name}**\n*${t.designation}*\n\nMember of the core team at ${siteData.name}.`,
      actionLinks: [
        { label: "About Our Team", url: "/about" },
      ],
    });
  });

  // 9. Careers
  career.forEach((job, idx) => {
    docs.push({
      id: `career-${idx}`,
      category: "Career",
      title: `Job Opportunity: ${job.title}`,
      keywords: [job.title.toLowerCase(), job.type.toLowerCase(), job.location.toLowerCase(), "job", "career", "hiring", "apply", "vacancy", "position", "work"],
      content: `### ${job.title}\n- **Type**: ${job.type}\n- **Location**: ${job.location}\n\nApply now to shape the future of Shopify ecommerce at ${siteData.name}.`,
      actionLinks: [
        { label: "View Career Page", url: "/career" },
      ],
    });
  });

  // 10. Industries
  industries.forEach((ind) => {
    docs.push({
      id: `industry-${ind.id}`,
      category: "Industry",
      title: `Industry Focus: ${ind.title}`,
      keywords: [ind.title.toLowerCase(), "industry", "niche", "sector", "ecommerce"],
      content: `**${ind.title}**\n\n${ind.des}`,
      actionLinks: [
        { label: "View Case Studies", url: "/case-studies" },
      ],
    });
  });

  // 11. Testimonials
  testimonials.forEach((t) => {
    docs.push({
      id: `testimonial-${t.id}`,
      category: "Testimonial",
      title: `Client Review by ${t.name}`,
      keywords: [t.name.toLowerCase(), t.role.toLowerCase(), "review", "testimonial", "feedback", "rating", "client"],
      content: `> "${t.quote}"\n\n— **${t.name}**, ${t.role}`,
      actionLinks: [
        { label: "View Case Studies", url: "/case-studies" },
      ],
    });
  });

  // 12. Working Process
  if (homePage?.workingProcess?.process) {
    const stepsStr = homePage.workingProcess.process.map(p => `• **${p.title}**: ${p.description}`).join("\n");
    docs.push({
      id: "working-process",
      category: "Process",
      title: "Vorklye Working Process",
      keywords: ["process", "workflow", "steps", "how we work", "working process", "methodology"],
      content: `### Our Working Process\n\n${stepsStr}`,
      actionLinks: [
        { label: "Book Discovery Call", url: header.button.link },
      ],
    });
  }

  return docs;
}

// Lazy-loaded global knowledge base
let cachedKnowledgeIndex: IndexedDoc[] | null = null;
function getKnowledgeIndex(): IndexedDoc[] {
  if (!cachedKnowledgeIndex) {
    cachedKnowledgeIndex = buildKnowledgeIndex();
  }
  return cachedKnowledgeIndex;
}

// ============================================================================
// DYNAMIC FULL-TEXT SEARCH & EXTRACTION ENGINE
// ============================================================================
export function queryWebsiteKnowledge(userQuery: string): KnowledgeMatchResult {
  const query = userQuery.trim().toLowerCase();

  if (!query) {
    return {
      found: true,
      response: `Hello! 👋 How can I help you today? Ask me anything about **${siteData.name}** services, team, case studies, or booking a strategy call.`,
      actionLinks: [{ label: "View Services", url: "/services" }],
    };
  }

  // 1. Direct request for Human / Manager / WhatsApp
  if (
    query.includes("human") ||
    query.includes("manager") ||
    query.includes("support team") ||
    query.includes("whatsapp") ||
    query.includes("talk to person") ||
    query.includes("agent") ||
    query.includes("support manager")
  ) {
    return {
      found: false,
      suggestWhatsApp: true,
      response: `I've assigned our Support Manager (**${siteData.ceo.name}**, CEO & Support Lead) to assist you personally! You can connect with him directly on WhatsApp right now.`,
      actionLinks: [
        { label: "Chat on WhatsApp", url: generateWhatsAppUrl(userQuery) },
      ],
    };
  }

  // 2. Standard Greetings
  if (
    /^(hi|hello|hey|hola|assalamu|alaikum|salam|greetings|good morning|good evening|good afternoon)(\s+|$)/.test(
      query
    )
  ) {
    return {
      found: true,
      response: `Hello! 👋 Welcome to **${siteData.name}**. ${siteData.tagline}\n\nHow can I help you today? Ask me about our services, CEO Ariyan, case studies, or booking a 30-min strategy call!`,
      actionLinks: [
        { label: "Book Strategy Call", url: header.button.link },
        { label: "Explore Services", url: "/services" },
      ],
    };
  }

  // Clean tokens (remove punctuation & short noise words)
  const tokens = query
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1 && !["the", "is", "a", "an", "and", "or", "to", "in", "of", "for", "with", "what", "how", "who", "tell", "me", "about", "can", "you", "do", "we", "are", "er", "kno", "na", "ja", "korte", "hobe"].includes(t));

  const allDocs = getKnowledgeIndex();

  // Score each document based on relevancy
  const scoredDocs = allDocs
    .map((doc) => {
      let score = 0;
      const lowerTitle = doc.title.toLowerCase();
      const lowerContent = doc.content.toLowerCase();

      // Full phrase match
      if (lowerTitle.includes(query)) score += 100;
      if (lowerContent.includes(query)) score += 60;

      // Token matches
      let matchedTokenCount = 0;
      tokens.forEach((token) => {
        if (lowerTitle.includes(token)) {
          score += 35;
          matchedTokenCount++;
        }
        if (doc.keywords.some((k) => k.includes(token))) {
          score += 25;
          matchedTokenCount++;
        }
        if (lowerContent.includes(token)) {
          score += 15;
          matchedTokenCount++;
        }
      });

      // Bonus if multiple tokens match in same doc
      if (tokens.length > 1 && matchedTokenCount >= tokens.length) {
        score += 40;
      }

      return { doc, score };
    })
    .filter((item) => item.score >= 25)
    .sort((a, b) => b.score - a.score);

  // If we found matching documents in data.ts
  if (scoredDocs.length > 0) {
    const topDoc = scoredDocs[0].doc;
    const secondaryDoc = scoredDocs.length > 1 && scoredDocs[1].score > 40 ? scoredDocs[1].doc : null;

    let synthesizedResponse = topDoc.content;

    if (secondaryDoc && secondaryDoc.id !== topDoc.id) {
      synthesizedResponse += `\n\n---\n\n### Related Information: ${secondaryDoc.title}\n${secondaryDoc.content}`;
    }

    const combinedActionLinks = [
      ...(topDoc.actionLinks || []),
      ...(secondaryDoc?.actionLinks || []),
    ];

    // Deduplicate action links
    const uniqueLinks: ActionLink[] = [];
    const seenUrls = new Set<string>();
    combinedActionLinks.forEach((link) => {
      if (!seenUrls.has(link.url)) {
        seenUrls.add(link.url);
        uniqueLinks.push(link);
      }
    });

    return {
      found: true,
      topic: topDoc.title,
      response: synthesizedResponse,
      actionLinks: uniqueLinks.length > 0 ? uniqueLinks : [{ label: "Contact Us", url: "/contact" }],
    };
  }

  // 4. FALLBACK: Data NOT found in data.ts!
  // Assign Support Manager Ariyan & show WhatsApp transfer option
  return {
    found: false,
    suggestWhatsApp: true,
    response: `I searched our entire website database, but I couldn't find specific data regarding **"${userQuery}"**.\n\nDon't worry! I have assigned our Support Manager (**${siteData.ceo.name}**, CEO & Support Lead) to assist you directly.`,
    actionLinks: [
      {
        label: "Chat on WhatsApp with Support Manager",
        url: generateWhatsAppUrl(userQuery),
      },
    ],
  };
}
