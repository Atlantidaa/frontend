import Vue from 'vue';
import Vuex from 'vuex';
import User from './user';

Vue.use(Vuex);

User.init();

export default new Vuex.Store({
    state: {
        user: {
            authorized: User.isAuthorized(),
            data: User.getUserData(),
        }
    },
    mutations: {
        CHANGE_AUTHORIZED(state) {
            state.user.authorized = !state.user.authorized;
        }
    },
    actions: {
        TOGGLE_AUTHORIZED({commit}) {
            commit('CHANGE_AUTHORIZED');
        }
    },
    getters: {
        AUTHORIZED_STATE(state) {
            return state.user.authorized;
        }
    }
});