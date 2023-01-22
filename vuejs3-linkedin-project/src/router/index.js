import { createRouter, createWebHistory } from "vue-router";
import MyHome from "../views/MyHome.vue";
import MyContact from "../views/MyContact.vue";
import NotFound from "../views/NotFound.vue";
import ProductDetails from "../views/ProductDetails.vue";


const routes = [
  {
    path: "/",
    name: "MyHome",
    component: MyHome
  },
  {
    path: "/contactez-nous",
    name: "MyContact",
    component: MyContact,
    alias: "/contact"
  },
  {
    path: '/products/:name',
    name: "product-details",
    component: ProductDetails,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
