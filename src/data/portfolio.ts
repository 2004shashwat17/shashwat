// ============================================================================
// PORTFOLIO CONTENT — Single source of truth for the entire website.
// Edit values here to update the site. Placeholders are marked [PLACEHOLDER_*].
// ============================================================================

export const profile = {
  name: 'Shashwat',
  title: 'Product Manager & Product Builder',
  currentRole: 'Product Manager @ BWays Techno Solution',
  positioning: 'SaaS • Logistics • WMS • Product Management • Full-Stack • Mobile • AI',
  education: 'MBA Candidate, Golden Gate University, USA',
  previous: 'Ex-Enalytechs',
  certification: 'Infosys Certified',
  linkedin: 'https://www.linkedin.com/in/buildwithshashwat/',
  github: '[PLACEHOLDER_GITHUB_URL]',
  email: '[PLACEHOLDER_EMAIL]',
  domain: '[PLACEHOLDER_DOMAIN]',
  location: 'Global / Dubai • UAE',
};

export const heroProofStrip = {
  heading: 'Products & domains I\u2019ve worked across',
  items: ['Clientalio', 'DropProof', 'Labelium', 'SpeedPilot', 'Logistics / WMS'],
};

export const about = {
  heading: 'Building products, not just features.',
  paragraphs: [
    'I\u2019m a Product Manager and Product Builder working at the intersection of business, technology and real-world operations.',
    'My experience spans SaaS, logistics, WMS, web, mobile and software products.',
    'I\u2019ve worked closely with business requirements, product workflows, engineering, testing and product delivery \u2014 while also building products of my own.',
    'I\u2019m particularly interested in understanding real problems, turning them into practical product solutions, and continuously learning from the people who use them.',
  ],
};

export const whatIBuild = {
  heading: 'What I work on',
  areas: [
    { title: 'Product Management', desc: 'Discovery, requirements, roadmaps, prioritization, and shipping.' },
    { title: 'SaaS', desc: 'Multi-tenant products, subscription flows, and customer trust systems.' },
    { title: 'Logistics / WMS', desc: 'Warehouse, inventory, delivery, and operational workflows.' },
    { title: 'Web & Mobile', desc: 'Full-stack development across responsive web and mobile apps.' },
    { title: 'AI & Technology', desc: 'AI integrations, emerging tech, and practical automation.' },
  ],
};

// ----------------------------------------------------------------------------
// PRODUCTS
// ----------------------------------------------------------------------------

export type Product = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  website?: string;
  social?: { label: string; url: string }[];
  accent: string;
  featured: boolean;
  caseStudy: {
    overview: string;
    problem: string;
    usersContext: string;
    myRole: string;
    requirements: string[];
    productThinking: string[];
    userWorkflow: string[];
    designUx: string[];
    engineeringCollab: string[];
    technicalImpl: string[];
    challenges: string[];
    decisions: string[];
    screens: string[]; // placeholder descriptions for screenshots
    demo: string; // placeholder for video
    outcome: string;
    learned: string[];
    relatedContent: string[];
    productLink?: string;
  };
};

