/**
 * Single source of truth for every word on the site.
 *
 * Facts, roles, dates and metrics come from Navneet_Shende_CSE.pdf.
 * Where copy explains *how* a class of problem is usually approached
 * (rather than what is on record), the item is marked `basis: "method"`
 * so the UI can show the difference honestly.
 */

export type Basis = "record" | "method";

export const person = {
  name: "Navneet Shende",
  role: "Technical Account Manager",
  specialties: "Customer Success Engineer · Production Troubleshooting · API Integrations",
  location: "Dubai, United Arab Emirates",
  locationShort: "Dubai, UAE",
  email: "social.iamnavneet@gmail.com",
  linkedin: "https://www.linkedin.com/in/navneet-s-2a69a91a9",
  linkedinLabel: "linkedin.com/in/navneet-s-2a69a91a9",
  heroPhoto: "/images/navneet-hero.jpg",
  /**
   * Set to "/images/navneet-about.jpg" once that file exists in /public.
   * While it is null the About section shows a designed profile card instead.
   */
  aboutPhoto: null as string | null,
};

export const hero = {
  headline:
    "I solve the technical problems that stand between customers and the outcomes they expect.",
  lede:
    "I work where enterprise customer success meets engineering: turning production incidents, complex integrations and confusing platform behaviour into clear answers, reliable fixes and results customers can measure.",
  stance:
    "I own a problem from the first report to the verified fix. I dig until the evidence points to a cause, tell customers plainly what happened, and check that things actually got better.",
  method: [
    { label: "Reproduce", detail: "Confirm the behaviour the customer reported" },
    { label: "Trace", detail: "Follow it through logs, traffic and queries" },
    { label: "Isolate", detail: "Separate user error from a real defect" },
    { label: "Escalate", detail: "Hand engineering the evidence, not a hunch" },
    { label: "Verify", detail: "Measure the outcome after the fix" },
  ],
  methodFootnote: "~2 hr average resolution across 500+ P1/P2 incidents in a year",
};

export type Logo = {
  name: string;
  src: string;
  /** Intrinsic aspect ratio (width / height) of the artwork */
  ratio: number;
  /** Optical height in px. Tuned per mark so wordmarks and emblems feel equal. */
  height: number;
};

/** Order follows the brief. Files are official artwork stored locally in /public/logos. */
export const logos: Logo[] = [
  { name: "e&", src: "/logos/eand.svg", ratio: 530.26 / 493.52, height: 40 },
  { name: "Smiles", src: "/logos/smiles.svg", ratio: 102 / 32, height: 30 },
  { name: "AppICE", src: "/logos/appice.png", ratio: 720 / 249, height: 30 },
  { name: "GIB (Gulf International Bank)", src: "/logos/gib.svg", ratio: 300 / 212.55, height: 42 },
  { name: "NFL", src: "/logos/nfl.svg", ratio: 178.52 / 245.94, height: 46 },
  { name: "Acquia", src: "/logos/acquia.svg", ratio: 112 / 24, height: 24 },
  { name: "Bayer", src: "/logos/bayer.svg", ratio: 1, height: 46 },
  { name: "Johnson & Johnson", src: "/logos/johnson-and-johnson.svg", ratio: 576.77 / 53.67, height: 17 },
  { name: "Accenture", src: "/logos/accenture.svg", ratio: 203.91 / 56.09, height: 30 },
];

export const about = {
  paragraphs: [
    "I’m a technical, customer-facing engineer who enjoys getting to the bottom of difficult problems. My work spans enterprise support, API and SDK integrations, production troubleshooting, incident ownership and customer success.",
    "I don’t stop at naming the error. I work out what happened, trace it to the underlying cause, give engineering the evidence they need to fix it, and explain the impact in terms the customer can act on.",
    "Good customer success takes more than a fast reply. It takes technical depth, sound judgement and ownership, and the patience to turn a frustrating incident into a better experience and a more reliable platform.",
  ],
  learning:
    "I learn best by following a problem one layer further than the ticket requires. The same curiosity sits behind my master’s in cybersecurity and the small things I build with LLM APIs: I like to understand how a system works before I trust it with a customer.",
  facts: [
    { term: "Based in", detail: "Dubai, United Arab Emirates" },
    { term: "MS, Cybersecurity", detail: "Distinction, Middlesex University Dubai" },
    { term: "BCA, Computer Science", detail: "Distinction, BMCC, Pune, India" },
    { term: "Certifications", detail: "Cisco Endpoint Security; Oracle Cloud Infrastructure Security" },
    { term: "Experience", detail: "5+ years on production platforms for enterprise users" },
  ],
};

