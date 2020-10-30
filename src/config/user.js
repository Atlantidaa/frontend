import Cookies from 'js-cookie';
import axios from 'axios';
import ApiConfig from './api';

const ACCESS_TOKEN_KEY = 'access_token';
const USER_DATA_KEY = 'user_data';

export default  {
    init() {
        if (!Object.keys(this.getData()).length) {
            this.logout();
        }
    },

    isAuthorized() {
        return !!Cookies.get('access_token');
    },

    setData(value) {
        Cookies.set(USER_DATA_KEY, btoa(JSON.stringify(value)));
    },

    getData() {
        const data = Cookies.get(USER_DATA_KEY);

        if (data) {
            console.log(JSON.parse(atob(data)));
            return JSON.parse(atob(data));
        }

        return {};
    },

    async authorize(login, password) {
        const response = await axios(ApiConfig.baseUrl + ApiConfig.routes.auth.url, {
            method: 'POST',
            data: {
                email: login,
                password: password,
            }
        });

        const errors = response.data.errors;
        const message = response.data.message;

        if (errors) {
            return false;
        }

        Cookies.set(ACCESS_TOKEN_KEY, message.access_token);
        this.setData(message.data);

        return true;
    },

    logout() {
        Cookies.remove(ACCESS_TOKEN_KEY);
        Cookies.remove(USER_DATA_KEY);
    },
}