export const products: Product[] = [
  {
    id: 'clientalio',
    name: 'Clientalio',
    category: 'SaaS / Customer Testimonials / Social Proof',
    tagline: 'Customer testimonials and social proof platform.',
    description: 'A SaaS platform that helps businesses collect, manage, and showcase customer testimonials to build trust and drive conversions.',
    website: 'https://clientalio.com/',
    social: [
      { label: 'Instagram', url: 'https://www.instagram.com/clientalio/' },
      { label: 'X', url: 'https://x.com/Clientalio/' },
    ],
    accent: '#3b82f6',
    featured: true,
    caseStudy: {
      overview: 'Clientalio is a customer testimonials and social proof platform built to help businesses turn happy customers into credible, visible proof.',
      problem: 'Businesses lose conversions because potential buyers don\u2019t trust marketing claims. Collecting and displaying real customer testimonials is manual, scattered, and hard to keep current.',
      usersContext: 'Small-to-mid-size SaaS companies, service businesses, and agencies that rely on reputation but lack a structured way to capture and present customer proof.',
      myRole: 'Product management, requirement analysis, product design direction, workflow design, and engineering collaboration across the full product lifecycle.',
      requirements: [
        'Collect testimonials from customers via a simple request flow',
        'Support text, video, and rating-based testimonials',
        'Organize and moderate testimonials before publishing',
        'Display testimonials on landing pages via embeddable widgets',
        'Maintain a clean, trustworthy brand for the platform itself',
      ],
      productThinking: [
        'Trust is the core product \u2014 every feature must reinforce credibility, not just collect content',
        'The request flow must be low-friction; customers won\u2019t fill out long forms',
        'Moderation matters: published testimonials reflect on the business using the platform',
      ],
      userWorkflow: [
        'Business creates a testimonial request link',
        'Customer receives request and submits testimonial',
        'Business reviews and approves the testimonial',
        'Approved testimonial appears in the public showcase / widget',
      ],
      designUx: [
        'Minimal, trust-forward aesthetic',
        'Clear separation between collection (internal) and display (public)',
        'Widget embed flow designed for non-technical users',
      ],
      engineeringCollab: [
        'Defined API contracts for testimonial CRUD and widget rendering',
        'Worked with engineering on moderation state machine',
        'Coordinated embeddable widget architecture for cross-domain use',
      ],
      technicalImpl: [
        'Web application with REST API backend',
        'Embeddable widget for public-facing display',
        'Authentication and multi-tenant data isolation',
      ],
      challenges: [
        'Balancing ease of submission with richness of testimonial data',
        'Making widgets performant and brand-agnostic',
        'Building trust signals without faking social proof',
      ],
      decisions: [
        'Chose moderation-first flow over instant publishing to protect credibility',
        'Prioritized text testimonials first, video second, to lower the barrier to entry',
      ],
      screens: [
        '[Add product screenshot: testimonial request page]',
        '[Add product screenshot: testimonial dashboard]',
        '[Add product screenshot: public widget embed]',
      ],
      demo: '[Add product demo video URL]',
      outcome: '[Add verified outcome here]',
      learned: [
        'Social proof is a product, not a feature',
        'Trust shapes every design decision in a SaaS that sells credibility',
      ],
      relatedContent: ['Building Clientalio from a customer trust problem'],
      productLink: 'https://clientalio.com/',
    },
  },
  {
    id: 'dropproof',
    name: 'DropProof',
    category: 'Logistics / Delivery Management',
    tagline: 'Delivery management and proof-of-delivery platform.',
    description: 'A logistics platform for managing deliveries, tracking proof-of-delivery, and streamlining last-mile operations.',
    website: 'https://dropproof.app/',
    accent: '#06b6d4',
    featured: true,
    caseStudy: {
      overview: 'DropProof is a delivery management platform focused on proof-of-delivery, route visibility, and operational control for logistics teams.',
      problem: 'Last-mile delivery teams lack real-time visibility and reliable proof that a delivery was completed, leading to disputes and operational blind spots.',
      usersContext: 'Logistics companies, delivery teams, and dispatchers managing high-volume last-mile operations.',
      myRole: 'Product management, workflow design, requirement gathering, and coordination between operations and engineering.',
      requirements: [
        'Capture proof-of-delivery (signature, photo, status)',
        'Track delivery status in real time',
        'Manage delivery assignments and routes',
        'Provide operational dashboards for dispatchers',
        'Handle edge cases: failed deliveries, reattempts, exceptions',
      ],
      productThinking: [
        'Proof-of-delivery is the single source of truth \u2014 it resolves disputes',
        'Operations teams think in exceptions, not happy paths; the product must too',
        'Real-time visibility is only useful if it\u2019s accurate and fast',
      ],
      userWorkflow: [
        'Dispatcher assigns deliveries to drivers',
        'Driver completes delivery and captures proof',
        'Dispatcher monitors status on dashboard',
        'Exceptions (failed, reattempt) are handled and logged',
      ],
      designUx: [
        'Driver-facing flow optimized for speed in the field',
        'Dispatcher dashboard for at-a-glance operational status',
        'Clear status states: pending, in-transit, delivered, exception',
      ],
      engineeringCollab: [
        'Defined status state machine for delivery lifecycle',
        'Specified API for proof capture and sync',
        'Worked on offline-tolerant data sync for field conditions',
      ],
      technicalImpl: [
        'Mobile-first capture app',
        'REST API for delivery and proof data',
        'Real-time status updates and dashboard',
      ],
      challenges: [
        'Handling unreliable connectivity in the field',
        'Designing a state machine that covers real delivery exceptions',
        'Keeping the driver flow fast enough for high-volume routes',
      ],
      decisions: [
        'Prioritized proof capture reliability over real-time polish',
        'Built exception handling into the core flow, not as an afterthought',
      ],
      screens: [
        '[Add product screenshot: delivery assignment]',
        '[Add product screenshot: proof-of-delivery capture]',
        '[Add product screenshot: dispatcher dashboard]',
      ],
      demo: '[Add product demo video URL]',
      outcome: '[Add verified outcome here]',
      learned: [
        'Logistics products live and die by their exception handling',
        'Operations teams need tools that match how they actually work, not how it looks on paper',
      ],
      relatedContent: ['What I learned building logistics software'],
      productLink: 'https://dropproof.app/',
    },
  },
  {
    id: 'labelium',
    name: 'Labelium',
    category: 'Label & Print Management',
    tagline: 'Label and print management platform.',
    description: 'A platform for managing label generation, print workflows, and label lifecycle across logistics and product operations.',
    website: 'https://labelium.io/',
    accent: '#8b5cf6',
    featured: true,
    caseStudy: {
      overview: 'Labelium is a label and print management platform designed to streamline how businesses create, manage, and print labels across operations.',
      problem: 'Label generation and printing is often manual, error-prone, and disconnected from the systems that actually need the labels.',
      usersContext: 'Operations and warehouse teams that need consistent, accurate labels tied to inventory and shipping workflows.',
      myRole: 'Product management, requirement analysis, workflow design, and engineering coordination.',
      requirements: [
        'Generate labels from structured data',
        'Support multiple label formats and templates',
        'Integrate with printing hardware and workflows',
        'Maintain consistency across label types',
      ],
      productThinking: [
        'A label is a small object with high operational cost if wrong',
        'Templates must be flexible but constrained enough to prevent errors',
        'Printing is a workflow, not a one-click action',
      ],
      userWorkflow: [
        'User selects data source and label template',
        'System generates label preview',
        'User confirms and sends to print',
        'Print job is logged and tracked',
      ],
      designUx: [
        'Template-driven generation with live preview',
        'Minimal steps from data to printed label',
      ],
      engineeringCollab: [
        'Defined data-to-template mapping requirements',
        'Specified print job logging and status tracking',
      ],
      technicalImpl: [
        'Web application with template engine',
        'Print integration layer',
        'REST API for label generation',
      ],
      challenges: [
        'Supporting varied label formats without over-engineering',
        'Ensuring print accuracy across hardware',
      ],
      decisions: [
        'Built template system over free-form editor to reduce errors',
      ],
      screens: [
        '[Add product screenshot: label template editor]',
        '[Add product screenshot: label generation flow]',
      ],
      demo: '[Add product demo video URL]',
      outcome: '[Add verified outcome here]',
      learned: [
        'Even small operational tools need rigorous product thinking',
      ],
      relatedContent: ['How I turn a business requirement into a product workflow'],
      productLink: 'https://labelium.io/',
    },
  },
  {
    id: 'speedpilot',
    name: 'SpeedPilot',
    category: 'Network Performance / Speed Testing',
    tagline: 'Network performance and speed testing platform.',
    description: 'A network performance platform for measuring, analyzing, and visualizing internet speed and connectivity metrics.',
    website: 'https://speedpilot.io/',
    accent: '#10b981',
    featured: true,
    caseStudy: {
      overview: 'SpeedPilot is a network performance and speed testing platform that measures and visualizes connectivity metrics.',
      problem: 'Users and teams need reliable, clear speed and performance metrics, but most tools are ad-heavy and lack useful history or analysis.',
      usersContext: 'Individual users and small teams who want clean, reliable network performance insights.',
      myRole: 'Product management, technical requirement definition, and product design direction.',
      requirements: [
        'Accurate speed and latency measurement',
        'Clear, visual presentation of results',
        'History and comparison of past tests',
        'Fast, lightweight user experience',
      ],
      productThinking: [
        'Speed and clarity are the product \u2014 the UI must reflect that',
        'Historical data turns a one-time test into a useful tool',
      ],
      userWorkflow: [
        'User initiates a speed test',
        'System measures download, upload, and latency',
        'Results are displayed and saved to history',
        'User can compare past results',
      ],
      designUx: [
        'Instant-feedback test UI',
        'Clean results visualization',
      ],
      engineeringCollab: [
        'Defined measurement accuracy requirements',
        'Specified historical data storage and retrieval',
      ],
      technicalImpl: [
        'Web application with real-time measurement',
        'Backend for storing test history',
        'REST API for results',
      ],
      challenges: [
        'Ensuring measurement accuracy across environments',
        'Keeping the experience fast and lightweight',
      ],
      decisions: [
        'Prioritized clarity and speed of UI over feature breadth',
      ],
      screens: [
        '[Add product screenshot: speed test interface]',
        '[Add product screenshot: results history]',
      ],
      demo: '[Add product demo video URL]',
      outcome: '[Add verified outcome here]',
      learned: [
        'Performance-focused products must be performant themselves',
      ],
      relatedContent: ['What I learned working between business and engineering'],
      productLink: 'https://speedpilot.io/',
    },
  },
  {
    id: 'logistics-wms',
    name: 'Logistics / WMS',
    category: 'Logistics / Warehouse Management',
    tagline: 'Real-world warehouse management and logistics operations.',
    description: 'Hands-on experience with warehouse management systems, inventory workflows, delivery operations, and real-world logistics edge cases.',
    accent: '#f59e0b',
    featured: false,
    caseStudy: {
      overview: 'A domain case study representing real-world experience working with warehouse management systems and logistics operations \u2014 not a standalone personal product.',
      problem: 'Warehouse and logistics operations involve complex, interconnected workflows with many real-world edge cases that off-the-shelf software rarely handles cleanly.',
      usersContext: 'Warehouse operators, inventory managers, logistics coordinators, and field installation teams.',
      myRole: 'Worked across requirement gathering, workflow design, backend/API requirements, and operational problem-solving for logistics and WMS contexts.',
      requirements: [
        'Inventory tracking and stock management',
        'Warehouse receiving, putaway, picking, and packing workflows',
        'Delivery and route planning',
        'Installation and replacement workflows',
        'Operational dashboards for real-time visibility',
        'Business rules and edge-case handling',
      ],
      productThinking: [
        'Warehouse operations have more exceptions than happy paths',
        'Inventory accuracy is foundational \u2014 everything else depends on it',
        'Route planning is an optimization problem, not just a mapping problem',
        'Installation and replacement workflows are often ignored but critical',
      ],
      userWorkflow: [
        'Goods received and logged into inventory',
        'Putaway to warehouse locations',
        'Pick and pack for outbound orders',
        'Route planning for delivery',
        'Delivery with proof and exception handling',
        'Installation / replacement workflows where applicable',
      ],
      designUx: [
        'Operational dashboards for real-time status',
        'Mobile-friendly workflows for warehouse floor use',
      ],
      engineeringCollab: [
        'Defined backend/API requirements for inventory and order data',
        'Specified business rules for edge cases',
        'Worked with engineering on operational dashboard requirements',
      ],
      technicalImpl: [
        'Backend systems for inventory and order management',
        'APIs for warehouse and delivery data',
        'Operational dashboards',
      ],
      challenges: [
        'Real-world edge cases: partial deliveries, damaged goods, misplacements',
        'Keeping inventory accurate across physical and digital systems',
        'Designing workflows that match how warehouse teams actually work',
      ],
      decisions: [
        'Prioritized inventory accuracy and exception handling over speed of happy-path features',
      ],
      screens: [
        '[Add screenshot: warehouse dashboard]',
        '[Add screenshot: inventory workflow]',
        '[Add screenshot: delivery route planning]',
      ],
      demo: '[Add demo video URL]',
      outcome: '[Add verified outcome here]',
      learned: [
        'WMS taught me that products must be designed around exceptions, not just happy paths',
        'Operations teams are the real product experts \u2014 listen to how they work',
      ],
      relatedContent: ['What WMS taught me about Product Management', 'Why simple requirements become complicated in real products'],
      productLink: undefined,
    },
  },
];

