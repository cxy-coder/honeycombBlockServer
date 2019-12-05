import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'
import BuildLevelList from '../views/levels/BuildLevelList.vue';
import Picture from '../views/picture/Picture.vue';

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { name: 'picture', path: '/picture/picture', component: Picture },
      { name: 'build-level-list', path: '/levels/buildLevelList', component: BuildLevelList },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