/* ------------------------------------------------------------------ */
/* Impact                                                              */
/* ------------------------------------------------------------------ */

export const impact = {
  heading: "Production problems, traced to their source.",
  intro:
    "Five results from my current and previous roles. Each one started as a symptom someone could see and ended with a cause someone could fix.",
  delivery: {
    before: 65,
    after: 90,
    scope: "across ~30 campaigns",
    title: "Push-notification delivery restored",
    body: "Delivery was running at 65%. I correlated CDN, Nginx and SigNoz logs by timestamp, isolated the cause, and delivery recovered to 90%.",
    caseId: "push-delivery",
  },
  incidents: {
    value: "500+",
    unit: "P1/P2 incidents resolved in a year",
    average: "~2 hr average resolution",
    body: "High-priority incidents worked from report to resolution: reproduce the problem, read the logs and application behaviour, check the database, isolate the cause, and escalate true defects to engineering with evidence attached.",
    steps: ["Reproduce", "Logs", "Database", "Root cause", "Escalate"],
    caseId: "incident-rca",
  },
  analytics: {
    value: "~5%",
    unit: "overstatement removed from campaign analytics",
    scope: "1,000+ campaigns affected",
    body: "Concurrent workers in distributed PostgreSQL were writing duplicate rows, inflating reported results. I traced it and drove the engineering fix. Customers decide budgets and targeting from these numbers, so a 5% error is a trust problem, not a rounding problem.",
    caseId: "duplicate-rows",
  },
  security: {
    value: "IDOR",
    unit: "vulnerability found in the e& iOS SDK",
    scope: "SDK associated with 6.5M users",
    body: "Found during API and SDK testing, reported, and tracked through remediation to release. The 6.5M figure describes the user base associated with the SDK. It is not a count of affected or exposed users, and no exploitation is claimed.",
    track: ["Found in testing", "Reported", "Remediation tracked", "Fixed in release"],
    caseId: "idor",
  },
  reporting: {
    value: "2,000+",
    unit: "campaigns covered in monthly performance reporting",
    body: "Each month I report campaign performance and technical findings to e& and Smiles stakeholders, in plain language they can act on.",
  },
};

/* ------------------------------------------------------------------ */
/* Case studies                                                        */
/* ------------------------------------------------------------------ */

