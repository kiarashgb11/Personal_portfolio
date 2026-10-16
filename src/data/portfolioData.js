import skinCancerImage from '../assets/Test1.webp';
import mapsImage from '../assets/Maps.PNG';
import gestureImage from '../assets/Gesture.jpg';
import soccerImage from '../assets/soccerStats.png';
import portfolioImage from '../assets/webDev.jpeg';
import fpgaImage from '../assets/fpga.jpeg';
import scraperImage from '../assets/scrap.avif';
import actuatorImage from '../assets/actuator.png';

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Writing', href: '#writing' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const experiences = [
  {
    company: 'University of Toronto · AI Research Projects',
    role: 'Applied AI Engineer · Undergraduate Research Assistant',
    period: 'September 2026 — Present',
    focus: 'Embedded AI · Accessible HCI',
    summary:
      'Working on applied AI systems spanning embedded real-time multimedia processing and accessible human-computer interaction.',
    highlights: [
      'Co-leading development of an embedded AI system that processes real-time audio and video streams on Raspberry Pi devices using signal fingerprinting and machine-learning techniques.',
      'Developing C++ and Python pipelines that connect on-device processing with server-side inference, cloud storage, and device-management services.',
      'Contributing to ML systems that translate visual interface content into interactive tactile representations for blind and low-vision users.',
    ],
    technologies: ['C++', 'Python', 'Raspberry Pi', 'Embedded AI', 'Signal Processing', 'Machine Learning', 'Computer Vision', 'Cloud Systems'],
  },
  {
    company: 'IBM Canada',
    role: 'Compiler Developer Intern / Software Developer Co-op',
    period: 'May 2025 — August 2026',
    focus: 'Compiler & Runtime Engineering',
    summary:
      'Spent approximately 16 months working on IBM Open Enterprise SDK for Python on z/OS, contributing to CPython platform enablement, runtime compatibility, dependency support, and the infrastructure used to build and validate the product.',
    highlights: [
      'Worked with CPython and its C internals to investigate and enable POSIX and operating-system interfaces, platform functionality, and compatibility across Python and z/OS releases.',
      'Debugged runtime and test failures across z/OS UNIX System Services and Linux, including behaviour in OpenSSL/cryptography, ncurses/readline, compression libraries, networking, encodings, and other open-source dependencies.',
      'Contributed to automated build, test, and CI/CD infrastructure using shell, some Go, Buildbot, Ansible, pytest, pip, virtual environments, and IBM Clang tooling.',
      'Supported secure software workflows with Bandit and Detect-Secrets while investigating lower-level operating-system and compiler compatibility problems.',
    ],
    technologies: ['CPython', 'C', 'Python', 'POSIX', 'z/OS UNIX', 'Shell', 'Go', 'IBM Clang', 'Buildbot', 'Ansible', 'pytest', 'OpenSSL'],
  },
  {
    company: 'Reviewerly',
    role: 'Software Engineering Intern',
    period: 'May 2024 — August 2024',
    focus: 'Startup · Responsible AI Research Environment',
    summary:
      'Built full-stack software for Reviewerly, a professor-led startup operating in an academic Responsible AI research environment, and worked alongside graduate researchers to translate research needs into product and data workflows.',
    highlights: [
      'Designed backend services and APIs with Java, Spring Boot, gRPC, and REST patterns.',
      'Improved React and Next.js interfaces and integrated them with MongoDB-backed application workflows.',
      'Worked with Apache Solr and search-oriented systems to support efficient data discovery and retrieval.',
    ],
    technologies: ['Java', 'Spring Boot', 'gRPC', 'Next.js', 'React', 'MongoDB', 'Apache Solr'],
  },
];