// ----------------------------------------------------------------------------
// PRODUCT THINKING / ARTICLES
// ----------------------------------------------------------------------------

export type Article = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
};

export const articles: Article[] = [
  { id: 'art-1', title: 'What I learned building logistics software', summary: 'How working on delivery and warehouse systems reshaped how I think about product edge cases.', category: 'Logistics', date: '[Add date]' },
  { id: 'art-2', title: 'What WMS taught me about Product Management', summary: 'Warehouse management systems are a masterclass in designing for real-world operations.', category: 'WMS', date: '[Add date]' },
  { id: 'art-3', title: 'Why simple requirements become complicated in real products', summary: 'Every \u201csimple\u201d feature hides a web of edge cases once it meets real users.', category: 'Product Thinking', date: '[Add date]' },
  { id: 'art-4', title: 'How I turn a business requirement into a product workflow', summary: 'A practical approach to translating business needs into shippable product workflows.', category: 'Process', date: '[Add date]' },
  { id: 'art-5', title: 'Building Clientalio from a customer trust problem', summary: 'How a trust problem became a SaaS product, and what I learned along the way.', category: 'SaaS', date: '[Add date]' },
  { id: 'art-6', title: 'What I learned working between business and engineering', summary: 'The gap between business requirements and engineering reality is where product management happens.', category: 'Product Thinking', date: '[Add date]' },
  { id: 'art-7', title: 'Product decisions that changed how I think', summary: 'A few decisions that reshaped my approach to building products.', category: 'Product Thinking', date: '[Add date]' },
  { id: 'art-8', title: 'How I approach feature requirements', summary: 'A framework for turning vague requests into clear, buildable requirements.', category: 'Process', date: '[Add date]' },
  { id: 'art-9', title: 'What I learned from building SaaS products', summary: 'Lessons from multi-tenant products, subscription flows, and customer trust.', category: 'SaaS', date: '[Add date]' },
  { id: 'art-10', title: 'Lessons from working with developers', summary: 'What I\u2019ve learned about collaborating with engineering teams as a product person.', category: 'Collaboration', date: '[Add date]' },
];

