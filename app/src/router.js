import Vue from 'vue';
import Router from 'vue-router';
import AbandonTable from '@/components/abandonTable.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'AbandonTable',
      component: AbandonTable,
    },
  ],
});