export const currentResearch = [
  {
    id: 'embedded-multimedia',
    title: 'Real-Time Embedded Multimedia Intelligence',
    status: 'Primary research · Co-leading',
    tone: 'primary',
    visual: 'embedded',
    description:
      'Co-leading the development of an embedded AI system that processes real-time audio and video streams on Raspberry Pi devices. The work combines signal fingerprinting, machine-learning techniques, on-device processing, server-side inference, cloud storage, and device-management services through C++ and Python pipelines.',
    technologies: ['Embedded AI', 'Raspberry Pi', 'C++', 'Python', 'Signal Fingerprinting', 'Real-Time Processing', 'Cloud Systems'],
  },
  {
    id: 'llm-routing',
    title: 'Learning-Based LLM Routing',
    status: 'ECE496 capstone · Active research',
    tone: 'active',
    visual: 'routing',
    description:
      'Investigating how to select one suitable language model for each prompt before inference—without querying every candidate model. Active research and planned implementation directions include richer prompt representations, per-model quality and cost prediction, and uncertainty-aware selection.',
    details: ['Accuracy, cost, robustness & latency trade-offs', 'RouterArena-style benchmark evaluation'],
    technologies: ['LLMs', 'Model Routing', 'Machine Learning', 'NLP', 'Cost Optimization', 'Robustness', 'Inference'],
  },
  {
    id: 'tactile-accessibility',
    title: 'Dynamic Tactile Interfaces for Visual Accessibility',
    status: 'Active research · Supporting project',
    tone: 'supporting',
    visual: 'tactile',
    description:
      'Contributing to an ML pipeline that translates visual interface content into interactive tactile representations for blind and low-vision users. The research explores computer vision, content segmentation, agent-assisted interface control, and user-feedback loops for presenting digital information through a 3D haptic device.',
    technologies: ['Accessibility', 'Computer Vision', 'HCI', 'Machine Learning', 'Segmentation', 'Assistive Technology', 'Python'],
  },
  {
    id: 'trading-agent',
    title: 'ML-Powered Trading Agent',
    status: 'Active development · Approaching phase 3',
    tone: 'development',
    visual: 'trading',
    description:
      'Developing a market-analysis agent around quantitative indicators, financial data, and structured decision support. The next phase introduces backtesting and evaluation alongside planned machine-learning forecasting and signal-generation work; no performance results are claimed yet.',
    technologies: ['Python', 'Machine Learning', 'Financial Data', 'Quantitative Analysis', 'Backtesting', 'Agents'],
  },
  {
    id: 'cuda-kernels',
    title: 'CUDA Kernel Optimization',
    status: 'Early-stage development',
    tone: 'early',
    visual: 'cuda',
    description:
      'Starting a CUDA C++ optimization project focused on implementing and benchmarking RMSNorm kernels. Current work is early-stage; the longer-term plan is to compare CPU, PyTorch GPU, and custom CUDA implementations while profiling kernel and memory behaviour.',
    details: ['Block and thread configuration experiments', 'Planned fused RMSNorm + GELU operations', 'Future automated configuration selection'],
    technologies: ['CUDA C++', 'GPU Programming', 'RMSNorm', 'PyTorch', 'Kernel Optimization', 'Performance Profiling'],
  },
];

