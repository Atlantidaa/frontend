<template>
  <div id="app">
    <v-layout-header />
    <div class="content">
    </div>
  </div>
</template>

<script>
import VLayoutHeader from '@/layouts/v-header-layout';

export default {
  name: 'App',
    components: {
    VLayoutHeader,
  }
}
</script>

<style>
@font-face {
  font-family: "Google Sans";
  src: local('GoogleSans'), url("./assets/fonts/GoogleSans/ProductSans-Regular.woff") format("woff");
  font-weight: 400;
}

@font-face {
  font-family: "Google Sans";
  src: local('GoogleSans'), url("./assets/fonts/GoogleSans/ProductSans-Medium.woff") format("woff");
  font-weight: 500;
}

@font-face {
  font-family: "Lobster";
  src: local('Lobster'), url("./assets/fonts/Lobster/Lobster-Regular.ttf") format("truetype");
}

body {
  font-family: 'Google Sans';
  font-weight: 400;
  background-color: rgba(0, 0, 0, .01);
}

a {
  text-decoration: none;
  color: #0558ff;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
}

@media (max-width: 1024px) {
  .container {
      padding: 0 15px;
  }
}
</style>
