import fastapiCover from '../assets/images/project_fastapi_web_1794632092573.jpg';
import csvAssistantCover from '../assets/images/project_csv_assistant_1794632093488.jpg';
import ocrBudgetCover from '../assets/images/project_ocr_budget_1794632093204.jpg';
import mlPipelinesCover from '../assets/images/project_ml_pipelines_1794632094188.jpg';

export type SkillCategory =
  | 'All'
  | 'Backend & APIs'
  | 'AI & Data'
  | 'Frontend & Mobile'
  | 'DevOps';

export interface SkillItem {
  id: string;
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  summary: string;
  iconKey:
    | 'python'
    | 'html'
    | 'css'
    | 'bootstrap'
    | 'fastapi'
    | 'pandas'
    | 'numpy'
    | 'ml'
    | 'crewai'
    | 'docker'
    | 'flutter';
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  technologies: string[];
  category: string;
  githubUrl: string;
  coverImage: string;
  coverAlt: string;
}

export interface EducationItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
}

export const PROFILE = {
  brand: 'ARHA.',
  name: 'Arha Eman',
  role: 'Python Developer | AI & Machine Learning Enthusiast',
  location: 'Karachi, Pakistan',
  email: 'arhaeman6@gmail.com',
  github: 'https://github.com/arhaeman6',
  linkedin: 'https://www.linkedin.com/in/arha-eman-9a5147372/',
  heroHeadlineTop: "Hi, I'm Arha Eman.",
  heroHeadlineBottom: 'Building Ideas Through Code & AI.',
  heroSubtitle:
    'An aspiring Python Developer passionate about Artificial Intelligence, Machine Learning and creating meaningful digital solutions.',
  aboutBio:
    'I am an aspiring Python developer passionate about Artificial Intelligence, Machine Learning, and modern technology. I enjoy learning new technologies and building practical projects. I am continuously improving my programming and problem-solving skills.',
  aboutSecondary:
    'Based in Karachi, Pakistan, my focus spans backend API development with FastAPI, structured data workflows with Pandas and NumPy, multi-agent experimentation with CrewAI, and cross-platform interface building.',
};

