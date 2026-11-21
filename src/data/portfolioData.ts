export interface PersonaItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  icon: 'shield' | 'video' | 'code';
  highlights: string[];
  focusMetric: string;
}

export interface MetricItem {
  value: string;
  suffix: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  category: string;
  filterKey: 'edtech' | 'agency' | 'ai';
  status: string;
  title: string;
  description: string;
  tags: string[];
  ctaLabel: string;
  actionType: 'venture' | 'client' | 'dataset';
  architecture: string[];
  outcomes: string[];
  year: string;
}

export interface SkillEntry {
  name: string;
  context: string;
}

export interface CapabilityCategory {
  id: string;
  title: string;
  skills: SkillEntry[];
}

export interface RecognitionItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
}

export const PERSONAS: PersonaItem[] = [
  {
    id: 'pmo',
    badge: 'Enterprise PMO',
    title: 'Project Management Officer',
    subtitle: 'PLN ICON PLUS · 2023 — PRESENT',
    summary:
      'Overseeing nation-wide smart grid initiatives, SCADA systems, and Advanced Metering Infrastructure (AMI). Directing project lifecycles, risk registers, and multi-stakeholder governance aligned with ITIL & Agile standards.',
    tags: ['SCADA Deployment', 'AMI Governance', 'Risk Assessment'],
    icon: 'shield',
    focusMetric: '30%+ reduction in cross-division reporting friction',
    highlights: [
      'Directing end-to-end rollout milestones for SCADA & Advanced Metering Infrastructure (AMI) across regional utility grids.',
      'Maintaining executive SLA scorecards, vendor risk registers, and change-control governance under ITILv4 frameworks.',
      'Bridging field engineering squads with executive state stakeholders to guarantee predictable delivery.',
    ],
  },
  {
    id: 'creator',
    badge: 'Edu Tech & Media',
    title: 'IT Edu Tech Creator',
    subtitle: '36.9K+ COMMUNITY REACH · CANVA SQUAD',
    summary:
      'Empowering next-gen tech creators and university students through structured coding tutorials, productivity workflows, and tech career insights. Official Canva Squad Member and active Google Developer Groups (GDG) Speaker.',
    tags: ['Viral Tech Media', 'Public Speaking', 'Dev Community'],
    icon: 'video',
    focusMetric: '36.9K+ learners & 50+ workshops delivered',
    highlights: [
      'Producing high-retention short-form and long-form tech tutorials covering coding, AI workflows, and career navigation.',
      'Official Canva Squad Indonesia Community Lead driving design literacy across campus communities.',
      'Keynote speaker and MC for Google Developer Groups (GDG), university summits, and regional developer events.',
    ],
  },
  {
    id: 'engineer',
    badge: 'Engineering',
    title: 'Informatics Engineering',
    subtitle: 'INSTITUT TEKNOLOGI PLN (IT PLN)',
    summary:
      'Conducting advanced research in Artificial Intelligence & Computer Vision (Convolutional Neural Networks). Architecting production-grade web solutions and mentoring aspiring developers in foundational computer science.',
    tags: ['CNN / Deep Learning', 'Full-Stack Dev', 'System Architecture'],
    icon: 'code',
    focusMetric: 'Applied Deep Learning & Production SaaS Systems',
    highlights: [
      'Researching agricultural pest classification using Convolutional Neural Networks (TensorFlow / Keras) with custom augmentation.',
      'Architecting bespoke Learning Management Systems (LMS) and scalable B2B portals via UCEABLE.',
      'Mentoring informatics undergraduates in algorithms, Python pipelines, and practical full-stack architecture.',
    ],
  },
];

