//import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import { store } from '../store/index.js';
import { eventBus } from '../main.js';
//import createListView from '../views/CreateListView.js';
// import createListView from '../views/CreateListView.js';
// Vue.use(VueRouter);

const routes = [

    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url주소
      path: '/news',
      name: 'news',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
      //component: createListView('NewsView'),
      //component: createListView,
      //component: createListView,
      beforeEnter: (to, from, next) => {
        console.log('to', to);
        console.log('from', from);
        console.log('next', next);
        console.log('trxCommit', store.state.trxCommit);
        
        eventBus.emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log('fetchedNews');
          // eventBus.emit('end:spinner');
          next();
        })
        .catch((error) => {
          console.log(error);
        });
      },
    },
    {
      path: '/ask',
      name: 'ask',
      component: AskView,
      //component: createListView,
      //component: createListView,
      beforeEnter: (to, from, next) => {
        console.log('to', to);
        console.log('from', from);
        console.log('next', next);
        console.log('trxCommit', store.state.trxCommit);
        
        eventBus.emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log('fetchedAsk');
          // eventBus.emit('end:spinner');
          next();
        })
        .catch((error) => {
          console.log(error);
        });
      },
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      //component: createListView,
      //component: createListView,
      beforeEnter: (to, from, next) => {
        console.log('to', to);
        console.log('from', from);
        console.log('next', next);
        console.log('trxCommit', store.state.trxCommit);
        
        eventBus.emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
        .then(() => {
          console.log('fetchedJobs');
          // eventBus.emit('end:spinner');
          next();
        })
        .catch((error) => {
          console.log(error);
        });
      },      
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      name: 'item',
      component: ItemView,
    }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

console.log('router:', router);
export default router;

