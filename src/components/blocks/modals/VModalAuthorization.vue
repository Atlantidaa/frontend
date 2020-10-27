<template>
    <VModalBase
        v-show="opened"
        @close="close"
        title="Авторизация"
    >
        <template v-slot:body>
            <div
                class="modal-content-body-authorization"
            >
                <form
                    @submit.prevent="authorize"
                >
                    <VFormInputBase
                        :type="fields.login.type"
                        :placeholder="fields.login.placeholder"
                        :name="fields.login.name"
                        :value="fields.login.value"
                        :prepend-icon="fields.login.prependIcon"
                        @update:value="fields.login.value = $event"
                    />
                    <VSpacerVertical
                        :size="spacer.body.size"
                    />
                    <VFormInputBase
                        :type="fields.password.type"
                        :placeholder="fields.password.placeholder"
                        :name="fields.password.name"
                        :value="fields.password.value"
                        :prepend-icon="fields.password.prependIcon"
                        :append-icon="fields.password.appendIcon"
                        @click:append-icon="changePasswordFieldType"
                        @update:value="fields.password.value = $event"
                    />
                    <VSpacerVertical
                        :size="spacer.body.size"
                    />
                    <VFormSubmitBase
                        class="submit"
                        :value="fields.submit.value"
                    />
                </form>
            </div>
        </template>
        <template v-slot:footer>
            <div
                class="model-content-footer-helper"
            >
                <div>Забыли пароль?</div>
                <div>
                    <a href="">Восстановить пароль</a>
                </div>
            </div>

        </template>
    </VModalBase>
</template>

<script>
import IconsConfig from '@/config/icons';
import FieldsConfig from '@/config/fields';
import ApiConfig from '@/config/api';
import Cookies from 'js-cookie';

import VModalBase from '@/components/blocks/modals/VModalBase';
import VFormInputBase from '@/components/blocks/forms/VFormInputBase';
import VFormSubmitBase from '@/components/blocks/forms/VFormSubmitBase';
import VSpacerVertical from '@/components/blocks/spacers/VSpacerVertical';

export default {
    name: 'VModalAuthorization',
    components: {
        VModalBase,
        VFormInputBase,
        VFormSubmitBase,
        VSpacerVertical
    },
    props: {
        opened: false
    },
    data() {
        return {
            spacer: {
                body: {
                    size: 15
                },
                footer: {
                    size: 3
                }
            },
            fields: {
                login: {
                    prependIcon: IconsConfig.user,
                    type: FieldsConfig.types.text,
                    placeholder: 'Логин',
                    name: 'login',
                    value: ''
                },
                password: {
                    prependIcon: IconsConfig.password,
                    appendIcon: IconsConfig.visible.hide,
                    type: FieldsConfig.types.password,
                    placeholder: 'Пароль',
                    name: 'password',
                    value: ''
                },
                submit: {
                    value: 'Войти'
                }
            }
        }
    },
    methods: {
        authorize() {
            const url = ApiConfig.baseUrl + ApiConfig.routes.auth.url;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.fields.login.value,
                    password: this.fields.password.value
                })
            }).then(response => response.json()).then(response => {
                if (response.errors === true) {
                } else {
                    Cookies.set('access_token', response.message.access_token);
                }
            })

        },
        close() {
            //this.clearForm();
            this.$emit('close');
        },
        clearForm() {
            this.fields.login.value = '';
            this.fields.password.value = '';

            this.hidePassword();
        },
        setLogin(value) {
            this.fields.login.value = value;
        },
        setPassword(value) {
            this.fields.password.value = value;
        },
        showPassword() {
            this.fields.password.type = FieldsConfig.types.text;
            this.fields.password.appendIcon = IconsConfig.visible.show;
        },
        hidePassword() {
            this.fields.password.type = FieldsConfig.types.password;
            this.fields.password.appendIcon = IconsConfig.visible.hide;
        },
        changePasswordFieldType() {
            if (this.fields.password.type === FieldsConfig.types.password) {
                this.showPassword();
            } else {
                this.hidePassword();
            }
        }
    }
}
</script>

<style scoped>
.model-content-footer-helper {
    text-align: center;
}
</style>
