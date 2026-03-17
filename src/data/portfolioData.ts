export type FeaturedProject = {
  title: string
  period: string
  association?: string
  sortKey: number
  summary: string
  impact: string[]
  stack: string[]
  metrics: string[]
  github?: string
}

export const profile = {
  name: 'Sankalp Kulkarni',
  role: 'Open to Work · AI Engineer / SWE Roles',
  headline:
    'Building production-ready AI systems and scalable backend software',
  supportingLine:
    '17 months of production experience across AI platforms, backend APIs, and data workflows',
  stackLine: 'Python · TypeScript · React · Flask/FastAPI · PostgreSQL · Redis · Docker · AWS/GCP',
  education: 'MS CS @ UC Riverside',
  location: 'Riverside, CA',
  email: 'sankalpkulk06@gmail.com',
  phone: '+1 (951) 377-5843',
  github: 'https://github.com/sankalpkulk06',
  linkedin: 'https://www.linkedin.com/in/sankalpkulkarni/',
  resume: '/docs/Sankalp_Kulkarni_3_AIEng_Riv_020326.pdf',
}

export const heroStats = [
  { value: '17 months', label: 'of production experience' },
  { value: '22%', label: 'Precision@5 uplift in retrieval tuning' },
  { value: '300+', label: 'Vectors/min sustained throughput' },
]

export const heroProofCards = [
  '17 months in production',
  'AI systems & backend APIs',
  'Retrieval, data, and scalable workflows',
]

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Recommendation Engine for Test Device Matrix',
    period: 'Jun 2023 - Dec 2023',
    sortKey: 202306,
    summary:
      'Developed a recommendation bot to suggest optimal test combinations, clustering 1K+ OEMs and analyzing 125K+ log lines using TF-IDF, clustering, and predictive models.',
    impact: [
      'Delivered recommendation results in under 90 seconds.',
      'Built practical backend and UI integration for engineering use.',
      'Improved test selection quality with data-driven ranking.',
    ],
    stack: ['PyTorch', 'Flask', 'React', 'Python', 'Redis', 'Docker'],
    metrics: ['1K+ OEM clusters', '125K+ log lines', '< 90s output'],
  },
  {
    title: 'Android Log Search and Parsing Utility',
    period: 'Jun 2023 - Aug 2023',
    sortKey: 202306,
    summary:
      'Built a real-time log parsing and search service handling 250K+ log lines, exposing Python/Flask APIs and a dashboard for fast debugging.',
    impact: [
      'Implemented streaming ingestion with Kafka and Dockerized deployment.',
      'Added classification and troubleshooting links to speed up issue resolution.',
      'Designed for operational debugging workflows and faster triage.',
    ],
    stack: ['Python', 'Flask', 'React', 'Kafka', 'Docker'],
    metrics: ['250K+ log lines', 'Real-time parsing'],
  },
  {
    title: 'A3C for Kung Fu using Gymnasium',
    period: 'Feb 2025 - Feb 2025',
    sortKey: 202502,
    summary:
      'Implemented Asynchronous Advantage Actor-Critic (A3C) to train an agent for the KungFuMaster-v0 Atari environment.',
    impact: [
      'Used parallel training processes to improve learning efficiency.',
      'Combined policy optimization and value estimation for high-dimensional visual input.',
      'Handled fast-paced gameplay through asynchronous actor-critic updates.',
    ],
    stack: ['Python', 'Gymnasium', 'A3C', 'Deep Reinforcement Learning'],
    metrics: ['Parallel training', 'Actor-critic architecture'],
  },
  {
    title: 'Fandom Wiki Search Engine',
    period: 'Feb 2025 - Mar 2025',
    association: 'Associated with University of California, Riverside',
    sortKey: 202502,
    summary:
      'Developed a BFS-based web crawler to collect superhero content from Marvel and DC Fandom pages, then built a PyLucene-powered full-text search engine for structured retrieval.',
    impact: [
      'Implemented BeautifulSoup4 parsing, metadata extraction, and duplicate URL detection using SHA-256 hashing.',
      'Applied domain-specific filtering and crawl controls for efficient data collection.',
      'Indexed structured superhero fields for efficient search and optimized query performance.',
    ],
    stack: ['Python', 'BeautifulSoup4', 'PyLucene', 'SHA-256', 'Information Retrieval'],
    metrics: ['BFS crawler', 'Full-text index'],
    github: 'https://github.com/sankalpkulk06/fandom-search-engine',
  },
  {
    title: 'Lunar Landing using Reinforcement Learning',
    period: 'Feb 2025 - Feb 2025',
    sortKey: 202502,
    summary:
      'Implemented Deep Q-Learning to train an autonomous agent for LunarLander-v2 with neural Q-value approximation.',
    impact: [
      'Trained through trial-and-error interactions to learn a stable landing strategy.',
      'Used neural function approximation for action-value estimation.',
      'Demonstrated reinforcement learning for dynamic control and real-time decision-making.',
    ],
    stack: ['Python', 'Gymnasium', 'Deep Q-Learning', 'Neural Networks'],
    metrics: ['LunarLander-v2', 'Autonomous policy learning'],
    github: 'https://github.com/sankalpkulk06/lunar-landing-using-RL',
  },
  {
    title: 'SmartBDD',
    period: '2025',
    sortKey: 202501,
    summary:
      'SmartBDD is an AI-powered QA assistant for searching, analyzing, and deduplicating Cucumber BDD scenarios using natural language retrieval.',
    impact: [
      'Built semantic scenario matching with OpenAI embeddings and Pinecone vector search.',
      'Helped QA teams identify near-duplicate tests and reduce suite redundancy.',
      'Improved test suite maintainability with faster intent-based search and analysis.',
    ],
    stack: ['Python', 'FastAPI', 'OpenAI', 'Pinecone', 'Cucumber BDD'],
    metrics: ['Natural language search', 'BDD deduplication'],
    github: 'https://github.com/sankalpkulk06/SmartBDD',
  },
  {
    title: 'SafeBot',
    period: 'Sep 2025 - Mar 2026',
    association: 'Associated with University of California, Riverside',
    sortKey: 202509,
    summary:
      'Built SafeBot, an AI-powered platform for investigators that automates email triage, risk scoring, and easy case escalation.',
    impact: [
      'Developed backend services and workflows using Python, Flask, PostgreSQL, and GCP to process investigation-related emails.',
      'Designed AI-assisted workflows to improve case prioritization.',
      'Enabled faster, more effective investigative decision-making.',
    ],
    stack: ['Python', 'Flask', 'PostgreSQL', 'GCP', 'Redis', 'Docker'],
    metrics: ['AI-assisted workflows', 'Case escalation support'],
  },
]

