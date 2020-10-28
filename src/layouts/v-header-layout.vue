<template>
  <header>
    <div class="container">
      <v-icon-logo />
      <VMenuHeader :user="$root.user" />
    </div>
  </header>
</template>

<script>
import VIconLogo from '@/components/icons/v-icon-logo';
import VMenuHeader from '@/components/menu/v-menu-header'

export default {
  name: 'v-layout-header',
  components: {
    VIconLogo,
    VMenuHeader,
  }
}
</script>

<style scoped>
header {
  height: 50px;
  width: 100%;
  background-color: rgb(36, 36, 36);
}

.container {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>