export const featuredProjects = [
  {
    id: 'skin-cancer',
    number: '01',
    title: 'Deep Learning Skin Cancer Classifier',
    eyebrow: 'Featured · Computer Vision',
    description:
      'Developed a multi-stage medical imaging pipeline using U-Net segmentation and ResNet-50 transfer learning on HAM10000. The newer architecture reached approximately 92% classification accuracy while pipeline changes reduced RAM usage by approximately 75%.',
    image: skinCancerImage,
    imageAlt: 'Illustration representing AI-assisted medical imaging',
    link: 'https://colab.research.google.com/drive/1-QpGZ_h3io6Ru_r1XQSGvvbvE3AIFTNA?usp=sharing',
    linkLabel: 'Open in Colab',
    technologies: ['Python', 'PyTorch', 'U-Net', 'ResNet-50', 'MLP', 'HAM10000'],
    metrics: [
      { value: '≈92%', label: 'classification accuracy' },
      { value: '≈75%', label: 'RAM reduction' },
    ],
    visual: 'image',
  },
  {
    id: 'raft',
    number: '02',
    title: 'Fault-Tolerant Distributed Key-Value Store',
    eyebrow: 'Distributed Systems · Go',
    description:
      'Built a distributed key-value system in Go using Raft consensus, supporting replicated state machines, automatic leader election, log replication, crash recovery, network partitions, unreliable RPCs, concurrent clients, exactly-once execution, and linearizable operations.',
    link: 'https://github.com/kiarashgb11/Fault-Tolerant-Distributed-Key-Value-Store',
    linkLabel: 'View architecture',
    technologies: ['Go', 'Raft', 'RPC', 'Concurrency', 'Persistence', 'Linearizability'],
    note: 'The public project documents the architecture and engineering work; course policy prohibits publishing the implementation.',
    visual: 'raft',
  },
  {
    id: 'maps',
    number: '03',
    title: 'Interactive Maps & Routing Engine',
    eyebrow: 'Algorithms · C++',
    description:
      'Engineered an interactive map application in C++ with routing, map visualization, external APIs, and algorithmic optimization. Implemented shortest-path search and Traveling Salesman-style routing work for practical navigation problems.',
    image: mapsImage,
    imageAlt: 'Interactive Toronto map application showing roads, routes, and navigation controls',
    link: 'https://github.com/kiarashgb11/TransitHub',
    linkLabel: 'View project',
    technologies: ['C++', 'EZGL', 'GTK', 'Pathfinding', 'APIs', 'Routing'],
    visual: 'image',
  },
];

export const additionalProjects = [
  {
    title: 'Gesture AI',
    type: 'Computer Vision',
    description: 'A deep-learning computer vision project exploring visual gesture recognition.',
    image: gestureImage,
    imageAlt: 'Hand with computer-vision landmark points overlaid',
    link: 'https://colab.research.google.com/drive/1tdia-3KiJwDZVjJyPkTS6F3jFk952OJv?usp=sharing',
    technologies: ['Deep Learning', 'Computer Vision'],
  },
  {
    title: 'Personal Portfolio',
    type: 'Web Engineering',
    description: 'A responsive engineering portfolio designed around systems, AI, and distributed software work.',
    image: portfolioImage,
    imageAlt: 'Earlier version of the personal portfolio website',
    link: 'https://github.com/kiarashgb11/Personal_portfolio',
    technologies: ['React', 'JavaScript', 'CSS'],
  },
  {
    title: 'Soccer Statistics App',
    type: 'Mobile Software',
    description: 'A React Native application for exploring club statistics, fixtures, and live football data through APIs.',
    image: soccerImage,
    imageAlt: 'Soccer statistics application showing standings and upcoming fixtures',
    link: 'https://github.com/VJalal/SportApp',
    technologies: ['React Native', 'JavaScript', 'APIs'],
  },
  {
    title: 'Digital Game System',
    type: 'FPGA & Hardware',
    description: 'A hardware game system exploring digital logic, VGA output, and hardware/software interaction on an FPGA.',
    image: fpgaImage,
    imageAlt: 'FPGA development board used for the digital game system',
    link: 'https://github.com/kiarashgb11/Digital-Game-System---FPGA-Development',
    technologies: ['Verilog', 'FPGA', 'ModelSim'],
  },
  {
    title: 'Smart Web Scraper & Summarizer',
    type: 'Applied AI',
    description: 'A web-scraping and summarization workflow for turning online content into concise, useful output.',
    image: scraperImage,
    imageAlt: 'Abstract illustration representing automated web data extraction',
    link: 'https://github.com/kiarashgb11/Smart-Web-Scrapper-Summarizer',
    technologies: ['Python', 'Web Scraping', 'Summarization'],
  },
  {
    title: 'Actuator Mount Design',
    type: 'Mechanical Design',
    description: 'A precision 3D actuator-mount design demonstrating engineering CAD and physical design thinking.',
    image: actuatorImage,
    imageAlt: 'CAD rendering of an actuator mounting component',
    link: 'https://github.com/kiarashgb11/Actuator_mount_AutoCad',
    technologies: ['AutoCAD', '3D Design'],
  },
];

