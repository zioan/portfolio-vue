import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";

import i18n from "../i18n.js";

// console.log(i18n.global.locale);

const routes = [
  {
    // path: i18n.global.locale === "de" ? "/:locale" : "/",
    path: "/:locale",
    component: {
      template: "<router-view></router-view>",
    },
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale;
      const supported_locales = ["en", "de"];

      if (!supported_locales.includes(locale)) return next("en");
      if (i18n.global.locale !== locale) {
        i18n.global.locale = locale;
      }

      return next();
    },
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "resume",
        name: "Resume",
        component: Resume,
      },
      {
        path: "portfolio",
        name: "Portfolio",
        component: Portfolio,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect() {
      return "en";
    },
  },
];
// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/about",
//     name: "About",
//     component: About,
//   },
//   {
//     path: "/resume",
//     name: "Resume",
//     component: Resume,
//   },
//   {
//     path: "/portfolio",
//     name: "Portfolio",
//     component: Portfolio,
//   },
//   {
//     path: "/contact",
//     name: "Contact",
//     component: Contact,
//   },
// ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
