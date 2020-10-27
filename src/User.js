import Cookies from 'js-cookie';

export default {
    authorized: {
        process: false,
        status: false
    },
    data: {},
    getData($url) {
        if (!Cookies.get('access_token')) {
            this.authorized.status = false;

            return;
        }
        this.authorized.process = true;
        fetch($url, {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('access_token')
            }
        }).then(response => response.json()).then(response => {
            if (response.errors === true) {
                this.authorized.status = false;

                return;
            }

            this.authorized.process = false;
            this.authorized.status = true;
            this.data = response.message;
        });
    },
    logout() {
        console.log(123);
        Cookies.remove('access_token');
        this.authorized.status = false;
        this.data = {};
    }
}