export const expertiseGroups = [
  {
    number: '01',
    title: 'Systems & Compilers',
    description: 'Runtime internals, platform enablement, and low-level debugging across operating systems.',
    skills: ['Python', 'C', 'C++', 'CPython', 'Compiler & Runtime Development', 'POSIX', 'Linux', 'z/OS UNIX', 'Shell / Bash'],
  },
  {
    number: '02',
    title: 'AI & Machine Learning',
    description: 'Model development and practical computer-vision pipelines from training through evaluation.',
    skills: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'Deep Learning', 'Computer Vision', 'CNNs', 'U-Net', 'ResNet', 'ML Pipelines'],
  },
  {
    number: '03',
    title: 'Distributed Systems',
    description: 'Consensus, concurrency, recovery, and reasoning about correctness under failure.',
    skills: ['Go', 'Raft', 'RPC', 'Concurrency', 'Replicated State Machines', 'Fault Tolerance', 'Linearizability'],
  },
  {
    number: '04',
    title: 'Software & Backend',
    description: 'Product-facing software and data services spanning backend APIs through responsive clients.',
    skills: ['Java', 'Spring Boot', 'gRPC', 'REST APIs', 'JavaScript', 'React', 'Next.js', 'React Native', 'MongoDB', 'MySQL', 'Apache Solr'],
  },
  {
    number: '05',
    title: 'Security & Secure Software',
    description: 'Security-aware development, static analysis, dependency hygiene, and systems-level debugging.',
    skills: ['Secure Software', 'Bandit', 'Detect-Secrets', 'Dependency Security', 'OpenSSL', 'Cryptography', 'Authentication', 'Computer Security'],
  },
  {
    number: '06',
    title: 'Hardware & Architecture',
    description: 'Digital systems and the hardware boundary beneath modern software.',
    skills: ['Verilog', 'FPGA', 'ModelSim', 'Quartus', 'Computer Architecture', 'Assembly', 'Digital Systems'],
  },
  {
    number: '07',
    title: 'DevOps & Engineering Tools',
    description: 'Build, test, and delivery workflows that keep software dependable across platforms.',
    skills: ['Git', 'Docker', 'Buildbot', 'Ansible', 'pytest', 'pip', 'venv', 'CI/CD', 'IBM Clang'],
    secondary: true,
  },
  {
    number: '08',
    title: 'Business, Product & Finance',
    description: 'Secondary interests that help connect technical decisions to people, products, and practical value.',
    skills: ['Engineering Business', 'Technical Communication', 'Customer Experience', 'Technical Consulting', 'Product Thinking', 'Financial Analysis', 'Quantitative Finance', 'Markets'],
    secondary: true,
  },
];

export const writing = [
  {
    title: 'Best Practices for Encodings with Python',
    description: 'A practical guide to file tagging, EBCDIC, UTF-8, and predictable Python I/O on z/OS.',
    meta: 'IBM Community · July 2026',
    link: 'https://community.ibm.com/community/user/blogs/kiarash-alirezaei/2026/07/30/best-practices-for-encodings-with-python',
  },
  {
    title: 'Building a Python Package',
    description: 'An end-to-end guide to structuring, testing, building, and maintaining reusable Python packages.',
    meta: 'IBM Community · June 2026',
    link: 'https://community.ibm.com/community/user/blogs/kiarash-alirezaei/2026/06/22/building-a-python-package',
  },
  {
    title: 'Introducing pySDSF',
    description: 'Managing z/OS SDSF workloads with Python for job monitoring, output inspection, and system automation.',
    meta: 'IBM Community · June 2026',
    link: 'https://community.ibm.com/community/user/blogs/kiarash-alirezaei/2026/06/22/pysdsf',
  },
];

export const coursework = [
  'Algorithms & Data Structures',
  'Operating Systems',
  'Distributed Systems',
  'Computer Networks',
  'Machine Learning',
  'Artificial Intelligence',
  'Applied Deep Learning',
  'Computer Security',
  'Probability',
  'Computer Architecture',
];