// ----------------------------------------------------------------------------
// VIDEOS
// ----------------------------------------------------------------------------

export type Video = {
  id: string;
  title: string;
  platform: 'LinkedIn' | 'YouTube' | 'Instagram' | 'MP4' | 'Other';
  url: string;
  thumbnail: string;
  date: string;
  product: string;
  description: string;
};

export const videos: Video[] = [
  { id: 'vid-1', title: '[Add video title]', platform: 'LinkedIn', url: '[Add video URL]', thumbnail: '[Add thumbnail URL]', date: '[Add date]', product: 'Clientalio', description: '[Add short description]' },
  { id: 'vid-2', title: '[Add video title]', platform: 'YouTube', url: '[Add video URL]', thumbnail: '[Add thumbnail URL]', date: '[Add date]', product: 'DropProof', description: '[Add short description]' },
  { id: 'vid-3', title: '[Add video title]', platform: 'LinkedIn', url: '[Add video URL]', thumbnail: '[Add thumbnail URL]', date: '[Add date]', product: 'Logistics / WMS', description: '[Add short description]' },
];

// ----------------------------------------------------------------------------
// SKILLS
// ----------------------------------------------------------------------------

export const skills = {
  product: [
    'Product Management', 'Product Strategy', 'Product Discovery', 'Requirement Gathering', 'Requirement Analysis',
    'Feature Definition', 'User Workflows', 'User Stories', 'Acceptance Criteria', 'Product Roadmapping',
    'Feature Prioritization', 'MVP Planning', 'Product Documentation', 'User Feedback', 'Product Iteration',
    'Cross-functional Collaboration', 'Agile Product Development', 'Stakeholder Communication', 'Problem Solving',
    'Product Thinking', 'Business Requirement Analysis', 'Process Mapping', 'Operational Workflow Design',
  ],
  business: [
    'Business Analysis', 'Business Process Understanding', 'Customer Problem Identification', 'Stakeholder Management',
    'Client Communication', 'Requirement Gathering', 'Business Workflow Analysis', 'Market Research',
    'Competitive Research', 'Customer Feedback', 'SaaS Business Understanding', 'Startup/Product Thinking',
    'Go-to-Market Understanding', 'Product Positioning', 'Basic SEO / Search Intent', 'Social Proof / Customer Trust',
    'B2B Product Thinking',
  ],
  technical: [
    'Full-Stack Development', 'Web Development', 'Mobile Development', 'API Integration', 'REST APIs',
    'Backend Development', 'Frontend Development', 'Database Systems', 'Authentication', 'Cloud / Deployment',
    'AI Integrations', 'Software Testing', 'Debugging', 'Git', 'GitHub', 'Technical Documentation',
    'System Workflows', 'Software Architecture Understanding',
  ],
};

