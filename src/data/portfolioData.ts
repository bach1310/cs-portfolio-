export interface ImpactMetric {
  value: string;
  label: string;
  subtext: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Web Dev" | "AI / ML" | "Algorithms" | "Systems";
  oneLiner: string;
  problemStatement: string;
  solution: string;
  metrics: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface HonorItem {
  title: string;
  category: "Academic" | "Leadership" | "Athletics";
  roleOrAward: string;
  organization: string;
  year: string;
  description: string;
  highlightNumber?: string;
}

export const portfolioData = {
  personalInfo: {
    name: "Bach Pham",
    preferredName: "Bach",
    role: "Full-Stack & AI Builder • Aspiring CS Major",
    school: "Le Quy Don High School for the Gifted",
    track: "Gifted Track, Class of 2027",
    location: "Da Nang, Vietnam",
    bioHook:
      "High school developer and co-founder of SAT Solo. Building full-stack systems and LLM-powered educational platforms that democratize test preparation for Vietnamese students.",
    email: "phhb13102009@gmail.com",
    phone: "+84 564 421 392",
    website: "https://satsolo.com",
    github: "https://github.com/bach1310",
    linkedin: "https://linkedin.com",
    resumeUrl: "#",
  },

  // KEY NUMBERS / ACHIEVEMENTS BANNER (Admissions Impact Counters)
  impactMetrics: [
    {
      value: "1540",
      label: "SAT Score",
      subtext: "Math 800/800 • EBRW 740",
    },
    {
      value: "800+",
      label: "SAT Solo Students",
      subtext: "Across 10 cities in Vietnam",
    },
    {
      value: "1M+",
      label: "Social Media Reach",
      subtext: "Educational content views",
    },
    {
      value: "100%",
      label: "750+ SAT Math Rate",
      subtext: "15/15 tutored students (5 perfect 800s)",
    },
  ] as ImpactMetric[],

  academicProfile: [
    { label: "GPA (Grade 10 & 11)", value: "9.3 – 9.4 / 10.0", detail: "Gifted Track • Le Quy Don" },
    { label: "SAT Standardized", value: "1540", detail: "Math: 800 (Top 1%) | EBRW: 740" },
    { label: "Advanced Placement", value: "AP Calc AB (4) • AP Stats (4)", detail: "College-level Math & Data" },
    { label: "Mentoring Hours", value: "200+ Hours", detail: "1-on-1 Personalized Tutoring" },
  ],

  skills: [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript"],
    },
    {
      category: "Frameworks & Databases",
      skills: ["Next.js (App Router)", "React", "Supabase", "Tailwind CSS"],
    },
    {
      category: "AI / ML & Developer Tools",
      skills: ["Claude API", "Claude Code", "LLM Prompt Engineering", "Git & GitHub", "AI Tutoring Architectures"],
    },
    {
      category: "Languages Spoken",
      skills: ["Vietnamese (Native)", "English (Professional / SAT 1540)"],
    },
  ],

  projects: [
    {
      id: "sat-solo",
      title: "SAT Solo (satsolo.com) — AI-Powered SAT Learning Platform",
      category: "AI / ML",
      oneLiner: "Free full-stack test prep platform serving 800+ registered students across Vietnam.",
      problemStatement:
        "High quality SAT prep courses in Vietnam typically cost ~3,000,000 VND/month, creating a steep financial barrier for talented public school students.",
      solution:
        "Engineered an automated Next.js + Supabase platform featuring an AI tutor via the Claude API for step-by-step reasoning, an automated Error Log detecting weaknesses across 3 attempts, and 'Solo'—a real-time 1,000–1,600 ELO rating competitive practice mode.",
      metrics: [
        "800+ Active Users",
        "1M+ Media Views",
        "10 Cities Reached",
        "50+ Scored 1400+, 20+ Scored 1500+",
      ],
      techStack: ["Next.js", "React", "Supabase", "Claude API", "Tailwind CSS"],
      liveUrl: "https://satsolo.com",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "vibe-coding-workshops",
      title: "Young Creation Club AI & Chatbot Workshops",
      category: "Web Dev",
      oneLiner: "Interactive curriculum and software projects for 20+ student engineers.",
      problemStatement:
        "High school coding clubs often struggle to bridge fundamental syntax with modern AI-accelerated development workflows.",
      solution:
        "Designed and led hands-on 'Vibe Coding' seminars using SAT Solo as a production case study, instructing 20+ peers in prompt architecture, API routing, and version control.",
      metrics: ["15-Member Tech Dept", "20+ Trainees", "3 Club Projects/Semester"],
      techStack: ["Claude Code", "Git", "API Integration", "Python"],
      featured: true,
    },
  ] as Project[],

  honorsAndLeadership: [
    {
      title: "Head of Technical Department",
      category: "Leadership",
      roleOrAward: "Lead 15 engineers • Project Delivery & Code Review",
      organization: "Young Creation Club — Le Quy Don High School for the Gifted",
      year: "2025 – Present",
      description:
        "Direct software roadmaps for 3 club projects per semester. Taught 20+ members chatbot architecture and LLM integration, resulting in 3 independent AI student deployments.",
      highlightNumber: "15 Engineers Led",
    },
    {
      title: "Founder & Lead SAT Math Tutor",
      category: "Leadership",
      roleOrAward: "200+ Teaching Hours • Diagnostic-Driven Curriculum",
      organization: "Independent SAT Tutoring Initiative",
      year: "2025 – Present",
      description:
        "Formulated data-driven study plans based on student diagnostics. Mentored 15 students to achieve 750+ on SAT Math (including 5 perfect 800 scores). Synthesized practice question banks that seeded SAT Solo.",
      highlightNumber: "100% scored 750+ Math",
    },
    {
      title: "Da Nang City Physics Competition",
      category: "Academic",
      roleOrAward: "Third Prize (Top tier out of 300 competitors)",
      organization: "Da Nang Department of Education and Training",
      year: "Grade 9",
      description:
        "Rigorous citywide examination testing classical mechanics, thermodynamics, and analytical problem solving.",
      highlightNumber: "Top 300",
    },
    {
      title: "Le Quy Don STEM Competition",
      category: "Academic",
      roleOrAward: "Third Prize",
      organization: "Le Quy Don High School for the Gifted",
      year: "Grade 11",
      description:
        "Designed and presented an applied scientific/technical prototype evaluated by faculty advisors.",
      highlightNumber: "Top Project",
    },
    {
      title: "Da Nang City U18 Pickleball & School Football",
      category: "Athletics",
      roleOrAward: "3rd Place Citywide (Pickleball) • Core Squad (Football)",
      organization: "Da Nang City Tournament / School Athletic Department",
      year: "2025",
      description:
        "Demonstrated athletic teamwork and resilience. Co-organized the annual Super League tournament for 15+ teams with 10 volunteers.",
      highlightNumber: "3rd Place City",
    },
  ] as HonorItem[],
};