export type CaseStep = {
  stage: "Context" | "Signal" | "Investigation" | "Root cause" | "Resolution" | "Outcome" | "Lesson";
  basis: Basis;
  text: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  setting: string;
  summary: string;
  metric: { value: string; label: string };
  stack: string[];
  diagram: "log-correlation" | "duplicate-rows" | "disclosure" | "triage";
  steps: CaseStep[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "push-delivery",
    title: "Restoring push delivery from 65% to 90%",
    setting: "AppICE · e& UAE and Smiles UAE accounts",
    summary:
      "Push notifications were reaching too few devices. The answer wasn’t in any single log, so I built one timeline out of three.",
    metric: { value: "65% → 90%", label: "delivery rate, ~30 campaigns" },
    stack: ["CDN logs", "Nginx", "SigNoz", "Timestamp correlation"],
    diagram: "log-correlation",
    steps: [
      {
        stage: "Context",
        basis: "record",
        text: "Push notifications are one of the channels campaigns run through on the AppICE platform, which I support as Technical Account Manager for the e& UAE and Smiles UAE accounts.",
      },
      {
        stage: "Signal",
        basis: "record",
        text: "Across roughly 30 campaigns, push delivery was running at about 65%.",
      },
      {
        stage: "Investigation",
        basis: "record",
        text: "I correlated CDN, Nginx and SigNoz logs by timestamp to isolate the cause.",
      },
      {
        stage: "Investigation",
        basis: "method",
        text: "Each layer only sees its own slice of the request. Lining them up on a shared clock shows where a request that should have continued simply stops, which no single dashboard shows on its own.",
      },
      {
        stage: "Root cause",
        basis: "record",
        text: "The correlated timeline isolated the cause of the lost deliveries. The specifics are internal to the platform, so I don’t publish them here.",
      },
      {
        stage: "Outcome",
        basis: "record",
        text: "Delivery recovered from 65% to 90% across the affected campaigns.",
      },
      {
        stage: "Lesson",
        basis: "method",
        text: "A complaint like “notifications aren’t arriving” is too vague to fix. Turning it into one timestamped path through the system makes it specific enough for engineering to act on.",
      },
    ],
  },
  {
    id: "duplicate-rows",
    title: "A distributed database defect behind inaccurate campaign reporting",
    setting: "AppICE · campaign analytics",
    summary:
      "Reported campaign results were about 5% higher than reality. The cause was two workers doing the same job at the same time.",
    metric: { value: "~5%", label: "overstatement corrected, 1,000+ campaigns" },
    stack: ["Distributed PostgreSQL", "SQL", "Concurrent worker processing"],
    diagram: "duplicate-rows",
    steps: [
      {
        stage: "Context",
        basis: "method",
        text: "Campaign analytics are how customer stakeholders judge whether a campaign worked, and what they plan the next one from.",
      },
      {
        stage: "Signal",
        basis: "record",
        text: "Campaign analytics were overstated by roughly 5%, across more than 1,000 campaigns.",
      },
      {
        stage: "Investigation",
        basis: "method",
        text: "Inflated counts call for proving duplication before theorising about it: query for repeated records that should be unique, then work out which process wrote each copy and when.",
      },
      {
        stage: "Root cause",
        basis: "record",
        text: "A duplicate-row bug: concurrent worker processing in distributed PostgreSQL let the same work be recorded more than once.",
      },
      {
        stage: "Resolution",
        basis: "record",
        text: "I traced the defect to that concurrency path and drove the fix with engineering.",
      },
      {
        stage: "Outcome",
        basis: "record",
        text: "Campaign analytics were corrected, removing the ~5% overstatement across 1,000+ campaigns.",
      },
      {
        stage: "Lesson",
        basis: "method",
        text: "Customers make spend and targeting decisions from these numbers. When the numbers are wrong, the customer is the last to find out and the first to be affected, so accurate metrics are part of earning their trust.",
      },
    ],
  },
  {
    id: "idor",
    title: "Finding an IDOR vulnerability and seeing it through to release",
    setting: "AppICE · e& iOS SDK",
    summary:
      "An access-control flaw surfaced during routine API and SDK testing. I reported it and stayed with it until the fix shipped.",
    metric: { value: "6.5M", label: "users associated with the SDK" },
    stack: ["iOS SDK testing", "REST API testing", "Authorization checks"],
    diagram: "disclosure",
    steps: [
      {
        stage: "Context",
        basis: "record",
        text: "The e& iOS SDK is associated with a user base of about 6.5 million. Testing SDK integrations and the APIs behind them is part of my role.",
      },
      {
        stage: "Signal",
        basis: "record",
        text: "The issue surfaced during API and SDK testing rather than through an incident.",
      },
      {
        stage: "Investigation",
        basis: "method",
        text: "IDOR testing asks one question of every request: does the server check that this user is allowed to access this specific object, or does it trust the identifier it was sent?",
      },
      {
        stage: "Root cause",
        basis: "record",
        text: "An insecure direct object reference (IDOR) in the e& iOS SDK. Implementation details are withheld deliberately.",
      },
      {
        stage: "Resolution",
        basis: "record",
        text: "I reported the vulnerability and tracked remediation through to a release containing the fix.",
      },
      {
        stage: "Outcome",
        basis: "record",
        text: "The vulnerability was closed in a shipped release. I make no claim that it was exploited; 6.5M describes the user base, not affected users.",
      },
      {
        stage: "Lesson",
        basis: "method",
        text: "Integration testing is also security testing. Responsible disclosure means reporting privately, giving engineering clear evidence, and following through until users actually have the fix.",
      },
    ],
  },
  {
    id: "incident-rca",
    title: "Resolving enterprise P1/P2 incidents through evidence-based root-cause analysis",
    setting: "AppICE and Acquia · enterprise support",
    summary:
      "Hundreds of high-priority incidents a year, worked the same way every time: prove what is happening before deciding what to do about it.",
    metric: { value: "500+", label: "P1/P2 incidents in a year, ~2 hr average" },
    stack: ["Nginx", "SigNoz", "New Relic", "Sumo Logic", "HTTP 4xx/5xx", "SQL"],
    diagram: "triage",
    steps: [
      {
        stage: "Context",
        basis: "record",
        text: "At Acquia I provided 24/7 enterprise support in SLA-driven environments. At AppICE I work production incidents for the enterprise accounts I manage, alongside the engineering team.",
      },
      {
        stage: "Signal",
        basis: "record",
        text: "P1/P2 incidents and customer escalations, including failures and performance degradation on live platforms.",
      },
      {
        stage: "Investigation",
        basis: "record",
        text: "Reproduce the issue, then trace it through logs, network traffic and database queries: Nginx and SigNoz at AppICE, New Relic and Sumo Logic at Acquia, with HTTP 4xx/5xx analysis across live and compressed logs.",
      },
      {
        stage: "Root cause",
        basis: "record",
        text: "The deciding question is whether this is user error or configuration, or a real system defect. The evidence settles it, not assumption.",
      },
      {
        stage: "Resolution",
        basis: "record",
        text: "Resolve directly where the fix is in reach; escalate true defects to engineering with the evidence attached.",
      },
      {
        stage: "Outcome",
        basis: "record",
        text: "500+ P1/P2 incidents resolved in a year at an average of about two hours. At Acquia, SOPs and lightweight automation scripts reduced recurring incident volume.",
      },
      {
        stage: "Lesson",
        basis: "method",
        text: "Speed under pressure comes from discipline, not shortcuts. Preserve the evidence, test the obvious explanation first, and write a runbook for the incident you never want to work twice.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Toolkit                                                             */
/* ------------------------------------------------------------------ */

export const workflow = [
  "Triage",
  "Reproduce",
  "Correlate logs",
  "Check the data",
  "Validate the integration",
  "Escalate with evidence",
  "Prevent recurrence",
] as const;

export type WorkflowStage = (typeof workflow)[number];

export type ToolGroup = {
  name: string;
  solves: string;
  tools: string[];
  stages: WorkflowStage[];
};

export const toolGroups: ToolGroup[] = [
  {
    name: "Production debugging and observability",
    solves: "Finding where a live system is failing, how often, and since when.",
    tools: ["Nginx", "SigNoz", "New Relic", "Sumo Logic", "HTTP 4xx/5xx analysis", "Root-cause analysis", "Incident triage", "Runbooks and SOPs"],
    stages: ["Triage", "Correlate logs", "Escalate with evidence", "Prevent recurrence"],
  },
  {
    name: "APIs, integrations and SDKs",
    solves: "Proving whether a request, payload or SDK call behaves the way the integration expects.",
    tools: ["REST APIs", "Postman", "JSON and payload validation", "Webhooks", "Authentication validation", "Android SDK testing", "iOS SDK testing", "Node.js services (Sequelize)"],
    stages: ["Reproduce", "Validate the integration"],
  },
  {
    name: "Data and distributed systems",
    solves: "Checking whether the data agrees with what the customer sees, and finding out why when it doesn’t.",
    tools: ["MongoDB", "PostgreSQL", "Percona", "Citus", "Redis", "SQL", "Data-consistency investigation"],
    stages: ["Check the data", "Escalate with evidence"],
  },
  {
    name: "Infrastructure and security",
    solves: "Understanding the hosts, network traffic and attack surface underneath an application.",
    tools: ["AWS EC2", "AWS S3", "Linux (Ubuntu, CentOS)", "Burp Suite", "Nmap", "Wireshark", "Endpoint and application security"],
    stages: ["Reproduce", "Correlate logs", "Validate the integration"],
  },
  {
    name: "AI and automation",
    solves: "Removing repeat work, so the next incident is shorter than the last.",
    tools: ["Claude API integration", "Prompt engineering", "ElevenLabs", "AI companion app prototype", "Runbooks and workflow automation"],
    stages: ["Prevent recurrence"],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export type Role = {
  title: string;
  employer: string;
  clients?: string[];
  location: string;
  start: string;
  end: string;
  dateTime: [string, string | null];
  points: string[];
};

export const roles: Role[] = [
  {
    title: "Technical Account Manager",
    employer: "AppICE",
    clients: ["e& UAE", "Smiles UAE"],
    location: "Dubai, UAE",
    start: "Aug 2024",
    end: "Present",
    dateTime: ["2024-08", null],
    points: [
      "Technical account management for e& UAE and Smiles UAE, AppICE’s enterprise client accounts.",
      "Resolved 500+ P1/P2 incidents in a year at a ~2 hr average by reproducing issues, tracing root cause across logs and databases, and escalating true defects with evidence.",
      "Restored push-notification delivery from 65% to 90% across ~30 campaigns by correlating CDN, Nginx and SigNoz logs.",
      "Corrected campaign analytics overstated by ~5% across 1,000+ campaigns by tracing a duplicate-row bug in distributed PostgreSQL and driving the fix.",
      "Closed an IDOR vulnerability in the e& iOS SDK by finding it in API and SDK testing, reporting it, and tracking remediation to release.",
      "Caught malformed payloads and auth defects before production by testing campaign-triggering REST APIs and Android/iOS SDK integrations.",
      "Report monthly campaign performance across 2,000+ campaigns to e& and Smiles stakeholders, in plain-language guidance.",
    ],
  },
  {
    title: "Technical Support Engineer",
    employer: "Acquia Inc.",
    location: "India",
    start: "Jan 2023",
    end: "Aug 2024",
    dateTime: ["2023-01", "2024-08"],
    points: [
      "Delivered 24/7 enterprise support in SLA-driven environments, resolving P1/P2 incidents and customer escalations.",
      "Ran root-cause analysis on failures and performance degradation using New Relic and Sumo Logic, and reported findings to stakeholders.",
      "Built SOPs and lightweight automation scripts that reduced recurring incident volume.",
    ],
  },
  {
    title: "Software Engineer",
    employer: "Simplify Healthcare",
    location: "India",
    start: "May 2021",
    end: "Jan 2023",
    dateTime: ["2021-05", "2023-01"],
    points: [
      "Supported secure deployments, API integrations and backend services in HIPAA-compliant environments.",
      "Triaged production issues, tuned performance, automated recurring workflows and maintained SOPs.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Leadership Principles                                               */
/* ------------------------------------------------------------------ */

export type Principle = {
  name: string;
  reading: string;
  /** Present only where the site shows real supporting work. */
  evidence?: { label: string; href: string };
};

export const principlesSource = "https://www.amazon.jobs/content/en/our-workplace/leadership-principles";

export const principles: Principle[] = [
  {
    name: "Customer Obsession",
    reading: "Describe every incident in terms of what the customer can’t do, and close it when that’s fixed, not when the ticket says so.",
    evidence: { label: "Monthly reporting to e& and Smiles", href: "#impact" },
  },
  {
    name: "Ownership",
    reading: "Stay with an issue through investigation, escalation and remediation, including the parts that belong to another team.",
    evidence: { label: "IDOR tracked to release", href: "#idor" },
  },
  {
    name: "Invent and Simplify",
    reading: "Write the runbook or script that makes the next occurrence boring.",
    evidence: { label: "SOPs and automation at Acquia", href: "#experience" },
  },
  {
    name: "Are Right, A Lot",
    reading: "Test the first explanation against logs, payloads and database evidence before repeating it to a customer.",
    evidence: { label: "P1/P2 root-cause analysis", href: "#incident-rca" },
  },
  {
    name: "Learn and Be Curious",
    reading: "Keep going one layer deeper, currently in application security and practical AI integration.",
    evidence: { label: "MS Cybersecurity, AI prototype", href: "#building" },
  },
  {
    name: "Hire and Develop the Best",
    reading: "Make the people around me faster by sharing what an investigation taught me, in documents others can reuse. I haven’t held a hiring or management role; this is how I contribute as a peer.",
  },
  {
    name: "Insist on the Highest Standards",
    reading: "A defect that skews customer numbers by 5% gets fixed at the source, not footnoted in a report.",
    evidence: { label: "Duplicate-row fix", href: "#duplicate-rows" },
  },
  {
    name: "Think Big",
    reading: "Connect a single fix to what it changes for the customer and the platform, so the work is understood beyond the ticket.",
  },
  {
    name: "Bias for Action",
    reading: "Triage quickly, but keep the evidence intact and make changes safely. Speed that destroys the trail just costs time later.",
    evidence: { label: "~2 hr average P1/P2 resolution", href: "#incident-rca" },
  },
  {
    name: "Frugality",
    reading: "Get everything I can out of the logs, queries and tools already in place before asking for anything new.",
    evidence: { label: "Existing logs, correlated", href: "#push-delivery" },
  },
  {
    name: "Earn Trust",
    reading: "Say what’s known, what isn’t, and what happens next. Bring evidence, and don’t overstate it, including on this page.",
  },
  {
    name: "Dive Deep",
    reading: "Follow the problem through APIs, logs, databases and system behaviour until the cause can be shown, not just suspected.",
    evidence: { label: "Three-layer log correlation", href: "#push-delivery" },
  },
  {
    name: "Have Backbone; Disagree and Commit",
    reading: "Raise a concern with evidence, even when it’s inconvenient. Once a decision is made, support it fully.",
  },
  {
    name: "Deliver Results",
    reading: "Measure the outcome after the fix, because a closed ticket isn’t proof that anything got better.",
    evidence: { label: "65% → 90% push delivery", href: "#push-delivery" },
  },
  {
    name: "Strive to be Earth’s Best Employer",
    reading: "Keep incident work sustainable and respectful: clear hand-offs, shared knowledge, and nobody left holding a pager alone.",
  },
  {
    name: "Success and Scale Bring Broad Responsibility",
    reading: "Treat customer data, security findings and reliability as obligations to everyone a platform reaches.",
    evidence: { label: "Responsible disclosure", href: "#idor" },
  },
];

/* ------------------------------------------------------------------ */
/* AI, automation and security                                         */
/* ------------------------------------------------------------------ */

export const building = {
  heading: "Where I’m building next: practical AI and application security",
  intro:
    "Two areas I’m actively developing alongside my core work. One makes support faster, and the other makes platforms safer.",
  tracks: [
    {
      name: "AI and automation",
      items: [
        {
          title: "Claude API integration and prompt engineering",
          status: "Hands-on",
          text: "Building with LLM APIs and learning where they’re reliable enough to trust in a workflow, and where they aren’t.",
        },
        {
          title: "AI companion app",
          status: "Prototype",
          text: "A personal prototype combining the Claude API for conversation with ElevenLabs for voice. A learning project, not a commercial product.",
        },
        {
          title: "Runbooks and workflow automation",
          status: "At work",
          text: "SOPs and lightweight scripts that reduced recurring incident volume at Acquia, plus runbooks that cut repeat issues.",
        },
      ],
    },
    {
      name: "Application security",
      items: [
        {
          title: "API and SDK security testing",
          status: "At work",
          text: "Testing campaign APIs and Android/iOS SDK integrations for payload and auth defects, which is how the e& SDK IDOR was found.",
        },
        {
          title: "Burp Suite, Nmap, Wireshark",
          status: "Hands-on",
          text: "For inspecting requests, mapping exposed services and reading what is actually on the wire.",
        },
        {
          title: "Formal grounding",
          status: "Education",
          text: "MS in Cybersecurity (Distinction), plus Cisco Endpoint Security and Oracle Cloud Infrastructure Security certifications.",
        },
      ],
    },
  ],
};

export const contact = {
  heading: "Have a difficult technical problem? Let’s work through it.",
  body: "I’m interested in roles where technical depth, clear communication and customer ownership make a measurable difference.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Case studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact" },
];
