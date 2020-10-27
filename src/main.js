import Vue from 'vue';
import App from './App.vue';
import User from '@/User';
import ApiConfig from '@/config/api';

import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false

User.getData(ApiConfig.baseUrl + ApiConfig.routes.getData.url);

new Vue({
    data: {
        user: User
    },
    render: h => h(App),
}).$mount('#app')