export interface HonorAward {
  id: string;
  year: string;
  scope: string; // "Global Honor" | "National Honor" | "City Honor" | "School Honor" | "Standardized Test"
  title: string;
  subtitle: string;
  organization: string;
  description: string;
  tag?: string;
  /** Path to real evidence image, e.g. "/evidence/sat.jpg". Omit if unavailable. */
  evidence?: string;
}

export interface HighlightItem {
  index: string;
  category?: string;
  metric?: string;
  title: string;
  detail: string;
  href: string;
}

export interface LeadershipItem {
  year: string;
  role: string;
  title: string;
  organization: string;
  scope: string;
  description: string;
  metrics: string;
  /** Real evidence file paths (optional). */
  evidence?: string[];
}

export interface CapabilityItem {
  index: string;
  title: string;
  description: string;
  skills: string[];
  validatedIn: {
    name: string;
    href: string;
  }[];
}

export const portfolioData = {
  personalInfo: {
    name: "Bach Pham",
    fullName: "Bach Pham",
    displayName: "Bach Pham",
    eyebrow: "Computer Science & AI Engineering Portfolio · Da Nang, Vietnam",
    title: "Computing · Full-Stack Systems · Educational AI",
    bio: "Building full-stack platforms, automated reasoning engines, and LLM-assisted systems that democratize standardized education for Vietnamese students.",
    school: "Le Quy Don High School for the Gifted",
    focus: "Computer Science & AI Systems",
    standing: "Gifted Track, Class of 2027",
    location: "Da Nang, Vietnam",
    email: "phhb13102009@gmail.com",
    phone: "+84 564 421 392",
    website: "https://satsolo.com",
    github: "https://github.com/bach1310",
    linkedin: "https://linkedin.com",
  },

  heroHighlights: [
    {
      index: "01",
      category: "Academic Standard",
      metric: "1540",
      title: "SAT 1540 (Math 800/800 Perfect)",
      detail: "Top 1% Worldwide · EBRW 740 · Math 800",
      href: "#honors",
    },
    {
      index: "02",
      category: "Production System",
      metric: "800+",
      title: "SAT Solo (satsolo.com) Lead Dev",
      detail: "800+ registered students across 10 cities",
      href: "#work",
    },
    {
      index: "03",
      category: "Educational Reach",
      metric: "1M+",
      title: "1M+ Social Media Views",
      detail: "Free SAT educational content ecosystem",
      href: "#work",
    },
    {
      index: "04",
      category: "Technical Leadership",
      metric: "15",
      title: "Head of Tech · Young Creation Club",
      detail: "15 engineers led · 3 club projects / semester",
      href: "#leadership",
    },
  ] as HighlightItem[],

  // 01 / Academic honors & awards
  honors: [
    {
      id: "sat",
      year: "2025",
      scope: "Standardized Test",
      title: "SAT 1540 (Math 800, EBRW 740)",
      subtitle: "College Board · Worldwide Standardized Examination",
      organization: "College Board",
      description: "Achieved a perfect 800 score on SAT Math. Placed in the top 1% globally among millions of test takers.",
      tag: "Top 1% Worldwide",
      evidence: "/evidence/sat.pdf",
    },
    {
      id: "physics-city",
      year: "2024",
      scope: "City Honor",
      title: "Da Nang City Excellent Student Competition (Physics)",
      subtitle: "Third Prize · Grade 9 City Olympiad · 300 competitors",
      organization: "Da Nang Department of Education & Training",
      description: "Rigorous specialized physics competition assessing classical mechanics, thermodynamics, and analytical problem-solving.",
      tag: "Third Prize City",
      evidence: "/evidence/physics-city.jpg",
    },
    {
      id: "ap-scores",
      year: "2025",
      scope: "Advanced Placement",
      title: "AP Calculus AB (4) & AP Statistics (4)",
      subtitle: "College Board · University-level Mathematics & Data",
      organization: "College Board",
      description: "Demonstrated advanced proficiency in differential/integral calculus, statistical modeling, inference, and probability distributions.",
      tag: "College-Level Math",
      evidence: "/evidence/ap-scores.pdf",
    },
    {
      id: "stem-school",
      year: "2025",
      scope: "School Honor",
      title: "School STEM & Innovation Competition",
      subtitle: "Third Prize · Le Quy Don High School for the Gifted",
      organization: "Le Quy Don High School for the Gifted",
      description: "Engineered and presented an applied scientific/technical project evaluated by faculty and external engineering advisors.",
      tag: "Third Prize School",
      evidence: "/evidence/stem-school.jpg",
    },
    {
      id: "gpa-grade-11",
      year: "2025–2026",
      scope: "Academic Performance",
      title: "GPA 9.4/10",
      subtitle: "Le Quy Don High School for the Gifted · Academic Year 2025–2026",
      organization: "Le Quy Don High School for the Gifted",
      description: "Sustained a 9.4/10 grade point average across the 2025–2026 academic year at a specialized school for gifted students.",
      tag: "GPA 9.4/10",
      evidence: "/evidence/gpa-grade-11.jpg",
    },
  ] as HonorAward[],

  // 02 / Featured engineering project (SAT Solo Dossier)
  flagshipProject: {
    sectionNum: "02",
    badge: "Featured engineering project · AI & Full-Stack",
    title: "SAT Solo: AI-Powered Standardized Test Platform",
    subtitle: "Independent educational platform developed through Next.js, Supabase, and Claude API integration for 800+ students.",
    status: "Flagship Build · satsolo.com · Live in Production",
    liveUrl: "https://satsolo.com",
    githubUrl: "https://github.com/bach1310",
    evidence: {
      platform: "/evidence/satsolo-platform.jpg",
      social: "/evidence/satsolo-social-video.jpg",
    },
    dossier: {
      problem:
        "Commercial SAT prep courses in Vietnam typically cost ~3,000,000 VND/month, creating a steep financial barrier for talented students in public high schools.",
      product:
        "A full-stack web application combining official 2023–2026 Digital SAT practice sets, vocabulary trainers, an intelligent AI tutor via the Claude API, an automated 3-attempt weakness diagnostic engine, and 'Solo'—a head-to-head 1,000–1,600 ELO rating competitive arena.",
      results:
        "Adopted by 800+ registered students across 10 Vietnamese cities. Over 1,000,000 total views across TikTok, Facebook, Instagram, and Threads. In a post-test survey of 100 users, 50 reported SAT scores of 1400+ and 20 reported 1500+.",
      ownership:
        "Co-Founder & Lead Developer: Architected 100% of the Next.js App Router codebase, configured Supabase PostgreSQL relational schemas, tuned LLM system prompts for pedagogical accuracy, and built the real-time matchmaking rating system.",
    },
    pipeline: [
      { step: "01", name: "Question Bank & Ingestion", desc: "Digital SAT questions (2023–2026) indexed by skill taxonomy" },
      { step: "02", name: "Claude API Reasoning", desc: "LLM parses query context and generates adaptive step-by-step logic" },
      { step: "03", name: "Automated Error Log", desc: "Flags recurring weaknesses across 3 logged diagnostic attempts" },
      { step: "04", name: "Competitive 'Solo' Mode", desc: "1,000–1,600 ELO rating system drives gamified peer practice" },
    ],
    techStack: ["Next.js (App Router)", "React", "TypeScript", "Supabase", "Claude API", "Tailwind CSS"],
  },

  // 03 / Leadership & extracurricular activities
  leadershipGroups: [
    {
      groupTitle: "Group 01",
      categoryName: "Technical & Team Leadership",
      subtext: "Accountability in student engineering roadmaps & AI workshop mentorship",
      items: [
        {
          year: "2025 – Present",
          role: "Head of Technical Department",
          title: "Young Creation Club (Le Quy Don High School for the Gifted)",
          organization: "Le Quy Don High School for the Gifted",
          scope: "15-member student engineering team",
          description:
            "Lead software project planning, code reviews, and delivery of 3 club software projects per semester. Designed and led hands-on 'Vibe Coding' workshops for 20+ participants on AI-assisted application development, resulting in 3 junior members launching independent AI tools.",
          metrics: "15 Engineers Led · 20+ Workshop Trainees",
          evidence: ["/evidence/ycc-team.jpg", "/evidence/ycc-robot-demo.jpg"],
        },
      ],
    },
    {
      groupTitle: "Group 02",
      categoryName: "Community Stewardship & Teaching",
      subtext: "Personalized academic mentorship and athletic event management",
      items: [
        {
          year: "2025 – Present",
          role: "Founder & Lead SAT Math Tutor",
          title: "Independent SAT Tutoring Initiative",
          organization: "Community Tutoring Program, Da Nang",
          scope: "15 high school mentees · 200+ instruction hours",
          description:
            "Delivered 200+ hours of 1-on-1 instruction using personalized study schedules derived from diagnostic test logs. 100% of students achieved 750+ on SAT Math (including 5 perfect 800s). Curated scattered test materials into a centralized question bank that later seeded SAT Solo.",
          metrics: "200+ Hours · 100% 750+ Math (5 Perfect 800s)",
        },
        {
          year: "2025 – Present",
          role: "Core Squad Player & Event Organizer",
          title: "School Football Club (Le Quy Don High School for the Gifted)",
          organization: "Le Quy Don High School for the Gifted",
          scope: "15+ High school teams · 10 tournament volunteers",
          description:
            "Selected for the core football squad representing Le Quy Don at the Da Nang City tournament. Co-organized the annual Super League tournament for 15+ student teams, managing match operations, equipment logistics, and referee communications.",
          metrics: "15+ Teams Managed · City Tournament Player",
        },
      ],
    },
  ] as {
    groupTitle: string;
    categoryName: string;
    subtext: string;
    items: (LeadershipItem & { evidence?: string[] })[];
  }[],

  // 04 / Capabilities, connected to evidence
  capabilities: [
    {
      index: "01",
      title: "Full-Stack Web Systems",
      description:
        "Build scalable web applications that connect responsive interfaces, database schemas, real-time states, and cloud deployments.",
      skills: ["TypeScript", "Next.js (App Router)", "React", "Supabase", "Tailwind CSS"],
      validatedIn: [{ name: "SAT Solo (satsolo.com)", href: "https://satsolo.com" }],
    },
    {
      index: "02",
      title: "AI & LLM Integration",
      description:
        "Architect AI-assisted workflows, parse unstructured queries, design prompt chains, and construct educational tutoring systems.",
      skills: ["Claude API", "Claude Code", "Prompt Engineering", "Python", "API Routing"],
      validatedIn: [{ name: "SAT Solo AI Tutor", href: "https://satsolo.com" }],
    },
    {
      index: "03",
      title: "Mathematical & Algorithmic Problem Solving",
      description:
        "Apply discrete mathematics, analytical calculus, and probability modeling to software systems and competitive benchmark tests.",
      skills: ["SAT Math 800", "AP Calculus AB", "AP Statistics", "Analytical Mechanics"],
      validatedIn: [{ name: "SAT 1540 (Math 800)", href: "#honors" }],
    },
    {
      index: "04",
      title: "Engineering Leadership & Mentorship",
      description:
        "Direct software roadmaps, conduct code reviews, teach AI-accelerated workflows, and manage cross-functional student initiatives.",
      skills: ["Git Collaboration", "Workshop Instruction", "Code Review", "Event Operations"],
      validatedIn: [{ name: "Young Creation Club", href: "#leadership" }],
    },
  ] as CapabilityItem[],

  // 05 / Education & selected programs
  education: {
    institution: "Le Quy Don High School for the Gifted",
    location: "Da Nang, Vietnam",
    standing: "Gifted Track, Class of 2027",
    gpa: "GPA: 9.3 / 10.0 (Grade 10) · 9.4 / 10.0 (Grade 11)",
    standardized: "SAT 1540 (Math 800, EBRW 740) · AP Calc AB (4) · AP Stats (4)",
    coursework: ["Physics", "Advanced Mathematics", "Statistics", "Computer Science"],
  },
};
