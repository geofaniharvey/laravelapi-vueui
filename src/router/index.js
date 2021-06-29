import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/friends/Home.vue'
import Createfriends from '../views/friends/Createfriends.vue'
import Editfriends from '../views/friends/Editfriends.vue'
import Detailfriends from '../views/friends/Detailfriends.vue'
import Groups from '../views/groups/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createfriends',
    name: 'Createfriends',
    component: Createfriends
  },
  {
    path: '/editfriends/:id',
    name: 'Editfriends',
    component: Editfriends
  },
  {
    path: '/detailfriends/:id',
    name: 'Detailfriends',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detailfriends
  },
  {
    path: '/editfriends/:id',
    name: 'Editfriends',
    component: Editfriends
  },
  {
    path: '/groups/:id',
    name: 'groups.index',
    component: Groups
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