export const METRICS: MetricItem[] = [
  { value: '3', suffix: '+', label: 'Years Enterprise PMO' },
  { value: '36.9K', suffix: '+', label: 'Content Community' },
  { value: '50', suffix: '+', label: 'Tech Events & Workshops' },
  { value: '2', suffix: '+', label: 'Ventures Founded' },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'pln-icon-plus',
    role: 'Project Management Officer (PMO)',
    organization: 'PT PLN Icon Plus (Subholding PLN)',
    period: '2023 — Present',
    bullets: [
      'Managed end-to-end execution of smart energy telecommunication networks, fiber rollout, and AMI smart metering deployment across critical regional assets.',
      'Coordinated cross-functional divisions including engineering, field technicians, vendors, and executive state stakeholders to ensure on-time delivery within SLA.',
      'Instituted digitized tracking systems and risk mitigations, reducing reporting friction by over 30%.',
    ],
    tags: ['Enterprise Governance', 'ITILv4', 'AMI Integration'],
  },
  {
    id: 'kidilent',
    role: 'Co-Founder & Managing Director',
    organization: 'Kidilent · CV. Kids Diverse Talent',
    period: '2021 — Present',
    bullets: [
      'Built an educational technology ecosystem for K-12 students covering visual programming (Scratch), 3D modeling (Tinkercad), robotics, and foundational web design.',
      'Led business development, curriculum design, and operational growth resulting in over 1,500+ students trained nationwide.',
    ],
    tags: ['EdTech Leadership', 'Curriculum Architecture', 'Bootcamps'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'kidilent-platform',
    category: 'VENTURE / EDTECH',
    filterKey: 'edtech',
    status: 'LIVE PRODUCT',
    title: 'Kidilent (Kids Diverse Talent)',
    description:
      'Next-generation coding & computational thinking academy for young students. Designed self-paced modules, live mentorship cohorts, and gamified project assessments in Scratch and Python.',
    tags: ['Education Technology', 'Scratch & Python', '1.5K+ Alumni'],
    ctaLabel: 'VIEW VENTURE DETAILS',
    actionType: 'venture',
    year: '2021 — Present',
    architecture: [
      'Modular K-12 STEM Curriculum Engine (Scratch, Tinkercad 3D, Robotics, Python)',
      'Cohort-based mentor evaluation & rubric assessment workflow',
      'Gamified student milestone showcase & parent progress reporting',
    ],
    outcomes: [
      '1,500+ young learners trained across Indonesia',
      'Multi-school partnership workshops and seasonal coding bootcamps',
      'Established sustainable operational playbook under CV. Kids Diverse Talent',
    ],
  },
  {
    id: 'uceable-agency',
    category: 'SOFTWARE AGENCY',
    filterKey: 'agency',
    status: 'CLIENT SOLUTIONS',
    title: 'UCEABLE (UCE Absolute Tech)',
    description:
      'Software development firm crafting tailored enterprise solutions, including LMS platforms like Learntera and online learning portals such as Active Mandarin.',
    tags: ['Web Architecture', 'LMS Implementation', 'B2B SaaS'],
    ctaLabel: 'EXPLORE CLIENT WORK',
    actionType: 'client',
    year: '2022 — Present',
    architecture: [
      'Custom React / TypeScript frontends with modular REST API layers',
      'Role-based LMS portals (Learntera & Active Mandarin) with progress tracking',
      'Firebase / SQL cloud persistence with automated deployment pipelines',
    ],
    outcomes: [
      'Delivered Learntera enterprise learning portal for structured upskilling',
      'Built Active Mandarin digital classroom & student management interface',
      'End-to-end delivery from UI/UX wireframes to production SLA handoff',
    ],
  },
  {
    id: 'cnn-pest-classifier',
    category: 'AI RESEARCH & VISION',
    filterKey: 'ai',
    status: 'ALGORITHM',
    title: 'CNN Agricultural Pest Classifier',
    description:
      'Deep Learning computer vision system utilizing Convolutional Neural Networks (CNN) with customized image preprocessing and augmentation to detect crop pests with high precision.',
    tags: ['Computer Vision', 'TensorFlow/Keras', 'Research Paper'],
    ctaLabel: 'GET DATASET & CODE',
    actionType: 'dataset',
    year: '2024 — 2025',
    architecture: [
      'Multi-layer Convolutional Neural Network implemented in TensorFlow & Keras',
      'Automated image normalization, rotation/flip augmentation, and train-val-test split',
      'Confusion matrix diagnostics, precision/recall telemetry, and loss curve plotting',
    ],
    outcomes: [
      'High-accuracy multi-class classification across labeled agricultural pest species',
      'Packaged as an academic-ready Jupyter Notebook & curated dataset bundle',
      'Adopted by Informatics students as a clean reference baseline for CV theses',
    ],
  },
];

