<template>
  <VModalBase
      v-show="opened"
      @close="close"
      title="Регистрация"
  >
    <div style="width: 500px; height: 500px;">
    </div>
  </VModalBase>
</template>

<script>
import VModalBase from '@/components/modal/v-modal-base'

export default {
  name: 'v-modal-registration',
  components: {
    VModalBase
  },
  props: {
    opened: false
  },
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style>

</style>