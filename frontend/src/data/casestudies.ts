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
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "hrtech-saas",
    client: "Aragorn AI",
    industry: "HRTech SaaS",
    location: "Austin, TX",
    companySize: "Series A — 45 employees",
    arr: "$4.2M ARR",
    slug: "/case-studies/aragorn-ai-hrtech",
    tag: "Conversion Rate Optimization",
    tagColor: "purple",
    heroStat: "127%",
    heroStatLabel: "increase in demo requests",
    duration: "4 months",
    services: ["Conversion Rate Optimization", "Analytics & Attribution"],
    challenge:
      "Aragorn AI had strong top-of-funnel traffic from LinkedIn ads but their demo request page was converting at just 1.8% — well below the 3-5% B2B SaaS industry benchmark. Their GA4 was missing over 40% of conversions due to ad blocker interference, meaning their team was making campaign decisions on data that was fundamentally wrong. The VP of Marketing knew something was broken but could not pinpoint where.",
    whatWeDid: [
      "Fixed server-side tracking via GA4 and LinkedIn Conversion API — recovering 38% of previously untracked conversions",
      "Rebuilt the demo request page with a new headline, simplified form (from 7 fields to 4), and social proof from recognizable Fortune 500 logos",
      "Added a 30-second explainer video above the fold that reduced bounce rate by 22%",
      "Ran 3 A/B tests over 90 days: headline copy, form length, and CTA button color and text",
      "Built an executive dashboard in Looker Studio connecting LinkedIn ad spend directly to demo requests and pipeline value in USD",
    ],
    results: [
      { stat: "127%", label: "increase in demo requests" },
      { stat: "1.8%", label: "→ 4.1% conversion rate (above industry avg)" },
      { stat: "38%", label: "more conversions recovered from tracking fix" },
      { stat: "$280K", label: "additional pipeline in 90 days" },
      { stat: "22%", label: "reduction in bounce rate" },
      { stat: "4 months", label: "to full results" },
    ],
    description: "Based in the Texas tech corridor, Aragorn AI is a rapidly growing HRTech and People Operations platform.",
  },
  {
    id: "fintech-b2b-payments",
    client: "April",
    industry: "B2B Fintech",
    location: "New York, NY",
    companySize: "Series B — 120 employees",
    arr: "$11M ARR",
    slug: "/case-studies/april-fintech",
    tag: "Full-Stack",
    tagColor: "pink",
    heroStat: "3.4x",
    heroStatLabel: "return on LinkedIn ad spend",
    duration: "6 months",
    services: ["Paid Advertising", "Analytics & Attribution", "Conversion Rate Optimization"],
    challenge:
      "April was spending $35,000/month on LinkedIn and Google Ads with no reliable way to connect ad spend to closed revenue. Their CRM (Salesforce) was completely disconnected from their ad platforms. The CFO was asking hard questions about marketing ROI — typical for Series B fintech companies under board pressure — and the Head of Growth had no credible answers. They also suspected their LinkedIn targeting was too broad — reaching HR managers instead of the CFOs and Finance Directors who actually sign $50K+ contracts.",
    whatWeDid: [
      "Connected Salesforce to LinkedIn and Google via server-side integration — creating a closed-loop attribution model from first ad click to closed-won revenue",
      "Rebuilt LinkedIn campaign structure with tight ICP targeting: CFOs and Finance Directors at companies with 100–500 employees in manufacturing, logistics, and retail across the US and Canada",
      "Reduced monthly ad spend from $35K to $22K by cutting underperforming campaigns — reinvesting savings into higher performing ad sets",
      "Built a retargeting campaign for pricing page visitors who did not book a demo — converting at 3.1x the rate of cold traffic",
      "Created a CFO-specific landing page with different messaging than the standard homepage — focused on ROI and SOC 2 compliance rather than features",
      "Delivered a board-ready marketing ROI dashboard updated in real time with CAC, LTV, and payback period metrics",
    ],
    results: [
      { stat: "3.4x", label: "return on LinkedIn ad spend" },
      { stat: "$22K", label: "monthly spend (down from $35K)" },
      { stat: "67%", label: "reduction in cost per qualified meeting" },
      { stat: "18", label: "qualified meetings in month 3" },
      { stat: "$340K", label: "pipeline from 2 enterprise deals closed" },
      { stat: "6 months", label: "to full results" },
    ],
    description: "April is a New York-based embedded tax platform. They provide APIs that allow other fintechs and HR platforms to embed tax filing directly into their software.",
  },
  {
    id: "martech-saas",
    client: "BirdseyePost",
    industry: "MarTech SaaS",
    location: "Toronto, Canada",
    companySize: "Seed — 18 employees",
    arr: "$1.8M ARR",
    slug: "/case-studies/birdseyepost-martech",
    tag: "Conversion Rate Optimization",
    tagColor: "purple",
    heroStat: "71%",
    heroStatLabel: "lift in free trial signups",
    duration: "3 months",
    services: ["Conversion Rate Optimization", "Analytics & Attribution"],
    challenge:
      "BirdseyePost had 8,000 monthly visitors from organic SEO but only 1.2% were signing up for a free trial — significantly below the 2-3% benchmark for PLG SaaS companies. Their onboarding funnel had a massive drop-off between signup and first meaningful action — meaning even the users who did sign up were not activating. They had no heatmaps, no session recordings, and no way to know where people were dropping off. Their GA4 was set up by a developer who had since left the company and nobody was confident the data was accurate.",
    whatWeDid: [
      "Audited and rebuilt their GA4 — fixing 6 critical tracking errors and setting up funnel visualization from landing page to activated user",
      "Installed Hotjar for heatmaps and session recordings — identified that 61% of visitors never scrolled past the hero section on the homepage",
      "Used our AI Hypothesis Engine to analyze session recordings and generate 14 ranked test hypotheses — prioritized by predicted conversion impact",
      "Ran the highest-priority test: replaced a feature-focused hero headline with an outcome-focused one targeting US mid-market companies. Ran for 3 weeks.",
      "Rebuilt the free trial signup flow — reduced from 4 steps to 1 step with Google OAuth",
      "Created a dedicated landing page for their top organic keyword (customer segmentation software) that matched search intent more closely than the homepage",
    ],
    results: [
      { stat: "71%", label: "lift in free trial signups" },
      { stat: "1.2%", label: "→ 2.05% homepage conversion rate" },
      { stat: "61%", label: "more users reaching the signup form" },
      { stat: "34%", label: "improvement in trial-to-activation rate" },
      { stat: "$127K", label: "projected annual revenue impact" },
      { stat: "3 months", label: "to full results" },
    ],
    description: "Based in Canada, BirdseyePost is an advertising and analytics platform.",
  },
  {
    id: "legal-tech",
    client: "FirmPilot",
    industry: "Legal Tech SaaS",
    location: "Miami, FL",
    companySize: "Series A — 32 employees",
    arr: "$3.1M ARR",
    slug: "/case-studies/firmpilot-legaltech",
    tag: "Paid Advertising",
    tagColor: "pink",
    heroStat: "43",
    heroStatLabel: "qualified meetings in 60 days",
    duration: "5 months",
    services: ["Paid Advertising", "Conversion Rate Optimization"],
    challenge:
      "FirmPilot sells AI-driven marketing and operations tools to law firms across the US. They had tried Google Ads twice with two different agencies and burned through $40,000 with almost no pipeline to show for it. Their landing pages were sending all paid traffic to the homepage. Their LinkedIn ads were targeting anyone with Legal in their job title — paralegals, legal assistants, law students — instead of the actual buyers with $30K-$100K budget authority. They were ready to give up on paid media entirely.",
    whatWeDid: [
      "Rebuilt LinkedIn campaign structure from scratch — hyper-targeted to General Counsels, VPs of Legal, and Legal Operations Managers at US companies with 200–2000 employees",
      "Created three separate ad creative tracks: one for in-house legal teams worried about contract risk, one focused on time savings (avg 15 hrs/week), one focused on compliance",
      "Built four dedicated landing pages — one per buyer persona and pain point — each with specific copy, social proof from Fortune 1000 legal teams, and a relevant case study",
      "Set up full-funnel retargeting: demo page visitors got one sequence, pricing page visitors got a different more aggressive sequence with a limited-time offer",
      "Ran A/B tests on the demo request form: shorter form won by 38% in completion rate",
      "Reduced Google Ads spend and refocused it entirely on high-intent keywords (contract management software enterprise, legal ops software, CLM software)",
    ],
    results: [
      { stat: "43", label: "qualified meetings in first 60 days" },
      { stat: "4.8x", label: "return on ad spend (month 4)" },
      { stat: "38%", label: "higher form completion after A/B test" },
      { stat: "$18K", label: "monthly spend generating $86K pipeline" },
      { stat: "$412K", label: "total pipeline generated in 5 months" },
      { stat: "5 months", label: "to full results" },
    ],
    description: "FirmPilot has built an AI-driven marketing and operations engine specifically for law firms.",
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
