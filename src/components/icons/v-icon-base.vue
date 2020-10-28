<template>
  <i :class="classes" :style="style"></i>
</template>

<script>
export default {
  name: 'v-icon-base',
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 12,
    },
    color: {
      type: String,
      default: 'white',
    },
  },
  computed: {
    style: {
      get() {
        return {
          'font-size': this.size + 'px',
          'color': this.color
        };
      }
    },
    classes: {
      get() {
        return [
            this.name,
            'icon-base'
        ];
      }
    }
  }
}
</script>

<style>
.icon-base {
    text-align: center;
}
</style>