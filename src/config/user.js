import Cookies from 'js-cookie';
import axios from 'axios';
import ApiConfig from './api';

const ACCESS_TOKEN_KEY = 'access_token';
const USER_DATA_KEY = 'user_data';

export default  {
    init() {
        if (!this.getUserData().length) {
            this.logout();
        }
    },

    isAuthorized() {
        if (Cookies.get('access_token')) {
            return true;
        } else {
            return false;
        }
    },

    getUserData() {
        const data = Cookies.get(USER_DATA_KEY);

        return data ? JSON.parse(data) : {};
    },

    async authorize(login, password) {
        const response = await axios(ApiConfig.baseUrl + ApiConfig.routes.auth.url, {
            method: 'POST',
            data: {
                email: login,
                password: password,
            }
        });

        if (response.data.errors === true) {
            return false;
        }

        Cookies.set(ACCESS_TOKEN_KEY, response.data.message.access_token);

        return true;
    },

    logout() {
        Cookies.remove(ACCESS_TOKEN_KEY);
        Cookies.remove(USER_DATA_KEY);
    },
}