// ----------------------------------------------------------------------------
// TOOLS
// ----------------------------------------------------------------------------

export const tools = [
  'GitHub', 'Git', 'VS Code', 'GitHub Copilot', 'Postman', 'Figma', 'Jira', 'Canva', 'AI Tools', 'Analytics / SEO Tools',
];

// ----------------------------------------------------------------------------
// EXPERIENCE
// ----------------------------------------------------------------------------

export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  products: string[];
  skills: string[];
  achievements: string[];
};

export const experience: Experience[] = [
  {
    id: 'exp-bways',
    company: 'BWays Techno Solution',
    role: 'Product Manager',
    duration: '[Add start date \u2014 Present]',
    description: 'Leading product management across SaaS, logistics, and WMS products.',
    responsibilities: [
      'Product discovery, requirement gathering, and roadmap ownership',
      'Collaboration with engineering, design, and business stakeholders',
      'Workflow design and product documentation',
      'Shipping products across web and mobile',
    ],
    products: ['Clientalio', 'DropProof', 'Labelium', 'SpeedPilot'],
    skills: ['Product Management', 'Requirement Analysis', 'Agile', 'Stakeholder Communication'],
    achievements: ['[Add verified achievement]'],
  },
  {
    id: 'exp-enalytechs',
    company: 'Enalytechs',
    role: '[Add role]',
    duration: '[Add duration]',
    description: 'Worked on software product development across web and mobile.',
    responsibilities: [
      '[Add key responsibility]',
      '[Add key responsibility]',
    ],
    products: ['[Add product]'],
    skills: ['Full-Stack Development', 'Mobile Development'],
    achievements: ['[Add verified achievement]'],
  },
  {
    id: 'exp-logistics',
    company: 'Logistics / WMS Domain',
    role: 'Product & Operations',
    duration: '[Add duration]',
    description: 'Hands-on experience with warehouse management systems, inventory workflows, and delivery operations.',
    responsibilities: [
      'Requirement gathering for warehouse and inventory workflows',
      'Backend/API requirements for logistics systems',
      'Route planning and delivery operations',
      'Installation and replacement workflow design',
    ],
    products: ['Logistics / WMS'],
    skills: ['Operational Workflow Design', 'Business Rules', 'Process Mapping'],
    achievements: ['[Add verified achievement]'],
  },
];

