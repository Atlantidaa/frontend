<template>
    <div class="spacer-vertical" :style="style">
    </div>
</template>

<script>
export default {
  name: 'v-spacer-vertical',
  props: {
    size: {
      default: 0
    }
  },
  computed: {
    style: {
      get() {
        return {
          'height': this.size + 'px'
        };
      }
    }
  }
}
</script>

<style>
.spacer-vertical {
    width: 100%;
}
</style>