export const CAPABILITY_CATEGORIES: CapabilityCategory[] = [
  {
    id: 'pm-governance',
    title: 'PM & Enterprise Governance',
    skills: [
      {
        name: 'Notion Workspace',
        context: 'Centralized PMO knowledge bases, sprint boards, and multi-vendor milestone trackers.',
      },
      {
        name: 'Trello Agile',
        context: 'Lightweight Kanban execution for rapid content production and engineering sprints.',
      },
      {
        name: 'MS Project',
        context: 'Critical path scheduling, Gantt baselines, and resource allocation for grid rollouts.',
      },
      {
        name: 'ITIL Fundamentals',
        context: 'Incident escalation, change advisory governance, and enterprise service delivery.',
      },
      {
        name: 'Risk Management',
        context: 'Proactive risk registers and mitigation playbooks for regional SCADA/AMI deployments.',
      },
      {
        name: 'SLA Monitoring',
        context: 'Automated KPI tracking ensuring vendor and field operations stay within target SLAs.',
      },
      {
        name: 'Stakeholder Alignment',
        context: 'Executive reporting bridging technical squads, vendors, and state utility leadership.',
      },
    ],
  },
  {
    id: 'software-ai',
    title: 'Software & AI Systems',
    skills: [
      {
        name: 'Python 3',
        context: 'Data preprocessing pipelines, automation scripts, and machine learning experimentation.',
      },
      {
        name: 'TensorFlow / CNN',
        context: 'Convolutional Neural Networks for agricultural computer vision classification.',
      },
      {
        name: 'JavaScript / React',
        context: 'Component-driven web interfaces and interactive LMS portals for client ventures.',
      },
      {
        name: 'Tailwind CSS',
        context: 'Rapid, responsive design systems with high-contrast dark mode and glassmorphism.',
      },
      {
        name: 'Git & GitHub',
        context: 'Branching workflows, code reviews, and collaborative release management.',
      },
      {
        name: 'REST APIs',
        context: 'Structured backend-frontend integration for SaaS dashboards and learning platforms.',
      },
      {
        name: 'SQL & Firebase',
        context: 'Relational modeling and real-time NoSQL cloud persistence for web applications.',
      },
    ],
  },
  {
    id: 'media-delivery',
    title: 'Media & Public Delivery',
    skills: [
      {
        name: 'CapCut Video Production',
        context: 'High-retention editing, pacing, and motion captions for 36.9K+ tech followers.',
      },
      {
        name: 'Canva Verified Creator',
        context: 'Official Canva Squad templates, educational carousels, and community visual kits.',
      },
      {
        name: 'Figma UI/UX',
        context: 'Interactive wireframes, design tokens, and developer-ready web prototypes.',
      },
      {
        name: 'Technical Keynote Speaker',
        context: 'Keynotes on IT Project Management, AI readiness, and tech career growth.',
      },
      {
        name: 'Event Host / MC',
        context: 'Moderating tech panels, hackathons, and Google Developer Group watch parties.',
      },
      {
        name: 'EdTech Curriculum',
        context: 'Structured K-12 STEM syllabi spanning Scratch, 3D modeling, and Python basics.',
      },
    ],
  },
];

export const RECOGNITIONS: RecognitionItem[] = [
  {
    id: 'google-summit',
    category: 'INTERNATIONAL DELEGATE',
    title: 'Google Online Communities Summit',
    subtitle: 'Singapore HQ · Regional Representative',
    description:
      'Selected among top developer community leads in Southeast Asia to collaborate on developer advocacy, builder engagement, and AI enablement strategies.',
  },
  {
    id: 'io-host',
    category: 'COMMUNITY LEADERSHIP',
    title: 'Official Watch Party Host',
    subtitle: 'Google I/O Regional Extended',
    description:
      "Convened and hosted 200+ engineers, students, and tech enthusiasts to unpack Google's keynote announcements in generative AI and cloud infrastructure.",
  },
  {
    id: 'canva-squad',
    category: 'CREATIVE FELLOWSHIP',
    title: 'Canva Squad Community Lead',
    subtitle: 'Canva Indonesia Chapter',
    description:
      'Driving design literacy and visual storytelling workshops for aspiring digital entrepreneurs and campus organizations across Indonesia.',
  },
];

export const ECOSYSTEM_PARTNERS = [
  'AWS COMMUNITY',
  'GOOGLE DEV GROUPS',
  'PLN ICON PLUS',
  'CANVA SQUAD',
  'IDCLOUDHOST',
];

export const TESTIMONIAL = {
  quote:
    '“Juhairi is a rare hybrid talent. He possesses both the technical precision to decode complex algorithms and the charismatic leadership required to coordinate mission-critical enterprise deadlines. His energy inspires every team he touches.”',
  author: 'Abi Farhan',
  role: 'Founder & CEO, Abi Coffee',
};
