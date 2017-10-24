import Vue from 'vue';
import Router from 'vue-router';

// Containers
import Default from '@/containers/Default';

// Views
import Inicio from '@/views/Inicio';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Inicio',
      component: Default,
      children: [
        {
          path: '/inicio',
          name: 'Inicio',
          component: Inicio,
        },
        {
          path: '/atividades',
          name: 'Atividades',
        },
        {
          path: '/explorar',
          name: 'Explorar',
        },
      ],
    },
  ],
});
