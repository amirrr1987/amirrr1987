import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  url: string;
}

interface Education {
  degree: string;
  institution: string;
  location: string;
  years: string;
}

export const useCvStore = defineStore('cv', () => {
  const personalInfo = ref({
    name: 'AMIR MAGHAMI',
    location: 'Tehran, Iran',
    phone: '+989198881400',
    email: 'maghami.a1987@gmail.com',
    linkedin: 'linkedin.com/in/amirrr1987',
    github: 'github.com/amirrr1987',
  });

  const professionalSummary = ref(
    'A results-driven and detail-oriented Senior Front-End Developer with over 6 years of comprehensive experience in designing, developing, and optimizing high-performance, responsive web applications. Expert in the Vue.js ecosystem, TypeScript, and modern front-end architecture. Proven ability to lead development initiatives, mentor junior developers, and collaborate effectively in fast-paced Agile environments to translate complex technical requirements and UI/UX designs into scalable, secure, and maintainable code.'
  );

  const coreCompetencies = ref({
    frontEnd: {
      languagesAndStyling: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'SCSS', 'Less', 'BEM'],
      frameworksAndLibraries: ['Vue.js (v2/v3)', 'Nuxt.js', 'React.js', 'Angular', 'Three.js', 'Lodash', 'Day.js', 'Axios'],
      uiFrameworks: ['Ant Design Vue', 'Vuetify', 'TailwindCSS', 'UnoCSS', 'WindiCSS', 'Bootstrap'],
      stateManagement: ['Vuex', 'Pinia'],
    },
    backEnd: {
      frameworks: ['Nest.js', 'Express.js'],
      databasesAndOrms: ['PostgreSQL', 'MongoDB', 'SQL', 'TypeORM'],
    },
    toolsAndMethodologies: {
      versionControl: ['Git', 'GitHub', 'GitLab', 'Git Flow'],
      testing: ['Cypress', 'Unit Testing', 'End-to-End (E2E) Testing'],
      buildToolsAndPlatforms: ['Vite', 'Webpack', 'Linux', 'PWA', 'RESTful APIs'],
      projectManagement: ['Agile', 'Scrum', 'JIRA'],
      devOpsAndOthers: ['Docker', 'Cron Job', 'CI/CD principles'],
    },
  });

  const professionalExperience = ref<Experience[]>([
    {
      role: 'Front-End Developer',
      company: 'HTSC',
      location: 'Tehran, Iran',
      period: 'December 2023 – Present',
      responsibilities: [
        'Architected and developed dynamic user interfaces for open banking customer and back-office panels, improving user engagement metrics by over 25%.',
        'Engineered a complex data visualization module using advanced graphing libraries, enabling clearer insights into financial data for stakeholders.',
        'Optimized application performance by refactoring legacy code and implementing efficient rendering techniques, resulting in a 40% reduction in page load times.',
        'Collaborated in a cross-functional Agile team to meet project milestones, consistently delivering high-quality features ahead of schedule.',
      ],
      technologies: ['Vue.js 3', 'Ant Design Vue', 'TailwindCSS', 'TypeScript', 'Nest.js', 'Angular', 'SQL', 'PostgreSQL', 'TypeORM'],
    },
    {
      role: 'Vue.js Developer',
      company: 'Mahdaad (Hacoupian Subsidiary)',
      location: 'Tehran, Iran',
      period: 'July 2023 – December 2023',
      responsibilities: [
        'Developed and maintained reusable front-end components for four major software projects, increasing development speed by 30%.',
        'Ensured high code quality and performance by implementing comprehensive testing with Cypress and conducting rigorous code reviews.',
        'Translated complex UI/UX designs from Figma into pixel-perfect, functional, and responsive web applications.',
      ],
      technologies: ['Vue.js 3', 'Ant Design Vue', 'UnoCSS', 'Less', 'Zod', 'TypeScript', 'Cypress', 'Cron job', 'Day.js'],
    },
    {
      role: 'Vue.js Developer',
      company: 'Hacoupian',
      location: 'Tehran, Iran',
      period: 'April 2021 – July 2023',
      responsibilities: [
        'Led the front-end development of multiple high-traffic projects, establishing coding standards and best practices for the team.',
        'Mentored two junior developers, fostering their skill development and ensuring adherence to high-quality code standards.',
        'Contributed to architectural decisions and technology stack evaluations, leading to the adoption of more efficient development tools.',
      ],
      technologies: ['Vue.js 3', 'Ant Design Vue', 'WindiCSS', 'Less', 'Zod', 'TypeScript', 'Cypress'],
    },
    {
      role: 'Vue.js Developer',
      company: 'Asrevira',
      location: 'Tehran, Iran',
      period: 'September 2020 – May 2021',
      responsibilities: [
        'Developed and maintained front-end applications for core financial products, focusing on security and reliability.',
        'Implemented PWA features to enhance offline capabilities and user accessibility.',
      ],
      technologies: ['Vue.js 2', 'Vuetify', 'SCSS', 'PWA', 'HTML', 'CSS'],
    },
    {
      role: 'Front-End Developer',
      company: 'HakimTejarat',
      location: 'Tehran, Iran',
      period: 'June 2019 – September 2020',
      responsibilities: [
        'Redesigned and developed the main corporate website, improving user experience and mobile responsiveness.',
        'Managed front-end implementation from concept to deployment.',
      ],
      technologies: ['Vue.js', 'HTML', 'CSS', 'SCSS', 'BEM', 'Linux', 'Wordpress', 'Bootstrap'],
    },
  ]);

  const projects = ref<Project[]>([
    {
      name: 'CV Builder',
      description: 'A dynamic web application for creating, customizing, and exporting professional resumes.',
      technologies: ['Vue.js', 'Pinia', 'TailwindCSS', 'Vite'],
      url: 'https://cvbuilder-amirmaghami.netlify.app/',
    },
    {
      name: 'DongDong App',
      description: 'A real-time, interactive group-play game application.',
      technologies: ['Vue.js', 'Socket.IO', 'UnoCSS'],
      url: 'https://dongdong-amirmaghami.netlify.app/',
    },
    {
      name: 'The Movie Database',
      description: 'A responsive web application for Browse and discovering movie information using a third-party API.',
      technologies: ['Vue.js', 'Axios', 'CSS Grid/Flexbox'],
      url: 'https://themovie-amirmaghami.netlify.app/',
    },
  ]);

  const education = ref<Education[]>([
    {
      degree: 'Associate degree of Science in IT',
      institution: 'Applied Sciences & Technology',
      location: 'Abhar',
      years: '2011 – 2013',
    },
  ]);

  const fullName = computed(() => personalInfo.value.name);

  const allSkills = computed(() => [
    ...coreCompetencies.value.frontEnd.languagesAndStyling,
    ...coreCompetencies.value.frontEnd.frameworksAndLibraries,
    ...coreCompetencies.value.frontEnd.uiFrameworks,
    ...coreCompetencies.value.frontEnd.stateManagement,
    ...coreCompetencies.value.backEnd.frameworks,
    ...coreCompetencies.value.backEnd.databasesAndOrms,
    ...coreCompetencies.value.toolsAndMethodologies.versionControl,
    ...coreCompetencies.value.toolsAndMethodologies.testing,
    ...coreCompetencies.value.toolsAndMethodologies.buildToolsAndPlatforms,
    ...coreCompetencies.value.toolsAndMethodologies.projectManagement,
    ...coreCompetencies.value.toolsAndMethodologies.devOpsAndOthers,
  ]);

  function updateName(newName: string) {
    personalInfo.value.name = newName;
  }

  return {
    personalInfo,
    professionalSummary,
    coreCompetencies,
    professionalExperience,
    projects,
    education,
    fullName,
    allSkills,
    updateName
  };
});