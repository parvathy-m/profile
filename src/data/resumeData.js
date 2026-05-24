export const resumeData = {
  profile: {
    name: 'Parvathy Mohan',
    title: 'Backend Software Engineer | Java',
    location: 'India',
    email: 'parvathymohan016@gmail.com',
    phone: '+91 7025871892',
    linkedin: 'https://linkedin.com/in/parvathy-Mohan',
    linkedinDisplay: 'linkedin.com/in/parvathy-Mohan',
    github: 'https://github.com/parvathy-m',
    githubDisplay: 'parvathy-m.github.io',
    summary: 'Software Engineer with 4+ years of experience in backend development using Java, Spring Boot, and Microservices architecture. Skilled in designing scalable REST APIs, implementing secure authentication (JWT/OAuth2), and optimizing database performance. Experienced in Agile environments with strong focus on clean code, unit testing, and production stability.'
  },
  skills: [
    // Languages
    { name: 'Java', level: 95, category: 'Languages', icon: '☕' },
    { name: 'SQL', level: 90, category: 'Languages', icon: '💾' },
    // Backend
    { name: 'Spring Boot', level: 95, category: 'Backend', icon: '🍃' },
    { name: 'Spring Security', level: 90, category: 'Backend', icon: '🔒' },
    { name: 'JPA / Hibernate', level: 92, category: 'Backend', icon: '☕' },
    { name: 'REST APIs', level: 95, category: 'Backend', icon: '⚡' },
    { name: 'JWT', level: 90, category: 'Backend', icon: '🔑' },
    // Testing
    { name: 'JUnit 5', level: 90, category: 'Testing', icon: '🧪' },
    { name: 'Mockito', level: 88, category: 'Testing', icon: '🃏' },
    { name: 'Postman', level: 95, category: 'Testing', icon: '🚀' },
    // Databases
    { name: 'MySQL', level: 90, category: 'Databases', icon: '🐬' },
    { name: 'PostgreSQL', level: 88, category: 'Databases', icon: '🐘' },
    { name: 'MongoDB', level: 82, category: 'Databases', icon: '🍃' },
    { name: 'MS SQL', level: 85, category: 'Databases', icon: '💾' },
    // DevOps
    { name: 'Git', level: 90, category: 'DevOps', icon: '🌴' },
    { name: 'GitHub', level: 90, category: 'DevOps', icon: '🐙' },
    { name: 'GitLab', level: 88, category: 'DevOps', icon: '🦊' },
    { name: 'Maven', level: 92, category: 'DevOps', icon: '📦' },
    { name: 'Gradle', level: 85, category: 'DevOps', icon: '🐘' },
    { name: 'Jenkins', level: 80, category: 'DevOps', icon: '🤵' },
    // Architecture
    { name: 'Microservices', level: 92, category: 'Architecture', icon: '🏗️' },
    { name: 'Monolithic', level: 90, category: 'Architecture', icon: '🏛️' },
    // Methodologies
    { name: 'Agile (Scrum)', level: 95, category: 'Methodologies', icon: '🔄' },
    { name: 'JIRA', level: 90, category: 'Methodologies', icon: '📊' }
  ],
  projects: [
    {
      title: 'CMM (Cargo Management Module)',
      description: 'A robust voyage planning and cargo tracking system. Engineered backend REST API architecture to manage and optimize voyage allocation routes, scheduling, and cargo tracking flows.',
      tags: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'JPA'],
      github: 'https://github.com/parvathy-m',
      demo: 'https://parvathy-m.github.io'
    },
    {
      title: 'ACA (Automatic Cargo Allocation)',
      description: 'An advanced automatic allocation system designed to optimize stowage plans. Utilized algorithmic processing and optimization strategies to allocate space efficiently while maintaining center-of-gravity parameters.',
      tags: ['Java', 'Spring Boot', 'Microservices', 'Hibernate', 'MySQL'],
      github: 'https://github.com/parvathy-m',
      demo: 'https://parvathy-m.github.io'
    },
    {
      title: 'QC4 Web App',
      description: 'A questionnaire data management and reporting system. Designed to aggregate questionnaires, manage responses, and generate structured dynamic business reports.',
      tags: ['Java', 'Spring Boot', 'REST APIs', 'MS SQL', 'JUnit 5'],
      github: 'https://github.com/parvathy-m',
      demo: 'https://parvathy-m.github.io'
    },
    {
      title: 'Levica',
      description: 'A high-security transaction system integrating electronic currency transactions and reward tokens. Implemented bulletproof Spring Security rules, OAuth2, and JWT structures to verify digital wallets.',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'Mockito'],
      github: 'https://github.com/parvathy-m',
      demo: 'https://parvathy-m.github.io'
    },
    {
      title: 'Primary & Secondary IDMS',
      description: 'A comprehensive Identity Management System featuring REST APIs, role-based admin control dashboards, credential tracking, and user privilege control modules.',
      tags: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'MongoDB', 'JIRA'],
      github: 'https://github.com/parvathy-m',
      demo: 'https://parvathy-m.github.io'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Siena College of Professional Studies',
      period: '2015 – 2018',
      score: 'Graduated'
    },
    {
      degree: '12th Grade (Higher Secondary)',
      institution: 'SN HSS Sreekandeswaram',
      period: '2014 – 2015',
      score: 'Score: 83%'
    },
    {
      degree: '10th Grade (SSLC)',
      institution: 'SCS HSS Valamangalam',
      period: '2012 – 2013',
      score: 'Score: 85%'
    }
  ],
  passions: [
    { name: 'Travel', icon: '✈️' },
    { name: 'Coding', icon: '💻' },
    { name: 'Arts & Crafts', icon: '🎨' },
    { name: 'Music', icon: '🎵' }
  ],
  experience: [
    {
      role: 'Backend Software Engineer',
      company: 'Tech Solutions / Software Corp',
      location: 'India',
      period: '4+ Years Experience',
      description: [
        'Developed scalable microservices backend applications using Java and Spring Boot ecosystems.',
        'Designed and optimized relational databases queries using Hibernate, MySQL, and PostgreSQL, increasing execution performance.',
        'Wrote robust unit and integration testing files using JUnit 5 and Mockito, ensuring 90%+ code coverage on main API channels.',
        'Enforced JWT-based stateless session authentications and secured user roles in monolithic and distributed architectures.'
      ],
      tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'REST APIs', 'PostgreSQL', 'Jira']
    }
  ]
};
