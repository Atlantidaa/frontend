<template>
  <div class="menu">
    <div
        class="menu-item menu-item-primary"
        @click="opened.authorization = true"
    >
      Войти
    </div>
    <v-spacer-horizontal :size="15" />
    <div
        class="menu-item"
        @click="opened.registration = true"
    >
      Зарегистрироваться
    </div>
    <v-modal-authorization
        :opened="opened.authorization"
        @close="opened.authorization = false"
    />
    <v-modal-registration
        :opened="opened.registration"
        @close="opened.registration = false"
    />
  </div>
</template>

<script>
import VModalAuthorization from '@/components/modal/v-modal-authorization';
import VModalRegistration from '@/components/modal/v-modal-registration';
import VSpacerHorizontal from '@/components/spacers/v-spacer-horizontal';

export default {
  name: 'v-menu-header',
  data() {
    return {
      opened: {
        authorization: false,
        registration: false,
      },
    }
  },
  components: {
    VModalAuthorization,
    VModalRegistration,
    VSpacerHorizontal,
  }
}
</script>

<style scoped>
.menu-item {
  cursor: pointer;
  display: inline-block;
  color: white;
}

.menu-item-primary {
  border: 1px solid white;
  border-radius: 3px;
  padding: 7px;
}

.menu-item:hover {
  color: #08e4fc;
  transition: color .2s linear;
}

.menu-item-primary:hover {
  border-color: #08e4fc;
  transition: border-color .1s linear;
}
</style>
