import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/hello/container.vue'
import Board from '@/components/board/container.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/board/:id',
      name: 'Board',
      component: Board
    }
  ]
})

export default router;
