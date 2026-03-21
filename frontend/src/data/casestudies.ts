export interface CaseStudyResult {
  stat: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  location: string;
  companySize: string;
  arr: string;
  slug: string;
  tag: string;
  tagColor: "purple" | "pink";
  heroStat: string;
  heroStatLabel: string;
  duration: string;
  services: string[];
  challenge: string;
  whatWeDid: string[];
  results: CaseStudyResult[];
  quote: string;
  quoteName: string;
  quoteTitle: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "saas-hr-tech",
    client: "Workably",
    industry: "HR Tech SaaS",
    location: "San Francisco, CA",
    companySize: "Series A — 45 employees",
    arr: "$4.2M ARR",
    slug: "/case-studies/workably-hr-tech",
    tag: "CRO & Experimentation",
    tagColor: "purple",
    heroStat: "127%",
    heroStatLabel: "increase in demo requests",
    duration: "4 months",
    services: ["CRO & Experimentation", "Analytics & Attribution"],
    challenge:
      "Workably had strong top-of-funnel traffic from LinkedIn ads but their demo request page was converting at just 1.8%. Their GA4 was missing over 40% of conversions due to ad blocker interference, meaning their team was making campaign decisions on data that was fundamentally wrong. The VP of Marketing knew something was broken but could not pinpoint where.",
    whatWeDid: [
      "Fixed server-side tracking via GA4 and LinkedIn Conversion API — recovering 38% of previously untracked conversions",
      "Rebuilt the demo request page with a new headline, simplified form (from 7 fields to 4), and social proof from recognisable logos",
      "Added a 30-second explainer video above the fold that reduced bounce rate by 22%",
      "Ran 3 A/B tests over 90 days: headline copy, form length, and CTA button colour and text",
      "Built an executive dashboard in Looker Studio connecting LinkedIn ad spend directly to demo requests and pipeline value",
    ],
    results: [
      { stat: "127%", label: "increase in demo requests" },
      { stat: "1.8%", label: "→ 4.1% conversion rate" },
      { stat: "38%", label: "more conversions recovered from tracking fix" },
      { stat: "$280K", label: "additional pipeline in 90 days" },
      { stat: "22%", label: "reduction in bounce rate" },
      { stat: "4 months", label: "to full results" },
    ],
    quote:
      "We knew our tracking was broken but had no idea how broken. Revium Labs fixed it in week one and suddenly our LinkedIn campaigns looked completely different — in a good way. The demo page rebuild alone paid for six months of their retainer.",
    quoteName: "Sarah Chen",
    quoteTitle: "VP Marketing, Workably",
  },
  {
    id: "fintech-b2b-payments",
    client: "Payvance",
    industry: "B2B Fintech",
    location: "New York, NY",
    companySize: "Series B — 120 employees",
    arr: "$11M ARR",
    slug: "/case-studies/payvance-fintech",
    tag: "Full-Stack",
    tagColor: "pink",
    heroStat: "3.4x",
    heroStatLabel: "return on LinkedIn ad spend",
    duration: "6 months",
    services: ["Performance Marketing", "Analytics & Attribution", "CRO & Experimentation"],
    challenge:
      "Payvance was spending $35,000 per month on LinkedIn and Google Ads with no reliable way to connect ad spend to closed revenue. Their CRM (Salesforce) was completely disconnected from their ad platforms. The CFO was asking hard questions about marketing ROI and the Head of Growth had no credible answers. They also suspected their LinkedIn targeting was too broad — reaching HR managers instead of the CFOs and Finance Directors who actually make the buying decision.",
    whatWeDid: [
      "Connected Salesforce to LinkedIn and Google via server-side integration — creating a closed-loop attribution model from first ad click to closed-won revenue",
      "Rebuilt LinkedIn campaign structure with tight ICP targeting: CFOs and Finance Directors at companies with 100–500 employees in manufacturing, logistics, and retail",
      "Reduced monthly ad spend from $35K to $22K by cutting underperforming campaigns — reinvesting savings into higher performing ad sets",
      "Built a retargeting campaign for pricing page visitors who did not book a demo — converting at 3.1x the rate of cold traffic",
      "Created a CFO-specific landing page with different messaging than the standard homepage — focused on ROI and compliance rather than features",
      "Delivered a board-ready marketing ROI dashboard updated in real time",
    ],
    results: [
      { stat: "3.4x", label: "return on LinkedIn ad spend" },
      { stat: "$22K", label: "monthly spend (down from $35K)" },
      { stat: "67%", label: "reduction in cost per qualified meeting" },
      { stat: "18", label: "qualified meetings in month 3" },
      { stat: "2", label: "enterprise deals closed (attributed)" },
      { stat: "6 months", label: "to full results" },
    ],
    quote:
      "For the first time in two years I could walk into a board meeting and show exactly which campaigns generated which revenue. That clarity alone was worth more than anything else. The fact that we also halved our cost per meeting was a bonus.",
    quoteName: "Marcus Webb",
    quoteTitle: "Head of Growth, Payvance",
  },
  {
    id: "martech-saas",
    client: "Segmently",
    industry: "MarTech SaaS",
    location: "Austin, TX",
    companySize: "Seed — 18 employees",
    arr: "$1.8M ARR",
    slug: "/case-studies/segmently-martech",
    tag: "CRO & Analytics",
    tagColor: "purple",
    heroStat: "71%",
    heroStatLabel: "lift in free trial signups",
    duration: "3 months",
    services: ["CRO & Experimentation", "Analytics & Attribution"],
    challenge:
      "Segmently had 8,000 monthly visitors from organic SEO but only 1.2% were signing up for a free trial. Their onboarding funnel had a massive drop-off between signup and first meaningful action — meaning even the users who did sign up were not activating. They had no heatmaps, no session recordings, and no way to know where people were dropping off. Their GA4 was set up by a developer who had since left the company and nobody was confident the data was accurate.",
    whatWeDid: [
      "Audited and rebuilt their GA4 — fixing 6 critical tracking errors and setting up funnel visualisation from landing page to activated user",
      "Installed Hotjar for heatmaps and session recordings — identified that 61% of visitors never scrolled past the hero section on the homepage",
      "Used our AI Hypothesis Engine to analyse session recordings and generate 14 ranked test hypotheses — prioritised by predicted conversion impact",
      "Ran the highest-priority test: replaced a feature-focused hero headline with an outcome-focused one. Ran for 3 weeks.",
      "Rebuilt the free trial signup flow — reduced from 4 steps to 1 step with Google OAuth",
      "Created a dedicated landing page for their top organic keyword (customer segmentation software) that matched search intent more closely than the homepage",
    ],
    results: [
      { stat: "71%", label: "lift in free trial signups" },
      { stat: "1.2%", label: "→ 2.05% homepage conversion rate" },
      { stat: "61%", label: "more users reaching the signup form" },
      { stat: "34%", label: "improvement in trial-to-activation rate" },
      { stat: "14", label: "test hypotheses generated by AI in 2 hours" },
      { stat: "3 months", label: "to full results" },
    ],
    quote:
      "I had been staring at our homepage for two years and thought I knew what was wrong. Revium Labs's AI analysis found three things I had completely missed. The headline test alone moved our signup rate by 40%. Simple change, massive impact.",
    quoteName: "Priya Nair",
    quoteTitle: "Founder & CEO, Segmently",
  },
  {
    id: "legal-tech",
    client: "CounselFlow",
    industry: "Legal Tech SaaS",
    location: "Chicago, IL",
    companySize: "Series A — 32 employees",
    arr: "$3.1M ARR",
    slug: "/case-studies/counselflow-legaltech",
    tag: "Performance Marketing",
    tagColor: "pink",
    heroStat: "43",
    heroStatLabel: "qualified meetings in 60 days",
    duration: "5 months",
    services: ["Performance Marketing", "CRO & Experimentation"],
    challenge:
      "CounselFlow sells contract management software to General Counsels and Legal Operations teams at mid-market companies. They had tried Google Ads twice with two different agencies and burned through $40,000 with almost no pipeline to show for it. Their landing pages were sending all paid traffic to the homepage. Their LinkedIn ads were targeting anyone with Legal in their job title — paralegals, legal assistants, law students — instead of the actual buyers. They were ready to give up on paid media entirely.",
    whatWeDid: [
      "Rebuilt LinkedIn campaign structure from scratch — hyper-targeted to General Counsels, VPs of Legal, and Legal Operations Managers at companies with 200–2000 employees",
      "Created three separate ad creative tracks: one for in-house legal teams worried about contract risk, one focused on time savings, one focused on compliance",
      "Built four dedicated landing pages — one per buyer persona and pain point — each with specific copy, social proof, and a relevant case study",
      "Set up full-funnel retargeting: demo page visitors got one sequence, pricing page visitors got a different more aggressive sequence with a limited-time offer",
      "Ran A/B tests on the demo request form: shorter form won by 38% in completion rate",
      "Reduced Google Ads spend and refocused it entirely on high-intent keywords (contract management software enterprise, legal ops software)",
    ],
    results: [
      { stat: "43", label: "qualified meetings in first 60 days" },
      { stat: "4.8x", label: "return on ad spend (month 4)" },
      { stat: "38%", label: "higher form completion after A/B test" },
      { stat: "$18K", label: "monthly spend generating $86K pipeline" },
      { stat: "0", label: "meetings from previous agency in same period" },
      { stat: "5 months", label: "to full results" },
    ],
    quote:
      "We had genuinely given up on paid media. Two agencies, $40,000 gone, nothing to show for it. Revium Labs came in, looked at what we had been doing, and told us in the first call exactly why it was not working. Three months later we had more qualified pipeline than we had ever had from any channel.",
    quoteName: "David Okafor",
    quoteTitle: "VP Sales, CounselFlow",
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((cs) => cs.slug === `/case-studies/${slug}`);

export const getAdjacentCaseStudies = (id: string) => {
  const index = caseStudies.findIndex((cs) => cs.id === id);
  return {
    prev: index > 0 ? caseStudies[index - 1] : caseStudies[caseStudies.length - 1],
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : caseStudies[0],
  };
};
