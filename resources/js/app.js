require('./bootstrap');

import { createApp } from 'vue'
import '../css/app.css'
import Home from './components/Home.vue';
import store from './store';
import router from './router/index,js';

createApp(Home)
    .use(store)
    .use(router)
    .mount('#app')