export const SUMMARY_CARDS = [
  {
    value: '11',
    label: 'Core Technologies',
    detail: 'Python, AI & Web Stack',
  },
  {
    value: '04',
    label: 'Featured Projects',
    detail: 'APIs, OCR, Data & ML',
  },
  {
    value: 'CIT',
    label: 'IT Certification',
    detail: 'Foundational Computing',
  },
  {
    value: 'AI / ML',
    label: 'Primary Focus',
    detail: 'Karachi, Pakistan',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  'All',
  'Backend & APIs',
  'AI & Data',
  'Frontend & Mobile',
  'DevOps',
];

export const SKILLS: SkillItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Backend & APIs',
    summary: 'Core programming language for backend services, automation scripts, data processing, and machine learning workflows.',
    iconKey: 'python',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'Backend & APIs',
    summary: 'Building structured, type-safe RESTful APIs with Pydantic validation and automatic OpenAPI documentation.',
    iconKey: 'fastapi',
  },
  {
    id: 'pandas',
    name: 'Pandas',
    category: 'AI & Data',
    summary: 'Tabular data manipulation, missing-value cleaning, aggregation, and exploratory CSV dataset analysis.',
    iconKey: 'pandas',
  },
  {
    id: 'numpy',
    name: 'NumPy',
    category: 'AI & Data',
    summary: 'Numerical computation, vectorized array operations, and linear algebra foundations for data science.',
    iconKey: 'numpy',
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    category: 'AI & Data',
    summary: 'Feature preparation, model training, evaluation workflows, and supervised learning experimentation.',
    iconKey: 'ml',
  },
  {
    id: 'crewai',
    name: 'CrewAI',
    category: 'AI & Data',
    summary: 'Designing multi-agent AI task pipelines where specialized agents collaborate on research and analysis.',
    iconKey: 'crewai',
  },
  {
    id: 'html',
    name: 'HTML',
    category: 'Frontend & Mobile',
    summary: 'Semantic document structure and accessible web markup for responsive user interfaces.',
    iconKey: 'html',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Frontend & Mobile',
    summary: 'Modern layout systems with Flexbox and Grid, responsive styling, and refined visual polish.',
    iconKey: 'css',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'Frontend & Mobile',
    summary: 'Rapid responsive layout assembly, grid systems, and clean component styling for web applications.',
    iconKey: 'bootstrap',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'Frontend & Mobile',
    summary: 'Cross-platform mobile UI exploration using declarative widgets and structured state management.',
    iconKey: 'flutter',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps',
    summary: 'Containerizing Python backends and development environments for reproducible local and cloud runs.',
    iconKey: 'docker',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'fastapi-web-app',
    index: '01',
    title: 'FastAPI Web Application',
    category: 'Backend Engineering',
    shortDescription:
      'A modular RESTful web backend powered by FastAPI with schema validation, clean endpoint routing, and containerized deployment readiness.',
    fullDescription:
      'Built to explore modern asynchronous Python backend architecture, this application pairs FastAPI with strict Pydantic data models, structured route handlers, and clean error responses. Designed for clarity, maintainability, and straightforward Docker packaging.',
    highlights: [
      'Type-checked request and response schemas using Pydantic models',
      'Clean separation between routing, business logic, and data validation',
      'Interactive OpenAPI / Swagger endpoint documentation out of the box',
      'Containerized environment configuration with Docker',
    ],
    technologies: ['Python', 'FastAPI', 'HTML & CSS', 'Docker'],
    githubUrl: 'https://github.com/arhaeman6',
    coverImage: fastapiCover,
    coverAlt: 'Abstract 3D visualization of translucent glass API data pathways',
  },
  {
    id: 'ai-csv-assistant',
    index: '02',
    title: 'AI-Powered CSV Data Analysis Assistant',
    category: 'AI & Data Intelligence',
    shortDescription:
      'An intelligent assistant that ingests raw CSV datasets, runs automated Pandas summaries, and surfaces clear analytical insights.',
    fullDescription:
      'Created to bridge natural-language exploration with structured tabular data. Using Python, Pandas, NumPy, and multi-agent AI orchestration, the assistant profiles uploaded CSV files, detects anomalies or missing fields, and organizes actionable statistical findings.',
    highlights: [
      'Automated column profiling, summary statistics, and missing-value detection',
      'Structured data transformation pipeline powered by Pandas and NumPy',
      'Agentic workflow design using CrewAI for clear analytical reasoning',
      'Clean Python interface designed for reproducible dataset inspection',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'CrewAI'],
    githubUrl: 'https://github.com/arhaeman6',
    coverImage: csvAssistantCover,
    coverAlt: 'Abstract 3D visualization of structured data matrices transforming into waves',
  },
  {
    id: 'ocr-budget-tracker',
    index: '03',
    title: 'OCR-Based Budget Tracking System',
    category: 'Applied Automation',
    shortDescription:
      'A practical expense tracking tool that extracts receipt text via Optical Character Recognition and organizes spending records automatically.',
    fullDescription:
      'Designed to remove manual receipt entry from personal budgeting. The system processes receipt images using OCR text extraction, parses totals and expense categories in Python, and stores clean records for straightforward budget tracking.',
    highlights: [
      'Automated text extraction and line-item parsing from receipt images',
      'Category classification logic and structured expense storage in Python',
      'FastAPI backend endpoints paired with a clean web interface',
      'Focused on practical accuracy and everyday usability',
    ],
    technologies: ['Python', 'OCR', 'FastAPI', 'Bootstrap'],
    githubUrl: 'https://github.com/arhaeman6',
    coverImage: ocrBudgetCover,
    coverAlt: 'Minimalist studio render of an optical laser plane scanning glass ledger cards',
  },
  {
    id: 'data-cleaning-ml',
    index: '04',
    title: 'Data Cleaning and Machine Learning Projects',
    category: 'Machine Learning',
    shortDescription:
      'A collection of hands-on notebooks and pipelines focused on dataset preprocessing, feature engineering, and predictive modeling.',
    fullDescription:
      'A continuous learning portfolio of machine learning experiments centered on real-world data preparation—handling missing values, encoding categorical features, normalizing distributions, and training baseline classification and regression models.',
    highlights: [
      'End-to-end data sanitization and outlier handling with Pandas and NumPy',
      'Exploratory feature analysis and train-test split validation discipline',
      'Baseline supervised Machine Learning model comparisons and error analysis',
      'Reproducible Python scripts documenting each preprocessing decision',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Machine Learning'],
    githubUrl: 'https://github.com/arhaeman6',
    coverImage: mlPipelinesCover,
    coverAlt: 'Abstract scientific visualization of a machine learning neural manifold and data clusters',
  },
];

export const EDUCATION_MILESTONES: EducationItem[] = [
  {
    id: 'intermediate',
    index: '01',
    title: 'Intermediate Education',
    subtitle: 'Academic Foundation',
    description:
      'Completed Intermediate studies, strengthening analytical reasoning, quantitative problem-solving, and structured academic discipline.',
    focusAreas: ['Analytical Thinking', 'Mathematics & Logic', 'Academic Discipline'],
  },
  {
    id: 'cit',
    index: '02',
    title: 'Certificate in Information Technology (CIT)',
    subtitle: 'Core Computing & Web Fundamentals',
    description:
      'Earned a Certificate in Information Technology, establishing hands-on fundamentals across operating systems, web markup, styling, and practical software tools.',
    focusAreas: ['HTML & CSS', 'Bootstrap', 'IT Fundamentals'],
  },
  {
    id: 'python-dev',
    index: '03',
    title: 'Python Development',
    subtitle: 'Backend & Application Engineering',
    description:
      'Focused self-directed and project-based training in Python programming, object-oriented design, FastAPI backend services, and Docker containerization.',
    focusAreas: ['Python 3', 'FastAPI', 'Docker & APIs'],
  },
  {
    id: 'ai-ml-journey',
    index: '04',
    title: 'AI & Machine Learning Learning Journey',
    subtitle: 'Continuous Exploration & Applied Projects',
    description:
      'Ongoing practical immersion in data cleaning, Pandas & NumPy workflows, foundational Machine Learning algorithms, and multi-agent AI with CrewAI.',
    focusAreas: ['Pandas & NumPy', 'Machine Learning', 'CrewAI Agents'],
  },
];
