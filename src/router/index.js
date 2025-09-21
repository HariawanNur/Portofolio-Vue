import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";
import projects from "@/data/projects";

// Mapping project khusus kalau perlu override file default
const specialComponents = {
  "accountcheck": () => import("../views/SingleProject.vue"),
  "xss-shield": () => import("../views/XssShield.vue"),
  "cloudinary-powered-media-uploader": () => import("../views/CloudinaryPoweredMediaUploader.vue"), // <- ini
};

// Helper untuk bikin slug dari title
const slugify = (title) => title.toLowerCase().replace(/\s+/g, "-");

// Buat object mapping slug ke component loader
const projectComponents = {};
projects.forEach((p) => {
  const slug = slugify(p.title);
  if (specialComponents[slug]) {
    projectComponents[slug] = specialComponents[slug];
  } else {
    // default mengarah ke file dengan nama tanpa spasi
    projectComponents[slug] = () =>
      import(`../views/${p.title.replace(/\s+/g, "")}.vue`);
  }
});

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: () => import("../views/About.vue") },
  { path: "/projects", name: "Projects", component: Projects },

  // Route dinamis untuk semua project
  {
    path: "/projects/:slug",
    name: "ProjectDynamic",
    props: true,
    component: { render: (h) => h("router-view") }, // dummy, diganti di beforeResolve
    beforeEnter: async (to, from, next) => {
      const slug = to.params.slug.toLowerCase();
      const loader = projectComponents[slug];
      if (!loader) return next("/projects"); // redirect kalau slug ga ada
      const comp = await loader();
      to.meta.component = comp.default;
      next();
    },
  },

  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Ganti component sebelum render
router.beforeResolve((to, from, next) => {
  if (to.meta.component) to.matched[0].components.default = to.meta.component;
  next();
});

// Update title dinamis
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  next();
});

export default router;