export const experiences = [
  {
    role: 'AI Engineer Intern',
    company: 'Stealth AI Startup',
    period: 'Feb 2026 – Present',
    featured: true,
    highlights: [
      'Building end-to-end backend AI systems for production deployment with retrieval-first architecture.',
      'Designing robust API and workflow layers for LLM applications, orchestration, and observability.',
      'Driving system-level decisions across latency, quality, and reliability for real-world product use cases.',
    ],
  },
  {
    role: 'AI Engineer Intern',
    company: 'Quinnox (Qyrus)',
    period: 'Jul 2025 – Sep 2025',
    highlights: [
      'Built production-grade multimodal RAG pipelines and backend APIs.',
      'Delivered 220K+ embeddings index and improved precision@5 by 22%.',
      'Implemented scalable ingestion/inference workflows on AWS with queue-based processing.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Pcloudy (Opkey)',
    period: 'Jun 2023 – Jul 2024',
    highlights: [
      'Built backend and AI workflow systems for automation products.',
      'Shipped log analytics services processing ~33K events/min.',
      'Delivered Python/Flask services with Redis, Docker, and cloud deployment practices.',
    ],
  },
]

export const hobbyGallery = [
  {
    title: 'Hiking & Nature Trails',
    caption: 'Long hikes help me think through system design and architecture decisions.',
    image:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Travel & Culture',
    caption: 'I enjoy exploring new cities, people, and ideas beyond engineering.',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Coffee & Deep Work',
    caption: 'Focused planning sessions where product strategy meets technical execution.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Reading & Writing',
    caption: 'I study AI systems papers, engineering blogs, and implementation case studies.',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80',
  },
]

export const skillGroups = [
  {
    title: 'AI Systems',
    items: ['RAG', 'LLM Applications', 'Retrieval Pipelines', 'Embeddings', 'Reranking', 'Prompt Design'],
  },
  {
    title: 'Backend',
    items: ['Python', 'FastAPI', 'Flask', 'REST APIs', 'Async Workers', 'Data Workflows'],
  },
  {
    title: 'Data & Storage',
    items: ['PostgreSQL', 'Redis', 'Vector DBs', 'Pinecone', 'Kafka'],
  },
  {
    title: 'Cloud & Infra',
    items: ['AWS', 'GCP', 'Docker', 'CI/CD'],
  },
]
