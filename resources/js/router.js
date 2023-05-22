import Vue from "vue"
import VueRouter from "vue-router"

import Home from "./components/Home.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
//   {
//     path: "/event/:id",
//     name: "event-show",
//     component: EventShow,
//     props: true
//   },
]

const router = new VueRouter({
  mode: "history",
  routes
})

// router.beforeEach((to, from) => {
//   console.log(to);
//   console.log(from);
//   console.log(window.User);
//   return { name:'home'}
// })

export default router
