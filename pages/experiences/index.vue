<template>
  <section class="p-4 sm:p-6 lg:p-8 text-gray-400">
    <h2 class="section-title">Experience</h2>
    <div class="grid md:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
      <template v-for="(exp, _index) in experience" :key="_index">
        <UCard>
          <template #header>
            <img class="w-full" :src="exp.logo" :alt="exp.companyName" />
          </template>

          <h3 class="text-base">
            {{ exp.title }}
          </h3>
          <UDivider class="my-4" />
          <h4>{{ exp.companyName }}</h4>
          <template #footer>
            <NuxtLink :to="`experiences/${exp.id}`">View-more</NuxtLink>
          </template>
        </UCard>
      </template>
    </div>
  </section>
</template>
<script setup lang="ts">
const experience = reactive([
  {
    id: 10,
    logo: "https://zenprospect-production.s3.amazonaws.com/uploads/pictures/65512dce242f1600014c03a0/picture",
    title: "Vue.js Developer ",
    link: "http://www.htsc.ir/",
    companyName: "HTSC",
    category: "Bank",
    startAt: "2023-12",
    endAt: new Date(),
    responsibilities: [
      "Worked on development and maintenance of the open banking backoffice panel and customer panel",
      "Designed and implemented the organization of node graph for data visualization",
      "Collaborated with team members to ensure project milestones were met",
      "Troubleshooted and debugged issues in front-end codebase",
      "Ensured cross-browser compatibility and optimized application performance",
    ],
    projects: ["open banking panel", "oraginzie node graph"],
    skills: [
      "Vue.js 3",
      "Nuxt",
      "AntDV",
      "Unocss",
      "Less",
      "Zod",
      "TypeScript",
      "Nest",
      "Angular",
    ],
  },
  {
    id: 9,
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAMAAADdXFNzAAAAeFBMVEX///+5qapySU5XGCF3UFS/sLJJAABUERuBX2NHAADFuLlTDRlWFh9mNDpSChdkMDeDY2eIaWxfKTBEAAD49vZDAADRx8jLv8FLAABRABLr5udOAAqii41cISmbgoQ2AADf19hpOT+Pc3a0o6Xz8PCWfH+um51vQkiF3vZ/AAABAUlEQVR4AYXTBQKCQBBA0U+ndJet9z+h7So9NG87AElWpkPVAFTdmHFDN0HSlfmwbGRjwR0TZSncTd8Nz/Pcf/fpsR8EYWTMegyQpHPuhQCY3ozrGQB5Me1uCVRA4U563QAt0JWTHleQbXews6bc2AOHogMiY8ILCbDcAjjWE54mYBdKkcMpHbsXAKonnkMvsk+++F3OwEW973boQy87YP9styMD53Lg1g6q+D0OJzEEwg0fuNTvcTwCrSFc/PsMi7EXaZ8uyqysv4Gu4n93VKCpP15fgKvxn98JArP+TfTjy+u33/M8RYT7+RI+v77X9sfq/prfn65jmQCaOs2KasMdMR4WuJmL+zQAAAAASUVORK5CYII=",
    title: "Vue.js Developer ",
    companyName: "Mahdaad",
    link: "https://mahdaad.com/",
    category: "Software",
    startAt: "2023-07",
    endAt: "2023-12",
    responsibilities: [
      "Developed and maintained front-end components for various projects within the Mahdaad subsidiary of Hacoupian",
      "Collaborated with the Hacoupian development team to implement features and enhancements in line with overall company objectives",
      "Ensured code quality and performance optimization in Vue.js applications for Mahdaad's specialized projects",
      "Participated in code reviews and provided constructive feedback to the broader Hacoupian team",
      "Worked closely with designers to translate UI/UX designs into code for Mahdaad's projects",
      "Assisted in troubleshooting and resolving technical issues specific to Mahdaad's projects as needed",
    ],
    projects: ["survey", "hr exam", "lanudry amngment", "work calender"],
    skills: [
      "Vue.js 3",
      "AntDV",
      "UnoCSS",
      "Less",
      "Zod",
      "TypeScript",
      "Cypress",
      "Cron job",
      "Dayjs",
      "",
    ],
  },
  {
    id: 8,
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAARCAMAAAD5TTx4AAAAPFBMVEVHcEwgHyIhICIhICMhICMhICMhICMhICMiISQiISQhISMhICMhISQhICMhICQiISQhICMhICMhICMhICN+Nq7jAAAAFHRSTlMADxs5cFdjR/2vepfUyeW6LoejJSnRX/4AAAC2SURBVHgBjckFkgQxDMBAxQ57wv9/6zHjdqlQfOZEEc93IaYQfPC5VL6xzKOrXcY3Lfc4ujab49vJRUdOV68rmcnnufemDfLYfrThPs2+trltlOZ2KolP4tW35Ezu/Ro5cQPDHzFqODUs8QQf6kIrRmCkImm7jRjRV8IKy0gD24nB0upXwQ32KUQTyvQW4mlM5IAS5LGTEDgHpuB4d5giKlP4gYsucdSlH+ecEVX0xylTDujk1T0vrQd/yOFK4QAAAABJRU5ErkJggg==",
    title: "Vue.js Developer ",
    companyName: "Hacoupian",
    link: "https://hacotech.hacoupian.net/",
    category: "Cloth",
    startAt: "2021-04",
    endAt: "2023-07",
    responsibilities: [
      "Led the development of front-end solutions for various projects within the Hacoupian organization",
      "Collaborated closely with cross-functional teams to implement features and enhancements aligned with company objectives",
      "Ensured adherence to coding standards and best practices in Vue.js development",
      "Participated in Agile development processes, including sprint planning, daily stand-ups, and retrospectives",
      "Conducted code reviews and provided mentorship to junior developers to foster skill development",
      "Contributed to architectural discussions and provided input on technology stack decisions",
      "Investigated and resolved technical issues and bugs to maintain application stability",
      "Stayed updated on industry trends and emerging technologies to drive innovation and continuous improvement",
    ],
    skills: [
      "Vue.js 3",
      "AntDV",
      "WindiCSS",
      "Less",
      "Zod",
      "TypeScript",
      "Cypress",
    ],
  },
  {
    id: 7,
    logo: "https://thumb2.jobinjacdn.com/z2DsuDdZxhqZmuFGkoRfU6ZOMIk=/fit-in/128x128/filters:strip_exif():fill(transparent):quality(100)/https://mstorage2.jobinjacdn.com/other/files/uploads/images/68d326f2-bc03-11e9-8646-d6b790452c1a_6af03b6f-6bc2-41a5-8abf-8bdd0775d523/main.png",
    title: "Vue.js Developer ",
    link: "https://asrevira.com",
    companyName: "Asrevira",
    category: "Financial",
    startAt: "2020-09",
    endAt: "2021-05",
    responsibilities: [
      "Developed and maintained front-end applications for Asrevira's financial products and services",
      "Collaborated with the development team to implement features and enhancements according to project requirements",
      "Ensured high code quality and performance optimization in Vue.js applications",
      "Participated in Agile development methodologies, including sprint planning and daily stand-ups",
      "Conducted thorough testing and debugging of front-end code to identify and resolve issues",
      "Worked closely with UI/UX designers to implement visually appealing and user-friendly interfaces",
      "Assisted in the evaluation and adoption of new technologies to improve development processes",
      "Provided technical support and guidance to team members as needed",
    ],
    projects: ["potral panel"],
    skills: ["Vue.js 2", "Vuetify", "SCSS", "PWA"],
  },
  {
    id: 6,
    logo: "https://www.sabads.com/images/thumbs/0192787_-hakim-tejarat-sahand_420.png",
    title: "Front End Developer ",
    link: "https://www.hakimtejarat.com",
    companyName: "HakimTejarat",
    category: "Pharmacology",
    startAt: "2019-06",
    endAt: "2020-09",
    responsibilities: [
      "Developed and maintained front-end features and functionalities for HakimTejarat's pharmacology-related projects",
      "Collaborated with the development team to translate business requirements into technical solutions",
      "Ensured compliance with coding standards and best practices in Vue.js development",
      "Participated in Agile development methodologies, including sprint planning and retrospectives",
      "Performed code reviews and provided feedback to ensure code quality and consistency",
      "Worked closely with stakeholders to gather requirements and define project scope",
      "Contributed to the design and implementation of responsive and intuitive user interfaces",
      "Troubleshooted and resolved technical issues to ensure smooth functioning of web applications",
    ],
    projects: ["company website"],
    skills: [
      "Vue.js",
      "HTML",
      "CSS",
      "SCSS",
      "BEM",
      "Linux",
      "Wordpress",
      "Bootstrap",
    ],
  },
  {
    id: 5,
    logo: "https://static.evand.net/images/organizations/logos/original/29cf2646f456cc05dd1159984c0b3222.jpg",
    title: "Front End Developer ",
    companyName: "ABC Startup Accelerator",
    link: "http://www.ablockchain.center/",
    category: "Blockchain",
    startAt: "2018-09",
    endAt: "2019-06",
    responsibilities: [
      "Developed front-end solutions for startup landing pages and other projects within the accelerator program",
      "Collaborated closely with startups and internal teams to understand project requirements and goals",
      "Implemented responsive and user-friendly interfaces using HTML, CSS, and JavaScript",
      "Ensured consistency and adherence to design specifications across multiple projects",
      "Participated in Agile development processes, including sprint planning and daily stand-ups",
      "Conducted code reviews and provided feedback to ensure code quality and maintainability",
      "Contributed to the optimization and performance tuning of web applications",
      "Stayed updated on industry trends and best practices to drive innovation and improvement",
    ],
    projects: ["oneex", "startups landing pages"],
    skills: ["HTML", "CSS", "Grid", "flex", "Bootstrap"],
  },
  {
    id: 4,
    logo: "https://www.api.tritapp.net/v1/getPhoto/user/603cb942ecbae569b64bd767",
    title: "Ventilator Technician",
    link: "https://www.shalchilar.net/",
    companyName: "Shalchilar",
    category: "Biomedical Engineering",
    startAt: "2016-05",
    endAt: "2018-10",
    projects: ["update website"],
    responsibilities: [
      "Developed and maintained front-end components for anesthesia and breathing ventilator management systems",
      "Collaborated with the engineering team to integrate front-end interfaces with backend systems",
      "Ensured the usability and reliability of web applications through thorough testing and debugging",
      "Participated in training sessions and workshops to enhance technical skills and knowledge",
      "Contributed to the design and implementation of user interfaces for medical equipment management",
      "Assisted in the documentation of technical specifications and user manuals",
      "Provided technical support and troubleshooting assistance to medical staff as needed",
    ],
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    logo: "https://bayatechgroup.com/wp-content/uploads/2020/08/logo.jpg",
    title: "Help Desk",
    companyName: "bayatechgroup",
    link: "https://bayatechgroup.com",
    category: "Household appliances holding",
    startAt: "2015-10",
    endAt: "2016-06",
    projects: ["update website"],
    responsibilities: [
      "I dealt with employees' computer problems in this holding and learned and implemented new topics in the Windows Active Directory.",
    ],
    skills: ["HTML", "CSS", "Wordpress"],
  },
  {
    id: 2,
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAOVBMVEVHcEz////////3/P2s1uBmt8kBmLNUsMR3vs4AkK293ubM5+2IxtTc7vImo7vq9fi83uYaoLmaz9sGMgkEAAAAEnRSTlMAqP//////////////////qKg0sQk4AAAA+ElEQVR4AX3SB3KFMAxF0c+TXFSMf7T/xWYopk5yh6kHcP18JqwRp1yYcDZ9dqQqkksWqfRCFSkGwIoIP9AlG7baLPWGLgVnSeoF9bChfKJk3JulD/x6e2BzPVAJrwb+yOtLovYnBl/QLkAOsKXadsyOa7Y+QP+uKBdqweZkfe5xII3PalcmY8B4Gsh9oR4dbOAwWGCgek5eUwChZoGwhAMJUF0+rmyqRNFgfeBSb+qzjQmj0RU5VcUaKaDAFSMwyjXRjrJhowP7eSrN/jmVUp1tfEbGnoofmGVpZgBcZCnXy+2jpjVL5iy58hh74JoujEtXBBXCHX8BkmYNeW0QlJEAAAAASUVORK5CYII=",
    title: "Help Desk",
    link: "https://mofidsch.ir/m1/",
    companyName: "Mofid middle school",
    category: "Education",
    startAt: "2014-08",
    endAt: "2015-09",
    responsibilities: [
      "In this educational system, I was solving users' problems, and since then, I have started teaching HTML and CSS and completed my first project.",
    ],
    skills: ["HTML", "CSS"],
  },
  {
    id: 1,
    logo: "http://fpsedu.com/uploads/farzanegan-logo_245_6476.png",
    title: "Help Desk",
    link: "http://fpsedu.com/",
    companyName: "Farzanegan Pouya High School",
    category: "Education",
    startAt: "2012-09",
    endAt: "2013-09",
    responsibilities: [
      "In this educational system, I was solving users' problems.",
    ],
    skills: ["Network+", "Linux"],
  },
]);
</script>
