import Vue from 'vue';
import App from './App.vue';
import store from './config/store';

import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

new Vue({
    render: h => h(App),
    store,
}).$mount('#app')