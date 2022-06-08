import { createRouter, createWebHistory } from 'vue-router'
import TheSite from "@/views/TheSite.vue";
import TheSiteHome from "@/pages/site/TheSiteHome.vue";
import TheSiteSkills from "@/pages/site/TheSiteSkills.vue";
import TheSiteProjects from "@/pages/site/TheSiteProjects.vue";
import TheSiteContact from "../pages/site/TheSiteContact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "TheSite",
      component: TheSite,
      children: [
        {
          path: "/",
          name: "TheSiteHome",
          component: TheSiteHome,
        },
        {
          path: "/skills",
          name: "TheSiteSkills",
          component: TheSiteSkills,
        },
        {
          path: "/projects",
          name: "TheSiteProjects",
          component: TheSiteProjects,
        },
        {
          path: "/contact",
          name: "TheSiteContact",
          component: TheSiteContact,
        },
      ],
    },
  ],
    scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router