// ----------------------------------------------------------------------------
// EDUCATION
// ----------------------------------------------------------------------------

export type Education = {
  id: string;
  university: string;
  program: string;
  status: string;
  location: string;
  startYear: string;
  expectedCompletion: string;
  subjects: string[];
  highlights: string[];
  link?: string;
};

export const education: Education[] = [
  {
    id: 'edu-mba',
    university: 'Golden Gate University, USA',
    program: 'MBA',
    status: 'MBA Candidate',
    location: 'USA',
    startYear: '[Add start year]',
    expectedCompletion: '[Add expected completion]',
    subjects: ['[Add relevant subject]', '[Add relevant subject]'],
    highlights: ['[Add learning highlight]'],
    link: undefined,
  },
  {
    id: 'edu-btech',
    university: '[Add university]',
    program: 'BTech',
    status: '[Add status]',
    location: '[Add location]',
    startYear: '[Add start year]',
    expectedCompletion: '[Add end year]',
    subjects: ['[Add relevant subject]'],
    highlights: ['[Add learning highlight]'],
    link: undefined,
  },
];

// ----------------------------------------------------------------------------
// PRODUCT JOURNEY TIMELINE
// ----------------------------------------------------------------------------

export const journey = [
  { label: 'BTech', detail: 'Engineering foundation' },
  { label: 'Full-Stack & Mobile Development', detail: 'Building web and mobile applications' },
  { label: 'Enalytechs', detail: 'Software product development' },
  { label: 'BWays Techno Solution', detail: 'Product Manager' },
  { label: 'Logistics / WMS', detail: 'Real-world operations experience' },
  { label: 'Clientalio', detail: 'SaaS / Social Proof' },
  { label: 'DropProof', detail: 'Logistics / Delivery Management' },
  { label: 'Labelium', detail: 'Label & Print Management' },
  { label: 'SpeedPilot', detail: 'Network Performance' },
  { label: 'MBA \u2014 Golden Gate University', detail: 'Business & product leadership' },
];

