/** Live URLs from Netlify deploys (amirmaghami team) */
export function netlifyAmir(subdomain: string) {
  return `https://${subdomain}-amirmaghami.netlify.app/`;
}

export const liveDemos = {
  portfolio: "https://amirmaghami.ir/",
  cvBuilder: netlifyAmir("cvbuilder"),
  skillJumper: netlifyAmir("skill-jumper"),
  vueQuest: "https://vuequest-amirmaghami.netlify.app/",
  mazraeStore: "https://mazrae-aftabgardan.netlify.app/",
  arazChat: netlifyAmir("arazapp"),
  arazChatAlt: netlifyAmir("araz-chat"),
  movieDb: netlifyAmir("themovie"),
  dongdong: netlifyAmir("dongdong"),
  financeTracker: netlifyAmir("finance-tracker"),
  onlineCourse: netlifyAmir("online-course"),
  tour: netlifyAmir("tour"),
  panel: netlifyAmir("panel"),
  mafia: netlifyAmir("mafia"),
  threeJs: netlifyAmir("threejs"),
  portfolio3d: netlifyAmir("3dportfolio"),
  learnHub: netlifyAmir("learnhub"),
  shopNuxt: netlifyAmir("shopnuxt"),
  shopClient: netlifyAmir("shop-client"),
  nuxtStore: netlifyAmir("nuxtstore"),
  masteringNuxt3: netlifyAmir("mastering-nuxt3"),
  panelAmirshop: netlifyAmir("panel-amirshop"),
} as const;
