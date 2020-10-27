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
import VModalBase from '@/components/blocks/modals/VModalBase'

export default {
  name: 'VModalRegistration',
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