// ----------------------------------------------------------------------------
// ACHIEVEMENTS (6 placeholders)
// ----------------------------------------------------------------------------

export type Achievement = {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  verificationLink: string;
};

export const achievements: Achievement[] = [
  { id: 'ach-1', title: 'Achievement 01', organization: '[Add organization]', date: '[Add date]', description: '[Add description]', verificationLink: '[Add verification link]' },
  { id: 'ach-2', title: 'Achievement 02', organization: '[Add organization]', date: '[Add date]', description: '[Add description]', verificationLink: '[Add verification link]' },
  { id: 'ach-3', title: 'Achievement 03', organization: '[Add organization]', date: '[Add date]', description: '[Add description]', verificationLink: '[Add verification link]' },
  { id: 'ach-4', title: 'Achievement 04', organization: '[Add organization]', date: '[Add date]', description: '[Add description]', verificationLink: '[Add verification link]' },
  { id: 'ach-5', title: 'Achievement 05', organization: '[Add organization]', date: '[Add date]', description: '[Add description]', verificationLink: '[Add verification link]' },
  { id: 'ach-6', title: 'Achievement 06', organization: '[Add organization]', date: '[Add date]', description: '[Add description]', verificationLink: '[Add verification link]' },
];

// ----------------------------------------------------------------------------
// CERTIFICATIONS (9 placeholders)
// ----------------------------------------------------------------------------

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  description: string;
};

