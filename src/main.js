import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/index.js';
import { store } from './store/index.js';
// createApp(App).use(router).mount('#app')
import mitt from 'mitt'
 
const eventBus = mitt();

const app = createApp(App);

app.config.globalProperties.eventBus = eventBus;

app.use(router);
app.use(store);

app.mount('#app');

export {
  eventBus
}