<template>
  <v-modal-base
      v-show="opened"
      @close="$emit('close')"
      title="Авторизация"
  >
    <template v-slot:body>
      <div class="modal-content-body-authorization">
        <form @submit.prevent="authorize">
          <v-form-input-base
              :type="settings.form.login.type"
              :placeholder="settings.form.login.placeholder"
              :name="settings.form.login.name"
              :value="values.login"
              :prepend-icon="settings.form.login.prependIcon"
              @update:value="values.login = $event"
          />
          <v-spacer-vertical :size="settings.template.spacers.body.size" />
          <v-form-input-base
              :type="settings.form.password.type"
              :placeholder="settings.form.password.placeholder"
              :name="settings.form.password.name"
              :value="values.password"
              :prepend-icon="settings.form.password.prependIcon"
              :append-icon="settings.form.password.appendIcon"
              @click:append-icon="changePasswordFieldType"
              @update:value="values.password = $event"
          />
          <v-spacer-vertical :size="settings.template.spacers.body.size" />
          <v-form-submit-base
              class="submit"
              :value="settings.form.submit.value"
          />
        </form>
      </div>
    </template>
    <template v-slot:footer>
      <div class="model-content-footer-helper">
        <div>Забыли пароль?</div>
        <div>
          <a href="">Восстановить пароль</a>
        </div>
      </div>
    </template>
  </v-modal-base>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

import IconsConfig from '@/config/icons';
import FieldsConfig from '@/config/fields';
import User from '@/config/user';

import VModalBase from '@/components/modal/v-modal-base';
import VFormInputBase from '@/components/forms/v-form-input-base';
import VFormSubmitBase from '@/components/forms/v-form-submit-base';
import VSpacerVertical from '@/components/spacers/v-spacer-vertical';

export default {
  name: 'v-modal-authorization',
  components: {
    VModalBase,
    VFormInputBase,
    VFormSubmitBase,
    VSpacerVertical
  },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      values: {
        login: '',
        password: ''
      },
      settings: {
        form: {
          login: {
            type: FieldsConfig.types.text,
            name: 'login',
            placeholder: 'Логин',
            value: '',
            prependIcon: IconsConfig.user,
          },
          password: {
            type: FieldsConfig.types.password,
            name: 'password',
            placeholder: 'Пароль',
            value: '',
            prependIcon: IconsConfig.password,
            appendIcon: IconsConfig.visible.hide,
          },
          submit: {
            value: 'Войти'
          }
        },
        template: {
          spacers: {
            body: {
              size: 15,
            },
            footer: {
              size: 3,
            },
          },
        },
      },
    }
  },
  computed: {
    ...mapGetters([
      'AUTHORIZED_STATE',
    ])
  },
  methods: {
    ...mapActions([
      'TOGGLE_AUTHORIZED',
    ]),
    async authorize() {
      let status = await User.authorize(this.values.login, this.values.password);

      if (status) {
        this.TOGGLE_AUTHORIZED();
      } else {

      }
    },
    changePasswordFieldType() {
      if (this.settings.form.password.type === FieldsConfig.types.password) {
        this.settings.form.password.type = FieldsConfig.types.text;
        this.settings.form.password.appendIcon = IconsConfig.visible.show;
      } else {
        this.settings.form.password.type = FieldsConfig.types.password;
        this.settings.form.password.appendIcon = IconsConfig.visible.hide;
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