export const certifications: Certification[] = [
  { id: 'cert-1', name: 'Certification 01', issuer: '[Add issuer]', date: '[Add date]', credentialId: '[Add credential ID]', credentialUrl: '[VERIFY_CERTIFICATE_01]', description: '[Add description]' },
  { id: 'cert-2', name: 'Certification 02', issuer: '[Add issuer]', date: '[Add date]', credentialId: '[Add credential ID]', credentialUrl: '[VERIFY_CERTIFICATE_02]', description: '[Add description]' },
  { id: 'cert-3', name: 'Certification 03', issuer: '[Add issuer]', date: '[Add date]', credentialId: '[Add credential ID]', credentialUrl: '[VERIFY_CERTIFICATE_03]', description: '[Add description]' },
  { id: 'cert-4', name: 'Certification 04', issuer: '[Add issuer]', date: '[Add date]', credentialId: '[Add credential ID]', credentialUrl: '[VERIFY_CERTIFICATE_04]', description: '[Add description]' },
  { id: 'cert-5', name: 'Certification 05', issuer: '[Add issuer]', date: '[Add date]', credentialId: '[Add credential ID]', credentialUrl: '[VERIFY_CERTIFICATE_05]', description: '[Add description]' },
  { id: 'cert-6', name: 'Certification 06', issuer: '[Add issuer]', date: '[Add date]', credentialId: '[Add credential ID]', credentialUrl: '[VERIFY_CERTIFICATE_06]', description: '[Add description]' },
  { id: 'cert-7', name: 'Certification 07', issuer: '[Add issuer]', date: '[Add date]', credentialId: '[Add credential ID]', credentialUrl: '[VERIFY_CERTIFICATE_07]', description: '[Add description]' },
  { id: 'cert-8', name: 'Certification 08', issuer: '[Add issuer]', date: '[Add date]', credentialId: '[Add credential ID]', credentialUrl: '[VERIFY_CERTIFICATE_08]', description: '[Add description]' },
  { id: 'cert-9', name: 'Certification 09', issuer: '[Add issuer]', date: '[Add date]', credentialId: '[Add credential ID]', credentialUrl: '[VERIFY_CERTIFICATE_09]', description: '[Add description]' },
];

// ----------------------------------------------------------------------------
// GITHUB REPOSITORIES (manual config)
// ----------------------------------------------------------------------------

export type Repo = {
  id: string;
  name: string;
  description: string;
  technology: string;
  url: string;
  featured: boolean;
  date: string;
};

export const repos: Repo[] = [
  { id: 'repo-1', name: '[Repository name]', description: '[Add description]', technology: '[Add technology]', url: '[Add URL]', featured: true, date: '[Add date]' },
  { id: 'repo-2', name: '[Repository name]', description: '[Add description]', technology: '[Add technology]', url: '[Add URL]', featured: true, date: '[Add date]' },
  { id: 'repo-3', name: '[Repository name]', description: '[Add description]', technology: '[Add technology]', url: '[Add URL]', featured: false, date: '[Add date]' },
];

// ----------------------------------------------------------------------------
// RESUME
// ----------------------------------------------------------------------------

export const resume = {
  url: '[RESUME_PDF_URL]',
  note: 'Download the latest version of my resume.',
};

// ----------------------------------------------------------------------------
// CLIENTALIO SOCIAL LINKS (company, not personal)
// ----------------------------------------------------------------------------

export const clientalioSocial = [
  { label: 'Clientalio on Instagram', url: 'https://www.instagram.com/clientalio/' },
  { label: 'Clientalio on X', url: 'https://x.com/Clientalio' },
  { label: 'Clientalio content', url: 'https://www.reddit.com/user/Intelligent-Video-16/' },
];

// ----------------------------------------------------------------------------
// WHAT'S NEXT
// ----------------------------------------------------------------------------

export const whatsNext = {
  heading: 'What\u2019s Next',
  content: 'I\u2019m interested in connecting with founders, product teams, builders and technology professionals globally, and especially learning from the growing startup and technology ecosystem in Dubai.',
};

// ----------------------------------------------------------------------------
// CONTACT
// ----------------------------------------------------------------------------

export const contact = {
  heading: 'Building something interesting?',
  supporting: 'If you\u2019re building a product, solving an operational problem, working on technology, or simply want to exchange ideas, I\u2019d love to connect.',
};

export const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Work', id: 'work' },
  { label: 'Product Thinking', id: 'thinking' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Content', id: 'content' },
  { label: 'About', id: 'about' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];
