<template>
  <div class="spacer-horizontal" :style="style">
  </div>
</template>

<script>
export default {
  name: 'v-spacer-horizontal',
  props: {
    size: {
      default: 0
    }
  },
  computed: {
    style: {
      get() {
        return {
          'width': this.size + 'px'
        };
      }
    }
  }
}
</script>

<style>
.spacer-horizontal {
    display: inline-block;
    height: 100%;
}
</style>
