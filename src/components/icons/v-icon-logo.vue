<template>
  <div class="logo">
  </div>
</template>

<script>
export default {
  name: 'v-icon-logo'
}
</script>

<style scoped>
.logo {
  cursor: pointer;
  font-family: "Lobster";
  font-size: 28px;
  color: #08e4fc;
  user-select: none;
}

.logo:after {
  content: "Atlantida";
}
</style>